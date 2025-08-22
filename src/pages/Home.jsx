import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import Policy from '../components/Policy'
import Subscribe from '../components/Subscribe'

const Home = () => {
    return (<>
        <Hero/>
        <LatestCollection/>
        <BestSellers/>
        <Policy/>
        <Subscribe/>
        </>
    )
}

export default Home
