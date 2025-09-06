import { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const fetchItems = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setItems(res.data);
    };

    useEffect(() => {
        fetchItems();
        loadCart();
    }, []);

    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart.map(item => item.id));
    };

    const handleAddToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(i => i.id === item.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ id: item.id, title: item.title, price: item.price, image: item.image, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart.map(i => i.id));
    };

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="px-4">
            <div className="flex justify-center my-6">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="p-3 border rounded-md w-1/2 focus:ring-2 focus:ring-indigo-400 outline-none" 
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between">
                        <img src={item.image} alt={item.title} className="h-40 object-contain mb-4" />
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                        <p className="text-gray-500 mb-4 text-sm">{item.category}</p>
                        <button 
                            onClick={() => handleAddToCart(item)} 
                            className={`py-2 rounded-md transition ${
                                cartItems.includes(item.id)
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            }`}
                        >
                            {cartItems.includes(item.id) ? "Added" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
