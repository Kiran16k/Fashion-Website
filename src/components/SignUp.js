import React from "react";
const SignUp = () => {
  return (
    <div className="signup-container">
      <h1 className="uppercase">Don't miss a sale </h1>
      <h2 className="uppercase">Sign up for our newsletter</h2>
      <form>
        <input type="email" placeholder="Your Email(Required)" />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
