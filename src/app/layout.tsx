import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SideMenu from '@/components/widgets/sideBar'
import Logo from '../../public/photo-album-logo.png'
import Image from 'next/image'






const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo Album',
  description: 'Generated by create next app',
}

export default  function  RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className='dark' >
      <body className={inter.className}>
        {/* Header */}
        <div className="border-b  mt-3">
          <div className="flex h-16 items-center container  px-4">
            <Image src={Logo}  width={80} height={80} alt='photo-album-logo'/>
            <p className='font-medium text-4xl'>
              PHOTOS APP
              </p>
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* <Search /> */}
              {/* <UserNav /> */}
            </div>
          </div>
        </div>
        <div className='flex'>
          <SideMenu />
          <div className='w-full px-6 pt-8 '>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
