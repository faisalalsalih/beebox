import { useGSAP } from "@gsap/react"
import Button from "./Button"
import { useRef } from "react"
import gsap from "gsap"


const Description = () => {


  const descriptionRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    gsap.from("#title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
      }
    });
    gsap.from("#description", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: descriptionRef });

  return (
    <>
    <section ref={descriptionRef} className="w-full max-w-7xl mx-auto py-12 px-5 flex flex-col items-start lg:flex-row gap-8 lg:items-center">

      <div className="flex flex-col gap-1 max-w-2xl" id="title">
        <h3 className="text-3xl font-light tracking-wide">Streetwear with a Story</h3>
        <h1 className="text-4xl md:text-7xl font-semibold">WEAR THE<br /> MOVEMENT, BREAK THE MOLD.</h1>
      </div>


      <div className="flex flex-col gap-4 w-full h-fit" id="description">
        <p className="mb-3 text-muted-foreground">Born from the pulse of the streets, our brand is a tribute to the rebels, the dreamers, and the rule-breakers who shape the culture. Inspired by the raw energy of city life—graffiti-covered alleys, underground music scenes, and late-night skate sessions—we craft streetwear that speaks to individuality and self-expression.</p>
        <p className="mb-3 text-muted-foreground">Every stitch, every design, and every drop is a reflection of the movement, blending bold graphics, oversized silhouettes, and urban edge. More than just clothing, we’re a statement—wear your story, break the mold, and define your own path.4o</p>
        <Button title="Get it now"/>
      </div>

    </section>      
    </>
  )
}

export default Description
