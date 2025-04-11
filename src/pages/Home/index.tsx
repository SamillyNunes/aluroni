import menu from 'data/menu.json';
import styles from './Home.module.scss';
import NavMenu from 'components/NavMenu';

export default function Home() {
    let recommeded = [...menu];
    //ordenando de maneira aleatoria:
    recommeded = recommeded.sort(() => 0.5 - Math.random()).splice(0, 3);

    return (
        <section>
            <NavMenu/>
            <h3 className={styles.title}>Recomendações da cozinha</h3>
            <div className={styles.recommendedList}>
                {recommeded.map(item => (
                    <div className={styles.recommended} key={item.id}>
                        <div className={styles.recommendedImg}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommendedButton}>Ver mais</button>
                    </div>
                ))}
            </div>
        </section>
    );
}