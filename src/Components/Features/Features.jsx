import React from 'react'
import delivery from '../../Assets/delivery-truck.png'
import support from '../../Assets/support.png'
import payback from '../../Assets/payback.png'
import discount from '../../Assets/discount.png'

const Features = () => {
  return (
    <div className='flex p-12 lg:w-[90%] w-[100%] gap-[2%] lg:ml-[4%] lg:mt-0 -mt-2 ml-[2%] font-outfit' id='features'>
        <div className='flex flex-col gap-4 text-center items-center w-[180%]'>
        <img className='h-16 lg:w-[30%] w-[40%]' src={delivery} alt="" />
        <h2 className='font-bold'>Free Delivery</h2>
        <p className='text-gray-700'>24x7 Free Delivery around Salem</p>
        </div>
        <div className='flex flex-col gap-4 text-center items-center w-[200%]'>
        <img className='h-16 lg:w-[30%] w-[40%]'src={support} alt="" />
        <h2 className='font-bold'>Online 24Hrs Support </h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
        <div className='flex flex-col gap-4 text-center items-center w-[200%]'>
        <img className='h-16 lg:w-[30%] w-[40%]' src={payback} alt="" />
        <h2 className='font-bold'>Money Refund</h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
        <div className='flex flex-col gap-4 text-center items-center w-[199%]'>
        <img className='h-16 lg:w-[30%] w-[35%] ' src={discount} alt="" />
        <h2 className='font-bold'>Membership Discount</h2>
        <p className= 'text-gray-700'>Lorem Ipsum and Maintanance</p>
        </div>
    </div>
  )
}

export default Features