"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

function Search({params}) {

  // http://localhost:3000/search/Dentist123

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    console.log(params.cname);
    getDoctors();
  }, [])

  const getDoctors = () => {
    GlobalApi.getDoctorByCategory(params.cname).then(res => {
      // console.log(res);
      setDoctorList(res.data.data);
    })
  }

  return (
    <div className='m-8'>
     <DoctorList  
      doctorList={doctorList} 
      
    />

    </div>
  )
}

export default Search
 