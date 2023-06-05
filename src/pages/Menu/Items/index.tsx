import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  search: string;
  filter: number | null;
  sorter: string;
}

export default function Items({ search, filter, sorter }: Props) {
  const [list, setList] = useState(menu);

  function searchTest(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderPropAsc(list: typeof menu, prop: 'size' | 'serving' | 'price') {
    return list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  }

  function sort(list: typeof menu) {
    switch (sorter) {
    case 'porcao':
      return orderPropAsc(list, 'size');
    case 'qtd_pessoas':
      return orderPropAsc(list, 'serving');
    case 'preco':
      return orderPropAsc(list, 'price');
    default:
      return list;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(sort(newList));
  }, [search, filter, sorter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
