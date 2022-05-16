import styles from './Menu.module.scss'
import { ReactComponent as Logo} from 'assets/logo.svg'
import Finder from './Finder'
import { useState } from 'react'
import Filters from './Filters'
import Ordenator from './Ordenator'
import Itens from './Itens'

export default function Menu() {

    const [search, setSearch] = useState<string>('')
    const [filter, setFilter] = useState<number | null>(null)
    const [ordenator, setOrdenator] = useState('')

    return (
        <main>
            <nav className={styles.menuBar}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <Finder search={search} setSearch={setSearch} />
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Ordenator ordenator={ordenator} setOrdenator={setOrdenator} />
                </div>
                <Itens search={search} filter={filter} ordenator={ordenator}/>
            </section>
        </main>
    )
}