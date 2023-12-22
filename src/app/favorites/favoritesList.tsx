
"use client"


import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import { SearchResult } from '../gallery/page';
import ForceRefresh from '@/components/force-refresh';
import { useEffect, useState } from 'react';
import { ImageGrid } from '@/components/widgets/image-grid';


const FavoritesList =  ({initialResources}:{initialResources:SearchResult[]}) => {
 const [resources,setResources] = useState(initialResources)
 useEffect(()=>{
    setResources(initialResources)
 },[initialResources])
  return (
    <ImageGrid  images={resources}
    getImage={(imageData:SearchResult)=>{
      return(
        <CloudinaryImage
        key={imageData.public_id}
        imageData={imageData}
        alt="Description of my image"
        height="300"
        width="400"
        sizes="100vw"
        onUnheart={(unHeartedResource)=>{
          setResources((currentResource)=>currentResource.filter((resources) => resources.public_id !== unHeartedResource.public_id)) 
        }}  
        />
      )
     }}
    />
        
    
  )
}

export default FavoritesList