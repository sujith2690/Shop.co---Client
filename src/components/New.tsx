import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import SingleProduct from "./singleProduct";

const New = () => {
    const content = [
        {
            image: '/new/first.png',
            star: 4,
            rating: '4.5/5',
            price: "$120",
            details: 'T-SHIRT WITH TAPE DETAILS'
        },
        {
            image: '/new/second.png',
            star: 3,
            rating: '3.5/5',
            price: '$260',
            discountPrice: '$240',
            percentage: '-20%',
            details: 'SKINNY FIT JEANS'
        },
        {
            image: '/new/third.png',
            star: 4,
            rating: '4.5/5',
            price: '$120',
            details: 'CHECKERED SHIRT'
        },
        {
            image: '/new/fourth.png',
            star: 4,
            rating: '4.5/5',
            price: '$160',
            discountPrice: '$130',
            percentage: '-30%',
            details: 'SLEEVE STRIPED T-SHIRT'
        },

    ]
    const content2 = [
        {
            image: '/top/top1.png',
            star: 4,
            rating: '4.5/5',
            price: "$212",
            details: 'VERTICAL STRIPED SHIRT'
        },
        {
            image: '/top/top2.png',
            star: 4,
            rating: '4.0/5',
            price: '$260',
            discountPrice: '$240',
            percentage: '-20%',
            details: 'COURAGE GRAPHIC T-SHIRT'
        },
        {
            image: '/top/top3.png',
            star: 3,
            rating: '3.0/5',
            price: '$120',
            details: 'LOOSE FIT BERMUDA SHORTS'
        },
        {
            image: '/top/top4.png',
            star: 4,
            rating: '4.5/5',
            price: '$160',
            discountPrice: '$130',
            percentage: '-30%',
            details: 'FADED SKINNY JEANS'
        },

    ]
    return (
        <div >
            <div className="flex items-center justify-center text-4xl font-extrabold p-5">
                <h1>NEW ARRIVALS</h1>
            </div>
            <div className="flex items-center justify-center">
                <SingleProduct content={content} />
            </div>
            <div className="flex items-center justify-center mt-5">
                <button className="p-4 px-20 border rounded-full">View All</button>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="flex items-center justify-center text-4xl font-extrabold p-5 mt-10">
                <h1>TOP ARRIVALS</h1>
            </div>
            <div className="flex items-center justify-center">
                <SingleProduct content={content2} />
            </div>
            <div className="flex items-center justify-center mt-5">
                <button className="p-4 px-20 border rounded-full">View All</button>
            </div>
            <hr className="mt-5 mb-5" />
        </div>
    )
}

export default New