import React from 'react';
import Input from './Input';
import Wrapper from './Wrapper';


function InputIcon(props) {
  const { icon, ...newProps } = props;
  return (
    <Wrapper>
      {icon}
      <Input {...newProps} />
    </Wrapper>
  );
}

InputIcon.propTypes = {
  type: React.PropTypes.any,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.any,
  onChange: React.PropTypes.any,
  icon: React.PropTypes.any,
};

export default InputIcon;
