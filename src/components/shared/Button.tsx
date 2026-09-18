import { ArrowRight } from "lucide-react";

interface ButtonProps {
    title: string;
    width?: number;
}

const Button = ({ title, width = 20 }: ButtonProps) => {
    return (
        <button
            className="relative overflow-hidden bg-background pl-5 sm:pl-8 md:pl-10 pr-1 py-1 rounded-full flex items-center justify-between group cursor-pointer w-full max-w-full sm:w-auto min-w-[180px] sm:min-w-[220px]"
            style={{ width: `clamp(180px, ${width}%, 100%)` }}
        >
            {/* Text */}
            <p className="relative z-10 font-semibold text-sm sm:text-md text-gray-600 group-hover:text-white transition-colors duration-300 truncate">
                {title}
            </p>

            {/* Expanding Circle */}
            <div
                className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:rounded-full"
            >
                <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5 absolute right-2 sm:right-2.5" />
            </div>

            {/* Spacer to preserve layout */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
        </button>
    );
};

export default Button;