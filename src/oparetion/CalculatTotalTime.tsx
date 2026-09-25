import { IExercise } from '@/type/IExercise';

const CalculatTotalTime = (exercise:IExercise[]):number => {
    return exercise.reduce((total, exercise)=>{
        return total + Number( exercise.duration || 0  );
    },0)
       

};

export default CalculatTotalTime;