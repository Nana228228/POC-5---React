'use client'
import Botao from "./components/button";
import Head from 'next/head';
import styles from './page.module.css';
import Card from './components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo de CSS no Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tutorial de CSS no Next.js!</h1>
        <div className={styles.cardContainer}>
          {[...Array(3)].map((_, index) => (
            <Card key={index} title={`Card Customizado ${index + 1}`}>
              <p>Cartão customizaveis usando estilos modulares.</p>
            </Card>
          ))}
        </div>
        <Botao onClick={() => alert('Aprendi Next.js!')}palavra="Clique aqui para aprender!"/>
      </main>
    </div>
  );
}