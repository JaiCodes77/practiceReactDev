import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <div className='font-bold text-2xl text-purple-500 font-[Open_Sans]'>My Todo App</div>
    </div>
  )
}

export default Header
