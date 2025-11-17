import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';



const Category = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleBackToHomePage = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Vous êtes dans la catégorie : {id}</h2>
            <Button onClick={handleBackToHomePage}>Page d’accueil</Button>
        </div>
    );
};
export default Category;