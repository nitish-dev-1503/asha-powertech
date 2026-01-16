'use client'
import { motion } from "motion/react"
import { useBlur } from "./useBlur";
import AboutUsNew from "./components/about-new";
import Products from "./components/products";
import PhotoGallery from "./components/photo-gallery";

export default function Home() {
  return (
    <main className="">
      <div className="w-full overflow-hidden px-2 md:px-4 lg:px-6 ">
        <motion.div
          className=" aspect-square md:h-screen m-auto overflow-hidden relative flex items-center justify-center w-full rounded-2xl ">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, transition: { duration: 2, ease: "linear" } }}
            autoPlay
            preload="auto"
            loop
            muted
            playsInline
            src="/Cloth_02.mp4"
            className=" object-cover min-h-screen aspect-video absolute top-0 left-0 w-full h-full grayscale "
          />
          <div className="max-w-5xl z-20 text-center px-2 sm:px-4 flex flex-col items-center gap-12 ">
            {useBlur("Reliable Power Solutions You can Trust", {
              className: " text-neutral-900 text-3xl sm:text-5xl lg:text-7xl font-bold"
            })}

            {/* <ButtonWithIcon
              icon={Mail}
              onClick={() => window.location.href = 'mailto:contact@ashapowertech.com'}
              className=""
            >
              Contact Us
            </ButtonWithIcon> */}
          </div>
        </motion.div>
      </div >

      <AboutUsNew />
      <Products />
      <PhotoGallery />

    </main >
  );
}
