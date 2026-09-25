import { IExercise } from "@/type/IExercise";


const CalculatTotalCalories = (exercise:IExercise[]):number => {
    return exercise.reduce((total, exercise)=>{
        return total + Number(exercise.caloriesBurned ||0) ;
    },0) 
        
 
};

export default CalculatTotalCalories;

