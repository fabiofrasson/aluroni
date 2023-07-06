import styles from './Dish.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import menu from 'data/menu.json';
import DishTags from 'components/DishTags';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function Dish() {
  const {id} = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));
  if(!dish) return <NotFound />;
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
          <> 
            <button className={styles.return} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.title}>
                {dish.title}
              </h1>
              <div className={styles.image}>
                <img src={dish.photo} alt={dish.title} />
              </div>
              <div className={styles.content}>
                <p className={styles.content__description}>
                  {dish.description}
                </p>
                <DishTags {...dish} />
              </div>
            </section>
          </>
        }/>
      </Route>
    </Routes>
  );
}