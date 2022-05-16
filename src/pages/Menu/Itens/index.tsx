import Item from './Item'
import menu from './itens.json'
import styles from './Itens.module.scss'

export default function Itens() {
    return (
        <div className={styles.itens}>
            {menu.map(item => (
                <Item
                    key={item.id}
                    {...item /* use spread only when we have total control over the data origin. If we are consuming an external API, use params one by one */} />
            ))}
        </div>
    )
}