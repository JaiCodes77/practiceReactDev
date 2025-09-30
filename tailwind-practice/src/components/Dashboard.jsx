import React from 'react'

function Dashboard() {
  return (
    <div className='min-h-screen min-w-screen'>
        <h2 className='font-bold text-2xl m-8'>Overview</h2>
        <div> 

            <div className='flex justify-evenly'>
                <h3 className='font-bold text-lg'>Portfolio</h3>
                <h3 className='font-bold text-lg'>Your Assets</h3>
            </div> 
            <div className='flex gap-4 justify-center items-center'>
            <div className='bg-sky-200 w-[550px] h-[300px] flex justify-center items-center mt-10 rounded-xl'>$17,000</div>
            <div className='bg-purple-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center'>125 BTC</div>
            <div className='bg-green-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center'>155 ETH</div>
            <div  className='bg-yellow-200 w-[250px] h-[300px] mt-10 rounded-xl flex justify-center items-center'>400 BNB</div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard