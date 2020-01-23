import './styles.css'

import Head from 'next/head'

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <title>OutThisLife ⊻ Talasan</title>

      <link
        rel="shortcut icon"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB60lEQVR4Xu3YQREAIRTD0OLfKxZ2Z7CRh4NPcmh7tvvNy/7AIUCW/TucAG3+BIjzJwABhMC0AzJAGr8QGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/AQggB2g7YAM0OavBsb5E4AAdoC0AzJAGr8aGMdPAALYAdoOyABt/mpgnD8BCGAHSDsgA6Txq4Fx/NsPJ+b3ASdJYpQAAAAASUVORK5CYII="
      />
    </Head>

    <Component {...pageProps} />
  </>
)
