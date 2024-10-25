import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="bg-white shadow-sm">
            <div className="flex items-center justify-between w-full p-4 px-6 md:px-10">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                </div>

                <div className="hidden md:flex items-center justify-between gap-6 md:w-1/2 whitespace-nowrap">
                    <div className="flex gap-4 md:gap-6 items-center">
                        <p className="cursor-pointer hover:text-gray-500 transition">Shop</p>
                        <p className="cursor-pointer hover:text-gray-500 transition">On Sale</p>
                        <p className="cursor-pointer hover:text-gray-500 transition">New Arrival</p>
                        <p className="cursor-pointer hover:text-gray-500 transition">Brand</p>
                    </div>

                    <div className="flex items-center gap-3 rounded-full bg-gray-100 px-3 w-full">
                        <span className="p-2 text-slate-600"><CiSearch size={20} /></span>
                        <input
                            type="text"
                            className="w-full text-base rounded-full bg-transparent focus:outline-none"
                            placeholder="Search..."
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="cursor-pointer"><FiShoppingCart size={24} /></p>
                        <p className="cursor-pointer"><FaRegUserCircle size={24} /></p>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-start bg-gray-100 w-full py-4 px-6 space-y-4 md:hidden">
                    <p className="cursor-pointer hover:text-gray-500 transition">Shop</p>
                    <p className="cursor-pointer hover:text-gray-500 transition">On Sale</p>
                    <p className="cursor-pointer hover:text-gray-500 transition">New Arrival</p>
                    <p className="cursor-pointer hover:text-gray-500 transition">Brand</p>

                    <div className="flex items-center gap-3 w-full rounded-full bg-gray-300 px-3">
                        <span className="p-2 text-slate-600"><CiSearch size={24} /></span>
                        <input
                            type="text"
                            className="w-full text-base rounded-full bg-transparent focus:outline-none"
                            placeholder="Search..."
                        />
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <p className="cursor-pointer"><FiShoppingCart size={26} /></p>
                        <p className="cursor-pointer"><FaRegUserCircle size={26} /></p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbar;
