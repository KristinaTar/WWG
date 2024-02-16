import React, { useState } from 'react';
import FileInputStyles from "./FileInput.styles";
import ImageIcon from '../../global/images/image-icon.svg';
import { ErrorMessage } from "formik";

type Props = {
  name: string,
  label: string,
  onChange: (e: React.ChangeEvent<any>) => void,
}
const FileInput: React.FC<Props> = (
  { name, label, onChange }
) => {
  const [fileName, setFilename] = useState("Upload image");
  return (
    <FileInputStyles>
      <span className="input-label">{label}</span>
      <div className="input-container">
        <img
          alt="select image"
          src={ImageIcon}
        />
        <div className="file-name">{fileName}</div>
        <input
          type="file"
          className="custom-input"
          name={name}
          onChange={(e) => {
            setFilename(e.target.files![0].name)
            onChange(e);
          }}
        />
      </div>
      <div className="error-message"><ErrorMessage name={name}/></div>
    </FileInputStyles>
  );
}

export default FileInput;