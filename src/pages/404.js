import React from "react"
import Helmet from "react-helmet"
import { Layout, Hero } from "components"

class FourOhFour extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div style={{ background: "#fff" }}>
          <Helmet title="404" />
          <Hero data={{
            imageSrc: "home.jpg",
            heading: "404",
            subHeading: "It looks like you're lost :("
          }} />
        </div>
      </Layout>
    )
  }
}

export default FourOhFour
