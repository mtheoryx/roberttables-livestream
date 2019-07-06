import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import profile from "../images/profile-pic.png"
import Layout from "../components/layout"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Side = styled.div`
  display: none;
  @media screen and (min-width: 740px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    margin: 0 5%;
    img {
      align-self: center;
      flex: 0 0 auto;
      margin: 0;
      padding: 0;
    }
  }
`

const Main = styled.div`
  width: 100%;
  @media screen and (min-width: 740px) {
    width: 50%;
    margin: 0 5%;
  }
`

const IndexPage = () => (
  <Layout>
    <Helmet
      title="Home | Roberttables"
      meta={[
        {
          name: "description",
          content: "Stream website for Roberttables on Twitch",
        },
      ]}
    />
    <Container>
      <Side>
        <img src={profile} alt="Author Profile" />
      </Side>
      <Main>
        <h1>Welcome to the Robert Table's Table.</h1>
        <p>
          I started getting involved in the Twitch Dev community as a viewer and
          supporter (bits/subs) quite a while ago.
        </p>
        <p>
          Then I started getting more inolved in chats, helping people find
          resources, learn how the platform works, moderating other people's
          channels, and genuinely spreading awareness of even more dev
          streamers.
        </p>
        <p>
          Then the day after Christmas, 2018, I decided to just Do it Live and
          started this stream.
        </p>
        <h2>Would you like to learn with me?</h2>
        <p>
          We learn fast, and we fail fast. And we aren't afraid to do it live on
          stream. We recover, we learn more, and we just keep swimming.
        </p>
        <p>
          If you're interested in Node, Docker, Cloud, hardware, electronics,
          then you're in the right place. And if not, no worries, I'm going to
          help you find the best place for you to learn what you're interested
          in!
        </p>
        <h3>We Do it Live</h3>
        <p>
          No fear, no worries, no problem. We break stuff, we fix stuff. And we
          learn from every failure.
        </p>
        <p>
          We're builders. Creators. Lovers of technology. Passionate learners.
          And you are, too.
        </p>
        <p>
          We don't bash technologies, although it's fine to have opinions. We
          try to help others.
        </p>
        <h3>Get Involved in the Community</h3>
        <p>
          Come visit us at{" "}
          <a
            href="https://twitch.tv/roberttables"
            target="_blank"
            rel="noopener noreferrer"
          >
            our stream
          </a>
          , or check out the diverse talent on the{" "}
          <a
            href="https://www.twitch.tv/team/livecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Coders team
          </a>
          .
        </p>
      </Main>
    </Container>
  </Layout>
)

export default IndexPage
