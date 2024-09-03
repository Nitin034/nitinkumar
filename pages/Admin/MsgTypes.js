import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { BsReply } from 'react-icons/bs';



const DocMsg = ({ el }) => {
  return(
    <div> 
    {el.incoming ? <div className="flex w-full mt-2 space-x-3 max-w-xs">
   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light">
   <Image className='rounded-full w-10' src='/Images/IMG_8246.JPG' alt='login img' width={100} height={100}/>
   </div>
   <div>
     <div className="bg-primaryback/70 text-dark p-3 flex text-lg font-bold  rounded-lg  ">
     <AiOutlineDownload className="text-3xl hover:bg-light p-1 "  />
     <p className="text-lg font-bold mx-3 ">Resume </p>
     </div>
      
     <span className="text-xs text-primaryDark leading-none">2 min ago</span>
   </div>
 </div>: 	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
       <div>
         <div className="bg-primaryDark text-dark p-3  ">
         <div className="bg-primaryback/70 text-dark p-3 flex text-lg font-bold  rounded-lg  ">
     <AiOutlineDownload className="text-3xl hover:bg-light p-1 "  />
     <p className="text-lg font-bold mx-3 ">Resume </p>
     </div>
</div>
    <div className="border border-primaryDark px-1 py-2">
     <p className="text-xs ">Nitin.nsw</p>
     <Link href="/"  className="text-xs text-primaryDark hover:bg-light/40 ">12nitinkumaryd@gmail.com</Link>

         </div>
         <span className="text-xs text-primaryDark leading-none">Seen</span>
       </div>
       {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light"><Image className='rounded-full w-10' src='/Images/Images.jpg' alt='login img'/></div> */}
     </div>}
     </div>
  )
}

const LinkMsg = ({ el }) => {
  return (
    <div> 
    {el.incoming ? <div className="flex w-full mt-2 space-x-3 max-w-xs">
   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light">
   <Image className='rounded-full w-10' src='/Images/IMG_8246.JPG' alt='login img' width={100} height={100}/>
   </div>
   <div>
     <div className="bg-primaryback/70 text-dark p-3  ">
     <Image className="h-24 rounded-md" src={el.preview} alt={el.message} width={100} height={100}/>   
     </div>
    <div className="border border-primaryDark px-1 py-2">
     <p className="text-xs ">Nitin.nsw</p>
     <Link href='/' className="text-xs text-primaryDark hover:bg-light/30 ">12nitinkumaryd@gmail.com</Link>
     </div> 
      
     <span className="text-xs text-primaryDark leading-none">2 min ago</span>
   </div>
 </div>: 	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
       <div>
         <div className="bg-primaryDark text-dark p-3  ">
         <Image className="h-24 rounded-md" src={el.preview} alt={el.message} width={100} height={100}/>
</div>
    <div className="border border-primaryDark px-1 py-2">
     <p className="text-xs ">Nitn.nsw</p>
     <Link href="/"  className="text-xs text-primaryDark hover:bg-light/40 ">12nitinkumaryd@gmail.com</Link>

         </div>
         <span className="text-xs text-primaryDark leading-none">Seen</span>
       </div>
       {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light"><Image className='rounded-full w-10' src='/Images/Images.jpg' alt='login img'/></div> */}
     </div>}
     </div>

  )
}

const ReplyMsg = ({ el }) => {
  return (
    <div>
    {el.incoming ? <div className="flex w-full mt-2 space-x-3 max-w-xs">
   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light">
   <Image className='rounded-full w-10' src='/Images/IMG_8246.JPG' alt='login img' width={100} height={100}/>
   </div>
   <div>
    
     <div className="bg-primaryback text-dark p-3 rounded-r-lg rounded-bl-lg">
       <p className="text-sm mb-2">{el.message}</p>
       <p className="text-sm px-2 py-1 bg-dark/70 rounded-tl-xl text-light"><BsReply className="text-light"/>{el.reply}</p>
     </div>
     <span className="text-xs text-primaryDark leading-none">2 min ago</span>
   </div>
   
 </div>: 	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
       <div>
         <div className="bg-primaryDark text-dark p-3 rounded-l-lg rounded-br-lg">
           <p className="text-sm mb-2">{el.message}</p>
           <p className="text-sm px-2 py-1 bg-dark/70 rounded-tl-xl text-light">{el.reply}</p>
         </div>
         <span className="text-xs text-primaryDark leading-none">Seen</span>
       </div>
       {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light"><Image className='rounded-full w-10' src='/Images/Images.jpg' alt='login img'/></div> */}
     </div>}




 </div>
  )
}

const MediaMsg = ({ el }) => {
  return (
    <div> 
    {el.incoming ? <div className="flex w-full mt-2 space-x-3 max-w-xs">
   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light">
   <Image className='rounded-full w-10' src='/Images/IMG_8246.JPG' alt='login img' width={100} height={100}/>
   </div>
   <div>
     <div className="bg-primaryback text-dark p-3 rounded-r-lg rounded-bl-lg">
        <Image className="h-24 rounded-md" src={el.img} alt={el.message} width={100} height={100}/>
     </div>
     <span className="text-xs text-primaryDark leading-none">2 min ago</span>
   </div>
 </div>: 	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
       <div>
         <div className="bg-primaryDark text-dark p-3 rounded-l-lg rounded-br-lg">
         <Image className="h-24 rounded-md" src={el.img} alt={el.message} width={100} height={100}/>
         </div>
         <span className="text-xs text-primaryDark leading-none">Seen</span>
       </div>
       {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light"><Image className='rounded-full w-10' src='/Images/Images.jpg' alt='login img'/></div> */}
     </div>}




 </div>
  )
}


const TextMsg = ({ el }) => {
  return (
    <div> 
     {el.incoming ? <div className="flex w-full mt-2 space-x-3 max-w-xs">
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light">
    <Image className='rounded-full w-10' src='/Images/IMG_8246.JPG' alt='login img' width={100} height={100}/>
    </div>
    <div>
      <div className="bg-primaryback text-dark p-3 rounded-r-lg rounded-bl-lg">
        <p className="text-sm">{el.message}</p>
      </div>
      <span className="text-xs text-primaryDark leading-none">2 min ago</span>
    </div>
  </div>: 	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-primaryDark text-dark p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">{el.message}</p>
					</div>
					<span className="text-xs text-primaryDark leading-none">Seen</span>
				</div>
				{/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-light"><Image className='rounded-full w-10' src='/Images/Images.jpg' alt='login img'/></div> */}
			</div>}




  </div>
   
  );
};

const Timeline = ({ el }) => {
  return (
    <div className="flex items-center justify-between">
      <hr className="w-44 justify-start" />
      <div variant="caption" className="dark:text-light/30 text-dark/30 flex px-4">
        {el.text}
      </div>
      <hr className="w-44 justify-end" />
    </div>
  );
};

export { Timeline, TextMsg , MediaMsg, ReplyMsg, LinkMsg, DocMsg };
