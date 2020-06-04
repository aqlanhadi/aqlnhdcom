import React, { useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import gsap, { TweenMax, TimelineMax } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

gsap.registerPlugin( CSSPlugin )

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
    
    let layer1 = useRef(null)
    let layer2 = useRef(null)
    let layer3 = useRef(null)
    let layer4 = useRef(null)
    let bannerText = useRef()
    let sectionBlur = useRef()
    let blurb = useRef()

    useEffect(() => {
        let controller = new ScrollMagic.Controller();
        let timeline = new TimelineMax()
        timeline.to(
            layer4.current.imageRef.current,{
                duration: 10,
                y: -100
            }).to(
            layer3.current.imageRef.current,{
                duration: 10,
                y: -300
            }, '-=10').to(
            layer2.current.imageRef.current,{
                duration: 10,
                y: -400
            }, '-=10').to(
            layer1.current.imageRef.current,{
                duration: 10,
                y: -500
            }, '-=10').to(
                bannerText.current, {
                    duration: 10,
                    y: -600
                }, '-=10'
            ).to(
                sectionBlur.current, {
                    duration: 10,
                    y: -500
                }, '-=10'
            )
        
        let scene = new ScrollMagic.Scene({
            duration: '200%',
            triggerHook: 0
        })
        .setTween(timeline)
        .addTo(controller)

    })
    
    return (
        <div className="banner">
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