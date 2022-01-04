import React, { useEffect, useState } from 'react'
import classes from './Content.module.css'
import Left from './left/Left'
import Right from './right/Right'
import section1 from '../../assets/images/main-1.png'
import section2 from '../../assets/images/section2.png'
import section3 from '../../assets/images/section3.png'
import Footer from '../footer/Footer'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Content = (props) => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                }
            })
        }
        if (!inView) {
            animation.start({ x: '-100vw' });
        }
        console.log("use effect hook, inView = ", inView)
    }, [inView, animation])

    return (
        <>
            <div className={`container-fluid`}>
                <div className="row">
                    <div className={`col-md-7 ${classes.left}`}>
                        <Left nav={props.nav} />
                    </div>
                    <div className={`col-md-5 ${classes.right}`}>
                        <Right />
                    </div>
                </div>
            </div>
            <motion.div
                ref={ref}
                className={`container-fluid ${classes.section1}`}
                // initial={{ x: '100vw' }}
                // animate={{ x: 0 }}
                // transition={{ type: 'spring', duration: 2, bounce: 0.4 }}
                animate={animation}
            >
                <div className="row">
                    <div className="col-md-3">
                        <img src={section1} alt="qna" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className={"col-md-6 " + classes.content}>
                        <h1>Questions? to share and ask</h1>
                        <p>Search various answered questions and share your thoughts on others questions as well.</p>
                    </div>
                </div>
            </motion.div>
            <div className={`container-fluid ${classes.section2}`}>
                <div className="row">
                    <div className={"col-md-6 " + classes.content}>
                        <h1>Post what's on your mind</h1>
                        <p>
                            Got something on your mind? Well share them with others and grow your followers.
                            You can create posts that interests other users.
                        </p>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <img src={section2} alt="qna" />
                    </div>
                </div>
            </div>
            <div className={`container-fluid ${classes.section3}`}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={section3} alt="qna" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className={"col-md-6 " + classes.content}>
                        <h1>Connect with people you like</h1>
                        <p>
                            Know someone? Search them and follow them to recieve notifications for their content
                            and other updates about them.
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Content
