import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Companies/>
    </div>
  )
}

export default Home