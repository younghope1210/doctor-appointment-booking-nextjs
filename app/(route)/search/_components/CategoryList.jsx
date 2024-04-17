"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,

  } from "@/components/ui/command"


function CategoryList() {

    const [categoryList ,setCategoryList ] = useState([]);
    const params = usePathname();
    const category = params.split('/')[2];

    useEffect(() => {

      getCategoryList();
        console.log(params);
    },[])
  
    const getCategoryList = () => {
  
      GlobalApi.getCategory().then(res => {
        console.log(res.data.data);
        setCategoryList(res.data.data);
      })
  
    }
  // className={`p-2 flex gap-2 text-[14px] items-center rounded-md cursor-pointer w-full ${category == item.attributes.Name && 'bg-green-100' }`}


  return (
    <div className='h-screen w-[250px] mt-5 flex flex-col md:pr-8 '>
      <Command>
        <CommandInput placeholder="search..." />
        <CommandList className="overflow-visible">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions" >
                {categoryList && categoryList.map((item, id) => (
                   <Link key={id} href={'/search/' + item.attributes.Name}
                   className={`p-2 flex gap-2 text-[14px] items-center rounded-md cursor-pointer w-full ${category==item.attributes.Name&&'bg-blue-100'}`}>
                    <CommandItem className="">
                       
                        <img src={item.attributes.Icon.data.attributes.url} alt='icon' width='25' height='25' />
                            <label className='m-2'>{item.attributes.Name}</label>
                       
                    </CommandItem>
                    </Link>
                ))}
         
            </CommandGroup>
           
        </CommandList>
        </Command>
    </div>
  )
}

export default CategoryList

