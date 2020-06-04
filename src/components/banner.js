import React, { useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { ScrollScene } from 'scrollscene'
import { gsap } from 'gsap'

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
            layerOne: file(relativePath: { eq: "1.png" }) {
                ...fluidImage
            },
            layerTwo: file(relativePath: { eq: "2.png" }) {
                ...sharpestImage
            }
            layerThree: file(relativePath: { eq: "3.png" }) {
                ...fluidImage
            }
            layerFour: file(relativePath: { eq: "4.png" }) {
                ...fluidImage
            }
        }
    `)
    
    let component = useRef()
    let layer1 = useRef()
    let layer2 = useRef()
    let layer3 = useRef()
    let layer4 = useRef()
    let bannerText = useRef()
    let sectionBlur = useRef()

    useEffect(() => {

        const tl = gsap.timeline()
        tl
        .to(layer4.current.imageRef.current, {
            duration: 6,
            y: 700
        })
        .to(layer3.current.imageRef.current, {
            duration: 6,
            y: 500
        }, '-=6')
        .to(bannerText.current, {
            duration: 6,
            y: 700
        }, '-=6')
        .to(layer2.current.imageRef.current, {
            duration: 6,
            y: 200
        }, '-=6')
        .to(layer1.current.imageRef.current, {
            duration: 6,
            y: 100
        }, '-=6')
        .to(sectionBlur.current, {
            duration: 6,
            y: 0
        }, '-=6')
        
        const sc = new ScrollScene({
            triggerElement: component.current,
            gsap: {
                timeline: tl,
            },
            duration: '200%',
            triggerHook: 0,
            controller: {}
        })
    })
    
    return (
        <div ref={component} className="banner">
            <div ref={bannerText} className="main-text">Visuals.</div>
            <div className="parallax-image">
                <div className="wrapper fourth">
                    <Img 
                        ref={layer4} 
                        fluid={data.layerFour.childImageSharp.fluid} 
                        style={{minHeight: '100vh'}} />
                </div>
                <div className="wrapper third">
                    <Img 
                        ref={layer3}
                        fluid={data.layerThree.childImageSharp.fluid} 
                        style={{minHeight: '100vh'}} />
                </div>
                <div className="wrapper second">
                    <Img 
                        ref={layer2}
                        fluid={data.layerTwo.childImageSharp.fluid} 
                        style={{minHeight: '100vh'}} />
                </div>
                <div className="wrapper first">
                    <Img 
                        ref={layer1}
                        fluid={data.layerOne.childImageSharp.fluid} 
                        style={{minHeight: '100vh'}} />
                </div>
            </div>
            <div ref={sectionBlur} className="blur"></div>
        </div>
    )
}

export default Banner

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 2009) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    `

export const sharpestImage = graphql`
    fragment sharpestImage on File {
        childImageSharp {
            fluid(maxWidth: 10000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    `