import React from 'react'
import Loading from './Loading'
import { useState } from 'react'

const ImagePreview = (props) => {
    console.log(props);
  return (
    <div className='mt-8 grid grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-4xl'>
        <div className='bg-white shadow-lg rounded-xl overflow-hidden '>
            <h2 className='bg-black font-semibold text-xl text-center text-gray-50 '>Original Image </h2>

            {props.uploaded ? <img src={props.uploaded}
            alt="previewImage" 
            className='w-full h-full object-cover'
             />:
             <div className='flex items-center justify-center h-screen max-h-60 bg-gray-600'>No Image Selected</div>}
        </div>
        <div className='bg-white shadow-lg rounded-xl overflow-hidden '>
            <h2 className='bg-black text-white  text-center font-semibold text-xl'>Enhanced Image </h2>

            {props.loading ? <Loading /> : props.enhancedImage ? <img src={props.enhancedImage} alt="previewImage" className='w-full h-full object-cover' /> : <div className='flex items-center justify-center h-screen max-h-60 bg-gray-600'>No Enhanced Image</div>}
        </div>
    </div>
  )
}
export default ImagePreview
