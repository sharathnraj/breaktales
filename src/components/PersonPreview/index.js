import React from 'react'
import { Link } from 'gatsby'
import { Image, Box, Stack } from "@chakra-ui/core"

import styles from './PersonPreview.module.css'

export default ({ person }) => (
  <Box textAlign="center" className={styles.person}>
    <Image
      size="250px"
      src={person.image ? person.image.fluid.src : null}
      alt={person.name}
      fallbackSrc="https://via.placeholder.com/250"
    />
    <h3 className={styles.previewTitle}>{person.title}</h3>
    <p>{person.shortBio.shortBio}</p>
  </Box>
)
