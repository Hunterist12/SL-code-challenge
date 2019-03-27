import React from 'react';
import FormView from './FormView';

class FormLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address2: '',
      address: '',
      errors: {},
      touched: {},
      isSubmitting: false
    }
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleBlur = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
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
  }

  _resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      address2: '',
      address: '',
      errors: {},
      touched: {},
      isSubmitting: false
    });
  }

  render() {
    return <FormView
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
    />
  }
};

export default FormLogic;
