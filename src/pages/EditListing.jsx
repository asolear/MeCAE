import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from '../firebase.config'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import { toast } from "react-toastify"
import CreateListingActuacion from "./CreateListingActuacion";


const EditListing = () => {
    const geocodingAPIKey = process.env.REACT_APP_GEOCODING_API_KEY
    const [geolocationEnabled, setGeolocationEnabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [listing, setListing] = useState(null)
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
    })

    const { type, name } = formData

    const auth = getAuth()
    const params = useParams()
    const navigate = useNavigate()
    const isMounted = useRef(true)

    // Redireccionar si el listado no es del usuario
    useEffect(() => {
        if (listing && listing.userRef !== auth.currentUser.uid) {
            toast.error('No puedes editar este listado.')
            navigate('/')
        }
    }, [listing, auth, navigate])

    // Obtener el listado a editar y cargarlo en el formulario
    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setListing(docSnap.data())
                setFormData({ ...docSnap.data() }) // Cargar los valores existentes en el formulario
                setLoading(false)
            } else {
                navigate('/')
                toast.error('El listado no existe.')
            }
        }

        setLoading(true)
        fetchListing()
    }, [params.listingId, navigate])

    // Establecer userRef para el usuario autenticado
    useEffect(() => {
        if (isMounted.current) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData((prevState) => ({ ...prevState, userRef: user.uid }))
                } else {
                    navigate('sign-in')
                }
            })
        }
        return () => {
            isMounted.current = false
        }
    }, [isMounted, auth, navigate])

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formDataCopy = {
            ...formData,
            timestamp: serverTimestamp(),
        }

        const docRef = doc(db, 'listings', params.listingId)
        await updateDoc(docRef, formDataCopy).catch(() => toast.error('Error al actualizar el listado.'))
        setLoading(false)
        toast.success('Listado actualizado.')
        navigate(`/user/profile`)
    }

    const onMutate = (e) => {
        let boolean = null

        if (e.target.value === 'true') {
            boolean = true
        }

        if (e.target.value === 'false') {
            boolean = false
        }

        // Archivos
        if (e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files,
            }))
        }

        // Textos, booleanos y números
        if (!e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value,
            }))
        }
    }
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
            <header>
                <p className="pageHeader">Editar Listado</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>

                <CreateListingActuacion onFormDataChange={onFormDataChange} />

                    <button type='submit' className='primaryButton createListingButton'>
                        Guardar Cambios
                    </button>
                </form>
            </main>
        </div>
    )
}

export default EditListing
