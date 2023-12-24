
import { SearchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { addImageToAlbum } from "../widgets/actions"

export function Addtoalbum({ image, onClose }: { image: SearchResult, onClose: () => void }) {
  const [AlbumName, setAlbumName] = useState("")
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState);
      if (!newOpenState) {
        onClose();
      }
    }}>
      <DialogTrigger asChild className="">
        <Button variant="ghost" className=" pl-1 ">

          <FolderPlus className="w-4 h-4  ml-2  mr-2"  />
          Add to Album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an Album You want to Move this Image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album-name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="album-name"
              value={AlbumName}
              className="col-span-3"
            />
          </div>

        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setOpen(false)
              await addImageToAlbum(image, AlbumName)
            }}
            type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
