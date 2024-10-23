import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";
import { Grid, Button, Paper, Typography } from '@mui/material';

const Offers = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastFetchedListing, setLastFetchedListing] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings');
                const q = query(
                    listingsRef,
                    orderBy('timestamp', 'desc'),
                    limit(10)
                );

                const querySnap = await getDocs(q);
                const lastVisible = querySnap.docs[querySnap.docs.length - 1];
                setLastFetchedListing(lastVisible);

                let listings = [];
                querySnap.forEach((doc) => {
                    listings.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                setListings(listings);
                setLoading(false);
            } catch (error) {
                toast.error('Could not fetch listings');
            }
        };

        fetchListings();
    }, []);

    const onFetchMoreListings = async () => {
        try {
            const listingsRef = collection(db, 'listings');
            const q = query(
                listingsRef,
                where('offer', '==', true),
                orderBy('timestamp', 'desc'),
                startAfter(lastFetchedListing),
                limit(10)
            );

            const querySnap = await getDocs(q);
            const lastVisible = querySnap.docs[querySnap.docs.length - 1];
            setLastFetchedListing(lastVisible);

            let listings = [];
            querySnap.forEach((doc) => {
                listings.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            setListings((prevState) => ([...prevState, ...listings]));
            setLoading(false);
        } catch (error) {
            toast.error('Could not fetch listings');
        }
    };

    return (
        <div className="category">
            <header>
                <Typography variant="h4" className="pageHeader">Offers</Typography>
            </header>

            {loading ? (
                <Spinner />
            ) : listings && listings.length > 0 ? (
                <>
                    <Grid container spacing={2} component={Paper} style={{ padding: '16px' }}>
                        <Grid container item xs={12} spacing={2}>
                            {/* Cabecera flexible */}
                            <Grid item xs={3}><strong>Nombre</strong></Grid>
                            <Grid item xs={3}><strong>Título</strong></Grid>
                            <Grid item xs={3}><strong>Estado</strong></Grid>
                            <Grid item xs={3}><strong>Contraprestación</strong></Grid>
                        </Grid>

                        {/* Lista de elementos */}
                        {listings.map((listing) => (
                            <Grid container item xs={12} spacing={2} key={listing.id}>
                                <Grid item xs={3}>{listing.data.nombre}</Grid>
                                <Grid item xs={3}>{listing.data.titulo}</Grid>
                                <Grid item xs={3}>{listing.data.estado}</Grid>
                                <Grid item xs={3}>{listing.data.contraprestacion}</Grid>
                            </Grid>
                        ))}
                    </Grid>

                    {lastFetchedListing && (
                        <Button variant="outlined" color="primary" onClick={onFetchMoreListings} style={{ marginTop: '16px' }}>
                            Más
                        </Button>
                    )}
                </>
            ) : (
                <p>There is no offer.</p>
            )}
        </div>
    );
};

export default Offers;
