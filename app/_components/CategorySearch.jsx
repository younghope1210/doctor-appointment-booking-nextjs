"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'
function CategorySearch() {

  const [categoryList ,setCategoryList ] = useState([]);

  useEffect(() => {

    getCategoryList()

  },[])

  const getCategoryList = () => {

    GlobalApi.getCategory().then(res => {
      console.log(res.data.data);
      setCategoryList(res.data.data);
    })

  }

  return (
    <div className='my-10 flex flex-col items-center mt-5 gap-2'>
      <h2 className='font-bold text-3xl tracking-wide'>
        Search <span className='text-green-800'>Doctor</span> 
      </h2>
      <h3 className='text-gray-400 mt-5 md:text-xl'> Search Your Doctor and Book Appointment in one Click </h3>
    {/* search  */}
    <div className="my-5 flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">Search <Search className='w-4 h-4' /></Button>

    </div>

      {/* category icon button 처리 */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-3'>
        {categoryList.length > 0 ? categoryList.map((item,id) =>(
          <div key={id}>
            <Link href={'/search/' + item.attributes.Name}
                className='border flex flex-col items-center text-center p-5 m-2 rounded-lg gap-2 hover:scale-120 transition-all ease-in-out cursor-pointer'>
              <img src={item.attributes.Icon.data.attributes.url} alt='icon' width='40' height='40' />
              <label className='text-sm'>{item?.attributes?.Name}</label>
            </Link>
          </div>
          ))
        :
          // Skelotn Effect
          [1,2,3,4,5,6,7,8,9].map((item, index) =>(
            <div key={index}
              className='m-2 h-[100px] bg-slate-200 w-[100px] rounded-lg animate-pulse'>
              <p></p>
          </div>
          ))
        }

      </div>
  
    </div>
  )
}

export default CategorySearch
