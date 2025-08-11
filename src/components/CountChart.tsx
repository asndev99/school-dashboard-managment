"use client"
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Boys', count: 53, fill: '#C3EBFA' },
    { name: 'Girls', count: 53, fill: '#FAE27C' },
    { name: 'Total', count: 106, fill: 'White' },
];

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Students</h1>
                <Image src={"/moreDark.png"} alt='' width={20} height={20} />
            </div>

            {/* CHART */}
            <div className='w-full h-[75%] flex justify-center'>

                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>

            </div>

            {/* BOTTOM */}
            <div className='flex justify-between'>
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart
