import Welcome from '../components/Welcome';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Welcome />
      {/* <Form /> */}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Home;
