"use client"

import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

export function BookingCalendar({ selected, onSelect }) {
  return (
    <div className="rounded-md border p-4 shadow bg-white max-w-md">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        showOutsideDays
        classNames={{
          months: "flex flex-wrap justify-center gap-4",
          month: "space-y-4",
          caption: "flex justify-between items-center px-4",
          caption_label: "text-sm font-medium",
          nav: "flex items-center gap-2",
          table: "w-full border-collapse",
          head_row: "flex",
          head_cell: "w-10 h-10 text-center text-sm font-semibold",
          row: "flex w-full",
          cell: "w-10 h-10 text-center text-sm",
          day: "flex items-center justify-center h-10 w-10 rounded hover:bg-accent hover:text-white",
          day_selected: "bg-[#B87D4B] text-white",
          day_today: "border border-accent",
          day_outside: "text-muted-foreground/40",
        }}
        
      />
    </div>
  )
}
