import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 200) {
    errors.name = 'Must be 200 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.companyName) {
    errors.companyName = 'Required'
  } else if (values.companyName.length > 100) {
    errors.companyName = 'Must be 100 characters or less'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* form body*/}
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component={renderField} type="text"  />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field name="phone" component={renderField} type="phone" />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <Field name="website" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="companyName">Company name</label>
        <Field name="companyName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="companycashphrase">Company catch phrase</label>
        <Field name="companycashphrase" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="companybs">Company bs</label>
        <Field name="companybs" component={renderField} type="text" />
      </div>
      <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
    </form>
  );
};

UserForm = reduxForm({
  // a unique name for the form
  form: "user",
  validate,
  warn
})(UserForm);

export default UserForm;
