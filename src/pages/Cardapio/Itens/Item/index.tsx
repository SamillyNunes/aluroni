import styles from './Item.module.scss'; 
import { DishType } from 'types/Dish';
import DishTags from 'components/DishTags';
import { useNavigate } from 'react-router-dom';

export default function Item(props: DishType) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={()=> navigate(`/dish/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <DishTags {...props} />
      </div>
    </div>
  );
}