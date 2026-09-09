import { ArrowRight } from "lucide-react";

interface ButtonProps {
    title: string;
}




const Button = ({ title }: ButtonProps) => {
    return (
        <>
            <button
                className="relative overflow-hidden w-[100%] lg:w-[60%] bg-background pl-10 pr-1 py-1 rounded-full flex items-center gap-7 group cursor-pointer"
            >
                {/* Expanding Circle */}
                <div
                    className="absolute right-1 top-1 flex items-center
                    justify-center w-10 h-10 rounded-full bg-black transition-all
                    duration-300 ease-in-out group-hover:w-full group-hover:h-full
                    group-hover:right-0 group-hover:top-1/2 group-hover:-translate-y-1/2"
                >
                    <ArrowRight className="text-white w-5 h-5 absolute right-2.5" />
                </div>

                {/* Text */}
                <p className="relative z-10 font-semibold text-md text-gray-600
                group-hover:text-white transition-colors duration-300 truncate">
                    {title}
                </p>

                {/* Spacer to preserve layout */}
                <div className="w-10 h-10" />
            </button>
        </>
    )
}

export default Button
