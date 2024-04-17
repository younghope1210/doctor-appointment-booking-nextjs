import React from 'react'
import Image from 'next/image'
import { MapPin, Calendar, Clock } from 'lucide-react'
import moment from 'moment'
import { toast } from 'sonner'
import CancelAppointment from './CancelAppointment'
import GlobalApi from '@/app/_utils/GlobalApi'


function BookingList({bookingList, expired, updateRecord}) {

  const onDeleteBooking = (item) => {

    GlobalApi.deleteBooking(item.id).then(res => {
      console.log(res);
      if(res){
        toast('예약내역 삭제 완료');
        updateRecord();
      }
    })

  }

  return (
    <div>
      {bookingList && bookingList.map((item, id) => (
          <div key={id} className='flex gap-2 items-center p-5 m-3 border rounded-lg'>
            <Image src={item.attributes.doctor.data.attributes.Image.data[0].attributes.url} 
             className='rounded-full h-[70px] w-[70px] object-cover'
             width={70} height={70} alt='images' />

              <div className='flex flex-col gap-2 w-full'>
                <h2 className='font-bold text-[18px] items-center flex justify-between'>
                  {item.attributes.doctor.data.attributes.Name}
                {!expired&&<CancelAppointment onContinueClick={() => onDeleteBooking(item)} />}
                </h2>
                <h2 className='flex gap-2 text-gray-500'> 
                  
                   <MapPin className='text-primary h-5 w-5'/> 
                
                  {item.attributes.doctor.data.attributes.Address}
                
                </h2>
                <h2 className='flex gap-2'>
                  
                  <Calendar className='text-primary h-5 w-5'/> 
                  
                  Appointment On:
                  { moment(item.attributes.Date).format('DD-MMM-YYYY')} 
                </h2>
                <h2 className='flex gap-2'>
                  <Clock className='text-primary h-5 w-5'/> 
                  At Time : {item.attributes.Time} 
                </h2>
                </div>
                
          </div>

      ))}

    </div>
  )
}

export default BookingList
