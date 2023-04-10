import { motion } from 'framer-motion'

export const Rooms = () => {
  return (
    <div className='max-w-[1200px] h-[500px] bg-amber-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div class='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold font-display'>Fine Interior Rooms</h3>
        <p className='pt-4 font-display'>
          Experience luxury and comfort in our finely crafted interior rooms.
          Unwind in style. Book now.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-4'>
        <motion.img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/12652916/pexels-photo-12652916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
        <motion.img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          whileHover={{ scale: 1.1, ransition: { duration: 1 } }}
        />
      </div>
    </div>
  )
}
