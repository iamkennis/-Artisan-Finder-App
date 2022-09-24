import Head from 'next/head'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import NavBar from '../components/Home/NavBar'
import Layout from '../components/layouts/Layout'

export default function Home() {
  return (
		<Layout>
			<Head>
				<title>Artist Finder</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<Features />
		</Layout>
	);
}
