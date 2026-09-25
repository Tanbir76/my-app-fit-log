
import { IExercise } from "@/type/IExercise";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAccessTimeFilled, MdStar } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";



interface ExerciseCardProps {
    data: IExercise;
}
const FitLogCard = ({ data }: ExerciseCardProps) => {
    return (
        <Link href={`/detailsPage/${data.id}`}>
        <div className=" bg-base-100 overflow-hidden rounded-2xl  shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">

            {/* Image */}
            <div>
                <div className="h-[50%] w-full">
                    <Image
                        src={data.image}
                        alt={data.name}
                        width={600}
                        height={400}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="px-4">

                <div className="mt-4 flex gap-2">
                    {data.muscleGroups.map((muscle) =>
                    (<span key={muscle} className="rounded-full text-[#0f2853]  px-3 py-1 text-xs font-semibold bg-[#C2F800]" >
                        {muscle}
                    </span>))}
                </div>
                <div className="mt-4">
                    <h1 className=" font-bold">{data.name}</h1>
                    <p className="text-[#9CA3AF] text-[14px] mb-4">{data.equipment}</p>
                    <hr className="text-[#9ca3af4b] " />
                </div>
                <div className="flex justify-between items-center mt-4 mb-5 text-[#9ca3afda]">
                    <p className="flex items-center gap-1"><MdOutlineAccessTimeFilled />{data.duration}  min</p>
                    <p className="flex items-center gap-1"><RiPieChart2Fill />{data.caloriesBurned} kcal</p>
                    <p className="flex items-center gap-1"><MdStar />{data.rating}</p>
                </div>

            </div>
        </div>
        </Link>
    );
};

export default FitLogCard;

