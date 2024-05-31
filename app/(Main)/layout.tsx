
import React from 'react'
import DekstopSidebar from '@/components/block/DekstopSidebar'

const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <div className='flex h-screen'>
      <DekstopSidebar/>
     <div className='flex flex-col flex-1 overflow-y-auto'>
        {children}
    </div>
    </div>
  )
}

export default layout