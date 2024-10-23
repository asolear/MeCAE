import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Box, TextField, IconButton, Button, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/Forward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            if (userCredential.user) {
                toast.success('Logged in successfully.');
                navigate('/user/profile'); // Redirect to /user/profile after successful login
            }
        } catch (error) {
            toast.error('Bad User Credential.');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Acceso al Mercado
            </Typography>
            <form onSubmit={onSubmit}>
                <TextField 
                    type="email" 
                    label="Email" 
                    id="email" 
                    value={email} 
                    onChange={onChange} 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    variant="outlined"
                />

                <Box sx={{ position: 'relative', mb: 2 }}>
                    <TextField 
                        type={showPassword ? "text" : "password"} 
                        label="Password" 
                        id="password" 
                        value={password} 
                        onChange={onChange} 
                        fullWidth 
                        variant="outlined" 
                    />
                    <IconButton 
                        onClick={() => setShowPassword((prevState) => !prevState)} 
                        sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} 
                        aria-label="toggle password visibility"
                    >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                </Box>

                <Button 
                    type="submit" 
                    fullWidth 
                    variant="contained" 
                    endIcon={<ArrowRightIcon />} 
                    sx={{ mb: 2 }}
                >
                    Iniciar sesión
                </Button>

                <Link to='/forgot-password' style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
                    ¿Has olvidado tu contraseña?
                </Link>
                <Link to='/sign-up' style={{ display: 'block', textAlign: 'center' }}>
                    ¿No tienes cuenta?
                </Link>
            </form>

            {/* Uncomment if you want to include OAuth */}
            {/* <OAuth /> */}
        </Box>
    );
};

export default SignIn;
