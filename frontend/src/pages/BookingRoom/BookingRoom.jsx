import { Box } from "@mui/material";
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { useState, useEffect } from 'react'

import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
 
import '@schedule-x/theme-default/dist/index.css'
 
function BookingRoom() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        location: 'Room 1',
        start: '2025-02-25 10:00',
        end: '2025-02-27 12:00',
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2025-02-26',
        end: '2025-02-27',
      },
    ],
    plugins: [eventsService]
  })
 
  useEffect(() => {
    eventsService.getAll()
  }, [])
 
  return (
    <Box>
      <ScheduleXCalendar calendarApp={calendar} />
    </Box>
  )
}
 
export default BookingRoom