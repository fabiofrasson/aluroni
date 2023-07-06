import classNames from 'classnames';
import { Dish } from 'types/Dish';
import styles from './DishTags.module.scss';

export default function DishTags({
  category,
  size,
  serving,
  price
}: Dish) {
  return (
    <div className={styles.tags__tags}>
      <div
        className={classNames(
          styles.tags__type,
          styles[
            `tags__type__${category.label.toLowerCase()}`
          ]
        )}
      >
        {category.label}
      </div>
      <div className={styles.tags__size}>{size}</div>
      <div className={styles.tags__serving}>{serving}</div>
      <div className={styles.tags__price}>
                        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}