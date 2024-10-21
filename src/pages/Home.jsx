import StockChart from '../props/StockChart';

const Explore = () => {
    return (
        <div className="explore" style={{ textAlign: 'center', paddingBottom: '20px' }}>
            <header>
                <p style={{ fontSize: "42px", textAlign: "center" }}>
                    Mercado de Ahorros Energéticos.
                </p>
                <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Sistema de Certificados de Ahorro Energético (CAE)
                </p>
                <p style={{ textAlign: "center" }}>
                    Plataforma de Intermediación.
                </p>
            </header>

            {/* Aplicamos clases CSS para forzar el tamaño */}
            <div className="stock-chart-container">
                <StockChart />
            </div>
        </div>
    );
}

export default Explore;
