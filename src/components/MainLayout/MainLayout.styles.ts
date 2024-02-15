import styled from 'styled-components';
import theme from "../../global/styles/theme";


const MainLayoutStyles = styled('div')`
 
  
  .header {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.stroke};
    padding: 20px 20px 20px 0;
    display: flex;
    
    &-info{
      justify-content: flex-end;
      
    }
    
    &-name{
      
    }
    
  }


`

export default MainLayoutStyles;