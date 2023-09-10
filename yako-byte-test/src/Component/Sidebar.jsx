import React from 'react'
import logo from "../Assest/Dolanto-Logo-final-24 1.png"
import home from "../Assest/Vector 300.png"
import subtract from "../Assest/Subtract.png"
import apps from "../Assest/apps.png"
import users from "../Assest/users 02.png"
import setting from "../Assest/Vector.png"

const Sidebar = () => {
  return (
    <div className='flex flex-col p-[20px] shadow-lg rounded-r-[10px] bg-[#fff] sm:h-screen md:h-screen'>
        <div className='flex justify-center sm:pb-[50px] md:pb-[50px]'>
          <img src={logo} alt=''/>
        </div>
        <div>
          <div className='flex flex-row gap-2 items-center p-[6px] hover:bg-gradient-to-r from-blue-500 to-cyan-500'>
            <img src={home} alt='' style={{width:"18px", height:"18px"}}/>
            <p className='text-sm font-normal text-[#A1A1A1] hover:text-[#fff]'>Dashboard</p>
          </div>
          <div className='flex flex-row gap-2 items-center bg-gradient-to-r from-blue-500 to-cyan-500 p-[6px] rounded-lg'>
            <img src={subtract} alt='' style={{width:"18px", height:"18px"}}/>
            <p className='text-sm font-normal text-[#fff] hover:text-[#fff]'>Projects</p>
          </div>
          <div className='flex flex-row gap-2 items-center p-[6px] hover:bg-gradient-to-r from-blue-500 to-cyan-500'>
            <img src={apps} alt='' style={{width:"18px", height:"18px"}}/>
            <p className='text-sm font-normal text-[#A1A1A1] hover:text-[#fff]'>Team</p>
          </div>
          <div className='flex flex-row gap-2 items-center p-[6px] hover:bg-gradient-to-r from-blue-500 to-cyan-500'>
            <img src={users} alt='' style={{width:"18px", height:"18px"}}/>
            <p className='text-sm font-normal text-[#A1A1A1] hover:text-[#fff]'>Clients</p>
          </div>
          <div className='flex flex-row gap-2 items-center p-[6px] hover:bg-gradient-to-r from-blue-500 to-cyan-500 '>
            <img src={setting} alt='' style={{width:"18px", height:"18px"}}/>
            <p className='text-sm font-normal text-[#A1A1A1] hover:text-[#fff]'>Settings</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar