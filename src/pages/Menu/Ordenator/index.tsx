import styles from './Ordenator.module.scss'
import options from './options.json'

export default function Ordenator() {
    return (
        <button className={styles.ordenator}>
            <span>Ordenar por</span>
            <div className={styles.ordenator__options}>
                {options.map(option => (
                    <div className={styles.ordenator__options} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}