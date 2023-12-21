"use client"
import Heart from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { SetAsFavoriteAction } from "./actions"
import { useState, useTransition } from "react"
import { SearchResult } from "./page"
import FullHeart from "@/components/icons/full-heart"

const CloudinaryImage = (props: any & {imageData:SearchResult ,path:string}) => {
  const {imageData}=props
  const [transition, startTransition] = useTransition()
  
  const [isFavorited, setisFavorited] = useState(imageData.tags.includes("favorite"))
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      {isFavorited == true ?
        <FullHeart className="absolute top-3 right-3 cursor-pointer hover:text-white text-red-600 "
        onClick={() => {
          startTransition(() => {
            SetAsFavoriteAction(imageData.public_id, false ,props.path)
            setisFavorited(false)
          })
        }}
        />
        :
        

        <Heart className="absolute top-3 right-3 cursor-pointer hover:text-red-500"
          onClick={() => {
            startTransition(() => {
              SetAsFavoriteAction(imageData.public_id, true ,props.path)
              setisFavorited(true)
            })
          }}
        />
      }


    </div>
  )
}

export default CloudinaryImage