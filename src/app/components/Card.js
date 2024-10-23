import styles from './Card.module.css';

export default function Cartao({ title, children }) {
  return (
    <div className={styles.cartao}>
      <h2 className={styles.cartaoTitle}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}