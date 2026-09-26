"use client";

import { IExercise } from "@/type/IExercise";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface IFitLogContext {
    todaysPlan: IExercise[];
    setTodaysPlan: Dispatch<SetStateAction<IExercise[]>>;
    saveWorkout: IExercise[];
    setSaveWorkout: Dispatch<SetStateAction<IExercise[]>>;
    completedWorkouts: number[],
    setCompletedWorkouts: Dispatch<SetStateAction<number[]>>

}

export const FitLogContext = createContext<IFitLogContext>({
    todaysPlan: [],
    setTodaysPlan: () => [],
    saveWorkout: [],
    setSaveWorkout: () => [],
    completedWorkouts: [],
    setCompletedWorkouts: () => [],



});


const FitLogProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<IExercise[]>([]);
    const [saveWorkout, setSaveWorkout] = useState<IExercise[]>([]);
    const [  completedWorkouts,
    setCompletedWorkouts] = useState<number[]>([]);



    const sharedData: IFitLogContext = {
        todaysPlan,
        setTodaysPlan,
        saveWorkout,
        setSaveWorkout,
        completedWorkouts,
        setCompletedWorkouts,

    };

    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>

    );
};

export default FitLogProvider;