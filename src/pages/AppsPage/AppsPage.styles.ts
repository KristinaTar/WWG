import styled from 'styled-components';
import theme from "../../global/styles/theme";

const AppsPageStyles = styled('div')`
  .top-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  
  .apps-table {
    &-row {
      min-height: 48px;
      display: grid;
      grid-template-columns: 26fr 26fr 15fr 15fr 53fr 220px;
      align-items: center;
      cursor: pointer;
      border: 1px solid ${theme.colors.stroke};
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      
      &:not(:last-of-type) {
        border-bottom:none;
      }
      
      &:hover {
        background-color: ${theme.backgrounds[2]};
      }
      
      &--head {
        color: ${theme.text.grey};
        height: 56px;
        border-radius: 16px 16px 0 0;
        background-color: ${theme.backgrounds[1]};
        cursor: auto;

        &:hover {
          background-color: ${theme.backgrounds[1]};
        }
      }
      
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        &:not(:last-of-type) {
          border-right: 1px solid ${theme.colors.stroke};
        }
      }
    }
  }
  
  .create-btn {
    padding: 10px 36px 10px 36px;
  }
`;

export default AppsPageStyles;