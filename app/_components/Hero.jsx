import React from 'react'

function Hero() {
  return (
    <section className=' bg-gray-50'>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        
        {/* 이미지 바꿀 때 
        
        <Image alt="" src="" width={800} height={800} className="absolute inset-0 h-full w-full object-cover rounded-3xl object-cover"

        */}

        <img
          alt=""
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?t=st=1709806370~exp=1709809970~hmac=9972205c7ee3357906ebddc41bd7fc7a18085174715e5b87fae11d76cc7122b7&w=1380"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">
           Find & Book <span className='text-green-800'>Appointment</span> with your Fav <span className='text-green-800'>Doctors</span>
        </h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-green-800 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Explore Now
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero

