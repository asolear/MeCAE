import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { db } from "../firebase.config"
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Spinner from "../components/Spinner"
const Listing = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setListing(docSnap.data())
                setLoading(false)
            }
        }

        fetchListing()
    }, [navigate, params.listingId])

    if (loading) {
        return <Spinner />
    }

    return (
        <main>
            {/* Only render the Swiper if imageUrls exist and is an array */}
            {listing.imageUrls && Array.isArray(listing.imageUrls) && (
                <div className="wrapSwiper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}>
                        {listing.imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="swiperSlideDiv"
                                    style={{
                                        width: '100%',
                                        height: '40vw',
                                        background: `url(${listing.imageUrls[index]}) center no-repeat`,
                                        backgroundSize: 'cover'
                                    }}
                                >
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}




            <div className="listingDetails">
                <ul className="listingDetailsList">
                    <div className="categoryListingRow">
                        <p>{listing.tipo}</p>
                        <p>{listing.ahorroEnergia}</p>
                        <p>{listing.estado}</p>
                        <p>{listing.contraprestacion}</p>
                    </div>
                </ul>


                {auth.currentUser?.uid !== listing.userRef && (
                    <Link
                        to={`/contact/${listing.userRef}?listingName=${listing.name}`}
                        className='primaryButton'>
                        Contactar al propietario de los ahorros energéticos
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Listing
