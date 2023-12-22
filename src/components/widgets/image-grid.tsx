"use client"
import CloudinaryImage from "@/components/ui/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";


const MAX_COLUMS = 4

export function ImageGrid({images ,getImage}:{images:SearchResult[],getImage:(imageData:SearchResult)=>ReactNode}){
    function getColumns(colIndex:number){
      return  images.filter((resource,idx)=>idx % MAX_COLUMS === colIndex)
    }
    
    return(
        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
            {
            [
                getColumns(0),
                getColumns(1),
                getColumns(2),
                getColumns(3),
            ].map((column,idx)=>(
                <div key={idx} className="flex flex-col gap-4">
                {column.map((getImage))} 
                    </div>
            ))
            }
        
      </div>
    )

}