import Welcome from '../components/Welcome';
import Head from 'next/head';
import UserInformationForm from '../components/UserInformationForm';

const Home = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:400" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Welcome />
      <UserInformationForm />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Home;
