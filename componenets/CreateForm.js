export default function CreateForm(props) {

  function handleSubmit(event) {
    event.preventDefault()
    let cookieStand = {
      location: event.target.location.value,
      minCustomer: event.target.minCustomer.value,
      maxCustomer: event.target.maxCustomer.value,
      avgCookiesPerSale: event.target.avgCookiesPerSale.value,
    }
    props.onSubmit(cookieStand)
    event.target.reset()
  }

  return(
    <form onSubmit={handleSubmit} className='bg-green-300 p-6 flex flex-col items-center w-3/5 mt-6 rounded-md'>
       <h2 className='text-2xl'>Create Cookie Stand</h2>
       <div className='py-6 flex'>
         <label className='px-4' htmlFor="location">Location</label>
         <input className='w-full' name="location"/>
       </div>
       <div className='flex space-x-4'>
         <div className='bg-green-500 flex flex-col w-100'>
           <label htmlFor="minCustomer">Minimum Customers Per Hour</label>
           <input name="minCustomer"/>
         </div>
         <div className='bg-green-500 flex flex-col'>
           <label htmlFor="maxCustomer">Maximum Customers Per Hour</label>
           <input name="maxCustomer"/>
         </div>
         <div className='bg-green-500 flex flex-col'>
           <label htmlFor="avgCookiesPerSale">Average Cookies Per Sale</label>
         <input name="avgCookiesPerSale"/>
         </div>
         <button type="submit" className='bg-green-500 w-full'>Create</button>
       </div>
     </form>
  )
}