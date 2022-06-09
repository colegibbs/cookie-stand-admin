import Head from 'next/head'
import CreateForm from '../componenets/CreateForm'
import Footer from '../componenets/Footer'
import Header from '../componenets/Header'
import ReportTable from '../componenets/ReportTable'
import { useState } from 'react'

export default function Home() {

  const [cookieStands, setCookieStands] = useState("")

  function handleLocationForm(cookieStand){
    setCookieStands([...cookieStands, cookieStand])
    // event.preventDefault()
    // setLocation(event.target.location.value)
    // setMin(event.target.minCustomer.value)
    // setMax(event.target.maxCustomer.value)
    // setAvgCookiesPerSale(event.target.avgCookiesPerSale.value)
    // event.target.reset()
  }

  return (
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header/>
    <main className='flex flex-col items-center justify-center space-y-4'>
      <CreateForm onSubmit={handleLocationForm}/>
      <ReportTable cookieStands={cookieStands}/>
      <Footer cookieStandCount={cookieStands.length}/>
    </main>
    </>
    // <>
    // <Head>
    //   <title>Cookie Stand Admin</title>
    // </Head>
    // <Header />
    // <main className='flex flex-col items-center'>
    //   <CookieForm onSubmit={handleLocationForm}/>
    //   <CookieTable />
    //   <CookieDataPreview 
    //     location={ location } 
    //     minCustPerHour={minCustPerHour} 
    //     maxCustPerHour={maxCustPerHour}
    //     AvgCookiesPerSale={AvgCookiesPerSale}
    //     />
    // </main>
    // <Footer copyWriteYear = "2022"/>
    // </>
  )
}

// function Header() {
//   return(
//     <header className='bg-green-400 py-6 px-8 text-4xl'>
//       <h1>Cookie Stand Admin</h1>
//     </header>
//   )
// }

// function CookieForm(props) {
//   return(
//     <form onSubmit={props.onSubmit} className='bg-green-300 p-6 flex flex-col items-center w-3/5 mt-6 rounded-md'>
//       <h2 className='text-2xl'>Create Cookie Stand</h2>
//       <div className='py-6 float-left'>
//         <label className='px-4' htmlFor="location">Location</label>
//         <input className='w-full' name="location"/>
//       </div>
//       <div className='flex space-x-4'>
//         <div className='flex flex-col w-100'>
//           <label htmlFor="minCustomer">Minimum Customers Per Hour</label>
//           <input name="minCustomer"/>
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor="maxCustomer">Maximum Customers Per Hour</label>
//           <input name="maxCustomer"/>
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor="avgCookiesPerSale">Average Cookies Per Sale</label>
//           <input name="avgCookiesPerSale"/>
//         </div>
//         <button type="submit" className='bg-green-500 w-full'>Create</button>
//       </div>
//     </form>
//   )
// }

// function CookieTable() {
//   return(
//     <p className='py-6'>Report Table Coming Soon...</p>
//   )
// }

// function CookieDataPreview(props){
//   return(
//     <>
//     <p>alive {props.location}</p>
//     <p className='py-6'>&#123;&quot;location&quot;:{props.location},&quot;minCustomers&quot;:{props.minCustPerHour},&quot;maxCustomers&quot;:{props.maxCustPerHour},&quot;avgCookies&quot;:{props.AvgCookiesPerSale}&#125;</p>
//     </>
//   )
// }

// function Footer(props) {
//   return(
//     <footer className='bg-green-400 py-6 px-8'>
//       <p>&copy;{props.copyWriteYear}</p>
//     </footer>
//   )
// }
