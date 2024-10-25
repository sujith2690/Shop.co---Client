const Banner = () => {
    const customers = [
        {
            text: '200+',
            content: 'International Brands'
        },
        {
            text: '2000+',
            content: 'High-Quality Products'
        },
        {
            text: '30,000+',
            content: 'Happy Customers'
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="p-4 md:p-8 flex flex-col justify-center items-start md:w-1/2">
                    <div className="px-4 md:px-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold  p-3">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="text-slate-500 mt-4 text-sm md:text-base lg:text-lg">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <div className="mt-5">
                            <button className="py-3 md:py-4 lg:py-5 px-8 md:px-10 lg:px-16 rounded-full bg-black text-white transition-transform transform hover:scale-105">
                                Shop Now
                            </button>
                        </div>
                        <div className="flex justify-between items-center mt-6 gap-4 md:gap-8">
                            {customers.map((item, i) => (
                                <div key={i} className="flex gap-2 items-center">
                                    <div>
                                        <p className="text-2xl md:text-3xl lg:text-[40px] font-semibold">{item.text}</p>
                                        <p className="text-xs md:text-sm">{item.content}</p>
                                    </div>
                                    {i < customers.length - 1 && (
                                        <div className="w-[1px] md:w-[2px] h-10 md:h-12 bg-slate-200"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        className="w-full h-auto object-cover"
                        src="/banner-1.png"
                        alt="Fashion Banner"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="bg-black flex items-center justify-center text-white py-6 md:py-8">
                <div className="flex items-center justify-between gap-8 md:gap-14">
                    <img src="/zara.png" alt="Zara" className="w-20 md:w-24 lg:w-28" loading="lazy" />
                    <img src="/gucci.png" alt="Gucci" className="w-20 md:w-24 lg:w-28" loading="lazy" />
                    <img src="/prada.png" alt="Prada" className="w-20 md:w-24 lg:w-28" loading="lazy" />
                </div>
            </div>
        </>
    );
}

export default Banner;
