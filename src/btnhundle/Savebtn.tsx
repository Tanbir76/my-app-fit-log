"use client"

import { FitLogContext } from '@/context/FitLogContext';
import { IExercise } from '@/type/IExercise';
import { useContext } from 'react';
import { BiSave } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Savebtn = ({ data }: { data: IExercise }) => {
    const { saveWorkout, setSaveWorkout } = useContext(FitLogContext)
    const handaleSaveBtn = () => {
        const alreadySaved = saveWorkout.some((workout)=>workout.id === data.id);
        if(alreadySaved){
            toast.error(`${data.name} is already save`);
            return;
        }else{
            setSaveWorkout([...saveWorkout, data]);     
            toast.success(`Save ${data.name}`);
        }
    }
    return (

        <button className="btn px-8 rounded-2xl  text-white " onClick={() => handaleSaveBtn()}><BiSave className="text-white"  /> Save for later </button>
    );
};

export default Savebtn;
