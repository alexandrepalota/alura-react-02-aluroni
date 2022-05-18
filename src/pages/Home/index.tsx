import { useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Home.module.scss';
import ourHome from 'assets/nossa_casa.png';
import { Dish } from 'types/Dishes';

export default function Home() {
  
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navitgate = useNavigate();

  function redirectToDetails(dish: Dish) {
    navitgate(`/prato/${dish.id}`, {state: {dish}, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>
          Recomendações da cozinha
      </h3>
      <div className={styles.recommendeds}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa do aluroni" />
        <div className={styles.ourHome__address}>
            Rua Vergueiro, 3185 <br/><br/> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}