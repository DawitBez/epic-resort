import { useState, useEffect } from 'react'

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
  const slides = [
    {
      url: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'burger',
    },
    {
      url: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'pizza',
    },
    {
      url: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'burger2',
    },
    {
      url: 'https://images.pexels.com/photos/2894651/pexels-photo-2894651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'salad',
    },
    {
      url: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      title: 'pasta',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    // Set an interval to change the slide every 3 seconds
    const intervalId = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }, 3000)

    // Clear the interval when the component unmounts or when all the slides have been shown
    if (currentIndex === slides.length - 1) {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [currentIndex, slides])

  return (
    <div className=' max-w-full h-[575px] w-full m-auto py-1 relative group bg-white'>
      <div
        className='w-full h-full bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      {/* LEFT ARROW */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 group-hover:bg-black/20'>
        <BsFillArrowLeftCircleFill
          size='50'
          color='#2f847c'
          onClick={prevSlide}
        />
      </div>

      {/* RIGHT ARROW */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 group-hover:bg-black/20'>
        <BsFillArrowRightCircleFill
          size='50'
          color='#2f847c'
          onClick={nextSlide}
        />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
