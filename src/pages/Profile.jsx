import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import Offers from "./Offers";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/Forward";

const Profile = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [role, setRole] = useState("");

  const { name, email } = formData;
  const navigate = useNavigate();

  // Fetch user role
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setRole(userSnap.data().role);
        } else {
          console.error("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user role", error);
      }
    };

    fetchUserRole();
  }, [auth.currentUser.uid]);

  // Fetch user listings
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
    auth.signOut();
    toast.success("Logged out successfully.");
    navigate("/", { replace: true });
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
        toast.success("Profile details updated successfully.");
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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
      Tus Ahorros Energéticos
      </Typography>


      <main>
        {/* Hide the link if the role is 'comprador' */}
        {role !== "delegado" && role !== "obligado" && (
          <Link to="/user/create-listing">
            <Button variant="contained" color="primary" endIcon={<ArrowRightIcon />}>
              Nueva oferta
            </Button>
          </Link>
        )}

        {(role === "delegado" || role === "obligado") && (
          <Box>
            <Typography variant="h6" className="listingText">
              Ofertas
            </Typography>
            <Offers />
          </Box>
        )}

        {loading ? (
          <CircularProgress />
        ) : listings?.length > 0 ? (
          <>
            <Typography variant="h6" className="listingText">
              Tus ofertas
            </Typography>
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
        ) : (
          <Typography variant="body1">No hay ofertas disponibles.</Typography>
        )}
      </main>
    </Box>
  );
};

export default Profile;
