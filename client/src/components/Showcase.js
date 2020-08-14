import React from 'react'

import MaxWidthContainer from './MaxWidthContainer'
import LinkButton from './LinkButton'

import mockupExample1 from '../images/mockupexample1.png'
import mockupExample2 from '../images/mockupexample2.png'
import mockupExample3 from '../images/latest-devices.png'
import mockupExample4 from '../images/mockupexample4.png'

import ShowcaseStyles from './Showcase.module.scss'

const Showcase = () => {
    return (
        <section id="showcase" className={ShowcaseStyles.showcase}>
            <h2>Example mockups</h2>

            <MaxWidthContainer>
                <div className={ShowcaseStyles.showcaseGrid}>
                    <div className={ShowcaseStyles.showcaseGridItem}>
                        <img src={mockupExample1} alt="mockup created by swiftmockup" />
                    </div>
                    <div className={ShowcaseStyles.showcaseGridItem}>
                        <img src={mockupExample2} alt="mockup created by swiftmockup" />
                    </div>
                    <div className={ShowcaseStyles.showcaseGridItem}>
                        <img src={mockupExample3} alt="mockup created by swiftmockup" />
                    </div>
                    <div className={ShowcaseStyles.showcaseGridItem}>
                        <img src={mockupExample4} alt="mockup created by swiftmockup" />
                    </div>
                </div>

            </MaxWidthContainer>
            <LinkButton href="/#generate">Get your own now!</LinkButton>

        </section>
    )
}

export default Showcase
