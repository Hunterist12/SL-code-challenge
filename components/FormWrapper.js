import { Formik } from 'formik';
import UserInformationForm from "./UserInformationForm";

const FormWrapper = () => {
  return (
    <Formik
      component={UserInformationForm}
      initialValues={{ firstName: "", lastName: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    />
  );
};

export default FormWrapper;
