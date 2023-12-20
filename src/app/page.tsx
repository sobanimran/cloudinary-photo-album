"use client"
import { CldUploadButton } from 'next-cloudinary';
export default function Home() {
  return (
    <div>
    <CldUploadButton uploadPreset="<Upload Preset>" />
    </div>
  )
}
