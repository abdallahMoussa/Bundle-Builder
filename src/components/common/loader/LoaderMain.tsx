import { basePartClass, loaderParts } from "./config"
import logoImg from '@/assets/images/logo.png'

interface LoaderMainProps {
    loading?: boolean
}

const LoaderMain = ({ loading = true }: LoaderMainProps) => {
    return (
        <div className="fixed left-1/2 top-1/2 z-10 flex -translate-x-1/2 translate-y-[-80%] flex-col items-center justify-center">
            <div
                id="overlay"
                className="absolute top-19 -ml-1 h-23 w-21"
            >
                {loading && loaderParts.map((part) => (
                    <div
                        key={part.id}
                        id={part.id}
                        className={`
                                ${basePartClass}
                                ${part.className}
                                ${loading ? part.animationClass : 'opacity-0'}
                            `}
                        style={{
                            clipPath: part.clipPath,
                            transition: 'opacity 300ms ease',
                        }}
                    />
                ))}
            </div>

            <img
                className="w-52 min-w-52"
                src={logoImg}
                alt="Bundle Builder"
            />

            <div
                className={`
                    text-2xl font-semibold
                    transition-all duration-1000 uppercase
                    ${loading
                        ? 'opacity-0 -translate-y-2'
                        : 'opacity-100 translate-y-0'
                    }
                `}
            >
                <div className="gap-3 flex  mt-2">

                    <span className="text-[#042062]">
                        Bundle
                    </span>
                    <span className="text-[#1e74fb]">
                        Builder
                    </span>
                </div>
                <div className="flex justify-center items-center mt-1">
                    <div className="w-14 h-0.5 bg-[#042062]" />
                    <div className="w-3 h-3 border-2 border-[#042062] rotate-45 mx-1.5" />
                    <div className="w-14 h-0.5 bg-[#042062]" />
                </div>
            </div>
        </div >

    )
}

export default LoaderMain