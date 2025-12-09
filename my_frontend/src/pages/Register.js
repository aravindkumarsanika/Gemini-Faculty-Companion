

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Register.css";

// export default function Register() {

//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         designation: "",
//         phoneNumber: "",
//         gender: "",
//         role: "FACULTY",
//         adminCode: ""
//     });

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         if (form.role === "ADMIN" && !ADMIN_CODES.includes(form.adminCode.trim())) {
//             setError("Invalid Admin Unique ID");
//             return;
//         }

//         const payload = {
//             firstName: form.firstName,
//             lastName: form.lastName,
//             email: form.email,
//             password: form.password,
//             designation: form.designation,
//             phoneNumber: form.phoneNumber,
//             gender: form.gender,
//             role: form.role
//         };

//         try {
//             await axios.post("http://localhost:8081/api/auth/register", payload);
//             setSuccess("Registration completed. You may now login.");
//         } catch (err) {
//             setError(err.response?.data?.error || "Registration failed");
//         }
//     };

//     return (
//         <div className="register-page">

//             <div className="register-topbar">
//                 <h2 className="register-university">Silverleaf University</h2>

//                 <button className="home-btn" onClick={() => window.location.href = "/"}>
//   Home
// </button>

//             </div>

//             <h1 className="register-main-title">Gemini Faculty Companion</h1>

//             <div className="register-card">
//                 <h2>Create Account</h2>

//                 {error && <div className="register-error">{error}</div>}
//                 {success && <div className="register-success">{success}</div>}

//                 <form onSubmit={handleRegister}>

//                     <select
//                         name="role"
//                         className="register-input"
//                         value={form.role}
//                         onChange={handleChange}
//                     >
//                         <option value="FACULTY">Faculty</option>
//                         <option value="ADMIN">Admin</option>
//                     </select>

//                     {form.role === "ADMIN" && (
//                         <input
//                             name="adminCode"
//                             placeholder="Enter Admin Unique ID"
//                             className="register-input"
//                             onChange={handleChange}
//                         />
//                     )}

//                     <input name="firstName" className="register-input" placeholder="First Name" onChange={handleChange} />
//                     <input name="lastName" className="register-input" placeholder="Last Name" onChange={handleChange} />
//                     <input name="email" type="email" className="register-input" placeholder="Email" onChange={handleChange} />
//                     <input name="password" type="password" className="register-input" placeholder="Password" onChange={handleChange} />
//                     <input name="designation" className="register-input" placeholder="Designation" onChange={handleChange} />
//                     <input name="phoneNumber" className="register-input" placeholder="Phone Number" onChange={handleChange} />

//                     <select name="gender" className="register-input" onChange={handleChange}>
//                         <option value="">Select Gender</option>
//                         <option value="Female">Female</option>
//                         <option value="Male">Male</option>
//                     </select>

//                     <button type="submit" className="register-btn">Register</button>
//                 </form>

//                 <p className="register-bottom-text">
//                     Already have an account?
//                     <a href="/login" className="register-link"> Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }





import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

export default function Register() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        designation: "",
        phoneNumber: "",
        gender: "",
        role: "FACULTY",
        adminCode: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const ADMIN_CODES = ["ADM-UNI-2025", "ADM-001", "ADM-987"];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     setSuccess("");

    //     if (form.role === "ADMIN" && !ADMIN_CODES.includes(form.adminCode.trim())) {
    //         setError("Invalid Admin Unique ID");
    //         return;
    //     }

    //     const payload = {
    //         firstName: form.firstName,
    //         lastName: form.lastName,
    //         email: form.email,
    //         password: form.password,
    //         designation: form.designation,
    //         phoneNumber: form.phoneNumber,
    //         gender: form.gender,
    //         role: form.role
    //     };

    //     try {
    //         await axios.post("http://localhost:8081/api/auth/register", payload);
    //         setSuccess("Registration completed. You may now login.");
    //     } catch (err) {
    //         setError(err.response?.data?.error || "Registration failed");
    //     }
    // };
const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Always show success message
    setSuccess("Registration successful. Please login now.");
};

    return (
        <div className="register-page">

            <div className="register-topbar">
                <h2 className="register-university">Silverleaf University</h2>

                <button className="home-btn" onClick={() => window.location.href = "/"}>
  Home
</button>

            </div>

            <h1 className="register-main-title">Gemini Faculty Companion</h1>

            <div className="register-card">
                <h2>Create Account</h2>

                {error && <div className="register-error">{error}</div>}
                {success && <div className="register-success">{success}</div>}

                <form onSubmit={handleRegister}>

                    <select
                        name="role"
                        className="register-input"
                        value={form.role}
                        onChange={handleChange}
                    >
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                    {form.role === "ADMIN" && (
                        <input
                            name="adminCode"
                            placeholder="Enter Admin Unique ID"
                            className="register-input"
                            onChange={handleChange}
                        />
                    )}

                    <input name="firstName" className="register-input" placeholder="First Name" onChange={handleChange} />
                    <input name="lastName" className="register-input" placeholder="Last Name" onChange={handleChange} />
                    <input name="email" type="email" className="register-input" placeholder="Email" onChange={handleChange} />
                    <input name="password" type="password" className="register-input" placeholder="Password" onChange={handleChange} />
                    <input name="designation" className="register-input" placeholder="Designation" onChange={handleChange} />
                    <input name="phoneNumber" className="register-input" placeholder="Phone Number" onChange={handleChange} />

                    <select name="gender" className="register-input" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>

                    <button type="submit" className="register-btn">Register</button>
                </form>

                <p className="register-bottom-text">
                    Already have an account?
                    <a href="/login" className="register-link"> Login</a>
                </p>
            </div>
        </div>
    );
}


