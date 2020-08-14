import React from 'react'

// components
import MaxWidthContainer from './MaxWidthContainer'
import LinkButton from './LinkButton'
// styles
import VideoSectionStyles from './VideoSection.module.scss'

// filesystem
import videoshowcase from '../images/mockupdemo.mp4'

const VideoSection = () => {
    return (
        <div className={VideoSectionStyles.videoSection}>

            <MaxWidthContainer>
                <h2>Manual work is outdated</h2>


                <div className={VideoSectionStyles.videoSectionGrid}>
                    <div className={VideoSectionStyles.videoSectionGridItem}>
                        <video autoPlay loop muted>
                            <source src={videoshowcase} />
                        </video>
                    </div>

                    <div className={VideoSectionStyles.gridItem}>
                        <h3>Use any URL to get a high quality mockup</h3>
                        <p>Showcase your new website or highligt a feature of your webapp in a high quality and up to date mockup device</p>

                        <LinkButton href="generate">Try now, its free!</LinkButton>
                    </div>
                </div>



            </MaxWidthContainer>
        </div>
    )
}

export default VideoSection
