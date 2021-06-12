import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton
} from "react-share"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn,  faRedditAlien , faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default function ShareStrip(props) {
  const url = props.site_url + props.path

  return (
    <div className={"share-strip"}>
      <FacebookShareButton url={url} className={"share-strip-button"}>
        <FontAwesomeIcon icon={faFacebookF} />
      </FacebookShareButton>

      <TwitterShareButton url={url} className={"share-strip-button"}>
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} className={"share-strip-button"}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </LinkedinShareButton>

      <RedditShareButton url={url} className={"share-strip-button"}>
        <FontAwesomeIcon icon={faRedditAlien} />
      </RedditShareButton>

      <EmailShareButton url={url} className={"share-strip-button"}>
        <FontAwesomeIcon icon={faEnvelope} />
      </EmailShareButton>
    </div>
  )
}