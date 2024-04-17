import React from 'react'
import CategoryList from './_components/CategoryList'

function layout({children}) {
  return (
    <div className='flex'>
      <div className='hidden md:block'>
        {/* category */}
        <CategoryList />
      </div>
      
       <div className=''>
          {children}
      </div>
      
    </div>
  )
}

export default layout
