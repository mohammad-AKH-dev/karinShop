import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
type BreadcrumbsPropsType = {
  children: React.ReactNode
}

function BreadCrumbs({children}: BreadcrumbsPropsType) {
  return (
    <div className='breadcrumbs container px-6 max-w-[25%]'>
       <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
         <HomeIcon/>
          <BreadcrumbLink asChild>
            <Link href="/">صفحه اصلی</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronLeftIcon/>
        </BreadcrumbSeparator>
           {children}
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  )
}

export default BreadCrumbs
