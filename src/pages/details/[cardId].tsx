import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import api from '../../components/services/axios'

interface DataProps {
  id: string;
  title: string;
}

interface Props { 
  data: DataProps;
}
export default function Card({ data }: Props) {
  const router = useRouter()
  console.log(router)
const { isFallback } = useRouter()
console.log(data)
if(isFallback) {
  return <h1>Carregando...</h1>
}

  return (
    <div>
      <Head>
        <meta name="keywords" content="Pesque Pague, Peixe, Filé de Tilápia, Pesqueiro " />
        <meta 
        name="description" 
        content="Venda de Filé de Tilápia, Vinhos, Cachaça, Salames. Pesque e pague com espaço para lazer com WIFI grátis, servimos porções e bebidas no local." 
        />
        <title>Pesque Pague Gibicoski</title>
      </Head>
      <h1>card ID</h1>
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => { 
//   const { data }  = await api.get('/api/data') 

//   const paths = data.map(card => {
//     return { 
//       params: { cardId: `${card.id}`} 
//     }
//   });

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { cardId } = context.params;
//   console.log(cardId)

//   const { data } = await api.get(`/details/${cardId}`);

//   return { 
//     props: { data: data}
//   }
// }