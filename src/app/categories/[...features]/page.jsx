import React from 'react'

export default function CategoriesDetailsPage({params}) {
   if(params.features.length === 3) return <div>{params.features[2]}</div>
  return (
    <div className='min-h-screen'>
      Categories Details Page
    </div>
  )
}
