import styled from 'styled-components';
import theme from "../../global/styles/theme";

const AuthLayoutStyles = styled('div')`
  display: grid;
  grid-template-columns: 1fr 780px;
  min-height: 100vh;
  
  @media screen and (max-width: 1440px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1200px){
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .main-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content-container {
    width: 100%;
    max-width: 444px;
    border-radius: 16px;
    box-shadow: 0 16px 32px 0 #17254C1F;
  }
  
  .page-title {
    padding: 16px 20px;
    border-bottom: 1px solid ${theme.colors.stroke};
    font-size: 20px;
    font-weight: 700;
    color: ${theme.text[1]};
  }
  
  .content {
    padding: 20px;
  }

  .img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media screen and (max-width: 1200px){
      display: none;
    }
  }
`;

export default AuthLayoutStyles;