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
      <div className="grid">
        <div className="leftMargin"></div>
        <div className="content" style={{height: window.innerHeight}}>
          <Welcome />
          <UserInformationForm />
        </div>
        <div className="rightMargin"></div>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
        }

        @media (min-width: 935px) {
          .content {
            display: flex;
            width: 935px;
          }

          .grid {
            display: grid;
            grid-template-columns: auto 535px 400px auto;
            grid-template-rows: auto;
          }

          .leftMargin {
            background-color: #585858;
          }
        }
      `}</style>
    </div>
  )
}

export default Home;
