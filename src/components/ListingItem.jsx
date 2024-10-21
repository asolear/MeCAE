import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import { getAuth } from "firebase/auth"

const ListingItem = ({ listing, id, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const auth = getAuth()

    const handleNavigate = () => {
        navigate(`/contact/${listing.userRef}?listingName=${listing.name}`);
    };

    return (
        <>
            <li className="categoryListing">
                {/* Fila de datos */}
                <div className="categoryListingRow">
                    <p>{listing.tipo}</p>
                    <p>{listing.ahorroEnergia}</p>
                    <p>{listing.estado}</p>
                    <p>{listing.contraprestacion}</p>
                </div>

                {/* Botón para navegar a contacto */}
                {auth.currentUser?.uid !== listing.userRef &&(
                <button className="contactButton" onClick={handleNavigate}>
                <EmailIcon className="EmailIcon" fill='rgb(231, 76, 60)' />
                </button>
                )}

                {/* Botón para eliminar */}
                {onDelete && (
                    <button className="removeButton" onClick={() => onDelete(id, listing.name)}>
                        <DeleteIcon className="removeIcon" fill='rgb(231, 76, 60)' />
                    </button>
                )}

                {/* Botón para editar */}
                {onEdit && (
                    <button className="editButton" onClick={() => onEdit(id)}>
                        <EditIcon className="editIcon" fill='rgb(79, 147, 0)' />
                    </button>
                )}
            </li>
        </>
    );
};

export default ListingItem;

