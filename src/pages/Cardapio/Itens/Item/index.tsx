import styles from './Item.module.scss'; 
import { DishType } from 'types/Dish';
import DishTags from 'components/DishTags';

export default function Item(props: DishType) {
  const { title, description, photo } = props;
  return (
    <div className={styles.item}>
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