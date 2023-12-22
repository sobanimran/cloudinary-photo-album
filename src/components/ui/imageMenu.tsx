import {FolderPlus} from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
       DropdownMenuShortcut,
      DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./menu"
  
  export function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">

      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0  w-8 h-8" ><Menu /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
         <DropdownMenuItem>
              <FolderPlus className="mr-2 h-4 w-4" />
              <span>Add to Album</span>
    </DropdownMenuItem>
    </DropdownMenuContent>
      </DropdownMenu>
        </div>
    )
  }
  