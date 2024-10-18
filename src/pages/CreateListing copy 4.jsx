import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config';
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const CreateListing = () => {



    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 'jurídica',
        name: '',
    });

    // const { type, name } = formData;
    const {  name } = formData;

    const auth = getAuth();
    const navigate = useNavigate();
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({ ...formData, userRef: user.uid })
                } else {
                    navigate('sign-in')
                }
            })
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
            const docRef = await addDoc(collection(db, 'listings'), formDataCopy);
            setLoading(false);
            toast.success('Listing saved');
            navigate(`/category/${formDataCopy.type}/${docRef.id}`);
        } catch (error) {
            setLoading(false);
            toast.error('Failed to create listing');
        }
    };

    const onMutate = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    if (loading) {
        return <Spinner />;
    }


    const onSelectChange = (e) => {
        setFormData({
            ...formData,
            type: e.target.value, // Actualiza el tipo seleccionado
        });
    };


    return (
        <div className="profile">
            <header>
                <p className="pageHeader">Cedente</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <div>
                        <select
                            className="roleSelectDiv"
                            id="cedente"
                            value={formData.type}
                            onChange={onSelectChange}
                        >
                            <option value="jurídica">persona jurídica</option>
                            <option value="física">persona física</option>
                            <option value="comunidad">comunidad de propietarios</option>
                        </select>
                    </div>


                    {(formData.type === 'jurídica' || formData.type === 'física' || formData.type === 'comunidad') && (
                        <div className="exploreCategories">
                            <label >Dª/D</label>
                            <input
                                className='formInputName'
                                type='text'
                                id='name'
                                value={name}
                                onChange={onMutate}
                                maxLength='32'
                                minLength='10'
                                required
                            />
                        </div>

                    )}


                    {(formData.type === 'jurídica' || formData.type === 'física' || formData.type === 'comunidad') && (
                        <div>
                            <label className='formLabel'>documento de identificación</label>
                            <input
                                className='formInputName'
                                type='text'
                                id='name'
                                value={name}
                                onChange={onMutate}
                                maxLength='32'
                                minLength='10'
                                required
                            />
                        </div>

                    )}

                    {(formData.type === 'jurídica') && (
                        <div>
                            <label className='formLabel'>empresa</label>
                            <input
                                className='formInputName'
                                type='text'
                                id='name'
                                value={name}
                                onChange={onMutate}
                                maxLength='32'
                                minLength='10'
                                required
                            />
                            <label className='formLabel'>NIF</label>
                            <input
                                className='formInputName'
                                type='text'
                                id='name'
                                value={name}
                                onChange={onMutate}
                                maxLength='32'
                                minLength='10'
                                required
                            />
                        </div>
                    )}

                    <button type='submit' className='primaryButton createListingButton'>
                        Create Listing
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateListing;
