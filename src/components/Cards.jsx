import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 font-display'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute h-full bg-cyan-800/40 rounded-xl text-white tracking-widest'>
          <p className='mt-10 font-semibold text-xl px-2 pt-4 bg-black/30'>
            Free Delivery
          </p>
        </div>
        <button className='bg-[#2f847c] text-white mx-2 absolute right-4 bottom-4'>
          Order Now
        </button>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute h-full bg-cyan-800/40 rounded-xl text-white tracking-widest'>
          <p className='mt-20 font-semibold text-xl px-2 pt-4 bg-black/30'>
            New Restaurants
          </p>
        </div>
        <button className='bg-[#2f847c] text-white mx-2 absolute right-4 bottom-4'>
          Order Now
        </button>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute h-full bg-cyan-800/40 rounded-xl text-white tracking-widest'>
          <p className='mt-20 font-semibold text-xl px-2 pt-4 bg-black/30'>
            Deals
          </p>
        </div>
        <button className='bg-[#2f847c] text-white mx-2 absolute right-4 bottom-4'>
          Order Now
        </button>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  )
}

export default Cards
