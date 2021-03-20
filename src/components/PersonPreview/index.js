import React from 'react'
import { Image, Box } from "@chakra-ui/core"

import styles from './PersonPreview.module.css'

export default ({ person }) => (
  <Box textAlign="center" className={styles.person}>
    <Image
      size="250px"
      src={person.image ? person.image.file.url : null}
      alt={person.name}
      fallbackSrc="https://via.placeholder.com/250"
    />
    <h3 className={styles.previewTitle}>{person.title}</h3>
    <p>{person.shortBio.shortBio}</p>
  </Box>
)
