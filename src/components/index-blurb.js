import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
//import { useStaticQuery, graphql } from 'gatsby'
//import Img from 'gatsby-image'

const IndexBlurb = () => {

    const section = useRef()

    const intersection = useIntersection(section, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    })

    const fadeOut = element => {
        console.log(element, " out.")
        gsap.to(element, 1, {
            opacity: 0,
            ease: 'power4.out',
            stagger: {
                amount: -0.3
            }
        })
    }

    const fadeIn = element => {
        console.log(element, " in.")
        gsap.to(element, 1, {
            opacity: 1,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        })
    }
    

    useEffect(() => {
        console.log(intersection)
        intersection && intersection.isIntersecting
        ? fadeIn(".fade")
        : fadeOut(".fade")
        
    })

        

    

    return (
        <div className="about-blurb">
            <div className="container">
                <div ref={section} className="inner-container">
                    <div className="image-container">
                        <div className="row">
                            <div className="image-box-wrapper">
                                <img class="fade" alt=""
                                src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                                />
                            <h4>Woods.</h4>
                            </div>
                            <div className="image-box-wrapper">
                                <img class="fade" alt=""
                                src="https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <h4>City.</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="image-box-wrapper">
                                <img class="fade" alt=""
                                src="https://images.unsplash.com/photo-1550364387-ffbad4f8e9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <h4>Mountains.</h4>
                            </div>
                            <div className="image-box-wrapper">
                                <img class="fade" alt=""
                                src="https://images.unsplash.com/photo-1550183203-8d3ca82400c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <h4>History.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="text-blurb">
                        <h1>Paragraph.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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