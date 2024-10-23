import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import OAuth from "../components/OAuth";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, Box } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/Forward';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'cedente',
        cedente: 'persona_fisica',
        empresa: '',
        nif: '',
        dni: '',
        domicilio: '',
        telefono: '',
        comunidadCodigo: ''
    });

    const { name, email, role, cedente, empresa, nif, dni, domicilio, telefono, comunidadCodigo } = formData;
    const navigate = useNavigate();

    const allowedEmailsForBuyers = [
        "asolearenergia@gmail.com",
        "franciscomanuelromangamez@gmail.com",
        "comprador3@example.com",
    ];

    const generateRandomPassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (role === "cesionario" && !allowedEmailsForBuyers.includes(email)) {
            toast.error('Por favor utilice el email de "Agentes del Sistema de CAE" vigente en MITECO');
            return;
        }

        try {
            const auth = getAuth();
            const randomPassword = generateRandomPassword();
            const userCredential = await createUserWithEmailAndPassword(auth, email, randomPassword);
            const user = userCredential.user;

            if (role === 'cedente') {
                await updateProfile(auth.currentUser, { displayName: name });
            }

            const formDataCopy = { ...formData, timestamp: serverTimestamp() };
            await setDoc(doc(db, 'users', user.uid), formDataCopy);
            await sendPasswordResetEmail(auth, email);
            await signOut(auth);

            toast.success('Registro exitoso. Por favor revisa tu email para restablecer tu contraseña.');
            navigate('/sign-in');
        } catch (error) {
            toast.error('El registro falló.');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" align="center">Registro</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="role-label">Rol</InputLabel>
                <Select labelId="role-label" id="role" value={role} onChange={onChange}>
                    <MenuItem value="cedente">Propietario del ahorro energético</MenuItem>
                    <MenuItem value="obligado">Sujeto obligado</MenuItem>
                    <MenuItem value="delegado">Sujeto delegado</MenuItem>
                </Select>
            </FormControl>

            <form onSubmit={onSubmit}>
                {(role === 'delegado' || role === 'obligado') && (
                    <>
                        <TextField fullWidth label="Dª/D" id="name" value={name} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth label="DNI/NIE" id="dni" value={dni} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth label={role === 'delegado' ? "Sujeto delegado" : "Sujeto obligado"} id="empresa" value={empresa} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth label="NIF" id="nif" value={nif} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth label="Domicilio para notificaciones" id="domicilio" value={domicilio} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth label="Teléfono" id="telefono" value={telefono} onChange={onChange} sx={{ mb: 2 }} />
                        <TextField fullWidth type="email" label="Correo electrónico" id="email" value={email} onChange={onChange} sx={{ mb: 2 }} />
                    </>
                )}

                {role === 'cedente' && (
                    <>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="cedente-label">Tipo de cedente</InputLabel>
                            <Select labelId="cedente-label" id="cedente" value={cedente} onChange={onChange}>
                                <MenuItem value="persona_juridica">Persona jurídica</MenuItem>
                                <MenuItem value="persona_fisica">Persona física</MenuItem>
                                <MenuItem value="comunidad_propietarios">Comunidad de propietarios</MenuItem>
                            </Select>
                        </FormControl>

                        {cedente === 'persona_juridica' && (
                            <>
                                <TextField fullWidth label="Dª/D" id="name" value={name} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="DNI/NIE" id="dni" value={dni} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="Nombre de la empresa" id="empresa" value={empresa} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="NIF" id="nif" value={nif} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="Domicilio para notificaciones" id="domicilio" value={domicilio} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="Teléfono" id="telefono" value={telefono} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth type="email" label="Correo electrónico" id="email" value={email} onChange={onChange} sx={{ mb: 2 }} />
                            </>
                        )}

                        {cedente === 'persona_fisica' && (
                            <>
                                <TextField fullWidth label="Dª/D" id="name" value={name} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="DNI/NIE" id="dni" value={dni} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="Domicilio para notificaciones" id="domicilio" value={domicilio} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth label="Teléfono" id="telefono" value={telefono} onChange={onChange} sx={{ mb: 2 }} />
                                <TextField fullWidth type="email" label="Correo electrónico" id="email" value={email} onChange={onChange} sx={{ mb: 2 }} />
                            </>
                        )}
                    </>
                )}

                <Button type="submit" fullWidth variant="contained" endIcon={<ArrowRightIcon />}>
                    Registrarse
                </Button>
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                    <Link to="/sign-in">Ya tengo una cuenta</Link>
                </div>
            </form>

            <div style={{ marginTop: 16 }}>
                <OAuth />
            </div>
        </Box>
    );
};

export default SignUp;
