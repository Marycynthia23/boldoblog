import React from 'react'
import styles from "./News.module.css"
import userpic from "../../images/picperson.png"
import userpic2 from "../../images/userpic2.png"
import userpic3 from "../../images/userpic3.png"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"
import card4 from "../../images/card4.png"
import card5 from "../../images/card5.png"
import card6 from "../../images/card6.png"


const News = () => {

    const cardContent = [
        {
            id: 1,
          category: 'Category',
          date: 'November 22, 2021',
          description: 'Pitch termsheet backing validation focus release.',
          image: card1,
          userimage: userpic,
          username: 'Chandler Bing'
        },
        {
            id: 2,
            category: 'Category',
            date: 'November 22, 2021',
            description: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            image: card2,
            userimage: userpic2,
            username: 'Rachel Green'
          },
          {
            id: 3,
            category: 'Category',
            date: 'November 22, 2021',
            description: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            image: card3,
            userimage: userpic3,
            username: 'Monica Geller'
          },
          {
            id: 4,
            category: 'Category',
            date: 'November 22, 2021',
            description: 'Pitch termsheet backing validation focus release.',
            image: card4,
            userimage: userpic,
            username: 'Chandler Bing'
          },
          {
            id: 5,
            category: 'Category',
            date: 'November 22, 2021',
            description: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            image: card5,
            userimage: userpic2,
            username: 'Rachel Green'
          },
          {
            id: 6,
            category: 'Category',
            date: 'November 22, 2021',
            description: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            image: card6,
            userimage: userpic3,
            username: 'Monica Geller'
          }
      ];


  return (
    <div className={styles.NewsContainer}>
        <p className={styles.Title}>Latest news</p>
        <div className={styles.Cards}>
            {cardContent.map((item)=>{
            return(
                <div className={styles.Card} key={item.id}>
                <img src={item.image} className={styles.CardImage} />
                <div className={styles.CardInfo}>
                    <div className={styles.CategoryContent}>
                        <p className={styles.Category}>{item.category}</p>
                        <p className={styles.CategoryDate}>{item.date}</p>
                    </div>
                    <p className={styles.Desc}>{item.description}</p>
                    <div className={styles.UserDetails}>
                        <img src={item.userimage} className={styles.UserPic}/>
                        <p className={styles.User}>{item.username}</p>
                    </div>
             </div>
            </div>
            )
            })}
            
        </div>
        <div className={styles.Btn}><a className={styles.BtnLink}>Load more</a></div>

    </div>
  )
}

export default News