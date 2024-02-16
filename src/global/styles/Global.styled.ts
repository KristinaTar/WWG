import styled from 'styled-components';
import theme from "./theme";

export const AppContainer = styled('div')`
  .btn {
    border: none;
    margin: 0;
    width: auto;
    overflow: visible;
    background-color: ${theme.backgrounds[3]};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    border-radius: 12px;
    cursor: pointer;
    
    &:hover {
      background-color: ${theme.backgrounds[4]};
    }
    
    &:disabled {
      background-color: ${theme.text[4]};
      cursor: no-drop;
    }
  }

  .cancel-btn {
    border-radius: 12px;
    width: 105px;
    border: none;
    background: none;
    font-weight: 700;
    font-size: 14px;
    color: ${theme.colors.strokeActive};
    cursor: pointer;

    &:hover {
      color: ${theme.backgrounds[4]};
    }
  }

  .save-btn {
    width: 105px;
    min-height: 40px;
  }
  
  .error-message {
    display: block;
    font-size: 14px;
    color: ${theme.text.error};
    height: 0;
    padding-left: 20px;
  }

  .text-center {
    text-align: center;
  }

  .auto-height {
    height: auto;
  }

`;
