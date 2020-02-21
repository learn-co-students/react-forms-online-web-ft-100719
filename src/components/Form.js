import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
        <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;
