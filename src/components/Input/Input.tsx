import React from 'react';
import { ErrorMessage } from "formik";

import InputStyles from "./Input.styles";
import CloseIcon from '../../global/images/close-icon.svg';
import CloseIconLight from '../../global/images/close-icon-light.svg';
import { InputStyle } from "../../global/types";

type Props = {
  name: string,
  label: string,
  onChange: (e: React.ChangeEvent<any>) => void,
  onBlur: (e: React.FocusEvent<any>) => void,
  clear?: () => void,
  value: string,
  style?: InputStyle,
}

const Input: React.FC<Props> = (
  {
    name,
    label,
    onChange,
    onBlur,
    value,
    clear,
    style = InputStyle.light
  }
) => {
  return (
    <InputStyles>
      <span className="input-label">{label}</span>
      <div className="input-container">
        <input
          placeholder="Enter Text"
          className={`custom-input ${style === InputStyle.dark && 'custom-input--dark'}`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {clear && <img
            className="clear-button"
            onClick={clear}
            src={style === InputStyle.dark ? CloseIconLight : CloseIcon}
            alt="clear text"
        />}
        <div className="error-message"><ErrorMessage name={name} /></div>
      </div>
    </InputStyles>
  );
}

export default Input;