"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function MyBooking() {
  
  const [bookingList,setBookingList]=useState([]);

  const { user } = useKindeBrowserClient();

  useEffect(() => {

    user && getUserBookingList();

    console.log("예약내역페이지 유저:", user)

  }, [user])

  const getUserBookingList = () => {

    GlobalApi.getUserBookingList(user.email).then(res => {
        
      console.log('예약페이지:', res.data.data)
      
      setBookingList(res.data.data);

    })
}



// * Used to Filter User Booking
// * @param {} type 
// * @returns 

  const filterUserBooking=( type ) => {
    const result=bookingList.filter(item =>
       type == 'upcoming' ? new Date(item.attributes.Date) >= new Date()
       : new Date(item.attributes.Date) <= new Date()
        
      )
        console.log("아이템 어트리부트 데이터 받아오니?:", result )
    return result;
}




  return (
    <div className='px-4 sm:px-10 mt-10'>
        <h2 className='font-bold text-2xl'>
          My Booking
        </h2>
        <div className='h-[1000px]'> 
          <Tabs defaultValue="upcoming" className="w-full mt-5">
            <TabsList
              className='w-full justify-start'
            >
              <TabsTrigger value="upcoming">upcoming</TabsTrigger>
              <TabsTrigger value="expired">expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
            
              <BookingList 
                bookingList={filterUserBooking('upcoming')} 
                updateRecord={() => getUserBookingList()}
                expired={false}
              />
            
            </TabsContent>
            
            <TabsContent value="expired">

            <BookingList 
              bookingList={filterUserBooking('expired')} 
              updateRecord={() => getUserBookingList()}
              expired={true}
            />

            </TabsContent>
          </Tabs>
        </div>
        
    </div>
  )
}

export default MyBooking
