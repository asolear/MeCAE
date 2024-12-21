import * as pdfjsLib from './pdf.mjs';  // Asegúrate de que la ruta sea correcta.
document.addEventListener('DOMContentLoaded', function () {
    pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.mjs';  // Ajusta la ruta si es necesario.

    function renderPage(pdf, pageNumber, container) {
        return pdf.getPage(pageNumber).then(page => {
            const viewport = page.getViewport({ scale: 1 });
            const containerWidth = container.clientWidth;
            const scale = containerWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page';
            const context = canvas.getContext('2d');
            canvas.style.width = `${scaledViewport.width}px`;
            canvas.style.height = `${scaledViewport.height}px`;
            const resolutionScale = 2;
            canvas.height = scaledViewport.height * resolutionScale;
            canvas.width = scaledViewport.width * resolutionScale;
            container.appendChild(canvas);
            const renderContext = {
                canvasContext: context,
                viewport: page.getViewport({ scale: scale * resolutionScale })
            };
            return page.render(renderContext).promise;
        });
    }

    function renderPdf(url, container) {
        return pdfjsLib.getDocument(url).promise.then(pdf => {
            console.log(`PDF cargado en ${container.id}`);
            const totalPages = pdf.numPages;
            const renderPromises = [];
            for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                renderPromises.push(renderPage(pdf, pageNumber, container));
            }
            return Promise.all(renderPromises);
        }).then(() => {
            console.log(`Todas las páginas renderizadas en ${container.id}`);
        }).catch(reason => {
            console.error(reason);
        });
    }

    function setupPdfContainers() {
        document.querySelectorAll('[data-pdf-url]').forEach(container => {
            const url = container.getAttribute('data-pdf-url');
            renderPdf(url, container);
        });
    }

    function setupDownloadButtons() {
        document.querySelectorAll('[id^="download-btn-"]').forEach(button => {
            const index = button.id.split('-').pop();
            const url = document.getElementById(`pdf-container-${index}`).getAttribute('data-pdf-url');
            button.addEventListener('click', function () {
                window.location.href = url;
            });
        });
    }

    setupPdfContainers();
    setupDownloadButtons();
});