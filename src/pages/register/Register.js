import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Cezzy Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            assumenda ab odit neque. Cupiditate provident ducimus reiciendis
            commodi numquam cum, temporibus architecto earum ea, omnis corrupti
            amet deleniti, nesciunt quo?
          </p>
          <span>Don't you have an account?</span>
         <Link to={"/login"}> <button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
