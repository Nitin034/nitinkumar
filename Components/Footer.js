import React from 'react'
import Layout from './Layout'
import  Link  from  'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:-6'>
           <span>{new Date().getFullYear()} &copy; All Rights Reserved</span> 
           <div className='flex items-center lg:py-2'> Build With <span className='text-primary text-2xl px-1'>&#9825;</span> 
           by&nbsp;<Link href="/" className='hover:underline'>Nitin yadav</Link>
           </div>
           <Link className='hover:underline' target={"_blank"} href="/"><Image src='/Images/n.png' width={100} height={80} alt='logo' className='w-10 h-12'
                /></Link>
        </Layout>
    </footer>
  )
}

export default Footer
