"use client"
import { Calendar, globalizeLocalizer, View, Views } from 'react-big-calendar'
import globalize from 'globalize'
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = globalizeLocalizer(globalize)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const onViewChange = (selectedView: View) => {
        setView(selectedView);
    }

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: 500 }}
            onView={onViewChange}
        />
    )

}

export default BigCalendar;