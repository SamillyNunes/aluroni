import { useNavigate, useParams } from 'react-router-dom';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import DishTags from 'components/DishTags';
import NotFound from 'pages/NotFound';
import Layout from 'components/Layout';

export default function Dish() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const dish = menu.find(item => item.id === Number(id));

    if(!dish) return <NotFound/>;

    return (
        <Layout>
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
                    <DishTags {...dish} />
                </div>
            </section>
        </Layout>
    );
}