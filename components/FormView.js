const UserInformationForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <div className="container">
      <form>
        <div className="row">
          <label htmlFor="firstName">FIRST NAME</label>
          {errors.firstName && touched.firstName ? (
            <div className="error">{errors.firstName}</div>
          ) : null}
        </div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          className={errors.firstName ? "inputError" : null}
        />
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        <label htmlFor="address">ADDRESS</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
        />
        <label htmlFor="address2">ADDRESS 2 (OPTIONAL)</label>
        <input
          type="text"
          id="address2"
          name="address2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address2}
        />
        <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
          Next
          <img src="/static/White_Arrow.svg" height="10px" width="10px" />
        </button>
      </form>
      <style jsx>{`
        .container {
          padding: 32px 16px 0 16px;
          max-width: 408px;
          margin: auto;
        }

        .row {
          display: flex;
        }

        .error {
          color: #e70000;
          font-family: "Merriweather";
          font-size: 12px;
          margin-left: 2px;
        }

        .inputError {
          border: 1px solid #e70000;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          color: #666666;
          font-size: 12px;
          padding-left: 1px;
          font-family: "Merriweather";
        }

        input {
          background-color: #f7f7f7;
          border: 1px solid #eaeaea;
          border-radius: 6px;
          height: 48px;
          max-width: 358px;
          margin: 11px 0 24px 0;
          padding-left: 16px;
          color: #666666;
          font-family: "Roboto";
          font-size: 14px;
        }

        input:focus {
          outline: none;
          background-color: #ffffff;
          border: 1px solid #00adee;
        }

        button {
          background-color: #ffab44;
          color: #ffffff;
          font-family: "Roboto";
          font-weight: bold;
          font-size: 16px;
          height: 48px;
          max-width: 376px;
          border: none;
          border-radius: 6px;
          padding: 0;
        }

        button:focus {
          outline: none;
          border: 1px inset #ffab44;
        }

        img {
          margin-left: 8px;
        }

        @media (min-width: 935px) {
          .container {
            padding-left: 24px;
            padding-top: 115px;
          }

          form {
            width: 424px;
          }

          button {
            margin-top: 24px;
            width: 105px;
          }
        }
      `}</style>
    </div>
  );
};

export default UserInformationForm;
