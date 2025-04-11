import styles from './About.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import house from 'assets/images/casa.png';
import massa1 from 'assets/images/massa1.png';
import massa2 from 'assets/images/massa2.png';

const images = [massa1, massa2];

export default function About() {
    return (
        <section>
            <h3 className={themeStyles.title}>Sobre</h3>
            <div className={styles.aboutUs}>
                <img src={house} alt='Casa Aluroni' />
                <div className={styles.aboutUsText}>
                    <p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
                
            </div>
            <div className={styles.images}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imagesImg}>
                            <img src={image} alt='Imagem da massa' />
                        </div>

                    ))}
                </div>
        </section>
    );
}