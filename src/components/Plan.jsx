import { motion } from 'framer-motion'

function Plan() {
  return (
    <div
      className='max-w-[1200px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'
      data-theme='garden'
    >
      {/* LEFT SIDE */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <motion.img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
      </div>
      {/* RIGHT SIDE */}
      <div className='flex flex-col h-full justify-center font-display'>
        <h3 className='text-5xl md:text-6xl font-bold font-display'>
          Plan Your Next Trip
        </h3>
        <p className='text-xl py-6'>
          Plan your perfect adventure with us - expert recommendations and
          personalized itineraries for your next trip.
        </p>
        <p className='pb-6'>
          Ready for your next adventure? Let us help you plan the perfect trip
          with our expert recommendations and personalized itineraries.
        </p>
        <div>
          <button className='border-black mr-4 hover:bg-black hover:text-white'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-lg'>
            Book Trip
          </button>
        </div>
      </div>
    </div>
  )
}

export default Plan
