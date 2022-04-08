import React from 'react'
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, RssIcon, HeartIcon } from '@heroicons/react/outline'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="space-y-2">
        <button className='btn'>
          <HomeIcon className='w-5 h-5' />
          <p>Home</p>
        </button>
        <button className='btn'>
          <SearchIcon className='w-5 h-5' />
          <p>Buscar</p>
        </button>
        <button className='btn'>
          <LibraryIcon className='w-5 h-5' />
          <p>Mi biblioteca</p>
        </button>
        <hr className='border-t-2 border-gray-600' />
        <button className='btn'>
          <PlusCircleIcon className='w-5 h-5' />
          <p>Crear Playlist</p>
        </button>
        <button className='btn'>
          <HeartIcon className='w-5 h-5' />
          <p>Mi Música</p>
        </button>
        <button className='btn'>
          <RssIcon className='w-5 h-5' />
          <p>Tus Capítulos</p>
        </button>
        <hr className='border-t-2 border-gray-600' />
        {/* Playlists */}
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
        <p className='cursor-pointer hover:text-white'>Play List Name....</p>
      </div>
    </div>
  )
}
