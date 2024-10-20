import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import OAuth from "../components/OAuth"
import ArrowRightIcon from '@mui/icons-material/Forward';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(
                auth, email, password
            )

            if (userCredential.user) {
                toast.success('Logged in successfully.')
                navigate('/user/profile') // Redirect to /user/profile after successful login
            }

        } catch (error) {
            toast.error('Bad User Credential.');
        }

    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Acceso al Mercado</p>
                </header>
                <form onSubmit={onSubmit}>
                    <input type="email"
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={onChange} />

                    <div className="passwordInputDiv">
                        <input type={showPassword ? "text" : "password"}
                            className="passwordInput"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={onChange} />

                        {/* Mostrar el icono condicionalmente */}
                        <span onClick={() => setShowPassword((prevState) => !prevState)} className="showPassword">
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} {/* Cambia entre los iconos */}
                        </span>
                    </div>

                    <div className="signInBar">
                        <button className="signInButton">
                            <ArrowRightIcon style={{ color: 'white', fontSize: '48px' }} fill="#ffffff" width='34px' height='34px' />
                        </button>
                    </div>

                    <Link to='/forgot-password' className="registerLink">¿Has olvidado tu contraseña?</Link>
                    <Link to='/sign-up' className="registerLink">¿No tienes cuenta?</Link>
                </form>

                {/* <OAuth /> */}
            </div>
        </>
    )
}

export default SignIn
