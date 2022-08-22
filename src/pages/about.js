import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio";

export default function AboutPage() {
  return (
    <Layout title={"@emangini"} location={"/about"}>


      <h2>whoami</h2>
      <h3>I'm a technologist</h3>
      <p>
        I enjoy strategic discussions that construct and refine technical vision.

        I also have an unquenchable thirst for the tactical elements of delivery. Whether we call it engineering excellence
        or the path to sensible defaults, finding ways to optimize the time and effort spent delivering solutions to
        our constituents is something I enjoy spending time on.

        I'm often described as very meta. I love to be an architect of architects or a leader of leaders.
      </p>

      <h3>I design things...</h3>
      <p>
        I have a passion for distributed systems, problems of scale and the underlying technologies that comprise these
        scenarios. Holistically, I consider myself a generalist striving for technological understanding both a
        mile wide and a mile deep. While I know tradeoffs of time and urgency prevent this from being possible, the
        goal keeps me nimble.

        I consider myself a perpetual student of patterns and approaches.
      </p>

      <h3>I still code...</h3>
      <p>
        I try hard to keep my hands from wandering too far from the keyboard. I'm not sure I'm completely tech agnostic,
        but I definitely lean towards polyglot. The characteristics of different languages have pros and cons that constitute
        tradeoffs in architectural decisions just as any other technology.

        I've delivered projects over the years in a number of languages and various tech stacks.
      </p>


      <h3>I'm a people leader...</h3>
      <p>
        I love coaching and mentoring, whether it be fresh-out individual contributors or other leaders looking towards
        the next leg of their journey.

        I believe in generative culture, ally-ship, bottoms-up, and servant style leadership. Software, technology and
        innovation are all group efforts. My goal is to present a bias towards teamwork.
      </p>


      <h3>I'm always curious...</h3>
      <p>
        I still have that insatiable curiosity of a 4 year old asking "why"? I believe that innovation, progress and
        quality comes from a culture built on asking questions rather than "having" answers.
      </p>

      <p>
        I believe that ideal process is when it provides strong enough guard rails to protect us from our own flaws,
        ignorance and inconsistencies, however giving us enough elbow room to scale through experimentation, failure and
        learning.

        The individual players change from time to time, but the underlying scope remains the same. Striving for the
        "best" all in one go often yields no results, but getting "something" out there allows us to collect
        feedback and improve, continuously.

        None of that matters, though, if we don't foster and maintain a culture that supports it.
      </p>

      <p>
        I'm a huge open source advocate. You'll find me poking around a number of open source foundations. Most of my
        background hovers within the distributed systems space. I've spent time in the deepest recesses of the
        domain as well as at the much more colorful front facing components.

        My best days are the ones where I've somehow made something a little easier, more valuable or more
        positive for someone else.
      </p>
      <hr />
      <footer>
        <Bio />
      </footer>

    </Layout>
  )
}
