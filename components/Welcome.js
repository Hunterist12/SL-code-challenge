const Welcome = () => {
  return (
    <div className="container">
      <img
        src="/static/GiantRobotLTD_Logo.svg"
        height="26px"
        width="177px"
      />
      <h1>Welcome</h1>
      <p>Please tell us a bit about yourself to get started.</p>
      <style jsx>{`
        .container {
          background-color: #585858;
          padding: 32px 0 32px 16px;
          display: block;
        }

        h1 {
          color: #ffffff;
          font-family: 'Roboto';
          font-weight: bold;
          font-size: 32px;
          margin: 32px 0 0 0;
        }

        p {
          color: #eaeaea;
          font-family: 'Merriweather';
          font-size: 14px;
          margin: 16px 0 0 0;
        }

        @media (min-width: 935px) {
          .container {
            width: 535px;
          }
        }
      `}</style>
    </div>
  )
}

export default Welcome;
