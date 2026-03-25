import { useState } from "react";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";

type ErrorProps = {
    email?: string;
    password?: string;
    confirmPassword?: string;
};
export default function Form() {
// Form State
const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
}); // Form data
const [errors, setErrors] = useState({} as ErrorProps); // Validation errors
// Handle Input Change
const handlechange = (field: string, value: string) => {
    setForm({ ...form, [field]: value }); // Destructure the form state and update the specific field
};
// Validation
const validate = () => {
    const newErrors: ErrorProps = {};
 if (!form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 chars";
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };
    //Render
const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    alert(isLogin ? "Logged in ✅" : "Registered 🎉");
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        {isLogin ? "Login" : "Register"}
      </h2>

      {/* Email */}
      <InputField
        label="Email"
        value={form.email}
        onChange={(e) => handlechange("email", e.target.value)}
      />
      <ErrorMessage message={errors.email} />

      {/* Password */}
      <InputField
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => handlechange("password", e.target.value)}
      />
      <ErrorMessage message={errors.password} />

      {/* Confirm Password (only register) */}
      {!isLogin && (
        <>
          <InputField
            label="Confirm Password"
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              handlechange("confirmPassword", e.target.value)
            }
          />
          <ErrorMessage message={errors.confirmPassword} />
        </>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#4f46e5",
          color: "white",
          cursor: "pointer",
        }}
      >
        {isLogin ? "Login" : "Register"}
      </button>

      {/* Switch */}
      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{
          marginTop: "15px",
          textAlign: "center",
          cursor: "pointer",
          color: "#4f46e5",
        }}
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}
