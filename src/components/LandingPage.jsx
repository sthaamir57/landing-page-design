import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const ref2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref2,
    // container: ref2,
    offset: ["start start", "end center"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const expand = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const op = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, 800]);

  // console.log(scrollYProgress);

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();
  //     }

  //   )()
  // }, [])

  return (
    <>
      {/* <div className="h-[20vh]"></div> */}
      <section ref={ref2} data-scroll-container className="flex items-center h-[100vh] flex-col pt-40 relative">
        {/* <div data-scroll data-scroll-sticky className="w-full flex justify-center"> */}
        <motion.h1
        data-scroll data-scroll-speed="0.2"
          className="inline-block mt-10 text-center text-neutral-100 font-PPMori font-normal [font-size:_clamp(50px,7.5vw,144px)] w-[18ch] leading-none"
          // style={{translateY : scrollY}}
          // style={{x}}
          // style={{opacity: scrollYProgress}}
        >
            <motion.span
            style={{translateX : x1}}
            className="inline-block"
            >
            A design studio made
            </motion.span>
            
            <motion.span 
              style={{translateX : x2}}
              className="inline-block"
            >
              to elevate your brand
            </motion.span>
        </motion.h1>
        {/* </div> */}

        
      <motion.div
      data-scroll data-scroll-speed="0.9"
        className="w-full h-auto px-8"
      >
          <motion.div
            className="scale-75 translate-y-6 origin-bottom"
            style={{scale: expand, opacity: op}}
          >
            <picture>
              <img className='w-full h-full object-cover' src="./img/img.png" />
            </picture>
          </motion.div>
      </motion.div>
      </section>
      {/* <div className="h-[20vh]"></div> */}

  
      {/* <video className="w-full" src="../assets/video/landing-video.mp4" autoPlay loop></video> */}
      {/* <video className="w-full" src="./landing-video.mp4" autoPlay loop></video> */}


      
      

    </>
  )
}

export default LandingPage