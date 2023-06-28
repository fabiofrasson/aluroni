import menu from 'data/menu.json';
import styles from './Home.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import restaurant from 'assets/restaurant.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 -  Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirectToDetails(dish: typeof menu[0]) {
    navigate(`/prato/${dish.id}`, {state: { ...dish }, replace: true});
  }

  return (
    <section>
      <h3 className={themeStyles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommended}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommendedS}>
            <div className={styles.recommendedS__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recommendedS__button}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.title}>Nossa casa</h3>
      <div className={styles.restaurant}>
        <img src={restaurant} alt="Casa do Aluroni" />
        <div className={styles.restaurant__address}>
            Rua Vergueiro, 3185 <br /><br />Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
