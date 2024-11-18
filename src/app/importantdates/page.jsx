import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from 'lucide-react'

const events = [
  {
    date: "2 March 2024",
    title: "Full Paper Submission"
  },
  {
    date: "15 March 2024",
    title: "Notification of Acceptance"
  },
  {
    date: "25 March 2024",
    title: "Camera Ready Paper"
  },
  {
    date: "30 March 2024",
    title: "Early Bird Registration"
  },
  {
    date: "10 April 2024",
    title: "Registration (with Late Fee)"
  },
  {
    date: "24-25 April 2024",
    title: "Date of Conference"
  }
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">Event Schedule</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Mark these important dates in your calendar. All deadlines are set to 11:59 PM IST (GMT +5:30).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <CalendarDays className="w-8 h-8 opacity-80" />
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">{event.date}</h2>
                  <p className="text-blue-100">{event.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-lg text-gray-600">
          <p> <b> * Please ensure timely submission to avoid any last-minute technical issues.</b></p>
          <p> <b> * All submissions will be reviewed on a rolling basis.</b></p>
        </div>
      </div>
    </div>
  )
}