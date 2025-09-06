import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            alert("Login successful");
            navigate('/');
        } catch {
            alert("Login failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
            <input placeholder="Username" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition">Login</button>
        </div>
    );
}

export default Login;
