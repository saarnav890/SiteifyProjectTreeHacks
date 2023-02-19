import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-yellow-50 fixed w-full z-10 ">
        <div className=" flex flex-row font-f font-semibold w-full text-lg">
        
        <div className="m-4 text-green-900 flex-1 text-2xl"> 
        
        <Link href={'/'}>
        Siteify
        </Link>
        
        
         </div>
        
        
        


        <div className="m-4 flex-1  flex flex-row justify-end">
            <div className="flex justify-end text-green-900 gap-10 mr-4">
                <div>
                    About
                </div>
                <div>
                    FAQ
                </div>
                <div>
                    Contact
                </div>
            </div>
            
        </div>
    
        

</div>         
    </div>
    )
}