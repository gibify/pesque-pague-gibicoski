import Head from 'next/head'
import Image from 'next/image'
import { WhatsAppButton } from '../components/WhatsAppButton'
import styles from '../styles/Home.module.scss'

export default function Pesqueiro() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Pesque Pague Gibicoski</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h1>Filé de Tilápia</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>
          <div className={styles.card}>
            <h1>Bebidas</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>
          <div className={styles.card}>
            <h1>Porções</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>
          <div className={styles.card}>
            <h1>Vinhos</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>
          <div className={styles.card}>
            <h1>Cachaça</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>
          <div className={styles.card}>
          < h1>Salames</h1>
            <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
          </div>  
        </div>
      </main>
    </div>
  )
}
