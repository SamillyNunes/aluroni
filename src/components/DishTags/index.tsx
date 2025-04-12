import classNames from 'classnames';
import styles from './DishTags.module.scss';
import { DishType } from 'types/Dish';


export default function DishTags({category, size, serving, price}: DishType) {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true
            })}>{category.label}</div>
            <div className={styles.tagsPortion}>{size}g</div>
            <div className={styles.tagsPeopleQty}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
            <div className={styles.tagsValue}>R$ {price.toFixed(2)}</div>
        </div>
    );
}