import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import { getAuth } from "firebase/auth";
import { ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';

const ListingItem = ({ listing, id, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleNavigate = () => {
        navigate(`/contact/${listing.userRef}?listingName=${listing.name}`);
    };

    return (
        <ListItem className="categoryListing">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                {/* Item Details */}
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ flex: 1, fontWeight: 'bold' }}>{listing.tipo}</Typography>
                    <Typography variant="body2" sx={{ flex: 1 }}>{listing.ahorroEnergia}</Typography>
                    <Typography variant="body2" sx={{ flex: 1 }}>{listing.estado}</Typography>
                    <Typography variant="body2" sx={{ flex: 1 }}>{listing.contraprestacion}</Typography>
                </Box>
                
                {/* Action Buttons */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Botón para navegar a contacto */}
                    {auth.currentUser?.uid !== listing.userRef && (
                        <IconButton onClick={handleNavigate} color="primary">
                            <EmailIcon />
                        </IconButton>
                    )}

                    {/* Botón para eliminar */}
                    {onDelete && (
                        <IconButton onClick={() => onDelete(id, listing.name)} color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    )}

                    {/* Botón para editar */}
                    {onEdit && (
                        <IconButton onClick={() => onEdit(id)} color="success">
                            <EditIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </ListItem>
    );
};

export default ListingItem;


