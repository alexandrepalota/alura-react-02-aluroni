import { useState } from 'react';
import Finder from './Finder';
import Filters from './Filters';
import Ordenator from './Ordenator';
import Itens from './Itens';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Menu.module.scss';

export default function Menu() {

  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordenator, setOrdenator] = useState('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Finder search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
      </div>
      <Itens search={search} filter={filter} ordenator={ordenator}/>
    </section>
  );
}