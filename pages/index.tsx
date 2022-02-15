import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SEO from '../components/SEO'
import HomeLayout from '../components/HomeLayout'


export async function getStaticProps() {
  const releases = await (await import("../utils/releases")).default()
  // console.log(releases)
  // const pain = await releases
  return {
    props: {
      releases: releases
    },
  }
}
// @ts-ignore
const Home = ({ releases }) => {
  return (
    <div >
      <HomeLayout HomeData={releases}>

      </HomeLayout>


    </div>
  )
}

export default Home
