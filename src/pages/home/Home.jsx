import React from 'react'
import Slider from '../../_components/slider/Slider'
import FeaturedProducts from '../../_components/featuredProducts/FeaturedProducts'
import Categories from '../../_components/categories/Categories'
import Contact from '../../_components/conatct/Contact'

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home