import { FitLogContext } from '@/context/FitLogContext';
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface IDeletbtnType{
    id:number,
    type:string
}
const Deletbtn = ( {id, type}: IDeletbtnType) => {
    const {  setTodaysPlan,  setSaveWorkout} = useContext(FitLogContext);
    const handleDelletBtn =()=>{
        if(type === "todaysPlan"){
            setTodaysPlan(prev =>prev.filter(item =>item.id !== id));
            toast.error("Workout removed from today's plan!");
        }
        if(type === "workouts"){
            setSaveWorkout(prev => prev.filter(item =>item.id !== id));
            toast.error("Workout removed from saved workouts!");
        }

    }
    return (
        <button className='ml-2 cursor-pointer ' onClick={()=>handleDelletBtn()}><RxCross2 className='text-2xl' /></button>
    );
};

export default Deletbtn;