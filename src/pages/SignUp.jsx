import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import OAuth from "../components/OAuth";
import ArrowRightIcon from '@mui/icons-material/Forward';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'cedente', // Valor por defecto "cedente"
        cedente: 'persona_fisica', // Nuevo campo para el tipo de cedente
        empresa: '', // Campo para la empresa
        nif: '', // Para persona jurídica y empresa
        dni: '', // Para persona física
        domicilio: '', // Campo para domicilio
        telefono: '', // Campo para teléfono
        comunidadCodigo: '' // Para comunidad de propietarios
    });

    const { name, email, role, cedente, empresa, nif, dni, domicilio, telefono, comunidadCodigo } = formData;
    const navigate = useNavigate();

    const allowedEmailsForBuyers = [
        "asolearenergia@gmail.com",
        "franciscomanuelromangamez@gmail.com",
        "comprador3@example.com",
        // Añade aquí todos los emails permitidos
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

            const userCredential = await createUserWithEmailAndPassword(
                auth, email, randomPassword
            );

            const user = userCredential.user;

            if (role === 'cedente') {
                await updateProfile(auth.currentUser, {
                    displayName: name
                });
            }

            const formDataCopy = { ...formData };
            formDataCopy.timestamp = serverTimestamp();

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
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Registro</p>
                </header>

                <div>
                    <select className="roleSelectDiv" id="role" value={role} onChange={onChange}>
                        <option value="cedente">Propietario del ahorro energético</option>
                        <option value="obligado">Sujeto obligado</option>
                        <option value="delegado">Sujeto delegado</option>
                    </select>
                </div>

                <form onSubmit={onSubmit}>

                    {role === 'delegado' && (
                        <>
                            <label className='formLabel'>Dª/D</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Nombre"
                                id="name"
                                value={name}
                                onChange={onChange}
                            />
                            <label className='formLabel'>DNI/NIE</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Documento de identificación (DNI/NIE)"
                                id="dni"
                                value={dni}
                                onChange={onChange}
                            />
                            <label className='formLabel'>Sujeto delegado</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Sujeto delegado"
                                id="empresa"
                                value={empresa}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Código de identificación</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Código de identificación"
                                id="nif"
                                value={nif}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Domicilio para notificaciones</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Domicilio para notificaciones"
                                id="domicilio"
                                value={domicilio}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Teléfono</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Teléfono"
                                id="telefono"
                                value={telefono}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Correo electrónico</label>
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={onChange}
                            />
                        </>

                    )}

                    {role === 'obligado' && (
                        <>
                            <label className='formLabel'>Dª/D</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Nombre"
                                id="name"
                                value={name}
                                onChange={onChange}
                            />
                            <label className='formLabel'>DNI/NIE</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Documento de identificación (DNI/NIE)"
                                id="dni"
                                value={dni}
                                onChange={onChange}
                            />
                            <label className='formLabel'>Sujeto obligado</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Sujeto obligado"
                                id="empresa"
                                value={empresa}
                                onChange={onChange}
                            />

                            <label className='formLabel'>NIF</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Número de identificación fiscal (NIF)"
                                id="nif"
                                value={nif}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Domicilio para notificaciones</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Domicilio para notificaciones"
                                id="domicilio"
                                value={domicilio}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Teléfono</label>
                            <input
                                type="text"
                                className="nameInput"
                                placeholder="Teléfono"
                                id="telefono"
                                value={telefono}
                                onChange={onChange}
                            />

                            <label className='formLabel'>Correo electrónico</label>
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={onChange}
                            />
                        </>

                    )}

                    {role === 'cedente' && (
                        <>
                            {/* Selector para cedente si el rol es cedente */}
                            <div>
                                <select className="nameInput" id="cedente" value={cedente} onChange={onChange}>
                                    <option value="persona_juridica">Persona jurídica</option>
                                    <option value="persona_fisica">Persona física</option>
                                    <option value="comunidad_propietarios">Comunidad de propietarios</option>
                                </select>
                            </div>

                            {/* Campos adicionales según el tipo de cedente */}
                            {cedente === 'persona_juridica' && (
                                <>
                                    <label className='formLabel'>Dª/D</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Nombre"
                                        id="name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>DNI/NIE</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Documento de identificación (DNI/NIE)"
                                        id="dni"
                                        value={dni}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>Empresa</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Nombre de la empresa"
                                        id="empresa"
                                        value={empresa}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>NIF</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Número de identificación fiscal (NIF)"
                                        id="nif"
                                        value={nif}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Domicilio para notificaciones</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Domicilio para notificaciones"
                                        id="domicilio"
                                        value={domicilio}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Teléfono</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Teléfono"
                                        id="telefono"
                                        value={telefono}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="emailInput"
                                        placeholder="Email"
                                        id="email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </>
                            )}

                            {cedente === 'persona_fisica' && (
                                <>
                                    <label className='formLabel'>Dª/D</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Nombre"
                                        id="name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>DNI/NIE</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Documento de identificación (DNI/NIE)"
                                        id="dni"
                                        value={dni}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Domicilio para notificaciones</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Domicilio para notificaciones"
                                        id="domicilio"
                                        value={domicilio}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Teléfono</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Teléfono"
                                        id="telefono"
                                        value={telefono}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="emailInput"
                                        placeholder="Email"
                                        id="email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </>
                            )}

                            {cedente === 'comunidad_propietarios' && (
                                <>
                                    <label className='formLabel'>Dª/D</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Nombre"
                                        id="name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>DNI/NIE</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Documento de identificación (DNI/NIE)"
                                        id="dni"
                                        value={dni}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>Comunidad de propietarios</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Código de comunidad"
                                        id="comunidadCodigo"
                                        value={comunidadCodigo}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>NIF</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Número de identificación fiscal (NIF)"
                                        id="nif"
                                        value={nif}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>Situación</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Situación de la comunidad"
                                        id="nif"
                                        value={nif}
                                        onChange={onChange}
                                    />
                                    <label className='formLabel'>Domicilio para notificaciones</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Domicilio para notificaciones"
                                        id="domicilio"
                                        value={domicilio}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Teléfono</label>
                                    <input
                                        type="text"
                                        className="nameInput"
                                        placeholder="Teléfono"
                                        id="telefono"
                                        value={telefono}
                                        onChange={onChange}
                                    />

                                    <label className='formLabel'>Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="emailInput"
                                        placeholder="Email"
                                        id="email"
                                        value={email}
                                        onChange={onChange}
                                    />



                                </>
                            )}
                        </>
                    )}

                    <div className="signUpBar">
                        <p className="signUpText"></p>
                        <button className="signUpButton">
                            <ArrowRightIcon style={{ color: 'white', fontSize: '48px' }} fill="#ffffff" width='34px' height='34px' />
                        </button>
                    </div>
                </form>

                <OAuth />

                <Link to='/sign-in' className="registerLink">
                    Have Account? Sign in Here!
                </Link>
            </div>
        </>
    );
};

export default SignUp;
