import React from 'react'
import Head from 'next/head'
//
import Info from '../utils/Info'

const {
  siteRoot,
  siteURL,
  siteTitle,
  siteFacebookAdmins,
  siteFacebook,
  siteTwitter,
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
  wordCount,
}) => {
  const permalink = siteURL ? siteURL + path : ''
  const seriesPermalinks = seriesPaths
    ? seriesPaths.map(path => siteURL + path)
    : []
  return (
    <Head>
      {children}
      {title &&
        <title>
          {title}
        </title>}

      {/* Generic */}
      {path && <link rel='canonical' href={`${siteRoot}${path}/`} />}

      {/* Required Open Graph Info */}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      {type && <meta property='og:type' content={type || 'website'} />}
      {path && <meta property='og:url' content={permalink} />}
      {images &&
        images
          .slice(0, 6)
          .map(d => <meta key={d} property='og:image' content={d} />)}
      <meta property='og:updated_time' content={date} />
      {audio && <meta property='og:audio' content={audio} />}
      <meta property='og:locale' content='en_US' />
      {siteTitle && <meta property='og:site_name' content={siteTitle} />}
      {videos &&
        videos
          .slice(0, 6)
          .map(video =>
            <meta key={video} property='og:video' content={video} />
          )}
      {seriesPaths &&
        seriesPermalinks
          .slice(0, 6)
          .filter(d => d !== permalink)
          .map(serie =>
            <meta key={serie} property='og:see_also' content={serie} />
          )}
      {author &&
        author.social &&
        <meta
          property='article:author'
          content={`https://www.facebook.com/${author.social.siteFacebook}`}
        />}
      {siteFacebook &&
        <meta
          property='article:publisher'
          content={`https://www.facebook.com/${siteFacebook}`}
        />}
      {date && <meta property='article:published_time' content={date} />}
      {date && <meta property='article:modified_time' content={date} />}
      {category && <meta property='article:section' content={category} />}
      {tags &&
        tags
          .slice(0, 6)
          .map(tag => <meta key={tag} property='article:tag' content={tag} />)}

      {/* Facebook Page Admin ID for Domain Insights */}
      {siteFacebookAdmins &&
        <meta property='fb:admins' content={siteFacebookAdmins} />}

      {/* Schema.org markup */}
      {title && <meta itemProp='name' content={title} />}
      {description && <meta itemProp='description' content={description} />}
      {images &&
        images
          .slice(0, 6)
          .map(image => <meta key={image} itemProp='image' content={image} />)}
      {tags && <meta itemProp='keywords' content={tags.join(',')} />}
      {wordCount && <meta itemProp='wordCount' content={wordCount} />}

      {/* Twitter Cards */}
      <meta name='twitter:card' content='summary' />
      {siteTwitter && <meta name='twitter:site' content={siteTwitter} />}
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {images &&
        images.length &&
        <meta name='twitter:image' content={images[0]} />}
    </Head>
  )
}
