"use client"
import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage({ searchParams: { publicId } }: { searchParams: { publicId: 'afcgu2g1cnowkgdhxtz6' } }) {
    const [transformation, setTransformation] = useState<undefined|"generative-fill" |"blur" |"grayscale" | "restore"|"removeBackground">()
    console.log(publicId)
    return (
        <section>
            <div className="flex flex-col gap-8">

            <div className='flex justify-between py-8'>
                <h1 className="text-4xl font-bold">
                    Edit {publicId}
                </h1>

            </div>
            <div className="flex gap-4">
            {/* remove all generative fill */}
            <Button variant="secondary" onClick={()=>{
                setTransformation(undefined)
            }}>Clear All </Button>
            {/* apply generative fill */}
            <Button  onClick={()=>{
                setTransformation("generative-fill")
            }}>Apply Generative Fill </Button>
            {/* apply Blur */}
            <Button  onClick={()=>{
                setTransformation("blur")
            }}>Apply Blur </Button>
            {/* apply grayscale */}
            <Button  onClick={()=>{
                setTransformation("grayscale")
            }}>convert into grayscale </Button>
            {/* apply restore */}
            <Button  onClick={()=>{
                setTransformation("restore")
            }}> Restore Image </Button>
            {/* apply pixelate */}
            <Button  onClick={()=>{
                setTransformation("removeBackground")
            }}> remove Background of Image </Button>
            </div>
            <div className="grid grid-cols-2 gap-12">

            <CldImage src={publicId} alt="something here" width={300} height={300} />

            {transformation=="generative-fill"    &&
            <CldImage src={publicId} alt="something here" width={300} height={300} 
            crop="pad"  // Returns the given size with padding
            fillBackground
            />} 
            
            {transformation=="blur"    &&
            <CldImage src={publicId} alt="something here" width={300} height={300} 
           blur="800"
            />} 
            {transformation=="grayscale"    &&
            <CldImage src={publicId} alt="something here" width={300} height={300} 
            sizes="100vw"
            grayscale
            />} 
            {transformation=="restore"    &&
            <CldImage src={publicId} alt="something here" width={300} height={300} 
            crop="fill"
            restore
            sizes="100vw"
            />} 
            {transformation=="removeBackground"    &&
            <CldImage src={publicId} alt="something here" width={300} height={300} 
            crop="fill"
            removeBackground
            sizes="100vw"
            />} 
            </div>
            </div>
        </section>
    )
}