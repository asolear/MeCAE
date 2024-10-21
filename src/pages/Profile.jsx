import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import Offers from "./Offers";

import ArrowRightIcon from '@mui/icons-material/Forward';

const Profile = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [role, setRole] = useState(""); // Para almacenar el rol del usuario

  const { name, email } = formData;

  const navigate = useNavigate();

  // Obtener el rol del usuario
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setRole(userSnap.data().role); // Asigna el rol del usuario
        } else {
          console.error("El documento de usuario no existe");
        }
      } catch (error) {
        console.error("Error al obtener el rol del usuario", error);
      }
    };

    fetchUserRole();
  }, [auth.currentUser.uid]);

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onLogout = () => {
    navigate("/", { replace: true });
    auth.signOut();
    toast.success("Logged out successfully.");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
        toast.success("Update profile details successfully.");
      }
    } catch (error) {
      toast.error("Could not update profile details.");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onDelete = async (listingId) => {
    if (window.confirm("Delete this listing?")) {
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Deleted listing successfully.");
    }
  };

  const onEdit = (listingId) => navigate(`/user/edit-listing/${listingId}`);

  return (
    <>
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">Usuario</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "Hecho" : "Cambiar"}
          </p>
        </div>

        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={changeDetails ? "profileNameActive" : "profileName"}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={changeDetails ? "profileEmailActive" : "profileEmail"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>

        {/* Ocultar el enlace si el rol es 'comprador' */}
        {role !== "delegado" && role !== "obligado" && (
          <Link to="/user/create-listing" className="primaryButton">
            <p>Oferta tu ahorro de energía</p>
            <ArrowRightIcon  style={{ color: 'white', fontSize: '48px' }} />
          </Link>
        )}

        {(role === "delegado" || role === "obligado") && (

          <div >
            <p className="listingText">Ofertas</p>
            <ul className="listingsList">
              <Offers />
            </ul>
          </div>
          
        )}


        {!loading && listings?.length > 0 && (
          <>
            <p className="listingText">Tus ofertas</p>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
    </>
  );
};

export default Profile;
