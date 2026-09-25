'use client'
import { FitLogContext } from "@/context/FitLogContext";
import CalculatTotalCalories from "@/oparetion/CalculatTotalCalories";
import CalculatTotalTime from "@/oparetion/CalculatTotalTime";
import FitLogCard from "@/sheared/FitLogCard";
import { useContext } from "react";

const WorkoutPage = () => {
    const { todaysPlan} = useContext(FitLogContext);
    const totalTime = CalculatTotalTime(todaysPlan);
    const totalCalories = CalculatTotalCalories(todaysPlan);

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
            <div className="tabs  mt-10  ">
                <input type="radio" name="my_tabs_6" className="tab text-[18px]" aria-label="Tab 1"defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
               
                </div>

                <input type="radio" name="my_tabs_6" className="tab text-[18px]" aria-label="Tab 2"  />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>


            </div>
        </div>
    );
};

export default WorkoutPage;