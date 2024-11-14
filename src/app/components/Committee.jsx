
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const committeeMembers = {
  "General Chairs": [
    { name: "Dr. Jane Smith", role: "Professor, Tech University", image: "/?height=100&width=100&text=JS" },
    { name: "Prof. John Doe", role: "Director, Institute of AI", image: "/?height=100&width=100&text=JD" },
  ],
  "Program Committee": [
    { name: "Dr. Emily Johnson", role: "Associate Professor, Data Science", image: "/?height=100&width=100&text=EJ" },
    { name: "Dr. Michael Chen", role: "Senior Researcher, AI Ethics", image: "/?height=100&width=100&text=MC" },
    { name: "Prof. Sarah Williams", role: "Head of Computer Vision Lab", image: "/?height=100&width=100&text=SW" },
  ],
  "Organizing Committee": [
    { name: "Dr. Robert Lee", role: "Conference Manager", image: "/?height=100&width=100&text=RL" },
    { name: "Ms. Laura Martinez", role: "Communications Director", image: "/?height=100&width=100&text=LM" },
    { name: "Mr. David Wilson", role: "Sponsorship Coordinator", image: "?height=100&width=100&text=DW" },
  ],
}

export default function OrganizingCommittee() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-white">Organizing Committee</h2>
        <p className="text-xl text-center text-blue-100 mb-12">
          Meet the dedicated team behind the IEEE Tech Event 2024
        </p>
        <Tabs defaultValue="General Chairs" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-blue-700 rounded-lg p-1">
            {Object.keys(committeeMembers).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-blue-100 data-[state=active]:bg-white data-[state=active]:text-blue-800"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(committeeMembers).map(([category, members]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {members.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Avatar className="w-24 h-24 mb-4">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
                        <p className="text-blue-600">{member.role}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}