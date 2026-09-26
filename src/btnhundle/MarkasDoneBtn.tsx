"use client";

import { FitLogContext } from "@/context/FitLogContext";
import { IExercise } from "@/type/IExercise";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkasDoneBtn = ({ data }: { data: IExercise }) => {
    const { completedWorkouts, setCompletedWorkouts } = useContext(FitLogContext);

    const isCompleted = completedWorkouts.includes(data.id);

    const handleBtn = () => {
        if (isCompleted) return;

        setCompletedWorkouts((prev) => [...prev, data.id ]);

        toast.success(`${data.name} marked as completed!`);
    };
    return (
        <button
            onClick={handleBtn}
            className={`btn px-6 rounded-2xl transition-all duration-300 ${isCompleted
                    ? "bg-[#C2F800] text-black border-[#C2F800]"
                    : "bg-gray-700 text-white"
                }`}
        >
            <FaCheck />

            {isCompleted ? "Completed" : "Mark as Done"}
        </button>
    );
};

export default MarkasDoneBtn;