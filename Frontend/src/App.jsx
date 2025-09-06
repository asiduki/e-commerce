import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto mt-6">
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
