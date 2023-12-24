

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./menu"
import { Addtoalbum } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
import { PencilIcon } from "lucide-react"

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen} >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0  w-8 h-8" ><Menu /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild >
            <Addtoalbum image={image} onClose={() => {
              setOpen(false)
            }} />
          </DropdownMenuItem>

          <DropdownMenuItem asChild >
           <Link href={`/edit?publicId=${encodeURI(image.public_id)}`}  ><PencilIcon className="mr-2 ml-1 w-4 h-4" /> Edit</Link>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
