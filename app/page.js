import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className ="bg-blue-100 ">
   <section className ="p-20 w-screen h-screen grid grid-cols-2 h-[50vh] ">
    <div className= "flex flex-col gap-4 items-center justify-center">
      <p className ="text-4xl font-bold ">
        The best URL shortner on the web 

      </p>
      <p className=" text-2xl px-5 py-6">
        We are the most staright forward and easy to use URL shortner in the world  
        Simplify your links with the fastest, most user-friendly URL shortener. 
        Instantly create clean, trackable, and easy-to-share links—<b>no sign-up needed. </b>
        Perfect for everyone, from casual users to marketing pros. Just paste, shorten, and go....
      </p> 
      <div className ='flex gap-3  justify-center py-6 '>
            <Link href ="/shorten"><button className ='bg-blue-600 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>
                Try Now
            </button>
            </Link>
            <Link href ="/github"><button className ='bg-blue-600 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>
                Github 
            </button> </Link>
        </div>
    </div>
    <div className= " flex relative w-[700px] h-[600px]">
    <Image className ="mix-blend-darken"alt ="an image of a vector " src ={"/vector11.jpg"} fill={true}></Image>
    </div>
   

    
   </section>
   
   </main>
  );
}
