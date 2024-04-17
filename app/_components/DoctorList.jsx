"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function DoctorList({doctorList, heading='Doctor Popular'}) {

  return (
  

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-3 sm:gap-5'>

        {doctorList && doctorList.length > 0 ? doctorList.map((doctor, id) => id < 6 && (
          <div key={id}>
            <div
                className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-green-800 hover:shodow-sm transition-all ease-in-out'>
                  <img src={doctor.attributes.Image.data[0].attributes.url} 
                        alt='doctor' 
                        width='500' 
                    
                        className='h-[280px] w-full object-cover rounded-lg '
                  />
              <div className='mt-3 items-baseline flex flex-col gap-2'>
                  <h2 className='text-[12px] bg-green-100 p-1 rounded-lg text-green-800'>
                      {doctor.attributes.product.data.attributes.Name}
                  
                  </h2>
                  <h2 className='text-[14px] font-bold'>
                  {doctor.attributes.Name}
                  </h2>
                  <h2 className='text-[12px]  text-green-800'>
                  {doctor.attributes.Year_of_Experience}
                  </h2>
                  <h2 className='text-[12px]  text-gray-700'>
                  {doctor.attributes.Address}
                  </h2>
                  <Link href={'/details/' + doctor.id} className='w-[90%] md:w-[90%] sm:w-full m-auto'>
                    <p className='p-3 border-[1px] border-green-800 text-green-800 rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-green-800 hover:text-white transition-all ease-in-out'>
                      Book Now
                      </p>
                  </Link>
              </div>
            </div>
          </div>
          ))
          :
          // Skelotn Effect
          [1].map(item =>(
             <div className='m-2 h-[220px] bg-slate-200 w-[200px] rounded-lg animate-pulse '>

          </div>
          ))
         
          }

      </div>
 
  )
}

export default DoctorList
