import menu from 'data/menu.json';
import styles from './Home.module.scss';
import Carte from 'components/Carte';

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 -  Math.random()).splice(0,3);
  return (
    <section>
      <Carte />
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommended}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommendedS}>
            <div className={styles.recommendedS__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommendedS__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
