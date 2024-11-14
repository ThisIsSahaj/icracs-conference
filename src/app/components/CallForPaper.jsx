import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CallForPaper() {
  const tracks = [
    {
      title: "IoT, Big Data and Cloud Systems",
      topics: [
        "Architecture support for cloud computing",
        "IoT and IoE Architectures",
        "Workflow Management in Clouds",
        "Distributed & Cloud Networking",
        "Web of Things Cloud/Edge Computing",
        "5G and next generation networks",
        "Big data management and Blockchain",
        "Data Mining and Data Privacy",
        "Cloud Workload Profiling",
        "Wearable Applications, Smart City & Industry 4.0",
      ],
    },
    {
      title: "Image and Video Processing",
      topics: [
        "Robot Vision and Pattern Recognition",
        "Biometrics and Forensics",
        "Classification and Gesture Estimation",
        "Biomedical Assistive Application",
        "Satellite, Remote and Geo Applications",
        "Video Analysis & Understanding",
        "Image Analysis, Detection and Recognition",
        "3D Computer Vision and Geometry",
      ],
    },
    {
      title: "Artificial Intelligence & Advancements",
      topics: [
        "Concurrent and Parallel Processing",
        "Intelligent Database Systems",
        "Neural Network Theory and Architectures",
        "Natural Language Processing",
        "Expert & Multi-agent Systems",
        "Speech Understanding",
        "Distributed Intelligent Processing",
        "Computer Vision, Robotics and Related Fields",
      ],
    },
    {
      title: "Electrical Systems",
      topics: [
        "Wireless Power Transfer and Electric Vehicles",
        "Environmental Protection and Alternative Energy",
        "High Voltage Engineering and Insulation Technology",
        "Renewable Power Conversion Technologies",
        "Power Electronics application in Power Systems",
        "Distributed Generation and Energy Storage",
        "Motor Drives, Electrical Machines and Industry Applications",
        "Control and Mechatronics",
        "CMOS VLSI",
        "Wide Band Gap Semi-conductor Devices",
        "Photo and Opto-Electronics",
        "Nanoscience and nano materials",
        "Testing, Reliability and Fault Tolerance",
        "Solid State Circuits",
        "Circuits and Systems",
        "Micro and Nano-Sensors",
        "Non-Classical (Advanced CMOS Devices)",
        "MEMS and NEMS",
      ],
    },
    {
      title: "Wireless Networks, Antenna and Microwave Technology",
      topics: [
        "Mobile and Base Station",
        "Reconfigurable Antennas and Arrays",
        "MEMS/Nanotechnology for antennas",
        "MMICs and Microwave Circuits",
        "UWB and Impulse Radio",
        "Wireless MAC protocols for 5G",
        "Wireless Network Functions Virtualization",
        "Software-defined mobile / wireless networks",
        "MAC for mesh, ad hoc, relay and sensor networks",
        "Microstrip and Printed Antennas",
        "Meta-Materials and Meta Surfaces",
        "RF Energy Harvesting and Applications",
        "RF sensors for Biomedical Application",
        "Conformal Antenna/Filtenna",
        "Adaptive and Reconfigurable Antennas",
        "Wireless Sensor Networks and Applications",
        "Sensor Networks and Body Area Networks",
        "RADAR Communication",
        "Data Communication Network",
        "Cognitive Radio",
      ],
    },
    {
      title: "Intelligent Computation and Smart Systems",
      topics: [
        "Software Agents and Multi-Agent Systems",
        "Edge Data Authentication",
        "Web Intelligence and Intrusion Detection",
        "High Performance Computing and Cyber Security Issues",
        "Hybridisation of Intelligent Networks",
        "Web and Grid Computing",
        "Soft and Cognitive Computing",
        "Parallel and Distributed Computing",
        "Security Frameworks and Protocols",
        "Advanced Intelligent Systems in Access Control",
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white" id="callforpaper">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">CALL FOR PAPERS</h2>
        <p className="text-xl text-center text-gray-700 mb-12">
          The topics of the conference include, but are not limited to:
        </p>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {tracks.map((track, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="text-xl font-semibold text-blue-700 p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
                Track {index + 1}: {track.title}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white">
                <ul className="list-disc pl-6 space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-700">
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}