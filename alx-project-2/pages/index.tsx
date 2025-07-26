import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>SoloForge</title>
        <meta name="description" content="Next.js Setup with TypeScript and Tailwind" />
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to SoloForge</h2>
        <p className="text-gray-700">Mastering Project Autonomy with Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </>
  )
}
