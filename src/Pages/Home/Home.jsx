import React from 'react'
import { Container } from 'react-bootstrap'
import { NavbarAllPages } from '../../Components/Navbar/NavbarAll'
import CarouselHome from '../../Components/Carousel/Carousel'
import LolabSpace from '../../Components/LolabSpace/LolabSpace'
import FlashSale from '../../Components/FlashSale/FlashSale'
import Banner from '../../Components/Banner/Banner'
import HiddenGems from '../../Components/HiddenGems/HiddenGems'
import Footer from './../../Components/Footer/Footer'
import FavoritePlace from '../../Components/FavoritePlace/FavoritePlace'

function Home() {
  return (
    <div>
      <NavbarAllPages />
      <Container>
        <CarouselHome />
        <LolabSpace />
        <FlashSale />
        <Banner />
        <HiddenGems />
        <FavoritePlace />
      </Container>
      <Footer />
    </div>
  )
}

export default Home