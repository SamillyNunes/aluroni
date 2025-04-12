import menu from 'data/menu.json';
import styles from './Home.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import ourHomePhoto from 'assets/images/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { DishType } from 'types/Dish';

export default function Home() {
    let recommeded = [...menu];
    //ordenando de maneira aleatoria:
    recommeded = recommeded.sort(() => 0.5 - Math.random()).splice(0, 3);

    const navigate = useNavigate();

    function redirectToDetails(dish: DishType) {
        navigate(`/dish/${dish.id}`, {state: {dish}});
    }

    return (
        <section>
            <h3 className={themeStyles.title}>Recomendações da cozinha</h3>
            <div className={styles.recommendedList}>
                {recommeded.map(item => (
                    <div className={styles.recommended} key={item.id}>
                        <div className={styles.recommendedImg}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            onClick={() => redirectToDetails(item)} 
                            className={styles.recommendedButton}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={themeStyles.title}>Nossa casa</h3>
            <div className={styles.ourHome}>
                <img src={ourHomePhoto} alt='Casa do Aluroni' />
                <div className={styles.ourHomeAddress}>
                    Rua das Pedras 569 <br /><br /> Igaci - AL
                </div>

            </div>
        </section>
    );
}