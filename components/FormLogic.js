import React from "react";
import FormView from "./FormView";

class FormLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address2: "",
      address: "",
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: false
    };
  }

  handleChange = e => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change, this._checkValidity);
  };

  handleBlur = e => {
    this._setTouched(e.target.name);
    this._checkForErrors(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true }, () => {
      const values = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        address2: this.state.address2
      };
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        this._resetForm();
      }, 400);
    });
  };

  _resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      address2: "",
      address: "",
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: false
    });
  };

  _setTouched = field => {
    const touched = this.state.touched;
    touched[field] = true;
    this.setState({ touched });
  };

  _checkForErrors = (e) => {
    const errors = this.state.errors;
    if (!e.target.value) {
      errors[e.target.name] = "Required";
    } else {
      delete errors[e.target.name];
    }
    this.setState({ errors });
  }

  _checkValidity = () => {
    console.log('checking validity...')
    let { firstName, lastName, address } = this.state;
    if (firstName && lastName && address) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  render() {
    return (
      <FormView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        values={{
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address,
          address2: this.state.address2
        }}
        errors={this.state.errors}
        touched={this.state.touched}
        isSubmitting={this.state.isSubmitting}
        isValid={this.state.isValid}
      />
    );
  }
}

export default FormLogic;
