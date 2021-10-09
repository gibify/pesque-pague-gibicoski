import { GetServerSideProps } from 'next';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import api from '../components/services/axios';

export default function Fishing({ data }) {

  return (
    <div className={styles.container}>
      <Head>
        <meta name="keywords" content="Pesque Pague, Peixe, Filé de Tilápia, Pesqueiro " />
        <meta 
        name="description" 
        content="Venda de Filé de Tilápia, Vinhos, Cachaça, Salames. Pesque e pague com espaço para lazer com WIFI grátis, servimos porções e bebidas no local." 
        />
        <title>Pesque Pague Gibicoski</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cards}>
          {data.map(item => {
            return (
              <div className={styles.card} key={uuidv4()}>
                <h1>{item.title}</h1>
                <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
              </div>)
            })}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/api/data')

  return { 
    props: {data: data}
  }
}