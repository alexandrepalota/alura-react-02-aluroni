import { useEffect, useState } from 'react'
import Item from './Item'
import menu from './itens.json'
import styles from './Itens.module.scss'

interface Props {
    search: string,
    filter: number | null,
    ordenator: string
}

export default function Itens(props: Props) {
    const [list, setList] = useState(menu)
    const {search, filter, ordenator} = props

    function testSearch(title: string) {
        // the 'i' tells RegExp to ignore case
        const regex = new RegExp(search, 'i')
        return regex.test(title)
    }

    function testFilter(id: number) {
        if (filter !== null) return filter === id
        return true
    }

    function sort(newList: typeof menu) {
        switch(ordenator) {
            case 'porcao':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return newList
        }
    }

    useEffect(() => {
        const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(sort(newList))
    }, [search, filter, ordenator])
    return (
        <div className={styles.itens}>
            {list.map(item => (
                <Item
                    key={item.id}
                    {...item /* use spread only when we have total control over the data origin. If we are consuming an external API, use params one by one */} />
            ))}
        </div>
    )
}