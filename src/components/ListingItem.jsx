import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListingItem = ({ listing, id, onEdit, onDelete }) => {
    return (
        <>
            <li className="categoryListing">
                <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
                    {/* Fila de datos */}
                    <div className="categoryListingRow">
                        <p>{listing.tipo}</p>
                        <p>{listing.ahorroEnergia}</p>
                        <p>{listing.estado}</p>
                        <p>{listing.contraprestacion}</p>
                    </div>
                </Link>

                {onDelete && (
                    <DeleteIcon className="removeIcon"
                        fill='rgb(231, 76, 60)'
                        onClick={() => onDelete(id, listing.name)} />
                )}

                {onEdit && (
                    <EditIcon className="editIcon"
                        fill='rgb(79, 147, 0)'
                        onClick={() => onEdit(id)} />
                )}
            </li>
        </>
    );
};

export default ListingItem;


