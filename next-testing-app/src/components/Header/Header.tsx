import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <h1 className='font-bold text-2xl text-purple-500 font-[Open_Sans]'>My Todo App</h1>
    </div>
  )
}

export default Header
