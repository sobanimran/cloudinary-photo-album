"use client"
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const UploadButton = () => {
  const router =useRouter()
  const [upload, setupload] = useState(false)
  console.log("refresh")
  return (
    
        <Button asChild >
          <div className='flex gap-2'>

          <CldUploadButton
            onUpload={(result) => {
              setTimeout(() => {
                 router.refresh()
                setupload(true)
                
              }, 1000);
            }}
            uploadPreset="zl3wsmdm"
            className='flex gap-x-2 items-center' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          <div className='font-semibold'>Upload</div>
            </CldUploadButton>
            </div>
        </Button>
     
  )
}

export default UploadButton