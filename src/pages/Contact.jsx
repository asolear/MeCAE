import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

const Contact = () => {
    const [message, setMessage] = useState('fdasdfasd ')
    const [landlord, setLandlord] = useState(null)
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()

    useEffect(() => {
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setLandlord(docSnap.data())
            } else {
                toast.error('Could not get landlord data.')
            }
        }

        getLandlord()
    }, [params.landlordId])

    const onChange = (e) => setMessage(e.target.value)

    return (
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Contactar al propietario de los ahorros energéticos</p>
            </header>

            {landlord !== null && (
                <main>
                    <div className="contactLandlord">
                        <p className="landlordName">Contactar {landlord?.name}</p>
                    </div>
                    <form className="messageForm">
                        <div className="messageDiv">
                            <label htmlFor="message" className="messageLable">
                                Mensaje
                            </label>
                            <textarea
                                className="textarea"
                                name="message"
                                id="message"
                                value={message}
                                placeholder="Documento de identificación (DNI/NIE)"

                                onChange={onChange}
                            ></textarea>
                        </div>

                        <a href={`mailto:${landlord.email}?
                        Subject=${searchParams.get('listingName')}&
                        body=${message}`}>
                            <button type="button" className="primaryButton">Enviar mensaje</button>
                        </a>
                    </form>
                </main>
            )}
        </div>
    )
}

export default Contact