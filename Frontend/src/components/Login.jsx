import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, { username, password });
            localStorage.setItem("token", res.data.token);
            alert("Login successful!");
            navigate("/"); // Redirect to home or product list
        } catch (error) {
            alert(error.response?.data?.message || "Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button 
                onClick={handleLogin} 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition"
            >
                Login
            </button>
        </div>
    );
}

export default Login;
