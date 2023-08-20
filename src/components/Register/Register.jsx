/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure the passwords match.",
      });
      return;
    }

    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const popupContent = `
    <div>
      <p>Registration Successful! You can now <a href="/admin" id="login-link">login</a>.</p>
    </div>
  `;

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        html: popupContent,
        showConfirmButton: false,
        didOpen: () => {
          const loginLink = document.getElementById("login-link");
          if (loginLink) {
            loginLink.addEventListener("click", () => {
              Swal.close();
            });
          }
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "An error occurred during registration. Please try again.",
      });
    }
  };

  return (
    <div className="register-container small-container">
      <h1>Register</h1>
      <p>Masih beta ya kawan mohon bersabar untuk kelanjutan tampilan 😊</p>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
      Already have an account?{" "}
      <Link to="/admin">Login here</Link>
    </p>
    </div>
  );
};

export default RegisterPage;
