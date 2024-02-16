import styled from 'styled-components';
import theme from "../../global/styles/theme";

const FileInputStyles = styled('label')`

  .input {
    &-container {
      background-color: ${theme.colors.white};
      min-height: 64px;
      width: 100%;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23${theme.colors[1].slice(1)}' stroke-width='4' stroke-dasharray='5%2c10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border-radius: 16px;
      padding: 20px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      font-size: 14px;
      font-weight: 500;
      color: ${theme.text.dark};
      
      cursor: pointer;
    }

    &-label {
      display: block;
      color: ${theme.text[1]};
      font-size: 14px;
      font-weight: 500;      
      margin-bottom: 4px;
    }
  }

  .file-name {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.text[3]};
  }
  
  .custom-input {
    display: none;
  }
`;

export default FileInputStyles;