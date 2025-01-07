import Link from 'next/link'
import React from 'react'

export default function Header (){
  return (
      <header className="text-gray-600 fixed w-full bg-[#363b56] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-gray-100">FD-Blog</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-gray-100 text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-[#090c1b] capitalize">home</Link>
      <Link href={"/about"} className="mr-5 hover:text-[#090c1b] capitalize">about</Link>
      <Link href= {'/blog'} className="mr-5 hover:text-[#090c1b] capitalize">blog</Link>
      <Link href={"/contact"} className="mr-5 hover:text-[#090c1b] capitalize">contact</Link>
    </nav>
  </div>
</header>
  )
}




