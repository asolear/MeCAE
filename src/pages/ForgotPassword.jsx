import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
// import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import ArrowRightIcon from '@mui/icons-material/Forward';
const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Reset email was sent.')
            navigate('/sign-in')
        } catch (error) {
            toast.error('Could not send reset email.')
        }
    }

    return (
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Forgot Password</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <input type="email"
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />
                    <Link className="forgotPasswordLink" to='/sign-in'>Sign In</Link>

                    <div className="signInBar">
                        <div className="singInText">Send Reset Link</div>
                        <button className="signInButton">
                            <ArrowRightIcon  style={{ color: 'white', fontSize: '48px' }} fill='#ffffff' width='34px' height='34px' />
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ForgotPassword