import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Product {
    image: string;
    details: string;
    star: number;
    rating: string;
    price: string;
    discountPrice?: string;
    percentage?: string;
}

interface SingleProductProps {
    content: Product[];
}

const SingleProduct: React.FC<SingleProductProps> = ({ content }) => {
    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 px-10">
            {content.map((item, i) => (
                <div key={i}>
                    <img src={item.image} loading="lazy" alt={item.details} className="rounded-xl" />
                    <p>{item.details}</p>
                    <div className="flex items-center text-yellow-500">
                        {Array(item.star).fill(0).map((_, index) => (
                            <FaStar key={index} />
                        ))}
                        <FaStarHalf />
                        <p className='text-black text-sm'>  {item.rating}</p>
                    </div>
                    <p>
                        {item.price}{' '}
                        <span className="text-gray-400 line-through">
                            {item.discountPrice ? item.discountPrice : ''}
                        </span>{' '}
                        <span className="text-red-600 text-xs bg-red-200 rounded-full">
                            {item.percentage ? item.percentage : ''}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SingleProduct;
