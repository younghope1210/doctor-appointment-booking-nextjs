"use client"
import React, {  useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"





function BookAppointment({doctor}) {

  const [date, setDate] = useState(new Date());
  const [timeSlot,setTimeSlot] = useState();
  const [selectedTimeSlot,setSelectedTimeSlot] = useState();
  const[note, setNote] = useState();

  const{ user } = useKindeBrowserClient();


  useEffect(() => {

    getTime();
    
    console.log("부킹 페이지 유저:",user)
  },[])
  


  const getTime = () => {
    const timeList = [];
    //  오전 진료 시간
    for (let i = 10; i <= 12; i++) {
        timeList.push({
            time: i + ':00 AM'
        })
        timeList.push({
            time: i + ':30 AM'
        })
    }
    //  오후 진료 시간
    for (let i = 1; i <= 6; i++) {
        timeList.push({
            time: i + ':00 PM'
        })
        timeList.push({
            time: i + ':30 PM'
        })
    }

    setTimeSlot(timeList)
  }

// 서버에 예약한 데이터 전송하기 

  const saveBooking = () => {
    const data={
      data:{
        UserName:user.given_name+" "+user.family_name,
        Email:user.email,
        Time:selectedTimeSlot,
        Date:date,
        doctor:doctor.id,
        Note:note
      }
    }

      console.log("saveBooking 백단에 전송:",data)

      GlobalApi.bookAppointment(data).then( res => {
        
        console.log(res);
        toast("예약이 완료되었습니다. 예약 페이지에서 확인하세요")
        // if(res)
        // {
        //   GlobalApi.sendEmail(data).then(res => {
        //     console.log(res)
        //   })
        //   toast("Booking Confirmation sent on Email")
        // }
      })
    }
 //  지나간 날짜 선택할 수 없게 
const isPastDay = (day) => {
  
  return day <= new Date();
  
}

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3 rounded-full"> 
            Book Appointment
         </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
              <div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                  {/* calender */}
                  <div className='flex flex-col gap-3 items-baseline'>
                    <h2 className='flex gap-2 items-center'>
                      <CalendarDays className='text-primary h-5 w-5'/>
                      날짜 선택하기
                    </h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      // 지나간 날짜는 선택할 수 없게 선언
                      disabled={isPastDay} 
                      className="rounded-md border"
                    />
                  </div>
                  {/* time slot */}
                  <div className='mt-3 md:mt-0'>
                     <h2 className='flex gap-2 items-center mb-3'>
                        <Clock className='text-primary h-5 w-5'/>
                        예약시간 선택하기
                      </h2>
                      <div  className='grid grid-cols-3 gap-2 border rounded-lg p-5'>
                      {timeSlot?.map((item,index)=>(
                        <h2 
                          onClick={() => setSelectedTimeSlot(item.time)}
                          className={`p-2 border cursor-pointer
                          text-center hover:bg-primary hover:text-white
                          rounded-full ${item.time==selectedTimeSlot&&'bg-primary text-white'}`}>
                            {item.time}
                        </h2>
                      ))}
                      </div>
                    </div>
                </div>
                <Textarea className="mt-3" placeholder="Note" onChange={(e) => setNote(e.target.value)} /> 
              </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild >
            <>
                <Button type="button" disabled={!(date && selectedTimeSlot)}
              onClick={() => saveBooking()}>
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BookAppointment
