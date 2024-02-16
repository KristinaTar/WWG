import styled from 'styled-components';
import theme from "../../global/styles/theme";


const AppFormStyles = styled('div')`
  .form-title {
    min-height: 67px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.text[2]};
    padding: 24px;
    border: 1px solid ${theme.colors.stroke};
    border-radius: 16px 16px 0 0;
    background-color: ${theme.colors.white};;
  }
  .form-body {
    font-weight: 500;
    font-size: 16px;
    color: ${theme.text[1]};
    padding: 32px 24px 34px;
    border: 1px solid ${theme.colors.stroke};
    background-color: ${theme.colors.white};;
    border-top: none;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 28px;
  }
  
  .cancel {
    font-weight: 700;
    font-size: 14px;
    color: ${theme.colors.strokeActive};
  }
  
  .save-btn {
    padding: 10px 36px;
    width: 105px;
  }
  
  .btns-container {
    display: flex;
    align-items: center;
    gap: 24px;
    
  }

`

export default AppFormStyles;