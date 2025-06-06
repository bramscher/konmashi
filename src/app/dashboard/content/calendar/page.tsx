"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

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
  const [selectedIds, setSelectedIds] = React.useState<number[]>([])

  // Mock event dates for calendar dots
  const eventDays = mockContent.map((item) => item.date.toDateString());

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const allSelected = selectedIds.length === mockContent.length && mockContent.length > 0;
  const toggleSelectAll = () => {
    setSelectedIds(allSelected ? [] : mockContent.map((item) => item.id));
  };

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
      <div className="overflow-x-auto">
        <div className="rounded-lg border divide-y bg-background shadow-sm">
          <div className="flex items-center px-4 py-2 bg-muted font-medium text-sm rounded-t-lg">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleSelectAll}
              className="mr-3 accent-primary"
              aria-label="Select all"
            />
            <span className="w-28">Date</span>
            <span className="w-28">Platform</span>
            <span className="flex-1">Title</span>
            <span className="w-32">Publish Date</span>
            <span className="w-20">Type</span>
          </div>
          {mockContent.map((item) => {
            const selected = selectedIds.includes(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${selected ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-accent"}`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleSelect(item.id)}
                  className="mr-3 accent-primary"
                  aria-label={`Select ${item.title}`}
                />
                <span className="w-28 text-sm">{item.date.toLocaleDateString()}</span>
                <span className="w-28 text-sm">{item.platform}</span>
                <span className="flex-1 text-sm font-medium truncate">{item.title}</span>
                <span className="w-32 text-sm">{item.publishDate}</span>
                <span className="w-20 text-sm">{item.type}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  )
} 