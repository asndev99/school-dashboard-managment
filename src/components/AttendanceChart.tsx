"use client"
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 90,
        absent: 30,
    },
    {
        name: 'Tue',
        present: 65,
        absent: 75,
    },
    {
        name: 'Wed',
        present: 23,
        absent: 100,
    },
    {
        name: 'Thu',
        present: 72,
        absent: 10,
    },
    {
        name: 'Fri',
        present: 32,
        absent: 21,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-full p-4 h-full'>
            <div className='flex justify-between items-center '>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: 20, paddingBottom: 40 }} />
                    <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType='circle' radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default AttendanceChart