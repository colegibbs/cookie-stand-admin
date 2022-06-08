import Link from 'next/link'

export default function Header() {
  return(
    <header className='flex justify-center bg-green-400 py-6 px-8 text-4xl'>
       <h1>Cookie Stand Admin</h1>
        <Link href={'/overview'}>
            <a className="px-3 py-2 bg-gray-400 rounded text-2xl">Overview</a>
        </Link>
    </header>
  )
}