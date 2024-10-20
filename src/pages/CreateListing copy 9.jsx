import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config';
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

import CreateListingActuacion from "./CreateListingActuacion";

const CreateListing = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        ahorroEnergia: 200,
        contraprestacion: 100, // Valor por defecto para la contraprestación
        estado: "prevista", // Estado por defecto
        titulo: '',
        tipo: 'Estándar', // Tipo por defecto
        userRef: '', // Para almacenar la referencia del usuario autenticado
    });

    const auth = getAuth();
    const navigate = useNavigate();
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({ ...formData, userRef: user.uid });
                } else {
                    navigate('sign-in');
                }
            });
        }
        return () => {
            isMounted.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataCopy = {
            ...formData,
            timestamp: serverTimestamp(), // Agregar la marca de tiempo
        };

        try {
            const docRef = await addDoc(collection(db, 'listings'), formDataCopy);
            setLoading(false);
            toast.success('Listing saved');
            navigate(`/category/${formDataCopy.tipo}/${docRef.id}`); // Redirigir a la página del listado creado
        } catch (error) {
            setLoading(false);
            toast.error('Failed to create listing'); // Mensaje de error
        }
    };

    const onFormDataChange = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data, // Actualiza los datos del formulario con los nuevos valores
        }));
    };

    if (loading) {
        return <Spinner />; // Mostrar el spinner mientras se está guardando el formulario
    }

    return (
        <div className="profile">
            <main>
                <form onSubmit={onSubmit}>
                    <CreateListingActuacion onFormDataChange={onFormDataChange} />
                    <button type='submit' className='primaryButton createListingButton'>
                        Ofertar
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateListing;
