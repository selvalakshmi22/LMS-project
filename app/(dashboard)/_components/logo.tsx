import Image from "next/image";
export const Logo =( ) =>{
    return(
        <Image 
        height={80}
        width={90}
        alt="logo"
        src="/logolms.jpg"
        className="mt-[-30px]" 
        />

    )
}