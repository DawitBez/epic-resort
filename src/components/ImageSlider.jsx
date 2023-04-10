import { useState } from 'react'

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

import { RxDotFilled } from 'react-icons/rx'

export const ImageSlider = () => {
  const slides = [
    {
      url: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sushi',
    },
    {
      url: 'https://images.pexels.com/photos/2072867/pexels-photo-2072867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Salmon',
    },
    {
      url: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'avocado',
    },
    {
      url: 'https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'grilled-meat',
    },
    {
      url: 'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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

  return (
    <div className='max-w-[1100px] h-[575px] w-full m-auto py-10 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      {/* LEFT ARROW */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 group-hover:bg-black/20'>
        <BsFillArrowLeftCircleFill
          size='25'
          color='whitesmoke'
          onClick={prevSlide}
        />
      </div>

      {/* RIGHT ARROW */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 group-hover:bg-black/20'>
        <BsFillArrowRightCircleFill
          size='25'
          color='whitesmoke'
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
