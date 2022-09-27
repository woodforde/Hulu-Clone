import requests from "../utils/requests";
import { useRouter } from "next/router"

// tailwind-scrollbar-hide

function Nav() {
    const router = useRouter()

  return (
    <nav className="relative">
        <div className="flex px-10 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll overflow-y-hidden scrollbar-hide
                        sm:px-20 sm:space-x-20">
            { Object.entries(requests).map(([key, { title, url }]) => (
                <h2
                className="last:pr-24 cursor-pointer transition duration-100 transform
                hover:scale-125 hover:text-white
                active:text-red-500"
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                >{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        {/* <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" /> */}
    </nav>
  );
}

export default Nav;