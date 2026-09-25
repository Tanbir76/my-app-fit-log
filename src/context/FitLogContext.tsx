"use client";

import { IExercise } from "@/type/IExercise";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface IFitLogContext {
 todaysPlan: IExercise[];
 setTodaysPlan: Dispatch<SetStateAction<IExercise[]>>;
 saveWorkout: IExercise[];
 setSaveWorkout: Dispatch<SetStateAction<IExercise[]>>;

}

export const FitLogContext = createContext<IFitLogContext>({
    todaysPlan:[],
    setTodaysPlan: () => [],
    saveWorkout: [],
    setSaveWorkout: () => [],
  
});


const FitLogProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<IExercise[]>([]);
    const [saveWorkout, setSaveWorkout] = useState<IExercise[]>([]);



    const sharedData:IFitLogContext = {
        todaysPlan,
        setTodaysPlan,
        saveWorkout,
        setSaveWorkout,

    };

    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>

    );
};

export default FitLogProvider;