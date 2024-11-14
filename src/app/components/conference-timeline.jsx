import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    date: 'January 1, 2024',
    title: 'Early Bird Registration Opens',
    description: 'Get the best prices on conference tickets!'
  },
  {
    date: 'March 1, 2024',
    title: 'Call for Speakers Closes',
    description: 'Last day to submit your speaker proposals'
  },
  {
    date: 'April 15, 2024',
    title: 'Early Bird Registration Ends',
    description: 'Last chance for discounted tickets'
  },
  {
    date: 'June 1, 2024',
    title: 'Regular Registration Period',
    description: 'Standard ticket prices now apply'
  },
  {
    date: 'August 15, 2024',
    title: 'Late Registration Begins',
    description: 'Final chance to secure your spot'
  },
  {
    date: 'September 15-17, 2024',
    title: 'TechConf 2024',
    description: 'Join us for three days of innovation!'
  }
];

export function ConferenceTimeline() {
  return (
    <section className="py-20 bg-gray-50" id="schedule">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Conference Timeline</h2>
        <div className="relative">
          {/* Horizontal scrollable timeline for larger screens */}
          <div className="hidden md:block overflow-x-auto pb-8">
            <div className="relative" style={{ width: `${timelineEvents.length * 250}px` }}>
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2"></div>
              
              <div className="relative z-10 flex justify-between">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex flex-col items-center w-64">
                    <div className="w-8 h-8 bg-blue-600 rounded-full mb-2"></div>
                    <Card className="w-56 text-center">
                      <CardContent className="p-4">
                        <p className="font-semibold text-blue-600">{event.date}</p>
                        <h3 className="font-bold mt-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical timeline for smaller screens */}
          <div className="md:hidden space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-200 mt-2"></div>
                </div>
                <Card className="flex-grow">
                  <CardContent className="p-4">
                    <p className="font-semibold text-blue-600">{event.date}</p>
                    <h3 className="font-bold mt-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}