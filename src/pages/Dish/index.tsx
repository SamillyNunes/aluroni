import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Dish.module.scss';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Dish() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const dish = menu.find(item => item.id === Number(id));

    if(!dish) return '';

    return (
        <>
            <button onClick={()=>navigate(-1)} className={styles.back}>{'< Voltar'}</button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {dish.title}
                </h1>
                <div className={styles.image}>
                    <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                    <p className={styles.contentDescription}>
                        {dish.description}
                    </p>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__type]: true,
                            [styles[`tags__type__${dish.category.label.toLowerCase()}`]]: true,
                        })}>
                            {dish.category.label}
                        </div>
                        <div className={styles.tagsPortion}>
                            {dish.size}g
                        </div>
                        <div className={styles.tagsPeopleQty}>
                            Serve {dish.serving} pessoa{dish.serving===1 ? '' : 's'}
                        </div>
                        <div className={styles.tagsValue}>
                            R$ {dish.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}