import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ListingItem = ({ listing, id, onEdit, onDelete }) => {
    return (
        <li className="categoryListing">
            <Link to={`/category/${listing.type}/${id}`}
                className="categoryListingLink">
                {/* You no longer have images, so the img element is removed */}

                <div className="categoryListingDetails">
                    {/* Display the listing's name */}
                    <p className="categoryListingName">{listing.name}</p>

                    {/* Display the listing's type */}
                    <p className="categoryListingType">
                        {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
                    </p>

                    {/* Display the listing's timestamp if you want to show when it was created */}
                    <p className="categoryListingTimestamp">
                        Listed on: {new Date(listing.timestamp?.seconds * 1000).toLocaleDateString()}
                    </p>
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
    );
};

export default ListingItem;
