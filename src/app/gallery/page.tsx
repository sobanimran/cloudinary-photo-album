

import UploadButton from './uploadButton';
import cloudinary from 'cloudinary'
import CloudinaryImage from './CloudinaryImage';

export type SearchResult = {
  public_id: string;
  tags:string[];

}
const Gallery = async () => {
  const data = await cloudinary.v2.search
    .expression('resource_type:image')
    .with_field("tags")
    .sort_by('created_at', 'desc')
    .max_results(5)
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
          path="/gallery"
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

export default Gallery