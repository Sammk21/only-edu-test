import TestCards from '@/modules/test-cards'
import React from 'react'

const page = () => {
  return (
    <div className=' text-center py-28 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden'>
      <div className='flex flex-col gap-y-3 py-5'>
      <h1 class="capitalize  font-semibold sm:text-6xl lg:text-7xl tracking-tighter text-3xl">Engineering</h1>
      <p>Designing the Future, One Blueprint at a Time.</p>
      </div>
      <div className='px-2'>
      <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-4 mx-auto grid-flow-row grid bg-white rounded-3xl py-12'>
        <TestCards />
        <TestCards />
        <TestCards />
        <TestCards />
        <TestCards />
        <TestCards />
        <TestCards />
      </div>
      </div>
    </div>
  )
}

export default page