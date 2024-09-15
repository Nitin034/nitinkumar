import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import Dropdown from './Dropdown';
 
const MotionLink = motion(Link);

const NavLink = ({ href, title, className = '' }) => {
  // const location = useLocation();
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300${router.pathname === href ? 'w-full' : 'w-0'} dark:bg-light`}
       
      >&nbsp;</span>
    </Link>
  );
};
const NavMobileLink = ({ href, title, className = '', toggle }) => {
  // const location = useLocation();
  const router = useRouter();

  const handleClick = () => {
    toggle();
     
  }

  return (
    <Link href={href} className={`${className} relative group my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300${router.pathname === href ? 'w-full' : 'w-0'} dark:bg-dark`}
       
      >&nbsp;</span>
    </Link>
  );
};




const Navbar = ({user , logout }) => {
  const [isOpen, setIsOpen] = useState(false);



  const handleClick = () => {
    setIsOpen(!isOpen)

  }
  return (
    <header className='w-full pl-24 pr-4 py-4 lg:pl-8  z-10 font-medium flex items-center justify-between dark:text-light relative'>

   <button className='hidden lg:flex flex-col justify-center items-center' onClick={handleClick}>
    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
   </button>
    
    <nav className='flex justify-center items-center'>
    <div> 
    <MotionLink href='/' className=" flex font-sasti text-3xl font-bold dark:text-primaryback " 
    whileHover={{ scale: 1.2 }} >Nitin.nsw</MotionLink> 
    </div>
    </nav>
    <div className='lg:w-full flex justify-between items-center lg:hidden'> 
    <nav className='flex items-center justify-center'> 
        <NavLink className='mx-4' href="/" title="HOME"/>
        <NavLink className='mx-4' href="/About" title="ABOUT"/>
        <NavLink className='mx-4' href="/Projects" title="PROJECT"/>
        <NavLink className='mx-4' href="/Services" title="SERVICES"/>
        <NavLink className='mx-4' href="/TextMe" title="TEXT ME"/>
        </nav> 
        </div>

      {
        isOpen ?

        <motion.div 
        initial={{scale:0, opacity:0, x: "-50%" , y: "-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 text-light dark:bg-light/75 dark:text-dark rounded-lg backdrop:blur-md py-32'> 
    <nav className='flex flex-col items-center justify-center'> 
        <NavMobileLink className='mx-4' href="/" title="HOME" toggle={handleClick}/>
        <NavMobileLink className='mx-4' href="/About" title="ABOUT" toggle={handleClick}/>
        <NavMobileLink className='mx-4' href="/Projects" title="PROJECT" toggle={handleClick}/>
        <NavMobileLink className='mx-4' href="/Services" title="SERVICES" toggle={handleClick}/>
        <NavMobileLink className='mx-4' href="/TextMe" title="TEXT ME" toggle={handleClick}/>
        
        </nav> 
        </motion.div>
        : null
      }
      {/* <div>
        {user.value && <FaUserCircle className="text-light text-lg"/>}
       {!user.value && <Link href={'/Login'}>
        Login 
       </Link>}
      </div> */}
    <Dropdown user={user} logout={logout}/>
    </header>
  )
}

export default Navbar
