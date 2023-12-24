

import UploadButton from './uploadButton';
import cloudinary from 'cloudinary'

import GalleryGrid from './galleryGrid';
import SearchForm from './search-form';

export type SearchResult = {
  public_id: string;
  tags:string[];

}
const Gallery = async ({ searchParams: { search } }: { searchParams: { search: string } }) => {
  const data = await cloudinary.v2.search
    .expression(`resource_type:image${search ?` AND tags=${search}`:''}`)
    .with_field("tags")
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute() as { resources: SearchResult[] }

  return (
    <section>
      <div className='flex flex-col gap-8'>

      <div className='flex justify-between py-8'>

        <h1 className="text-4xl font-bold">
          Gallery
        </h1>
        <UploadButton />
      </div>
      <SearchForm initialSearch={search} />
      <GalleryGrid images={data.resources} />
      </div>
    
     
    </section>
  )
}

export default Gallery