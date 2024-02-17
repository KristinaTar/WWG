import styled from 'styled-components';
import theme from "../../global/styles/theme";

const RegistrationStyles = styled('div')`
  .form {
    display: flex;
    flex-direction: column;
    gap: 25px;    
  }
  
  .signup-container {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    
    .link {
      font-weight: 600;
      text-decoration: underline;
    }
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;

export default RegistrationStyles;