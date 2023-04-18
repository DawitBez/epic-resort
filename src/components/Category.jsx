import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
  console.log(categories)
  return (
    <div className='max-w-[1200px] m-auto px-4 py-12'>
      <h1 className='font-bold text-4xl text-center font-display'>
        Popular Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-full p-4 flex justify-between items-center'
          >
            <h2 className='font-display sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
