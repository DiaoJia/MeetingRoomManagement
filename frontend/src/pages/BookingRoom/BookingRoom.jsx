import { Box, Typography, Button } from "@mui/material";
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
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const [events, setEvents] = useState([]);

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: events,
    callbacks: {
      onEventClick: (event) => {
        console.log('onEventClick', event)
      },
      onClickDate(event) {
        console.log('onClickDate', event)
      },
    },
    plugins: [eventsService]
  })

  useEffect(() => {
    eventsService.getAll()
  }, []);

  const handleAddRoom = () => {
    const newEvent = {
      id: '3',
      title: 'Event 3',
      start: '2025-02-27',
      end: '2025-03-28',
    };
    calendar.events.add(newEvent);
  };

  return (
    <Box>
      <Box sx={styles.header}>
        <Typography variant="h4" sx={styles.title}>Booking Rooms</Typography>
        <Button variant="outlined" sx={styles.addButton} onClick={handleAddRoom}>Add</Button>
      </Box>
      <Box sx={{ width: '95%', p: 1 }}>
        <ScheduleXCalendar calendarApp={calendar} />
      </Box>
    </Box>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: '95%'
  },
  title: {
    p: 1
  },
  addButton: {
    mt: 1,
    mb: 1
  }
};


export default BookingRoom