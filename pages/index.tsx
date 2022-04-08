import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layouts/Layout';
import { Sidebar } from '../components/ui/Sidebar';
import { Main } from '../components/ui/Main';

const Home: NextPage = () => {
  return (
    <Layout title='Clone de Spotify'>
      <div className="flex">
        <Sidebar />
        <Main/>
      </div>
    </Layout>
  )
}

export default Home
