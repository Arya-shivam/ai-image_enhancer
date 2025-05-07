import React from 'react'

const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 w-full max-w-4xl'>
            <label htmlFor="fileInput" className='text-white block w-full cursor-pointer border-2 border-dashed border-white/50 rounded-lg p-6'>
                <input 
                    type="file" 
                    id='fileInput' 
                    className='hidden'
                    onChange={ShowImageHandler} 
                />
                <p className='font-bold'>Click and Drag here to upload Image</p>
            </label>
        </div>
    )
}

export default ImageUpload