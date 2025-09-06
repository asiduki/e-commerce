import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 shadow-md text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold cursor-pointer">ShopEase</div>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/cart" className="hover:underline">Cart</Link>
                    {token ? (
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md transition">Logout</button>
                    ) : (
                        <>
                            <Link to="/login" className="hover:underline">Login</Link>
                            <Link to="/signup" className="hover:underline">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
