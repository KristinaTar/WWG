import styled from 'styled-components';
import theme from "../../global/styles/theme";

const InputStyles = styled('label')`

  .input {
    &-container {
      display: block;
      position: relative;
    }

    &-label {
      display: block;
      color: ${theme.text[1]};
      font-size: 14px;
      font-weight: 500;      
      margin-bottom: 4px;
    }
  }

  .custom-input {
    background-color: ${theme.colors.white};
    min-height: 64px;
    width: 100%;
    border: 1px solid ${theme.colors.stroke};
    border-radius: 16px;
    padding: 20px;
    transition: 0.5s;

    font-size: 14px;
    font-weight: 500;
    color: ${theme.text.dark};

    &::placeholder {
      color: ${theme.text[3]};
    }

    &:focus {
      border: 1px solid ${theme.colors.strokeActive};
    }
    
    &--dark {
      background-color: ${theme.colors.stroke};
    }
  }

  .clear-button {
    height: 24px;
    width: 24px;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 12px);
    right: 21px;
    opacity: 0;

    transition: 0.3s;
  }

  &:focus-within {
    .clear-button {
      opacity: 1;
    }
  }
`;

export default InputStyles;