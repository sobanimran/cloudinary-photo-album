"use server"
import ForceRefresh from '@/components/force-refresh'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'

const SetAsFavoriteAction = async (publicid: string, MarkAsFavorite: boolean,path:string ) => {
    
    if (MarkAsFavorite) {

        await cloudinary.v2.uploader.add_tag("favorite", [publicid])
    } else {
        
        await cloudinary.v2.uploader.remove_tag("favorite", [publicid])
    }
    await new Promise((resolve:any)=>setTimeout(resolve,1000))
    revalidatePath(path)
    
}

export { SetAsFavoriteAction }