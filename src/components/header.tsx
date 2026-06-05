import Image from "next/image";
export default function Header() {
  return <>
    <div className="bg-[#fefaf0] flex grid grid-cols-3 p-4 w-full h-16">
        <p className=" pl-9 font-bold font-serif text-xl text-[#43422e]">Menu</p>
        <Image className="mx-auto justify-center -translate-y-2" src="/log.png" alt="Logo" width={70} height={70} />
    
      <div className=" flex justify-end mt-1">
        <p className="text-[#43422e] mr-9">About Us</p>
        <p className="text-[#43422e] mr-9">Login</p>
      </div>
    </div>


  </>
}