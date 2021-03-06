import { useParams, useNavigate } from 'react-router-dom';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import DishTags from 'components/DishTags';
import NotFound from 'pages/NotFound';
import DefaultLayout from 'components/DefaultLayout';

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dish = menu.find(item => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }
  return (
    <DefaultLayout>
      <button className={styles.back} onClick={() => navigate(-1)}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
          <DishTags {...dish} />
        </div>
      </section>
    </DefaultLayout>
  );
}
