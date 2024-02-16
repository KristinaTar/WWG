import React from 'react';
import InputStyles from "./Input.styles";
import CloseIcon from '../../global/images/close-icon.svg';

type Props = {
  name: string,
  label: string,
  onChange: (e: React.ChangeEvent<any>) => void,
  onBlur: (e: React.FocusEvent<any>) => void,
  clear?: () => void,
  value: string,
}
const Input: React.FC<Props> = (
  { name, label, onChange, onBlur, value, clear }
) => {
  return (
    <InputStyles>
      <span className="input-label">{label}</span>
      <div className="input-container">
        <input
          placeholder="Enter Text"
          className="custom-input"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {clear && <img
            className="clear-button"
            onClick={clear}
            src={CloseIcon}
            alt="clear text"
        />}
      </div>
    </InputStyles>
  );
}

export default Input;