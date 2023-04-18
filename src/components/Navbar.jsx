import { useState } from 'react'
import { ImMenu } from 'react-icons/im'
import { SiJusteat } from 'react-icons/si'
import { CgSearch } from 'react-icons/cg'
import { FaOpencart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { BsTruck } from 'react-icons/bs'
import {
  AiOutlineHeart,
  AiOutlineWallet,
  AiOutlineShareAlt,
} from 'react-icons/ai'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { FiHelpCircle } from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center p-4'>
      {/* left */}
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setNav(!nav)}>
          <ImMenu size={30} />
        </div>
        <h1 className='text-2xl font-display sm:text-3xl lg:text-4xl px-8'>
          Snab <span>Eats</span>{' '}
        </h1>
        <SiJusteat size={45} color='#2f847c' className='cursor-pointer mr-8' />
        <div className='hidden lg:flex items-center rounded-full p-1 bg-gray-200'>
          <p className='bg-[#2f847c] text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* search */}
      <div className='bg-white rounded-full flex items-center px-2 w-[150px] sm:w-[350px] lg:w-[450px]'>
        <CgSearch size={20} color='#2f847c' />
        <input
          className='bg-transparent p-2 focus:outline-none'
          type='text'
          placeholder='search food'
        />
      </div>
      {/* cart button */}
      <button className='bg-[#2f847c] text-white rounded-full hidden md:flex items-center'>
        <FaOpencart size={20} className='mr-2' />
        Cart
      </button>

      {/* mobile nav */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[250px] h-screen bg-[#f2f4f3] z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[250px] h-screen  bg-[#f2f4f3] z-10 duration-300'
        }
      >
        <CgClose
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
          onClick={() => setNav(!nav)}
        />
        <h2 className='text-2xl font-display font-semibold p-4'>Snab Eats</h2>
        <nav>
          <ul className='flex flex-col p-4 text-[#2f847c]'>
            <li className='text-xl py-4 flex'>
              <BsTruck size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <AiOutlineHeart size={25} className='mr-4' />
              Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <MdOutlineLocalOffer size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <AiOutlineWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <AiOutlineShareAlt size={25} className='mr-4' />
              Invite Friends
            </li>
            <li className='text-xl py-4 flex'>
              <FiHelpCircle size={25} className='mr-4' />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
