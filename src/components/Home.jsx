import React from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { useState } from 'react'
import enhancedImageAPI from '../utils/enhancedImageAPI'

const 
Home = () => {
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);



    const UploadImageHandler = async (file) => {
        setUploaded(URL.createObjectURL(file)); // Create a local URL for the uploaded image
        setLoading(true);

        try {
            const enhancedImageUrl = await enhancedImageAPI(file);
            setEnhancedImage(enhancedImageUrl);
            setLoading(false);
            console.log(enhancedImageUrl)
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    
    enhancedImage?.image? console.log(enhancedImage.image) : null; // conditional rendering 

  return (
    <div>
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview
        loading={loading}
        uploaded ={uploaded}
        enhancedImage={enhancedImage? enhancedImage.image : null}

        />    
    </div>
  )
}

export default 
Home