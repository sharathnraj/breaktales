import React from 'react'

import styles from './Hero.module.css'

export default ({ data }) => (
  <div className={styles.hero} style={{ backgroundImage: `url(${data.imageSrc})` }}>
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>{data.heading}</h1>
      <p className={styles.heroTitle}>{data.subHeading}</p>
      <p>{data.description}</p>
    </div>
  </div>
)
