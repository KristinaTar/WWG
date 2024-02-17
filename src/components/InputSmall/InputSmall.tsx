import React, { useState } from 'react';
import { ErrorMessage } from "formik";

import InputSmallStyles from "./InputSmall.styles";
import EyeClosed from '../../global/images/eye-closed.svg';
import EyeOpened from '../../global/images/eye-opened.svg';

type Props = {
  name: string,
  type?: string,
  label: string,
  onChange: (e: React.ChangeEvent<any>) => void,
  onBlur: (e: React.FocusEvent<any>) => void,
  value: string,
}

const InputSmall: React.FC<Props> = (
  {
    name,
    type = "text",
    label,
    onChange,
    onBlur,
    value,
  }
) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputSmallStyles>
      <span className="input-label">{label}</span>
      <div className="input-container">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder="Enter Text"
          className={`custom-input`}
          name={name}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          onBlur={onBlur}
          value={value}
          autoComplete="off"
        />
        {type === "password" && <img
            className="show-button"
            onClick={() => setShowPassword(prev => !prev)}
            src={showPassword ? EyeClosed : EyeOpened}
            alt="clear text"
        />}
        <div className="error-message"><ErrorMessage name={name}/></div>
      </div>
    </InputSmallStyles>
  );
}

export default InputSmall;