import styles from "./button.module.css";
export default function Botao({ palavra, onClick }) {
    return (
      <button className={styles.botao} onClick={onClick}>
        {palavra}
      </button>
    );
  }