import { Formik } from "formik";
import FormView from "./FormView";



const FormLogic = () => {
  return (
    <Formik
      component={FormView}
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        address2: ""
      }}
      validate={values => {
        let errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.address) {
          errors.address = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }, 400);
      }}
    />
  );
};

export default FormLogic;
