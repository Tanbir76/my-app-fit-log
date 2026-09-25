"use client"
import { FitLogContext } from '@/context/FitLogContext';
import { IExercise } from '@/type/IExercise';
import { useContext } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';



const Planbtn = ({ data }: { data: IExercise }) => {
    const { todaysPlan, setTodaysPlan } = useContext(FitLogContext)

    const handalePlanBtn = () => {
        const alreadyPlan = todaysPlan.some((plan)=>plan.id === data.id);
        if(alreadyPlan){
            toast.error(`${data.name} is already plan `)
        }else{

            setTodaysPlan([ ...todaysPlan , data]);
             toast.success(`Add ${data.name}`);
        }

    }

    return (
   
            <button className="btn px-8 rounded-2xl bg-[#C2F800] text-black" onClick={() => handalePlanBtn()}><IoCalendarClearOutline className="text-black"  /> Add to todays Plan</button>
        
    );
};

export default Planbtn;