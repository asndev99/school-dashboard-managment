"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem Ispum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ispum"
    },
    {
        id: 2,
        title: "Lorem Ispum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ispum"
    },
    {
        id: 3,
        title: "Lorem Ispum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ispum"
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white rounded-full p-4'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
                {events.map((item) => (
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={item.id}>
                        <div className='flex items-center justify-between'>
                            <h1>{item.title}</h1>
                            <span>{item.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCalendar