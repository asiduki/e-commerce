import { useEffect, useState } from "react";

function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const fetchCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateTotal(savedCart);
    };

    const calculateTotal = (cartItems) => {
        const sum = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(sum);
    };

    const handleRemove = (itemId) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        fetchCart();
    };

    const handleQuantityChange = (itemId, delta) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + delta;
                if (newQuantity < 1) return item;
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        fetchCart();
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="max-w-3xl mx-auto px-4 mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="space-y-4 mb-6">
                        {cart.map(item => (
                            <div key={item.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 flex items-center bg-white">
                                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain mr-4" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button 
                                            onClick={() => handleQuantityChange(item.id, -1)} 
                                            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md"
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            onClick={() => handleQuantityChange(item.id, 1)} 
                                            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md"
                                        >+</button>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="text-right font-bold text-xl">
                        Total: ${total.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
