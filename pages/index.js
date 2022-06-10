import Head from 'next/head'
import CookieStandAdmin from '../componenets/CookieStandAdmin'
import LoginForm from '../componenets/LoginForm'
import { useAuth } from '../contexts/auth'


export default function Home() {

  // const [cookieStands, setCookieStands] = useState("")
  const {user, login} = useAuth()

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
    {user ?
      <CookieStandAdmin />
      :
      <LoginForm onLogin={login} />
    }
    {/* <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header/>
    <main className='flex flex-col items-center justify-center space-y-4'>
      <CreateForm onSubmit={handleLocationForm}/>
      <ReportTable cookieStands={cookieStands}/>
      <Footer cookieStandCount={cookieStands.length}/>
    </main> */}
    </>
  )
}

