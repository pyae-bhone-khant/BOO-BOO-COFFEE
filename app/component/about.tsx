import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function About() {
    return (
        <div className="mt-30 mb-2 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl   font-bold">About Us</h1>
            <p className="mt-5 text-xl" >Our main Purpose is To Create A Lively Community Space for All pets
                <br /> And pet{"'"}s in Myanmar. With The Concept Of Minimalism , <br />
                Simplicty And Craftsmanship, We Hope Booboo To Be The Source of <br />
                Positive Vibes.
            </p>
            <Button className="mt-5 h-15 w-45 text-xl font-bold bg-[#6B4C3B] hover:bg-[#F2E9E4] hover:text-[#6B4C3B]  border-2 border-[#6B4C3B]">GO TO MENU</Button>
            <div className="relative flex justify-center w-300 h-auto mt-19">
                <Image width={1300} height={500}
                
                    src="/img/photo/photo1.avif"
                    className="  rounded-2xl "
                    alt=""
                />
                {/* <p> <span>THE MNA GUIDE</span> My pet stores and Booboo Cafes & Restuarants</p>
                <button className="absolute bottom-56 left-1/4 transform -translate-x-1/2 w-65 h-15 border-2 border-[#6B4C3B] text-2xl font-bold   bg-white text-[#6B4C3B] px-4 py-2 rounded">
                    READ OUR STORY
                </button> */}
            </div>
            {/* How we do it  */}
            <div className="w-300 flex  justify-between mt-30  text-center">
                <div className="mt-25 ml-20">

                <h1 className="text-4xl font-bold mb-10 mt-10">THIS IS HOW WE DO IT </h1>     
                <p className="text-2xl line-hiegh-2  ">
                    We Create Every Drink With Love. Booboo Coffee
                    <br />Is Brewed From The 100% Arabica Coffee Beans
                    <br /> Of The Highest Quality Being Roasted To 
                     <br /> Achieve The Greatest Authentic Taste. For Each
                     <br /> And Every Booboo Drinks, We Have Designed
                     <br /> Every Drink To Satisfy Your Cravings. You Can 
                     <br />Forget All Your Life Troubles By Escaping Into 
                     <br />Another World With Our Comfort Food And 
                     <br />Desserts.
                </p>
                </div>
                <Image width={450} height={200} className="rounded-tl-full  " src="/img/photo/photo2.avif" alt="dd" />
                

                
            </div>

        </div>
    )
}