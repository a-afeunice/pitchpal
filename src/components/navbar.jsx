import React from 'react'
import { Link } from 'react-scroll'

import { ArrowBigDown, ChevronDown } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='bg-white shadow-md w-full fixed h-14  place-content-center '>
      <div className='flex justify-between '>
        <div className='flex ml-12'>
          <h1 className='text-xl font-semibold'>PitchPal</h1>
          <p className='text-xl font-[1000] text-green-700'>.</p>
        </div>
        <div className='flex space-x-6 mr-8'> 
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          <Link activeClass="active" to="pitches" spy={true} smooth={true} offset={-70} duration={500}>Pitches</Link>
          <Link activeClass="active" to="resources" spy={true} smooth={true} offset={-70} duration={500}>Resources</Link>
          <Link activeClass="active" to="programs" spy={true} smooth={true} offset={-70} duration={500}>Programs</Link>
        <Link to='/login'>Login 
        <ChevronDown className='inline-flex'/></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar