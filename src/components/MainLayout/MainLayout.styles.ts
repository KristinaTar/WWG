import styled from 'styled-components';
import theme from "../../global/styles/theme";


const MainLayoutStyles = styled('div')`

  .content {
    padding: 40px;
    
    &-title {
      display: flex;
      align-items: center;
      gap: 17px;
      
      &-header {
        font-weight: 600;
        font-size: 24px;
      }
      
      &-text {
        font-weight: 500;
        font-size: 20px;
        color: ${theme.text[1]};
      }
      
      margin-bottom: 40px;
    }
  }

  .header {
    padding: 20px 40px;
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid ${theme.colors.stroke};


    &-avatar {
      width: 40px;
      height: 40px;
    }

    &-info {
      display: flex;
      gap: 20px;
    }

    &-name {
      text-transform: capitalize;
      color: ${theme.text.dark};
      margin-bottom: 6px;
    }

    &-usertype {
      text-transform: lowercase;
      color: ${theme.text.grey};
      margin-bottom: 6px;
    }

  }


`

export default MainLayoutStyles;