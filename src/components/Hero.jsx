import TypeWriterEffect from 'react-typewriter-effect'

const Hero = () => {
  const myRef = document.querySelector('.scrollable-div')

  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen text-center' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 font-display scrollable-div'>
          <p className='text-xl uppercase text tracking-widest font-display'>
            All Inclusive
          </p>
          <h1 className='font-bold font-display text-5xl md:text-7xl drop-shadow-2xl'>
            <TypeWriterEffect
              startDelay={100}
              cursorColor='white'
              text='Beach Resorts & Getaways'
              typeSpeed={100}
              scrollArea={myRef}
              hideCursorAfterText={true}
            />
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Escape the crowds and discover exclusive serenity with our private
            beach getaways. Your secluded paradise awaits. Book now!
          </p>
          <button className='bg-white text-black hover:bg-black hover:text-white'>
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
