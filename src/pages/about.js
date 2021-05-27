import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio";

export default function AboutPage() {
  return (
    <Layout title={"@emangini"} location={"/about"}>


      <h2>whoami</h2>
      <p>
        I'm a software architect and technologist, but I make sure my hands never wander too far from the
        keyboard. I'm not sure I'm completely tech agnostic, but I definitely lean towards polyglot. The characteristics of
        different languages have pros and cons that constitute tradeoffs in architectural decisions just as any other
        technology.
      </p>

      <p>
        I believe that ideal process is when it provides strong enough guard rails to protect us from our own flaws,
        ignorance and inconsistencies, however giving us enough elbow room to scale through experimentation, failure and
        learning.
      </p>

      <p>
        I'm an open source advocate. Some of my favorite subjects are platform, concurrency, databases and distributed
        design problems. However, a close second is everything else. Whether it be for work or for play, I love solving
        problems. My best days are the ones where I've somehow made something a little easier, more valuable or more
        positive for someone else.
      </p>
      <hr />
      <footer>
        <Bio />
      </footer>

    </Layout>
  )
}
