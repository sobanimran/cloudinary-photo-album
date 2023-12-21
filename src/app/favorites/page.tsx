

import cloudinary from 'cloudinary'
import CloudinaryImage from '../gallery/CloudinaryImage';
import { SearchResult } from '../gallery/page';
import { useEffect } from 'react';
import ForceRefresh from '@/components/force-refresh';


const Favorites = async () => {
   <ForceRefresh />
        const data = await cloudinary.v2.search
          .expression('resource_type:image AND tags=favorite')
          .with_field("tags")
          .sort_by('created_at', 'desc')
          .max_results(5)
          .execute() as { resources: SearchResult[] }
      console.log(data)

  return (
    <section>
      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Favorites Images
        </h1>
     
      </div>
      <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
        {data.resources.map((item, i) => (


          <CloudinaryImage
          path="/favorites"
            key={i}
           imageData={item}
            alt="Description of my image"
            height="300"
            width="400"
            sizes="100vw" />


        ))}
      </div>
    </section>
  )
}

export default Favorites