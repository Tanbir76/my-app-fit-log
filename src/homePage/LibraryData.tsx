import FitLogCard from "@/sheared/FitLogCard";
import { IExercise } from "@/type/IExercise";

const dataPromise = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data
}
const LibraryData = async () => {
    const fitLogData = await dataPromise();
    console.log(fitLogData, "data created");

    return (
        <div id="library" className=" container mx-auto mt-22">
            <h1 className="font-extrabold text-2xl">THE</h1>
            <p className="text-[#9CA3AF] text-[18px]">Twelve lifts covering every major muscle group.</p>

            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
                {
                    fitLogData.map((data: IExercise) => {
                        return (
                            <FitLogCard data={data} key={data.id} />
                        )


                    })

                }
            </div>
        </div>
    );
};

export default LibraryData;