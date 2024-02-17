import React, { useState } from 'react';
import { ErrorMessage, useFormikContext } from "formik";
import Select, { components, DropdownIndicatorProps, OptionProps } from 'react-select';

import FormSelectStyles from "./FormSelect.styles";
import { InputStyle, PlatformType } from "../../global/types";
import { FormValues } from "../AppForm/AppForm";
import DropdownIcon from "../../global/images/dropdown-icon.svg";
import DropdownIconLight from "../../global/images/dropdown-icon-light.svg";

type Props = {
  name: string,
  label: string,
  setValue: (value: string) => void,
  style?: InputStyle,
}

const options = [
  { value: PlatformType.ios, label: 'iOS' },
  { value: PlatformType.android, label: 'Android' },
];
const FormSelect: React.FC<Props> = (
  { name, label, setValue, style = InputStyle.light }
) => {
  const [fileName, setFilename] = useState("Upload image");
  const formik = useFormikContext<FormValues>();

  return (
    <FormSelectStyles $inputstyle={InputStyle.dark}>
      <span className="input-label">{label}</span>
      <Select
        placeholder="Select element"
        value={formik.values.platform === PlatformType.ios ? options[0] : options[1]}
        options={options}
        onChange={(newValue) => {
          setValue((newValue as {value: string}).value)
        }}
        components={{
          DropdownIndicator: (props) => {
            return (
              <components.DropdownIndicator {...props}>
                <img src={style === InputStyle.dark ? DropdownIconLight : DropdownIcon} alt="dropdown button" className="dropdown-btn"/>
              </components.DropdownIndicator>
            );
          },
          Option
      }}
        classNamePrefix="form-select"
      />
      <div className="error-message"><ErrorMessage name={name}/></div>
    </FormSelectStyles>
  );
}

const Option: React.FC<OptionProps> = props => {
  return (
    <components.Option {...props}>
      <div className="select-option">
        {props.label}
      </div>
    </components.Option>
  );
};

export default FormSelect;