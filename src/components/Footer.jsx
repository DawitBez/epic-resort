import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

function Footer() {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6>Solutions</h6>
          <ul>
            <li>Travel</li>
            <li>Flight</li>
            <li>Booking</li>
            <li>Cruises</li>
            <li>Ground</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Refund</li>
            <li>Tours</li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            The latest deals, aricles & resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row '>
            <input
              className='w-full p-2 mr-4 rounded-md mb-4'
              type='email'
              placeholder='Enter email...'
            />
            <button className='btn btn-outline btn-info'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row sm:text-center text-gray-500'>
        <p className='py-4'>2023 Epic Travels &copy; All rights reserved.</p>
      </div>
      <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <TiSocialPinterest size={30} />
      </div>
    </div>
  )
}

export default Footer
