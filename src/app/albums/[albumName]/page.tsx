

import cloudinary from 'cloudinary'

import { SearchResult } from '@/app/gallery/page';
import AlbumGrid from './albumGrid';
import ForceRefresh from '@/components/force-refresh';


const Gallery = async ({params:{albumName}}:{params:{albumName:string}}) => {
  const data = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .with_field("tags")
    .sort_by('created_at', 'desc')
    .max_results(15)
    .execute() as { resources: SearchResult[] }

  return (
    <section>
        <ForceRefresh />
      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Album {albumName}
        </h1>
      </div>
      <AlbumGrid images={data.resources} />
    
     
    </section>
  )
}

export default Gallery