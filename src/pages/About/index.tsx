import styles from './About.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import facade from 'assets/about/facade.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

const images = [pasta1, pasta2];

export default function About() {
  return (
    <section>
      <h3 className={themeStyles.title}>Sobre</h3>
      <div className={styles.aboutUs}>
        <img src={facade} alt="Ristorante Aluroni" />
        <div className={styles.aboutUs__text}>
          <p>
          Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
          Também possuímos uma cardápio de carnes com muitas opções, de acordo com o seu gosto!
          </p>
          <p>
          Para acompanhar as massas italianas, Aluroni possui uma carta de vinhos especiais, que harmonizam perfeitamente com o seu prato, seja carne ou massa!
          </p>
        </div>
      </div>      
      <div className={styles.images}>
        {images.map((image, index) => (
          <div className={styles.images__image} key={index}>
            <img src={image} alt="Imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}