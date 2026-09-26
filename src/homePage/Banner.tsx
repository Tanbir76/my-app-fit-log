import Image from "next/image";
import BannerImage from "@/assets/banner.png"

const Banner = () => {
    return (
        <div className="container mx-auto mt-10 ">
            <div className="grid gap-10 text-center md:flex  md:gap-3 md:text-start justify-between items-center bg-base-100 p-14 rounded-2xl ">
                <div className="space-y-4.5 ">
                    <p className="text-[#C2F800] text-[12px]">WORKOUT LIBRARY</p>
                    <h1 className="font-black text-5xl ">TRAIN WITH INTENT. LOG<br />EVERY SET.</h1>
                    <p className="text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into todays plan, and watch the weeks work add up.</p>
                        <a href="#library">
                    
                    <button className="btn px-6 py-4 bg-[#c2f800ce] text-black  mt-4">BROWSE WORKOUTS</button>
                        </a>
                </div>

                <Image src={BannerImage} alt="bannerImage"></Image>

            </div>
        </div>
    );
};

export default Banner;