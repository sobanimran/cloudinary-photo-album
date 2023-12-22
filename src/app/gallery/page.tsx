

import UploadButton from './uploadButton';
import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import { ImageGrid } from '@/components/widgets/image-grid';
import GalleryGrid from './galleryGrid';

export type SearchResult = {
  public_id: string;
  tags:string[];

}
const Gallery = async () => {
  const data = await cloudinary.v2.search
    .expression('resource_type:image')
    .with_field("tags")
    .sort_by('created_at', 'desc')
    .max_results(15)
    .execute() as { resources: SearchResult[] }

  return (
    <section>
      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Gallery
        </h1>
        <UploadButton />
      </div>
      <GalleryGrid images={data.resources} />
    
     
    </section>
  )
}

export default Gallery