import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const handleSignup = async () => {
        try {
            await axios.post(`${API_URL}/auth/signup`, { 
                username: name, 
                password 
            });
            alert("Signup successful! Please login.");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button onClick={handleSignup} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition">
                Signup
            </button>
        </div>
    );
}

export default Signup;
