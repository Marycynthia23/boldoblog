import React from 'react'
import styles from "./BlogPage.module.css"
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import News from '../News/News'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const BlogPage = () => {
  return (
    <div className={styles.HomePageConatainer}>
        <Header/>
        <HeroSection/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default BlogPage