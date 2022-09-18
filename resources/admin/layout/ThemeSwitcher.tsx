import { useTheme } from "next-themes"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useState } from "react"

type Props = {}

const ThemeSwitcher = (props: Props) => {
    const { theme, setTheme } = useTheme()
    const [translateBg, setTranslateBg] = useState(
        theme === "light" ? "0%" : "100%"
    )
    return (
        <div
            className={
                "bg-gray-100 dark:bg-darkMode-layer-1 rounded-full flex gap-2 p-1 relative h-12"
            }
        >
            <motion.div
                className={clsx(
                    "absolute z-0 w-[calc(50%-4px)] shadow rounded-full top-1 bottom-1",
                    {
                        "bg-gray-50": theme === "light",
                        "bg-darkMode-layer-2": theme === "dark",
                    }
                )}
                animate={{ translateX: translateBg }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    mass: 0.75,
                    damping: 20,
                }}
            />
            <div
                className={clsx(
                    "absolute z-10 w-1/2 h-[calc(100%-8px)] rounded-full flex items-center justify-center gap-2 p-2 hover:cursor-pointer",
                    {
                        "text-neutral-25": theme === "dark",
                    }
                )}
                onClick={() => {
                    setTranslateBg("0%")
                    setTheme("light")
                }}
            >
                {theme === "light" ? (
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C13.76 16 16 13.76 16 11C16 8.24 13.76 6 11 6ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12ZM10 1V3C10 3.55 10.45 4 11 4C11.55 4 12 3.55 12 3V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1ZM10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18C10.45 18 10 18.45 10 19ZM4.99 3.58C4.89749 3.4873 4.7876 3.41375 4.66662 3.36357C4.54565 3.31339 4.41597 3.28756 4.285 3.28756C4.15403 3.28756 4.02435 3.31339 3.90338 3.36357C3.7824 3.41375 3.67251 3.4873 3.58 3.58C3.4873 3.67251 3.41375 3.7824 3.36357 3.90338C3.31339 4.02435 3.28756 4.15403 3.28756 4.285C3.28756 4.41597 3.31339 4.54565 3.36357 4.66662C3.41375 4.7876 3.4873 4.89749 3.58 4.99L4.64 6.05C5.03 6.44 5.67 6.44 6.05 6.05C6.43 5.66 6.44 5.02 6.05 4.64L4.99 3.58ZM17.36 15.95C17.2675 15.8573 17.1576 15.7837 17.0366 15.7336C16.9157 15.6834 16.786 15.6576 16.655 15.6576C16.524 15.6576 16.3943 15.6834 16.2734 15.7336C16.1524 15.7837 16.0425 15.8573 15.95 15.95C15.8573 16.0425 15.7837 16.1524 15.7336 16.2734C15.6834 16.3943 15.6576 16.524 15.6576 16.655C15.6576 16.786 15.6834 16.9157 15.7336 17.0366C15.7837 17.1576 15.8573 17.2675 15.95 17.36L17.01 18.42C17.4 18.81 18.04 18.81 18.42 18.42C18.5127 18.3275 18.5863 18.2176 18.6364 18.0966C18.6866 17.9757 18.7124 17.846 18.7124 17.715C18.7124 17.584 18.6866 17.4543 18.6364 17.3334C18.5863 17.2124 18.5127 17.1025 18.42 17.01L17.36 15.95ZM18.42 4.99C18.5127 4.89749 18.5863 4.7876 18.6364 4.66662C18.6866 4.54565 18.7124 4.41597 18.7124 4.285C18.7124 4.15403 18.6866 4.02435 18.6364 3.90338C18.5863 3.7824 18.5127 3.67251 18.42 3.58C18.3275 3.4873 18.2176 3.41375 18.0966 3.36357C17.9757 3.31339 17.846 3.28756 17.715 3.28756C17.584 3.28756 17.4543 3.31339 17.3334 3.36357C17.2124 3.41375 17.1025 3.4873 17.01 3.58L15.95 4.64C15.56 5.03 15.56 5.67 15.95 6.05C16.34 6.43 16.98 6.44 17.36 6.05L18.42 4.99ZM6.05 17.36C6.1427 17.2675 6.21625 17.1576 6.26643 17.0366C6.31661 16.9157 6.34244 16.786 6.34244 16.655C6.34244 16.524 6.31661 16.3943 6.26643 16.2734C6.21625 16.1524 6.1427 16.0425 6.05 15.95C5.95749 15.8573 5.8476 15.7837 5.72662 15.7336C5.60565 15.6834 5.47597 15.6576 5.345 15.6576C5.21403 15.6576 5.08435 15.6834 4.96338 15.7336C4.8424 15.7837 4.73251 15.8573 4.64 15.95L3.58 17.01C3.19 17.4 3.19 18.04 3.58 18.42C3.97 18.8 4.61 18.81 4.99 18.42L6.05 17.36V17.36Z"
                            fill="black"
                        />
                    </svg>
                ) : (
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 8C12.65 8 14 9.35 14 11C14 12.65 12.65 14 11 14C9.35 14 8 12.65 8 11C8 9.35 9.35 8 11 8ZM11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C13.76 16 16 13.76 16 11C16 8.24 13.76 6 11 6ZM1 12H3C3.55 12 4 11.55 4 11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM19 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 10 21 10H19C18.45 10 18 10.45 18 11C18 11.55 18.45 12 19 12ZM10 1V3C10 3.55 10.45 4 11 4C11.55 4 12 3.55 12 3V1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1ZM10 19V21C10 21.55 10.45 22 11 22C11.55 22 12 21.55 12 21V19C12 18.45 11.55 18 11 18C10.45 18 10 18.45 10 19ZM4.99 3.58C4.89749 3.4873 4.7876 3.41375 4.66662 3.36357C4.54565 3.31339 4.41597 3.28756 4.285 3.28756C4.15403 3.28756 4.02435 3.31339 3.90338 3.36357C3.7824 3.41375 3.67251 3.4873 3.58 3.58C3.4873 3.67251 3.41375 3.7824 3.36357 3.90338C3.31339 4.02435 3.28756 4.15403 3.28756 4.285C3.28756 4.41597 3.31339 4.54565 3.36357 4.66662C3.41375 4.7876 3.4873 4.89749 3.58 4.99L4.64 6.05C5.03 6.44 5.67 6.44 6.05 6.05C6.43 5.66 6.44 5.02 6.05 4.64L4.99 3.58ZM17.36 15.95C17.2675 15.8573 17.1576 15.7837 17.0366 15.7336C16.9157 15.6834 16.786 15.6576 16.655 15.6576C16.524 15.6576 16.3943 15.6834 16.2734 15.7336C16.1524 15.7837 16.0425 15.8573 15.95 15.95C15.8573 16.0425 15.7837 16.1524 15.7336 16.2734C15.6834 16.3943 15.6576 16.524 15.6576 16.655C15.6576 16.786 15.6834 16.9157 15.7336 17.0366C15.7837 17.1576 15.8573 17.2675 15.95 17.36L17.01 18.42C17.4 18.81 18.04 18.81 18.42 18.42C18.5127 18.3275 18.5863 18.2176 18.6364 18.0966C18.6866 17.9757 18.7124 17.846 18.7124 17.715C18.7124 17.584 18.6866 17.4543 18.6364 17.3334C18.5863 17.2124 18.5127 17.1025 18.42 17.01L17.36 15.95ZM18.42 4.99C18.5127 4.89749 18.5863 4.7876 18.6364 4.66662C18.6866 4.54565 18.7124 4.41597 18.7124 4.285C18.7124 4.15403 18.6866 4.02435 18.6364 3.90338C18.5863 3.7824 18.5127 3.67251 18.42 3.58C18.3275 3.4873 18.2176 3.41375 18.0966 3.36357C17.9757 3.31339 17.846 3.28756 17.715 3.28756C17.584 3.28756 17.4543 3.31339 17.3334 3.36357C17.2124 3.41375 17.1025 3.4873 17.01 3.58L15.95 4.64C15.56 5.03 15.56 5.67 15.95 6.05C16.34 6.43 16.98 6.44 17.36 6.05L18.42 4.99ZM6.05 17.36C6.1427 17.2675 6.21625 17.1576 6.26643 17.0366C6.31661 16.9157 6.34244 16.786 6.34244 16.655C6.34244 16.524 6.31661 16.3943 6.26643 16.2734C6.21625 16.1524 6.1427 16.0425 6.05 15.95C5.95749 15.8573 5.8476 15.7837 5.72662 15.7336C5.60565 15.6834 5.47597 15.6576 5.345 15.6576C5.21403 15.6576 5.08435 15.6834 4.96338 15.7336C4.8424 15.7837 4.73251 15.8573 4.64 15.95L3.58 17.01C3.19 17.4 3.19 18.04 3.58 18.42C3.97 18.8 4.61 18.81 4.99 18.42L6.05 17.36V17.36Z"
                            fill="#C2C1C1"
                        />
                    </svg>
                )}
                Light
            </div>
            <div
                className={clsx(
                    "absolute z-10 w-1/2 h-[calc(100%-8px)] translate-x-full rounded-full flex items-center justify-center gap-2 p-2 hover:cursor-pointer",
                    {
                        "text-neutral-50": theme === "light",
                    }
                )}
                onClick={() => {
                    setTranslateBg("100%")
                    setTheme("dark")
                }}
            >
                {theme === "dark" ? (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 18C6.48333 18 4.354 17.129 2.612 15.387C0.870667 13.6457 0 11.5167 0 8.99999C0 6.69999 0.75 4.70399 2.25 3.01199C3.75 1.32066 5.66667 0.333327 8 0.0499939C8.41667 -6.10668e-06 8.74167 0.149994 8.975 0.499994C9.20833 0.849994 9.2 1.21666 8.95 1.59999C8.66667 2.03333 8.454 2.49166 8.312 2.97499C8.17067 3.45833 8.1 3.96666 8.1 4.49999C8.1 5.99999 8.625 7.27499 9.675 8.32499C10.725 9.37499 12 9.89999 13.5 9.89999C14.0167 9.89999 14.5293 9.82499 15.038 9.67499C15.546 9.52499 16 9.31666 16.4 9.04999C16.75 8.81666 17.1083 8.80399 17.475 9.01199C17.8417 9.22066 18 9.54999 17.95 9.99999C17.7167 12.3 16.7377 14.2083 15.013 15.725C13.2877 17.2417 11.2833 18 9 18Z"
                            fill="#FFFEFF"
                        />
                    </svg>
                ) : (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 18C6.48333 18 4.354 17.129 2.612 15.387C0.870667 13.6457 0 11.5167 0 8.99999C0 6.69999 0.75 4.70399 2.25 3.01199C3.75 1.32066 5.66667 0.333327 8 0.0499939C8.41667 -6.10668e-06 8.74167 0.149994 8.975 0.499994C9.20833 0.849994 9.2 1.21666 8.95 1.59999C8.66667 2.03333 8.454 2.49166 8.312 2.97499C8.17067 3.45833 8.1 3.96666 8.1 4.49999C8.1 5.99999 8.625 7.27499 9.675 8.32499C10.725 9.37499 12 9.89999 13.5 9.89999C14.0167 9.89999 14.5293 9.82499 15.038 9.67499C15.546 9.52499 16 9.31666 16.4 9.04999C16.75 8.81666 17.1083 8.80399 17.475 9.01199C17.8417 9.22066 18 9.54999 17.95 9.99999C17.7167 12.3 16.7377 14.2083 15.013 15.725C13.2877 17.2417 11.2833 18 9 18ZM9 16C10.4667 16 11.7833 15.596 12.95 14.788C14.1167 13.9793 14.9667 12.925 15.5 11.625C15.1667 11.7083 14.8333 11.775 14.5 11.825C14.1667 11.875 13.8333 11.9 13.5 11.9C11.45 11.9 9.704 11.1793 8.262 9.73799C6.82067 8.29599 6.1 6.54999 6.1 4.49999C6.1 4.16666 6.125 3.83333 6.175 3.49999C6.225 3.16666 6.29167 2.83333 6.375 2.49999C5.075 3.03333 4.021 3.88333 3.213 5.04999C2.40433 6.21666 2 7.53333 2 8.99999C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z"
                            fill="#868282"
                        />
                    </svg>
                )}
                Dark
            </div>
        </div>
    )
}

export default ThemeSwitcher
