import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import OAuth from "../components/OAuth"
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formData
    const navigate = useNavigate()

    // Función para generar una contraseña aleatoria
    const generateRandomPassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

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

            // Generar contraseña aleatoria
            const randomPassword = generateRandomPassword();

            // Crear usuario con la contraseña aleatoria
            const userCredential = await createUserWithEmailAndPassword(
                auth, email, randomPassword
            )

            const user = userCredential.user

            // Actualizar el perfil del usuario con el nombre
            await updateProfile(auth.currentUser, {
                displayName: name
            })

            // Guardar la información del usuario en Firestore
            const formDataCopy = { ...formData }
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            // Enviar correo de restablecimiento de contraseña
            await sendPasswordResetEmail(auth, email)

            // Cerrar sesión inmediatamente después de la creación del usuario
            await signOut(auth)

            toast.success('Registro exitoso. Por favor revisa tu email para restablecer tu contraseña.')

            // Redirigir a la página de inicio de sesión
            navigate('/sign-in')
        } catch (error) {
            toast.error('El registro falló.')
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Registro</p>
                </header>
                <form onSubmit={onSubmit}>
                    <input type="text"
                        className="nameInput"
                        placeholder="Nombre"
                        id="name"
                        value={name}
                        onChange={onChange} />

                    <input type="email"
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={onChange} />

                    <div className="signUpBar">
                        <p className="signUpText">Sign Up</p>
                        <button className="signUpButton">
                            <ArrowRightIcon  style={{ color: 'white', fontSize: '48px' }} fill="#ffffff" width='34px' height='34px' />
                        </button>
                    </div>
                </form>

                <OAuth />

                <Link to='/sign-in' className="registerLink">
                    Have Account? Sign in Here!
                </Link>

            </div>
        </>
    )
}

export default SignUp
