import React from 'react'
import Head from 'next/head'
//
import Info from 'utils/Info'

const {
  siteURL,
  siteTitle,
  siteFacebookAdmins,
  siteFacebook,
  siteTwitter
} = Info

export default ({
  children,
  title,
  description,
  type,
  path,
  images,
  date,
  audio,
  category,
  tags,
  videos,
  author,
  seriesPaths,
  wordCount
}) => {
  const permalink = siteURL ? siteURL + path : ''
  const seriesPermalinks = seriesPaths
    ? seriesPaths.map(path => siteURL + path)
    : []
  return (
    <Head>
      {children}
      {title && <title>{title}</title>}

      {/* Generic */}
      {path && <link rel="canonical" href={path} key="canonical"/>}

      {/* Required Open Graph Info */}
      {title && <meta property="og:title" key='og:title' content={title} />}
      {description && <meta property="og:description" key='og:description' content={description} />}
      {type && <meta property="og:type" key='og:type' content={type || 'website'} />}
      {path && <meta property="og:url" key='og:url' content={permalink} />}
      {images &&
        images
          .slice(0, 6)
          .map(d => <meta key={'og:image_' + d} property="og:image" content={d} />)}
      {date && <meta property="og:updated_time" key='og:updated_time' content={date} />}
      {audio && <meta property="og:audio" key='og:audio' content={audio} />}
      <meta property="og:locale" key='og:locale' content="en_US" />
      {siteTitle && <meta property="og:site_name" key='og:site_name' content={siteTitle} />}
      {videos &&
        videos
          .slice(0, 6)
          .map(video => (
            <meta key={'og:video_' + video} property="og:video"content={video} />
          ))}
      {seriesPaths &&
        seriesPermalinks
          .slice(0, 6)
          .filter(d => d !== permalink)
          .map(serie => (
            <meta key={'og:see_also_' + serie} property="og:see_also" content={serie} />
          ))}
      {author && author.social && (
        <meta
          property="article:author" key='article:author'
          content={`https://www.facebook.com/${author.social.siteFacebook}`}
        />
      )}
      {siteFacebook && (
        <meta
          property="article:publisher" key='article:publisher'
          content={`https://www.facebook.com/${siteFacebook}`}
        />
      )}
      {date && <meta property="article:published_time" key='article:published_time' content={date} />}
      {date && <meta property="article:modified_time" key='article:modified_time' content={date} />}
      {category && <meta property="article:section" key='article:section' content={category} />}
      {tags &&
        tags
          .slice(0, 6)
          .map(tag => <meta key={'article:tag_' + tag} property="article:tag" content={tag} />)}

      {/* Facebook Page Admin ID for Domain Insights */}
      {siteFacebookAdmins && (
        <meta property="fb:admins" key='fb:admins' content={siteFacebookAdmins} />
      )}

      {/* Schema.org markup */}
      {description && <meta itemProp="description" key='description' content={description} />}
      {images &&
        images
          .slice(0, 6)
          .map(image => <meta key={'image_' + image} itemProp="image" content={image} />)}
      {tags && <meta itemProp="keywords" key='keywords' content={tags.join(',')} />}
      {wordCount && <meta itemProp="wordCount" key='wordCount' content={wordCount} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" key='twitter:card' />
      {siteTwitter && <meta name="twitter:site" key='twitter:site' content={siteTwitter} />}
      {title && <meta name="twitter:title" key='twitter:title' content={title} />}
      {description && <meta name="twitter:description" key='twitter:description' content={description} />}
      {images && images.length && (
        <meta name="twitter:image" key='twitter:image' content={images[0]} />
      )}
    </Head>
  )
}
