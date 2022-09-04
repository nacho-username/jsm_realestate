import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <main className='my-24'>{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
