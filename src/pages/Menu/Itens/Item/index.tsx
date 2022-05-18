import styles from './Item.module.scss';
import classNames from 'classnames';
import { Dish } from 'types/Dishes';

export default function Item(props: Dish) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__personQtd}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
          <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
