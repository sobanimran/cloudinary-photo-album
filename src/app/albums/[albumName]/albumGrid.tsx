"use client"

import { SearchResult } from '@/app/gallery/page';
import CloudinaryImage from '@/components/ui/CloudinaryImage';
import { ImageGrid } from '@/components/widgets/image-grid';



const AlbumGrid =  ({images}:{images:SearchResult[]}) => {


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

export default AlbumGrid