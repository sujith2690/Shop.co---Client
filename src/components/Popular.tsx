const Popular = () => {
    const popularImages = [
        {
            name: 'Pants',
            image: '/popular/popular2.png',
            details: '200 Products'
        },
        {
            name: 'Coat',
            image: '/popular/popular3.png',
            details: '520 Products'

        },
        {
            name: 'Shirt',
            image: '/popular/popular4.png',
            details: '320 Products'
        },
        {
            name: 'Jacket',
            image: '/popular/popular56.png',
            details: '103 Products'
        },
    ]
    return (
        <div className="p-5 flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center p-5">
                <div className="w-full relative group">
                    <img src="/popular/popular1.png" alt="popular1" className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 left-0 flex w-full justify-between opacity-0 group-hover:opacity-75 transition-opacity bg-gray-900 bg-opacity-100 text-white p-2 ">
                        <span className="text-lg">Manto</span>
                        <span className="text-lg">86 Products</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
                    {
                        popularImages.map((item, i) => (
                            <div className="relative group" key={i}>
                                <img src={item.image} alt={item.image} className="object-cover w-full h-full" />
                                <div className="absolute bottom-0 left-0 flex w-full justify-between opacity-0 group-hover:opacity-75 transition-opacity bg-gray-900 bg-opacity-100 text-white p-2">
                                    <span className="text-sm md:text-lg">{item.name}</span>
                                    <span className="text-sm md:text-lg">{item.details}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Popular;
