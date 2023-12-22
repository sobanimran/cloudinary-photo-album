"use server"
import ForceRefresh from '@/components/force-refresh'
import cloudinary from 'cloudinary'

const SetAsFavoriteAction = async (publicid: string, MarkAsFavorite: boolean, ) => {
    
    if (MarkAsFavorite) {

        await cloudinary.v2.uploader.add_tag("favorite", [publicid])
    } else {
        
        await cloudinary.v2.uploader.remove_tag("favorite", [publicid])
    }

    
}

export { SetAsFavoriteAction }