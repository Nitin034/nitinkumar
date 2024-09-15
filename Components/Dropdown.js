import { Fragment } from 'react'
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { AiFillCaretDown , AiFillCaretUp } from "react-icons/ai";
import useDarkMode from '../Components/hooks/useDarkMode';
import Link from 'next/link';
import Image from 'next/image';

function classNames(...classes) {
 return classes.filter(Boolean).join(' ')
}

export default function Dropdown ({user, logout}) {

 const[mode, setMode] = useDarkMode();
   

 const [isOpen, setIsOpen] = useState(false)

 return (
   <Menu as="div" className="relative inline-block text-left">
     <div>
       <Menu.Button onClick={() => setIsOpen((prev) => !prev)} className="inline-flex w-full justify-center items-center  gap-x-1.5 rounded-md bg-light dark:bg-dark dark:text-light px-5 py-2 text-sm font-semibold text-dark  hover:bg-light/70">
        
       {user.value &&  <Image className='rounded-full w-10' src='/Images/images.jpg' alt='login img' width={100} height={100}/>} 
       {!user.value && <Link href={'/Login'}>
        Login 
       </Link>}
       
       {!isOpen ? ( 
        <AiFillCaretDown  className="-mr-1 h-5 w-5 text-dark dark:text-light lg:hidden" aria-hidden="true"/>
        ): (
           <AiFillCaretUp  className="-mr-1 h-5 w-5 text-dark dark:text-light lg:hidden" aria-hidden="true"/>
        )}
         
       </Menu.Button>
     </div>

     <Transition
       as={Fragment}
       enter="transition ease-out duration-100"
       enterFrom="transform opacity-0 scale-95"
       enterTo="transform opacity-100 scale-100"
       leave="transition ease-in duration-75"
       leaveFrom="transform opacity-100 scale-100"
       leaveTo="transform opacity-0 scale-95"
     >
       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-dark dark:divide-light rounded-md bg-light dark:bg-dark shadow-lg ring-1 ring-dark dark:ring-light ring-opacity-5 focus:outline-none">
         <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <Link
                href='/EditProfile'
                 className={classNames(
                   active ?   'bg-primary text-light' : 'dark:text-primaryDark',
                   'block px-4 py-2 text-sm font-bold '
                 )}
               >
                 Edit Profile
               </Link>
             )}
           </Menu.Item>
           </div>
           <div className="py-1">
           <Menu.Item>
             {({ active }) => (
              <Menu.Button
                 onClick={() => setMode(mode === "light" ? "dark": "light")}
                 className={classNames(
                   active ? ' bg-primary text-light' : 'dark:text-primaryDark',
                   'block px-4 py-2 text-sm font-bold'
                 )}
               >
                       {!isOpen ? ( 
                       <a> Dark Mode</a>
                      ): (
                        <a>Light Mode</a>
                      )}
  
                 </Menu.Button>
               
             )}
           </Menu.Item> 
           <Menu.Item>
             {({ active }) => (
               <Link
                href="/Gallery"
                 className={classNames(
                   active ? ' bg-primary text-light' : 'dark:text-primaryDark',
                   'block px-4 py-2 text-sm font-bold'
                 )}
               >
                 Gallary
               </Link>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <button
                
                 className={classNames(
                   active ?  ' bg-primary text-light' : 'dark:text-primaryDark',
                   'block px-4 py-2 text-sm font-bold'
                 )}
               >
                  {user.value &&  <Link href={'/Resume'}>Resume</Link>} 
                 {!user.value && <Link href={'/Login'}>Resume </Link>}
               </button>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
              <button
                
                className={classNames(
                  active ?  ' bg-primary text-light' : 'dark:text-primaryDark',
                  'block px-4 py-2 text-sm font-bold'
                )}
              >
                 {user.value &&  <Link href={'/Contect'}>Contect </Link>} 
                {!user.value && <Link href={'/Login'}>Contect </Link>}
              </button>
            
             )}
           </Menu.Item>
         </div>
         <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <a
                onClick={logout}
                 className={classNames(
                   active ? 'bg-primary text-light' : 'dark:text-primaryDark',
                   'flex items-center justify-center px-4 py-2 text-sm font-bold'
                 )}
               >
                 LogOut
               </a>
             )}
           </Menu.Item>
         </div>
       </Menu.Items>
     </Transition>
   </Menu>
 )
}