import React, { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import CreateListingActuacion from "./CreateListingActuacion";

const CreateListing = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        ahorroEnergia: 200,
        contraprestacion: 100,
        estado: "prevista",
        titulo: '',
        tipo: 'Estándar',
        userRef: '',
    });

    const auth = getAuth();
    const navigate = useNavigate();
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted.current) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData((prevData) => ({ ...prevData, userRef: user.uid }));
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
            timestamp: serverTimestamp(),
        };

        try {
            await addDoc(collection(db, 'listings'), formDataCopy);
            setLoading(false);
            toast.success('Listing saved');
            navigate(`/user/profile`);
        } catch (error) {
            setLoading(false);
            toast.error('Failed to create listing');
        }
    };

    const onFormDataChange = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Crear Oferta
            </Typography>
            <main>
                <form onSubmit={onSubmit}>
                    <CreateListingActuacion onFormDataChange={onFormDataChange} />
                    <Button 
                        type='submit' 
                        variant="contained" 
                        color="primary" 
                        sx={{ marginTop: 2 }}
                    >
                        Ofertar
                    </Button>
                </form>
            </main>
        </Box>
    );
};

export default CreateListing;
