import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './ArticlePreview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <img className={styles.previewImage} src={article.heroImage.file.url} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))}
  </div>
)
