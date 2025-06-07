"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const mockContent = [
  {
    id: 1,
    date: new Date(2024, 5, 10),
    platform: "Twitter",
    title: "How to Use AI for Content Marketing",
    publishDate: "2024-06-10",
    type: "Post",
  },
  {
    id: 2,
    date: new Date(2024, 5, 14),
    platform: "LinkedIn",
    title: "5 Social Media Trends in 2024",
    publishDate: "2024-06-14",
    type: "Article",
  },
  {
    id: 3,
    date: new Date(2024, 5, 21),
    platform: "Instagram",
    title: "Brand Storytelling Visuals",
    publishDate: "2024-06-21",
    type: "Image",
  },
];

export default function ContentCalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // Mock event dates for calendar dots
  const eventDays = mockContent.map((item) => item.date.toDateString());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Content Calendar (Mockup)</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm mb-8"
        captionLayout="dropdown"
      />
      <h2 className="text-xl font-semibold mb-2">Scheduled Content</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Publish Date</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockContent.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date.toLocaleDateString()}</TableCell>
              <TableCell>{item.platform}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.publishDate}</TableCell>
              <TableCell>{item.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 