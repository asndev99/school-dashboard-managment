"use client"
import Image from 'next/image';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Jan', income: 4200, expense: 3100 },
    { name: 'Feb', income: 5300, expense: 2900 },
    { name: 'March', income: 6100, expense: 3700 },
    { name: 'April', income: 4800, expense: 4000 },
    { name: 'May', income: 7200, expense: 4500 },
    { name: 'June', income: 6900, expense: 3800 },
    { name: 'July', income: 7500, expense: 4200 },
    { name: 'August', income: 8100, expense: 5000 },
    { name: 'September', income: 6700, expense: 4300 },
    { name: 'October', income: 7900, expense: 5200 },
    { name: 'November', income: 8500, expense: 5600 },
    { name: 'December', income: 9000, expense: 6000 },
];


const FinanceChart = () => {
    return (
        <div className='bg-white rounded-full h-full'>
            <div className='flex justify-between items-center '>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Legend
                        align='center'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: 10, paddingBottom: 30 }}
                    />
                    <Line type="monotone" dataKey="income" stroke="#00BFFF" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expense" stroke="#9370DB" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default FinanceChart