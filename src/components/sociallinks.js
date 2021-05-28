import React from 'react';
import { Link, graphql, useStaticQuery} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faRedditSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

const iconStyle = {
  fontSize: `1.75em`,
  padding: `0em 0.5em`,
  color: `black`,
  boxShadow: `none`,
}

export default function SocialLinks() {
  const data = useStaticQuery(graphql`
      query SocialLinkQuery {
          site {
              siteMetadata {
                  social {
                      twitter
                      email
                      linkedin
                      github
                      reddit
                  }
              }
          }
      }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <div>
      <a style={iconStyle} href={`mailto:${social.email}`}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a style={iconStyle} href={`https://linkedin.com/in/${social.linkedin}`}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a style={iconStyle} href={`https://github.com/${social.github}`}>
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a style={iconStyle} href={`https://twitter.com/${social.twitter}`}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a style={iconStyle} href={`https://reddit.com/user/${social.reddit}`}>
        <FontAwesomeIcon icon={faRedditSquare} />
      </a>

      <Link style={iconStyle} to={"/rss.xml"}>
        <FontAwesomeIcon icon={faRss} />
      </Link>
    </div>
  )

}