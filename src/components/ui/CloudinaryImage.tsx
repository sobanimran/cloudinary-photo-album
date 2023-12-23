"use client"
import Heart from "@/components/icons/heart"
import { CldImage, CldImageProps } from "next-cloudinary"
import { SetAsFavoriteAction } from "../../app/gallery/actions"
import { useState, useTransition } from "react"
import { SearchResult } from "../../app/gallery/page"
import FullHeart from "@/components/icons/full-heart"
import { ImageMenu } from "./imageMenu"

const CloudinaryImage = (props:  {imageData:SearchResult ,onUnheart?:(unHeartedResource :SearchResult)=>void,[key:number]:any,alt:string}&Omit<CldImageProps, "src">) => {
  const {imageData , onUnheart}=props
  const [transition, startTransition] = useTransition()
  
  const [isFavorited, setisFavorited] = useState(imageData.tags.includes("favorite"))
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      {isFavorited == true ?
        <FullHeart className="absolute top-3 left-3 cursor-pointer hover:text-white text-red-600 "
        onClick={() => {
          onUnheart?.(imageData)
          startTransition(() => {
            setisFavorited(false)
            SetAsFavoriteAction(imageData.public_id, false )
          })
        }}
        />
        :
        

        <Heart className="absolute top-3 left-3 cursor-pointer hover:text-red-500"
          onClick={() => {
            startTransition(() => {
              setisFavorited(true)
              SetAsFavoriteAction(imageData.public_id, true )
            })
          }}
        />
      }
    <ImageMenu image={imageData} />

    </div>
  )
}

export default CloudinaryImage