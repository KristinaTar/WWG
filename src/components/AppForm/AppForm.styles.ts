import styled from 'styled-components';
import theme from "../../global/styles/theme";


const AppFormStyles = styled.div`
  .form {
    &-title {
      min-height: 67px;
      font-weight: 500;
      font-size: 16px;
      color: ${theme.text[2]};
      padding: 24px;
      border: 1px solid ${theme.colors.stroke};
      border-radius: 16px 16px 0 0;
      background-color: ${theme.colors.white};;
    }
    
    &-body {
      font-weight: 500;
      font-size: 16px;
      color: ${theme.text[1]};
      padding: 32px 24px 34px;
      border: 1px solid ${theme.colors.stroke};
      background-color: ${theme.colors.white};;
      border-top: none;
    }
    
    &-fields-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: 28px;
      margin-bottom: 28px;
      
      @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
      }
    }
  }
  
  .buttons-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }

`

export default AppFormStyles;