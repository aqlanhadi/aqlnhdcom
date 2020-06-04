import React, { useRef, useEffect } from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
//import Img from 'gatsby-image'

const IndexBlurb = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         layerOne: file(relativePath: { eq: "1.png" }) {
    //             ...fluidImage
    //         },
    //         layerTwo: file(relativePath: { eq: "2.png" }) {
    //             ...sharpestImage
    //         }
    //         layerThree: file(relativePath: { eq: "3.png" }) {
    //             ...fluidImage
    //         }
    //         layerFour: file(relativePath: { eq: "4.png" }) {
    //             ...fluidImage
    //         }
    //     }
    // `)

    return (
        <div className="about-blurb">
            <div className="container">
                <div className="image-boxes">
                    <div className="image-box-wrapper one">
                        <img alt=""
                        src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                        />
                        <h4>WOODS</h4>
                    </div>
                    <div className="image-box-wrapper two">
                        <img alt=""
                        src="https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                        <h4>CITY</h4>
                    </div>
                    <div className="image-box-wrapper three">
                        <img alt=""
                        src="https://images.unsplash.com/photo-1550364387-ffbad4f8e9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                        <h4>MOUNTANS</h4>
                    </div>
                    <div className="image-box-wrapper four">
                        <img alt=""
                        src="https://images.unsplash.com/photo-1550183203-8d3ca82400c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                        <h4>HISTORY</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexBlurb

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 2009) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    `