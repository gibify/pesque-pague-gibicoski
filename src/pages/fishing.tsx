import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'

import api from '../components/services/axios'

import styles from '../styles/Fishing.module.scss'

export default function Fishing({ data }) {
  const router = useRouter();
  console.log(router)
  const id = data;
 
  function goToDetails() { 
    router.push(`/details/${id}`)
  }

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
              <button
              onClick={goToDetails}
              className={styles.card} 
              key={uuidv4()}>
                <h1>{item.title}</h1>
                <Image src='/logo_fish.svg' alt='fish' width='100' height='100' />
              </button>)
            })}
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/api/data')

  return { 
    props: {data: data}
  }
}
