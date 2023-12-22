

import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import { SearchResult } from '../gallery/page';
import ForceRefresh from '@/components/force-refresh';
import FavoritesList from './favoritesList';


const Favorites = async () => {
  const data = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .with_field("tags")
    .sort_by('created_at', 'desc')
    .max_results(5)
    .execute() as { resources: SearchResult[] }
  console.log(data)

  return (
    <section>
      <ForceRefresh />
      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Favorite Images
        </h1>

      </div>
      <FavoritesList initialResources={data.resources} />

    {/* </div> */}
    </section >
  )
}

export default Favorites
