import React, { useContext } from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import { ProfileContext } from '../../context/ProfileContext';

const Stats = () => {

    const { callList, videoCallList, textList } = useContext(ProfileContext);

    const data = [
        { name: "Call", length: callList.length, fill: '#244D3F' },
        { name: "VideoCall", length: videoCallList.length, fill: '#37A163 '},
        { name: "Text", length: textList.length, fill: '#7E35E1' }
    ];

    const isEmpty = data.every(item => item.length === 0);

    return (
        <div className='bg-base-200 p-10 '>
            <span className='font-bold text-3xl'>Friendship Analytics</span>

            {
                isEmpty ? (
                    <div className='font-semibold text-xl m-5 mt-15 bg-base-100 grid justify-center p-10 rounded-xl'>
                        No Data Found
                    </div>
                ) : (
                    <div className='bg-base-100 p-6 m-5 grid gap-5 rounded-2xl'>
                        <span className='font-bold text-xl mb-5'>By Interaction Type</span>

                        <div className='grid justify-center justify-items-center gap-5'>
                            <PieChart width={300} height={300}>
                                <Pie
                                 innerRadius="80%"
        outerRadius="100%"
                                    dataKey='length'
                                    data={data}
                                    paddingAngle={5}
                                    cornerRadius={10}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <div className='flex gap-3'>
                                <span className='flex items-center gap-1 text-[14px] text-[#64748B]'>
                                    <div className="w-1.5 h-1.5 rounded-full border-6 border-[#7E35E1]"></div>
                                    Text
                                    </span>
                                <span className='flex items-center gap-1 text-[14px] text-[#64748B]'>
                                   <div className="w-1.5 h-1.5 rounded-full border-6 border-[#244D3F]"></div> 
                                Call</span>
                                <span className='flex items-center gap-1 text-[14px] text-[#64748B]'>
                                    <div className="w-1.5 h-1.5 rounded-full border-6 border-[#37A163]"></div>
                                    Video</span>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
};

export default Stats;