import Image from "next/image";
import { forwardRef } from "react";
const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div
        ref={ref}
        className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
            <Image layout="responsive"
             src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
            }
            height={1000}
            width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{ result.overview }</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{ result.title || result.original_name }</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} .`}{" "}
                    {result.release_date || result.first_air_date} .{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
