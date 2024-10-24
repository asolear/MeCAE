import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Redirect from './components/Redirect';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Category from './pages/Category';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent from './components/CookieConsent'; // Asegúrate de que la ruta sea correcta

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/MeCAE' element={<Explore />} />
                    <Route path='/' element={<Explore />} />
                    <Route path='/offers' element={<Offers />} />
                    <Route path='/category/:categoryName' element={<Category />} />
                    <Route path='/user' element={<PrivateRoute redirectTo="/sign-in" />}>
                        <Route path='profile' element={<Profile />} />
                        <Route path='create-listing' element={<CreateListing />} />
                        <Route path='edit-listing/:listingId' element={<EditListing />} />
                    </Route>
                    <Route path='/user/*' element={<Redirect url="/" />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/category/:categoryName/:listingId' element={<Listing />} />
                    <Route path='/contact/:landlordId' element={<Contact />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
                <Footer />
                <Navbar />
            </Router>
            <ToastContainer autoClose={3000} />
        </>

    );
}

export default App;
