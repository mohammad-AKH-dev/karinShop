import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import { Database } from "@/app/appwrite";
import { dataBaseId } from "@/app/utils/utils";
import { Models } from "appwrite";
import { pathsType } from '@/app/types';

async function Header() {
  const res = await Database.listDocuments(dataBaseId,'paths',[])
  const paths: Models.DefaultDocument[] = res.documents

  console.log(paths)

  return (
    <header className='header'>
       <Topbar/>
       <Navbar paths={paths}/>
    </header>
  )
}

export default Header
