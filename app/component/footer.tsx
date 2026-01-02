import { Instagram, Facebook, Dribbble,  } from "lucide-react";


export default function Footer() {
    return (
       <div className="flex  flex-col justify-center  text-center">
        <h1 className="text-3xl font-bold" >CONTACT US</h1>
        <div>
             <div className="min-w-screen flex mt-15  flex-col justify-center items-center text-center h-100  bg-[#cfc3bb] ">
      <div className="flex justify-center items-center text-center gap-20 ">

        {/* Left – Locations */}
        <div className="space-y-10 text-white">
          <div>
            <h3 className="text-lg font-semibold">Booboo Reserve</h3>
            <p className="mt-3 text-black">09758434438</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Booboo Neighborhood</h3>
            <p className="mt-3 text-black">09797493390</p>
          </div>
        </div>

        {/* Middle – Locations */}
        <div className="space-y-10 text-white">
          <div>
            <h3 className="text-lg font-semibold">House Of Booboo</h3>
            <p className="mt-3 text-black">09781927728</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Booboo Cafe</h3>
            <p className="mt-3 text-black">09758434438</p>
          </div>
        </div>

        {/* Stay Connected */}
        <div>
            <h1 className=" text-3xl " >Stay Connected</h1>

        <div className="flex h-52 mt-19 flex-col items-center space-y-8">
            

          <div className="flex border border-black rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Name@Email.Com"
              className="w-45 placeholder:text-xl h-15 bg-white border border-[#6B4C3B]  outline-none"
            />
            <button className="px-3 border text-xl font-bold border-[#6B4C3B] bg-white  text-[#6B4C3B]">
              SUBSCRIBE NOW
            </button>
          </div>

          <div className="flex items-center gap-3 text-black font-semibold">
            <span className="text-xl">🌐</span>
            Info@We.Com.Mm
          </div>
        </div>

          
         
        </div>

        {/* Any Question */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl  text-black">
            Any Question
          </h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent placeholder-white placeholder:text-2xl text-white border-b border-white outline-none py-2"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b placeholder-white placeholder:text-2xl text-white border-white outline-none py-2"
          />

          <input
            type="text"
            placeholder="Message"
            className="w-full bg-transparent border-b placeholder-white placeholder:text-2xl text-white border-white outline-none py-2"
          />

          <button className="mt-2 px-15 py-4 text-2xl font-bold bg-white text-[#6B4C3B] border-2 border-[#6B4C3B] rounded-md shadow-md">
            SUBMIT
          </button>
        </div>

      </div>
       
       {/*  */}
      
       <div className="flex   gap-6 text-black">
  <Instagram size={29} className="   hover:text-white cursor-pointer hover:opacity-70" />
  <Facebook size={29} className=" hover:text-white cursor-pointer hover:opacity-70" />
  <Dribbble size={29} className=" hover:text-white cursor-pointer hover:opacity-70" />
</div>
    </div>
    {/*  */}

        </div>
       </div>
    )
}