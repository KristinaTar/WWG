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
  }

`;
