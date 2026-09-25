import { FitLogContext } from '@/context/FitLogContext';
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface IDeletbtnType{
    id:number,
    type:string
}
const Deletbtn = ( {id, type}: IDeletbtnType) => {
    const {  setTodaysPlan,  setSaveWorkout} = useContext(FitLogContext);
    const handleDelletBtn =()=>{
        if(type === "todaysPlan"){
            setTodaysPlan(prev =>prev.filter(item =>item.id !== id));
        }
        if(type === "workouts"){
            setSaveWorkout(prev => prev.filter(item =>item.id !== id));
        }

    }
    return (
        <button className='ml-2 cursor-pointer ' onClick={()=>handleDelletBtn()}><RxCross2 className='text-2xl' /></button>
    );
};

export default Deletbtn;