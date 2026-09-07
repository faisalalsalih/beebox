import solution1 from "@/assets/images/solution1.jpg"
import solution2 from "@/assets/images/solution2.jpg"
import Button from "./Button"

const Solutions = () => {
    return (
        <>
            <section className="w-full max-w-7xl mx-auto py-12 px-5 flex flex-col gap-8">

                {/* Heading */}
                <div className="flex flex-col gap-3 max-w-3xl">
                    <h1 className="uppercase text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Get your products in minutes by ordering from beebbox</h1>
                    <p className="text-xs md:text-base font-light text-muted-foreground">Use prebuilt templates and components for a professional, stunning look. Save time and focus on content with our user-friendly, customizable design solutions.</p>
                </div>


                {/* Solution Templates */}
                <div className="grid gap-4">
                    {/* Column 1 */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-[65%] h-125 bg-red-300 rounded-2xl overflow-hidden">
                            <img src={solution1} alt="Men Fashion Image" className="w-full h-full object-cover object-center"/>
                        </div>

                        <div className="w-full lg:w-[35%] h-125 bg-foreground rounded-2xl p-6 flex flex-col justify-end">
                            <div className="flex flex-col gap-6 max-w-full">
                                <h1 className="text-background text-2xl md:text-3xl font-semibold uppercase">Built by the streets, made for you</h1>
                                <p className="text-background text-sm">From the street to your styles our journey is all about self-expression and rebellion Join the movement.</p>
                                <Button title="Order Now"/>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col lg:flex-row-reverse gap-4">
                        <div className="w-full lg:w-[65%] h-125 bg-red-300 rounded-2xl overflow-hidden">
                            <img src={solution2} alt="Men Fashion Image" className="w-full h-full object-cover object-center"/>
                        </div>

                        <div className="w-full lg:w-[35%] h-125 bg-muted-foreground rounded-2xl p-6 flex flex-col justify-end">
                            <div className="flex flex-col gap-6 max-w-full">
                                <h1 className="text-background text-2xl md:text-3xl font-semibold uppercase">Built by the streets, made for you</h1>
                                <p className="text-background text-sm">From the street to your styles our journey is all about self-expression and rebellion Join the movement.</p>
                                <Button title="Order Now"/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Solutions