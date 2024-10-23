import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { TextField, Button, Box, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/Forward';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success('Reset email was sent.');
            navigate('/sign-in');
        } catch (error) {
            toast.error('Could not send reset email.');
        }
    };

    return (
        <Box className="pageContainer" sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
            <header>
                <Typography variant="h5" align="center" gutterBottom>
                    Forgot Password
                </Typography>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={onChange}
                        sx={{ mb: 2 }} // margin bottom
                    />
                    <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                            Sign In
                        </Typography>
                    </Link>

                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body1">Send Reset Link</Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowRightIcon />}
                        >
                            Send
                        </Button>
                    </Box>
                </form>
            </main>
        </Box>
    );
};

export default ForgotPassword;
