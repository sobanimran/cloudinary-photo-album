"use client"
import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function EditPage({ searchParams: { publicId } }: { searchParams: { publicId: string } }) {
    const [transformation, setTransformation] = useState<undefined | "generative-fill"  | "restore" | "removeBackground">()
    const [pendingprompt, setpendingPrompt] = useState("")
    const [prompt, setPrompt] = useState("")
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
                 
                        <Button variant="secondary" onClick={() => {
                            setTransformation(undefined)
                        }}>Clear All </Button>
                  
                    {/* apply generative fill */}
                    <div className="flex flex-col">

                    <Button onClick={() => {
                        setTransformation("generative-fill")
                        setPrompt(pendingprompt)
                    }}>Apply Generative Fill </Button>
                          <Input value={pendingprompt} onChange={e => setpendingPrompt(e.target.value)} />
                    </div>
                    {/* apply restore */}
                    <Button onClick={() => {
                        setTransformation("restore")
                    }}> Restore Image </Button>
                    {/* apply pixelate */}
                    <Button onClick={() => {
                        setTransformation("removeBackground")
                    }}> remove Background of Image </Button>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-4">

                    <CldImage src={publicId} alt="something here" width={300} height={300} />

                    {transformation == "generative-fill" &&
                        <CldImage src={publicId} alt="something here" width={600} height={800}
                            crop="pad"  // Returns the given size with padding
                            fillBackground={{
                                prompt: prompt,
                            }}
                        />}

                    
                    {transformation == "restore" &&
                        <CldImage src={publicId} alt="something here" width={300} height={300}
                            crop="fill"
                            restore
                            sizes="100vw"
                        />}
                    {transformation == "removeBackground" &&
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