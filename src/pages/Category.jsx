import { useParams } from 'react-router'


const Category = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Vous êtes dans la catégorie : {id}</h2>
        </div>
    );
};
export default Category;