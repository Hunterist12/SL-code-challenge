import { Fragment } from 'react';

const Welcome = () => {
  return (
    <div className="welcome">
      <img
        src="/static/GiantRobotLTD_Logo.svg"
        height="26px"
        width="177px"
      />
      <h1>Welcome</h1>
      <p>Please tell us a bit about yourself to get started.</p>
      <style jsx>{`
        .welcome {
          background-color: #585858;
          padding: 32px 0 32px 16px;
        }

        img {
          padding
        }

        h1 {
          color: #ffffff;
          font-family: 'Roboto';
          font-weight: bold;
          font-size: 32px;
          margin-top: 32px;
        }

        p {
          color: #eaeaea;
          font-family: 'Merriweather';
          font-size: 14px;
          margin-top: 21px
        }
      `}</style>
    </div>
  )
}

export default Welcome;
