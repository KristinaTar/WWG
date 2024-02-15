import React from 'react';
import { login } from "../../api/api";
const Login: React.FC = () => {
  return (
    <div>
      Login
      <button
        onClick={() => {
          login('user', 'user321654');
        }}
      >Login</button>
    </div>
  );
}

export default Login;