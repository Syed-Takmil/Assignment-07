import React, { useContext } from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import { ProfileContext } from '../../context/ProfileContext';

const Stats = () => {

    const { callList, videoCallList, textList } = useContext(ProfileContext);

    const data = [
        { name: "Call", length: callList.length, fill: 'green' },
        { name: "VideoCall", length: videoCallList.length, fill: 'blue' },
        { name: "Text", length: textList.length, fill: 'gray' }
    ];

    const isEmpty = data.every(item => item.length === 0);

    return (
        <div className='bg-base-200 p-15'>
            <span className='font-bold text-xl'>Friendship Analytics</span>

            {
                isEmpty ? (
                    <div className='font-bold text-xl m-5 bg-base-100 grid justify-center p-10 rounded-xl'>
                        No Data Found
                    </div>
                ) : (
                    <div className='bg-base-100 p-6 m-5 grid gap-5 rounded-2xl'>
                        <span className='font-bold text-xl mb-5'>By Interaction Type</span>

                        <div className='flex justify-center'>
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
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Stats;