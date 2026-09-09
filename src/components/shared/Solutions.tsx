import solution1 from "@/assets/images/solution1.jpg"
import solution2 from "@/assets/images/solution2.jpg"
import Button from "./Button"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Solutions = () => {


    const solutionRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {

        gsap.from("#heading", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: solutionRef.current,
                start: "top 80%",
            }
        });


        gsap.from("#solutions1", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: "#solutions1",
                start: "top 80%",
            }
        });


        gsap.from("#solutions2", {
            duration: 0.8,
            y: 50,
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: "#solutions2",
                start: "top 90%",
            }
        });

        { scope: solutionRef.current }

    });


    return (
        <>
            <section ref={solutionRef} className="w-full max-w-7xl mx-auto py-12 px-5 flex flex-col gap-8">

                {/* Heading */}
                <div className="flex flex-col gap-3 max-w-3xl" id="heading">
                    <h1 className="uppercase text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Get your products in minutes by ordering from beebbox</h1>
                    <p className="text-xs md:text-base font-light text-muted-foreground">Use prebuilt templates and components for a professional, stunning look. Save time and focus on content with our user-friendly, customizable design solutions.</p>
                </div>


                {/* Solution Templates */}
                <div className="grid gap-4">

                    {/* Column 1 */}
                    <div className="flex flex-col lg:flex-row gap-4">

                        <div className="w-full lg:w-[65%] h-125 bg-red-300 rounded-2xl overflow-hidden" id="solutions1">
                            <img src={solution1} alt="Men Fashion Image" className="w-full h-full object-cover object-center" />
                        </div>

                        <div className="w-full lg:w-[35%] h-125 bg-foreground rounded-2xl p-6 flex flex-col justify-end" id="solutions1">
                            <div className="flex flex-col gap-6 max-w-full">
                                <h1 className="card-header">Built by the streets, made for you</h1>
                                <p className="text-background text-sm">From the street to your styles our journey is all about self-expression and rebellion Join the movement.</p>
                                <Button title="Order Now" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col lg:flex-row-reverse gap-4">
                        <div className="w-full lg:w-[65%] h-125 bg-red-300 rounded-2xl overflow-hidden" id="solutions2">
                            <img src={solution2} alt="Men Fashion Image" className="w-full h-full object-cover object-center" />
                        </div>

                        <div className="w-full lg:w-[35%] h-125 bg-muted-foreground rounded-2xl p-6 flex flex-col justify-end" id="solutions2">
                            <div className="flex flex-col gap-6 max-w-full">
                                <h1 className="card-header">Elevate Your Street Game</h1>
                                <p className="text-background text-sm">From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.</p>
                                <Button title="Shop Collections" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Solutions


