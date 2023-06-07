import styles from './Menu.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters/index';
import Sorter, { SorterOptions } from './Sorter';
import Items from './Items';
import themeStyles from 'styles/Theme.module.scss';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<SorterOptions>('');
  return (
    <section className={styles.menu}>
      <h3 className={themeStyles.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>
      <Items search={search} filter={filter} sorter={sorter} />
    </section>
  );
}
