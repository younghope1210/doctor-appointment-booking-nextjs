"use client"
import React,{ useState,useEffect } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({params}) {

  // http://localhost:3000/details/1

  const [doctor, setDoctor] = useState();

  useEffect(() => {

    getDoctorById();
  
  }, [])


  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then(res => {
      console.log(res);
      setDoctor(res.data.data);
    })
  }

  return (
    <div className='p-5 md:px-20'>
     <h2 className='font-bold text-[22px]'> 
        Details
     </h2> 
     <div className='grid grid-cols-1 lg:grid-cols-4'>
        {/* doctor detail */}
        <div className='col-span-3'> 
          {doctor && <DoctorDetail doctor={doctor} /> }
     
        </div>
        {/* doctor suggestion */}
        <div>
          <DoctorSuggestionList/>
        </div>
     </div>
    </div>
  )
}

export default Details
