import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="keywords" content="Pesque Pague, Peixe, Filé de Tilápia, Pesqueiro " />
          <meta name="description" content="Venda de Filé de Tilápia, Vinhos, Cachaça, Salames. Pesque e pague com espaço para lazer com WIFI grátis, servimos porções e bebidas no local." />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;