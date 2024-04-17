import React from 'react'
import Image from 'next/image'
import { GraduationCap, MapPin } from 'lucide-react'
import BookAppointment from './BookAppointment'


function DoctorDetail({doctor}) {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'> 
            {/* doctor image */}
            <div > 
                <Image src={doctor.attributes.Image.data[0].attributes.url} width={200} height={200} alt='doctor-image'
                    className='rounded-lg w-full h-[280px] object-cover'
                />
            </div>
            {/* doctor info */}
            
            <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>

                <h2 className='font-bold text-2xl'>
                    {doctor?.attributes?.Name}
                </h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap />
                {doctor?.attributes?.Year_of_Experience} of experince
                </h2>
                <h2 className='flex gap-2 text-gray-500 text-md'> 
                    <MapPin />
                    {doctor?.attributes?.Address}
                </h2>
                <h2 className='text-[10px] bg-green-100 p-1 rounded-full px-2 text-green-800 '>
                    {doctor?.attributes?.product.data.attributes.Name}
                </h2>
               
                <BookAppointment doctor={doctor} />
            </div>
            {/* about doctor */}
           
    </div>
    <div className='p-3 border-[1px] rounded-md my-2'>
        <h2 className='font-bold text-[20px] my-3'> About Me</h2>
        <p className='text-gray-500 tracking-wide'>
        {doctor?.attributes?.About}

        </p>
    </div>
</>
  )
}

export default DoctorDetail
