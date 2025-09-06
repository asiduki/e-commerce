import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { username, password });
            alert("Signup successful");
            navigate('/login');
        } catch {
            alert("Signup failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
            <input placeholder="Username" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-indigo-400 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition">Sign Up</button>
        </div>
    );
}

export default Signup;
