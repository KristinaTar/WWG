import styled from 'styled-components';
import theme from "../../global/styles/theme";

const AppsPageStyles = styled('div')`
  .apps-table {
    &-row {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr 1fr 4fr 2fr;
      align-items: center;
      cursor: pointer;
      
      &:hover {
        background-color: ${theme.backgrounds[2]};
      }
      

      &--head {
        background-color: ${theme.backgrounds[1]};
      }
    }
  }
`;

export default AppsPageStyles;