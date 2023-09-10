import React from 'react'
import combo from "../Assest/combo shape.png"
import pro1 from "../Assest/pro1.png"
import pro2 from "../Assest/pro2.png"
import pro3 from "../Assest/pro3.png"
import pro4 from "../Assest/pro4.png"

const Card = ({name,img}) => {
  return (
    <div className='px-[20px] rounded-md bg-[#fff]'>
      <div className='flex justify-center pt-[20px] pb-[20px]'>
        <img src={img} alt=''/>
      </div>
      <div>
        <div className='flex justify-between pb-[10px]'>
          <p className='text-[15px] font-medium'>{name}</p>
          <img src={combo} alt='' style={{height:"15px"}}/>
        </div>
        <p className='text-[#A1A1A1] text-[11px] font-normal text-left pb-[12px]'>Glenmark Pharmaceuticals climbs to #2 position for the respiratory in the Indian Pharmaceutical Market...</p>
        <div className='grid content-end'>
          <div className='flex justify-between align-center '>
            <p className='text-[#828282] text-[14px] font-normal flex align-center gap-[5px] mt-[5px]'>
              <span>
                <div style={{width:"7px",height:"7px",background:"green",borderRadius:"50%",marginTop:"5px"}}></div>
              </span>
              12/10/2023
            </p>
            <div className='flex relative'>
              <img src={pro1} alt='' className='absolute right-16'/>
              <img src={pro2} alt='' className='absolute right-12'/>
              <img src={pro3} alt='' className='absolute right-8'/>
              <img src={pro4} alt='' className='absolute right-4'/>
              <img src={pro4} alt='' className='absolut right-0 opacity-0'/>
              <div className='flex absolute right-0 p-[8px] border-2 border-[#fff] rounded-full bg-[#F1F5F9] justify-center text-[10px]'>+5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card