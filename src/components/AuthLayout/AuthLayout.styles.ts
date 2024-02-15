import styled from 'styled-components';

const AuthLayoutStyles = styled('div')`
    display: flex;
    justify-content: space-between;

    .form_container {
        justify-content: center;
        align-items: center;

    }

    .img {
        width: 780px;
        height: 100vh;
        object-fit: cover;
    }
`;

export default AuthLayoutStyles;