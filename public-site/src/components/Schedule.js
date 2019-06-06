import React from "react"
import schedule from "../data/schedule"

const planned = schedule.planned

const Schedule = () => (
  <ul>
    {planned &&
      planned.map((event, index) => {
        return (
          <li key={index}>
            {event.date.toLocaleDateString()} - {event.category}
          </li>
        )
      })}
  </ul>
)

export default Schedule
