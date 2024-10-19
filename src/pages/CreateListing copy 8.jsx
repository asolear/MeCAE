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

    });

    // const { type, name } = formData;
    const { name } = formData;

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


            <main>

                <form onSubmit={onSubmit}>
                    <CreateListingActuacion />
                    <button type='submit' className='primaryButton createListingButton'>
                        Ofertar
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateListing;
