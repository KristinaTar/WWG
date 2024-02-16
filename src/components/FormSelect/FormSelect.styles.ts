import styled from 'styled-components';
import theme from "../../global/styles/theme";

const FormSelectStyles = styled.label<{ dark?: boolean; }>`
  .form-select{
    &__single-value {
      color: ${theme.text.dark};
    }

    &__menu {
      border: 1px solid ${theme.colors.stroke};
      box-shadow: 0 2px 6px 0 ${theme.colors.shadow};

      border-radius: 0 0 16px 16px;
      margin-top: -14px;
    }

    &__value-container {
      padding-left: 20px;
    }

    &__option {
      color: ${theme.text.dark};
      cursor: pointer;
      background: none;

      .select-option {
        border-radius: 6px;
        padding: 4px 8px;
        width: fit-content;
      }
      
      &:active {
        background: none;
      }
      
      &--is-selected {
        .select-option {
          background-color: ${theme.colors[2]};;
          color: ${theme.colors[3]};;
        }
      }
      
      &--is-focused {
        .select-option {
          color: ${theme.colors[3]};;
        }
      }
    }
    
    &__control {
      background-color: ${({dark}) => dark ? theme.colors.stroke : theme.colors.white};
      min-height: 64px;
      width: 100%;
      border: 1px solid ${theme.colors.stroke};
      border-radius: 16px;
      transition: 0.5s;

      font-size: 14px;
      font-weight: 500;
      color: ${theme.text.dark};

      &:focus {
        border: 1px solid ${theme.colors.strokeActive};
      }
      
      &:hover {
        cursor: pointer;
      }
      
      &--is-focused {
        box-shadow: none;
        &:hover {
          border: 1px solid ${theme.colors.strokeActive};
        }
      }
    }
    
    &__indicator {
      padding: 20px;
      &-separator {
        display: none;
      }
    }
    
  }

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
`;

export default FormSelectStyles;