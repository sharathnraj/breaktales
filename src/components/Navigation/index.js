import React from 'react'
import { Link } from 'gatsby'
import styles from './Navigation.module.css'
import { Box, Icon } from '@chakra-ui/core'

export default () => (
  <Box bg="gray.900" color="white">
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/"><Icon name="home" size="16px" color="white" />&nbsp;&nbsp;Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/"><Icon name="blog" size="16px" color="white" />&nbsp;&nbsp;Blog</Link>
        </li>
      </ul>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <a href="https://www.twitter.com/onabreak5/" target="_blank"><Icon name="twitter" size="16px" color="white" /></a>
        </li>
        <li className={styles.navigationItem}>
        <a href="https://www.instagram.com/breaktales/" target="_blank"><Icon name="instagram" size="16px" color="white" /></a>
        </li>
      </ul>
    </nav>
  </Box>
)
