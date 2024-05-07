import TestCards from '@/modules/test-cards'
import React from 'react'

const page = () => {
  return (
    <div className=' text-center py-28 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden'>
      <h1 class="capitalize mb-5 sm:mb-10 font-semibold sm:text-6xl lg:text-7xl tracking-tighter  ">Engineering</h1>
      <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-4 mx-auto grid-flow-row grid '>
        <TestCards />
        <TestCards />
        <TestCards />
        <TestCards />
      </div>
    </div>
  )
}

export default page