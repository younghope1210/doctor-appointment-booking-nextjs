"use client"
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import React, { useEffect, useState } from 'react'
import GlobalApi from './_utils/GlobalApi'


export default function Home() {

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {

      getDoctorsList();

  },[])

  const getDoctorsList = () => {

    GlobalApi.getDoctors().then(res => {
      console.log(res.data.data);
      setDoctorList(res.data.data);
    })

  }



  return (
   <div>
      {/* 메인 비주얼 */}
    <Hero />
    {/* 검색창 및 카테고리 */}
    <CategorySearch />
    {/* 의료과목별 의사 안내 */}
    <div className='mb-10 px-8 m-auto w-[80%]'>
     
          <h2 className='text-center font-bold text-3xl tracking-wide my-5 '>
            Popular 
            <span className='text-green-800'>
              Doctor
            </span> 
          </h2> 
    
    
        {/* 의사진들 안내 */}
        <div>
            <DoctorList 
              doctorList={doctorList} 
              
             />
        </div>
      </div>
    </div>
    

  );
}
