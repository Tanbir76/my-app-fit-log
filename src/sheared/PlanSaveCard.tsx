import Deletbtn from '@/btnhundle/Deletbtn';
import { IExercise } from '@/type/IExercise';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled, MdStar } from 'react-icons/md';
import { RiPieChart2Fill } from 'react-icons/ri';

const PlanSaveCard = ({ data, type }: { data: IExercise,type:string }) => {
    return (

        <div className=" bg-base-100 grid lg:flex justify-between items-center   overflow-hidden rounded-2xl  shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl p-4 ">

            {/* Image */}
            <div className='flex'>

                <Image
                    src={data.image}
                    alt={data.name}
                    width={200}
                    height={100}
                    className="object-cover rounded-2xl"
                />
                <div className="px-4 ">
                    <h1 className=" font-bold mt-5">{data.name}</h1>
                    <p className="text-[#9CA3AF] text-[14px] mb-4">{data.equipment}</p>
                    <div className="flex gap-4 justify-between items-center mt-2 mb-5 text-[#9ca3afda]">
                        <p className="flex items-center gap-1"><MdOutlineAccessTimeFilled className='text-[#C2F800]' />{data.duration}  min</p>
                        <p className="flex items-center gap-1"><RiPieChart2Fill className='text-[#C2F800]'  />{data.caloriesBurned} kcal</p>
                        <p className="flex items-center gap-1"><MdStar className='text-[#C2F800]' />{data.rating}</p>
                    </div>

                </div>
            </div>
            <div className=' mt-10 lg:mt-0 text-center flex mr-5 space-x-1.5'>
                <Link href={`/detailsPage/${data.id}`}>
                 <button className="btn px-6 rounded-2xl border border-[#7a717142] ">View Detaies</button>
                </Link>
                <button className="btn px-6 rounded-2xl bg-[#C2F800] text-black"><FaCheck />Mark as Done</button>
                <Deletbtn id={data.id} type= {type} />

            </div>
        </div>
    );
};

export default PlanSaveCard;