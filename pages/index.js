import Welcome from "../components/Welcome";
import Head from "next/head";
import UserInformationForm from "../components/UserInformationForm";

const Home = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid">
        <div className="leftMargin" />
        <div className="welcome">
          <Welcome />
        </div>
        <div className="form">
          <UserInformationForm />
        </div>
        <div className="rightMargin" />
      </div>
      <style jsx global>{`
        body {
          margin: 0;
        }

        @media (min-width: 935px) {
          .grid {
            display: grid;
            grid-template-columns: auto 535px 400px auto;
            grid-template-rows: 100vh;
          }

          .leftMargin {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            background-color: #585858;
          }

          .welcome {
            grid-column: 2 / span 1;
            grid-row: 1 / span 1;
          }

          .form {
            grid-column: 3 / span 1;
            grid-row: 1 / span 1;
          }

          .rightMargin {
            grid-column: 4 / span 1;
            grid-row: 1 / span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
