import classNames from 'classnames';
import { Dish } from 'types/Dishes';
import styles from './DishTags.module.scss';

export default function DishTags({category, size, serving, price}: Dish) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>{size}g</div>
      <div className={styles.tags__qtPersons}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__value}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
