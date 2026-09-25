'use client'
import { FitLogContext } from "@/context/FitLogContext";
import CalculatTotalCalories from "@/oparetion/CalculatTotalCalories";
import CalculatTotalTime from "@/oparetion/CalculatTotalTime";
import PlanSaveCard from "@/sheared/PlanSaveCard";
import { IExercise } from "@/type/IExercise";
import { useContext, useState } from "react";

const MyPlan = () => {
    const { todaysPlan, saveWorkout } = useContext(FitLogContext);
    const totalTime = CalculatTotalTime(todaysPlan);
    const totalCalories = CalculatTotalCalories(todaysPlan);

    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
    const sortExercise = (data: IExercise[]) => {
        const sortedExercise = [...data];
        if (sortBy === "duration") {
            sortedExercise.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === "calories") {
            sortedExercise.sort((a, b) => b.caloriesBurned - a.caloriesBurned)

        } else if (sortBy === "rating") {
            sortedExercise.sort((a, b) => b.rating - a.rating)
        }
        return sortedExercise;
    }
    const sortedTodaysPlan = sortExercise(todaysPlan);
    const sortedWorkout = sortExercise(saveWorkout)

    return (
        <div className="mt-20 container mx-auto">
            <div>
                <h1 className="font-bold text-4xl">MY PLAN</h1>
                <p className="text-[#fdfdfd56]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div>
                <div className="bg-base-100 p-10 rounded-2xl mt-10 grid grid-cols-3 justify-between items-center" >
                    <div className="space-y-1.5 border-r border-[#fdfdfd2f] mr-2 ">
                        <h1 className=" text-ms text-[#fdfdfd56]">Exercise</h1>
                        <p className=" font-black text-4xl text-[#C2F800]">{todaysPlan.length}</p>
                    </div>
                    <div className="border-r border-[#fdfdfd2f] mr-2">
                        <h1 className=" text-[#fdfdfd56] ">Minutes</h1>
                        <p className="font-black text-4xl">{totalTime}</p>
                    </div>
                    <div>
                        <h1 className="text-[#fdfdfd56] ">Calories</h1>
                        <p className="font-black  text-4xl">{totalCalories}</p>
                    </div>
                </div>

            </div>

            {/* name of each tab group should be unique */}
            <div className="">

                <div className="tabs mt-10 relative">

                    {/* Plan Save tab */}
                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab text-[16px] border-2  border-r-0 border-[#ffffcc62]  px-6 rounded-l-2xl checked:bg-[#cfcfb656]  checked:text-[#C2F800] "
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content mt-20 bg-black space-y-2.5">
                        {sortedTodaysPlan.length > 0 ? (
                                sortedTodaysPlan.map((data) => (
                                    <PlanSaveCard
                                        data={data}
                                        key={data.id}
                                        type="todaysPlan"
                                    />
                                ))
                        ) : (
                            <div className="bg-base-100 space-y-2.5 py-20  rounded-2xl text-center border-dashed border border-[#cfcfb646] ">
                                <h1 className="font-bold text-2xl">
                                    NOTHING HERE YET
                                </h1>

                                <p className="text-[#cfcfb656]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <button className="btn rounded-2xl mt-5 px-4 bg-[#C2F800] text-black">
                                    Go to workouts
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Saved tab */}
                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab text-[16px] px-6  border border-l-0 rounded-r-2xl border-[#ffffcc62] checked:bg-[#cfcfb656]  checked:text-[#C2F800] "
                        aria-label="Workouts"
                    /><div className="tab-content mt-20 bg-black space-y-2.5">
                        {sortedWorkout.length > 0 ? (
                            sortedWorkout.map((data) => (
                                <PlanSaveCard
                                    data={data}
                                    key={data.id}
                                    type="workouts"
                                />
                            ))
                        ) : (
                            <div className="bg-base-100 space-y-2.5 py-20  rounded-2xl text-center border-dashed border border-[#cfcfb633] ">
                                <h1 className="font-bold text-2xl">
                                    NOTHING HERE YET
                                </h1>

                                <p className="text-[#cfcfb656]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <button className="btn rounded-2xl mt-5 px-4 bg-[#C2F800] text-black">
                                    Go to workouts
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="absolute right-4 flex items-center gap-4 ">
                        <h1>SortBy</h1>
                        <select defaultValue="Duration"
                            onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                            className="select ">
                            <option value={"duration"}>Duration</option>
                            <option value={"calories"}>Calories</option>
                            <option value={'rating'}>Rating</option>
                        </select>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default MyPlan;