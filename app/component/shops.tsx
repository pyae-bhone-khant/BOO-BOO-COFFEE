import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Shop = {
    id: number;
    img: string;
    name: string;
    p: string;
    time: string;
    button: string;
};

const shops: Shop[] = [
    {
        id: 1,
        img: "/img/shop1.avif",
        name: "BOO BOO RESERVE",
        p: "Ground Flr, Myanmar Plaza, Gabar Aye Pagoda Road, Bahan, Yangon",
        time: "Mon – Sun: 9:00am – 10:30pm",
        button: "MORE DETAIL"
    },
    {
        id: 2,
        img: "/img/shop2.avif",
        name: "HOUSE OF BOO BOO",
        p: "118, Insein Main Road, Near Thukha Stop, Hlaing, Yangon",
        time: "Mon – Sun: 9:00am – 11:00pm",
        button: "MORE DETAIL"
    },
    {
        id: 3,
        img: "/img/shop3.jpg",
        name: "BOO BOO NEIGHBORHOOD",
        p: "166, San Chaung Street, Corner of Chan Thar St, San Chaung, Yangon",
        time: "Mon – Sun: 9:00am – 10:00pm",
        button: "MORE DETAIL"
    }, 
     {
        id: 3,
        img: "/img/photo/shop4.jpg",
         name: "BOO BOO CAFE",
        p: "283A, Byamazo Street, Waizayandar Main Road, South Okkalapa, Yangon",
        time: "Mon – Sun: 9:00am – 10:00pm",
        button: "MORE DETAIL"
    },
   
    
];

export default function Shops() {
    return (
        <div className="flex mt-30  mb-30 flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-extrabold mb-20">OUR SHOPS</h1>

            <div className="flex  w-auto h-auto justify-center items-center text-center gap-10">
                {shops.map((shop) => (
                    <div
                        key={shop.id}
                        className="flex flex-col text-[#6B4C3B] bg-[#F2E9E4] 
                 border border-[#6B4C3B] rounded-xl 
                  w-75 h-130 shadow-xl shadow-gray-500"
                    >                        
                            <img
                                src={shop.img}
                                alt={shop.name}
                               
                                className="w-full  object-cover rounded-t-xl h-50"
                            />
                      

                        {/* Content */}
                        <div className="flex h-100 flex-col items-center text-center   gap-5">
                            <h2 className=" mt-10 px-2 text-xl font-serif font-bold ">
                                {shop.name}
                            </h2>
                            <p className=" px-5 text-lg font-semibold leading-relaxed">
                                {shop.p}
                            </p>

                            <p className="   text-xl font-bold">
                                {shop.time}
                            </p>
                        </div>

                        {/* Button */}
                        <Link href="/" className="w-full">
                            <button
                                className="w-full cursor-pointer bg-[#6B4C3B] text-white 
                     py-4 text-lg font-bold 
                     hover:bg-[#5a3f31]  rounded-b-xl mb-0 transition"
                            >
                                {shop.button}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
