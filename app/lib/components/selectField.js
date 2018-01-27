import React, { PureComponent } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'scss/selectField.scss';

const CustomSelectIcon = () => (
  <span className='custom-select-icon'>
    Click    <span className='line'>-----------------</span>
  </span>
)

class SelectField extends PureComponent {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
  	const { selectedOption } = this.state;
    const { className, options, placeholder } = this.props;
  	const value = selectedOption && selectedOption.value;

    return (
      <Select
        value={value}
        options={options}
        className={className}
        name="form-field-name"
        placeholder={placeholder}
        onChange={this.handleChange}
        arrowRenderer={CustomSelectIcon}
      />
    );
  }
}

export default SelectField;
