import Planbtn from "@/btnhundle/Planbtn";
import Savebtn from "@/btnhundle/Savebtn";
import { IExercise } from "@/type/IExercise";
import Image from "next/image";

const fitDetailesPromise = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
}
const FitDetailesPage = async ({ params }: { params: Promise<{ Id: string }> }) => {
    const { Id } = await params;
    const fitLogData = await fitDetailesPromise();
    const data = fitLogData.find((fitData: IExercise) => fitData.id === Number(Id)) as IExercise;
    return (
        // <div className="container mx-auto">
        <div className=" mt-8 md:flex justify-between gap-8 container mx-auto">

            <Image
                src={data.image}
                alt={data.name}
                width={850}
                height={400}
                className="object-cover rounded-2xl"
            />

            <div className="space-y-2.5 mt-8 md:mt-5">
                <h1 className="font-bold text-4xl">{data.name}</h1>
                <p className="text-[#9ca3afde]">{data.description}</p>
                <div className="mt-4 flex gap-2">
                    {data.muscleGroups.map((muscle) =>
                    (<span key={muscle} className="rounded-full text-[#090a0c]  px-3 py-1 text-xs font-semibold bg-[#C2F800]" >
                        {muscle}
                    </span>))}
                </div>
                <div className="bg-base-200 border border-[#9ca3af4b] rounded-2xl mt-8 ">
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">EQUIPMENT</p>
                        <p>{data.equipment}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">DIFFICULTY</p>
                        <p>{data.difficulty}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">SETS</p>
                        <p>{data.sets}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">REPS</p>
                        <p>{data.reps}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">DURATION</p>
                        <p>{data.duration}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">CALORIES</p>
                        <p>{data.caloriesBurned}</p>
                    </div>
                    <hr className="text-[#9ca3af4b] " />
                    <div className="flex justify-between py-3 px-4">
                        <p className="text-[#9ca3afde]">RATING</p>
                        <p>{data.rating}</p>
                    </div>


                </div>
                <div className="mt-6">
                    <h4 className="mb-2 font-bold">INSTRUCTION</h4>
                    <ol className="grid gap-2 list-decimal list-inside">
                        {data.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="rounded-full text-[#bbc0ca]  py-1 text-[15px] "
                            >
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="mt-10  space-x-3.5">
                    <Planbtn data={data}/>
                    <Savebtn data ={data}/>
                </div>

            </div>

        </div>
        // </div>
    );
};

export default FitDetailesPage;