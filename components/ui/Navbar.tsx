import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full h-20 bg-gray-900 flex items-center justify-between text-white px-5'>
        <h1 className='text-2xl font-semibold'>Spotify</h1>
        <button className='hover:text-green-700 transition'>LogOut</button>
    </div>
  )
}
