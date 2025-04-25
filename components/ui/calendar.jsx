// components/ui/calendar.jsx

import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css" // ✅ important!

export function Calendar(props) {
  return (
    <div className="rounded-md border p-4 bg-white">
      <DayPicker
        mode="single"
        className="w-full"
        showOutsideDays
        fixedWeeks
        {...props}
      />
    </div>
  )
}
