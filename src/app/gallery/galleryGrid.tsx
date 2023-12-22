"use client"

import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import { ImageGrid } from '@/components/widgets/image-grid';
import { SearchResult } from './page';


const GalleryGrid =  ({images}:{images:SearchResult[]}) => {


  return (
   
     <ImageGrid images={images} 
     getImage={(imageData:SearchResult)=>{
      return(
        <CloudinaryImage
        key={imageData.public_id}
        imageData={imageData}
        alt="Description of my image"
        height="300"
        width="400"
        sizes="100vw" />
      )
     }}
     />
 
  )
}

export default GalleryGrid