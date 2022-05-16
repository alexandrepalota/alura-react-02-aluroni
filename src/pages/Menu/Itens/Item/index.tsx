import logo from "assets/logo.svg";
import styles from "./Item.module.scss";

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt="Imagem" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
            <h2>Macarrão</h2>
            <p>Descrição do macarrão</p>
        </div>
        <div className={styles.item__tags}>
            <div className={styles.item__type}>
                Massa
            </div>
            <div className={styles.item__portion}>
                400g
            </div>
            <div className={styles.item__personQtd}>
                Serve 2 pessoas
            </div>
            <div className={styles.item__value}>
                R$ 50,00
            </div>
        </div>
      </div>
    </div>
  );
}
