import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div className="mt-30 mb-2 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl   font-mono">About Us</h1>
            <p className="mt-5 text-xl" >Our main Purpose is To Create A Lively Community Space for All pets 
                <br /> And pet{"'"}s in Myanmar. With The Concept Of Minimalism , <br />
                Simplicty And Craftsmanship, We Hope Booboo To Be The Source of <br />
                Positive Vibes. 
            </p>
            <Button className="mt-5 h-15 w-45 text-xl font-bold bg-[#6B4C3B] hover:bg-[#F2E9E4] hover:text-[#6B4C3B]  border-2 border-[#6B4C3B]">GO TO MENU</Button>
            
        </div>
    )
}