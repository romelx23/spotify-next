import React from 'react'
import { GetServerSideProps } from 'next'
import { Layout } from '../components/layouts/Layout';
import Image from 'next/image';

const Login = () => {
  return (
    <Layout title='Login'>
      <div className="w-full min-h-screen flex flex-col space-y-10 items-center justify-center">
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
        alt='Login'
        width={190}
        height={190}
      />
      <button className='bg-[#1DB954] p-5 rounded-full'>
        Ingresa con Google
      </button>
      </div>
    </Layout>
  )
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    props: {
      name: 'login'
    }
  }
}