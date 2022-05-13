import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio";

export default function AboutPage() {
  return (
    <Layout title={"@emangini"} location={"/about"}>


      <h2>whoami</h2>
      <p>
        I'm both a software technologist and a people leader.

        I enjoy strategic discussions that construct and refine vision and I have an unquenchable thirst for the
        tactical elements of delivery.

        I love coaching and mentoring, whether it be fresh-out individual contributors or other leaders looking towards
        the next leg of their journey.

        I'm often described as very "meta". I love to be an "architect of architects" or a "leader of leaders".
      </p>

      <p>>
        I try hard to keep my hands from wandering too far from the keyboard. I'm not sure I'm completely tech agnostic,
        but I definitely lean towards polyglot. The characteristics of different languages have pros and cons that constitute
        tradeoffs in architectural decisions just as any other technology.

        I've whet my appetite over the years delivering projects with:
          Java, Kotlin, Scala, C, C++, Python, Ruby, PHP, Perl, Erlang, Go, Swift, JavaScript and C#
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
