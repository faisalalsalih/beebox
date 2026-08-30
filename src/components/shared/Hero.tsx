import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";

type Slide = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

const slides: Slide[] = [
  {
  title: "Elevate Your Style",
  description:
    "Discover the latest fashion trends with premium outfits designed for every occasion.",
  buttonText: "Shop Collection",
  image: image1,
},
{
  title: "New Season Arrivals",
  description:
    "Refresh your wardrobe with our newest collection of stylish and timeless pieces.",
  buttonText: "View New Arrivals",
  image: image2,
},
{
  title: "Fashion That Inspires",
  description:
    "From casual essentials to statement looks, find everything you need to express your style.",
  buttonText: "Explore Now",
  image: image3,
},
{
  title: "Exclusive Designer Picks",
  description:
    "Shop handpicked fashion favorites crafted with quality, elegance, and modern trends in mind.",
  buttonText: "Discover More",
  image: image4,
},
{
  title: "Shop the Perfect Look",
  description:
    "Complete your wardrobe with trendsetting apparel, accessories, and must-have fashion pieces.",
  buttonText: "Shop Now",
  image: image5,
}
];

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const progressBars = useRef<HTMLDivElement[]>([]);
  const imageLayers = useRef<HTMLDivElement[]>([]);


  console.log(imageLayers, "This are images that i want to see in the console");

  // Content Refs
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // 1. Reset progress bars immediately on slide change
    progressBars.current.forEach((bar, i) => {
      if (i > activeIndex) {
        gsap.set(bar, { width: "0%" });
      }
    });

    const currentImage = imageLayers.current[activeIndex];
    const tl = gsap.timeline();

    // 2. Hide all non-active images and show active image layer instantly
    imageLayers.current.forEach((layer, i) => {
      if (i === activeIndex) {
        gsap.set(layer, { opacity: 1, zIndex: 1, scale: 1 });
      } else {
        gsap.set(layer, { opacity: 0, zIndex: 0, scale: 1 });
      }
    });

    // 3. Reset text position & opacity
    gsap.set([titleRef.current, descRef.current, buttonRef.current], {
      y: 30,
      opacity: 0,
    });

    // 4. Animate Content IN (Fade + Slide Up)
    tl.to(
      [titleRef.current, descRef.current, buttonRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      0
    );

    // 5. Zoom Active Background Image (4s)
    tl.to(
      currentImage,
      {
        scale: 1.15,
        duration: 4,
        ease: "none",
      },
      0
    );

    // 6. Fill Progress Bar (4s)
    tl.to(
      progressBars.current[activeIndex],
      {
        width: "100%",
        duration: 4,
        ease: "none",
      },
      0
    );

    // 7. Animate Content OUT right before switching
    tl.to(
      [titleRef.current, descRef.current, buttonRef.current],
      {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      },
      3.6
    );

    // 8. Trigger Next Slide
    tl.call(() => {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

      if (activeIndex === slides.length - 1) {
        progressBars.current.forEach((bar) => {
          gsap.set(bar, { width: "0%" });
        });
      }

      setActiveIndex(nextIndex);
    });

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  return (
    <section className="relative h-dvh z-10 w-full overflow-hidden bg-black text-white rounded-none sm:rounded-3xl">
      {/* Stacked Image Layers - Pre-rendered in DOM */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) imageLayers.current[index] = el;
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: index === 0 ? 1 : 0, // Initial state before GSAP mounts
          }}
        />
      ))}

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content & Layout Wrapper */}
      <div className="relative z-20 flex h-full flex-col justify-between px-10 pb-12 pt-24">
        {/* Main Text Content Container */}
        <div className="my-auto max-w-3xl text-center sm:text-left">
          <h1
            ref={titleRef}
            className="text-5xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            {slides[activeIndex].title}
          </h1>

          <p
            ref={descRef}
            className="mt-4 text-lg text-gray-200 md:text-xl"
          >
            {slides[activeIndex].description}
          </p>

          <button
            ref={buttonRef}
            className="mt-8 cursor-pointer rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            {slides[activeIndex].buttonText}
          </button>
        </div>

        {/* Progress Bars pinned at the bottom */}
        <div className="flex max-w-xl gap-1 mb-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className="h-1 flex-1 overflow-hidden rounded bg-white/30"
            >
              <div
                ref={(el) => {
                  if (el) progressBars.current[index] = el;
                }}
                className="h-full bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

