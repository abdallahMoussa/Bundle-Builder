
import { basePartClass, loaderParts } from "./config"

const Loader = () => {
    return (
        <div className="fixed left-1/2 top-1/2 z-10 flex -translate-x-1/2 translate-y-[-80%] flex-col items-center justify-center">
            <div
                id="overlay"
                className="absolute top-18.5 -ml-2 h-22 w-20"
            >
                {loaderParts.map((part) => (
                    <div
                        key={part.id}
                        id={part.id}
                        className={`
                                ${basePartClass}
                                ${part.className}
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
                src="/src/assets/icons/logo.svg"
                alt="Bundle Builder"
            />

        </div >

    )
}

export default Loader