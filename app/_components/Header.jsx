"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React,{ useEffect } from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


function Header() {
    const Menu = [
      
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Medical Staff',
            path:'/search/Cardiologist'
        },
    ]

    const { user } = useKindeBrowserClient();
    
    useEffect(() => {
        
        console.log("헤더페이지 유저:",user);
    }, [user])

  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
           <Link href='/'>
                <Image src='/logo.svg' alt="logo" width={180} height={80} />
           </Link>
            {/* 화면 크기가 작을 때 */}
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item, id)=>
                    <Link href={item.path} key={id}>
                        <li 
                        className='hover:text-primary cursor-pointer hover:scale-110 transition-all ease-in-out'>
                            {item.name}
                        </li>
                    </Link>
            )}
            </ul>
        </div>
        
       {user? <div>
                <Popover>
                    <PopoverTrigger>
                        <Image src={user?.picture} alt='profile-img' width={50} height={50} className="rounded-full" />
                    </PopoverTrigger>
                    
                    <PopoverContent className="w-44">
                        <ul className="flex flex-col gap-2">
                            <li><Link href={'/my-booking'}>My Booking</Link></li>
                            <li> <LogoutLink><Button variant="outline">Logout</Button></LogoutLink></li>
                        </ul>
                       
                    </PopoverContent>
                </Popover>
               </div>     

            : <div><LoginLink><Button>Get Started</Button></LoginLink></div>  
        }
            
           
       
     

    </div>
  )
}

export default Header
