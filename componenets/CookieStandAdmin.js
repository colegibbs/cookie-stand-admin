import CreateForm from '../componenets/CreateForm';
import Footer from '../componenets/Footer';
import Header from '../componenets/Header';
import ReportTable from '../componenets/ReportTable';
import useResource from '../hooks/useResource';
import { useState } from 'react';

export default function CookieStandAdmin(props) {

  const [cookieStands, setCookieStands] = useState("")
  const {resources, deleteResource} = useResource();

  function handleLocationForm(cookieStand){
    setCookieStands([...cookieStands, cookieStand])
  }

  return (
    <>
    <Header/>
    <main className='flex flex-col items-center justify-center space-y-4'>
      <CreateForm onSubmit={handleLocationForm}/>
      <ReportTable cookieStands={resources || []} deleteStand={deleteResource}/>
      <Footer cookieStandCount={cookieStands.length}/>
    </main>
    </>
  )
}