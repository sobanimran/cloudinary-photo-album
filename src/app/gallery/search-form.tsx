"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function SearchForm({initialSearch}:{initialSearch:string}) {
    const [tagName, setTagName] = useState(initialSearch ??"")
    const router = useRouter()
    useEffect(()=>{
        setTagName(initialSearch)
    },[initialSearch])
  return (
    <form action="" onSubmit={(e)=>{
        e.preventDefault()
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
        router.refresh()
        }}>
          <Label htmlFor="tag-name" className="text-right">
              Search By Tag
            </Label>
            <div className="flex gap-3">

            <Input
              onChange={(e) => setTagName(e.currentTarget.value)}
              id="tag-name"
              value={tagName}
              className="col-span-3"
              />
            <Button type="submit">Search</Button>
              </div>
    </form>
  )
}
