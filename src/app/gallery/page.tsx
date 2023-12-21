
import { CldImage } from 'next-cloudinary';
import UploadButton from './uploadButton';
import cloudinary from 'cloudinary'
import CloudinaryImage from './CloudinaryImage';

type SearchResult = {
  public_id: string;

}
const Gallery = async () => {
  const data = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute() as { resources: SearchResult[] }

  return (
    <section>
      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Gallery
        </h1>
        <UploadButton />
      </div>
      <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
        {data.resources.map((item, i) => (
         

            <CloudinaryImage 
            key={i}
            src={item.public_id} 
            alt="Description of my image" 
            height="300" 
            width="400" 
            sizes="100vw" />

          
        ))}
      </div>
    </section>
  )
}

export default Gallery