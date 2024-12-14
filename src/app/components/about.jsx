import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">ABOUT PIET</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                <ul className="list-disc pl-4 space-y-2">
                  <li className="pl-4">
                    Poornima Institute of Engineering & Technology, Jaipur, PIET, a premier institution in engineering education was established in the academic year <b> 2007</b>.
                  </li>
                  <li className="pl-4 ">PIET is affiliated to <b> Rajasthan Technical University.</b></li>
                  <li className="pl-4 ">PIET is approved by <b> AICTE. </b></li>
                  <li className="pl-4 ">The institution aims at providing world-class technical and scientific education that can develop a professional outlook in every walk of life.</li>
                  <li className="pl-4 ">PIET has been the <b> 1st institution </b> to offer <b> B.Tech CSE in Regional language. </b></li>
                  <li className="pl-4 ">PIET is accredited by the <b> National Assessment and Accreditation Council (NAAC). </b></li>
                  <li className="pl-4 ">PIET has been <b> rated PLATINUM </b> in the Survey of Industry Linked Technical Institutes conducted <b> by AICTE-CII. </b></li>
                </ul>
              </CardContent>
            </Card>

            <Image src={"/piet.jpeg"} width={600} height={300}/>


          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-16">
            <Image src={"/piet2.jpeg"} width={600} height={300}/>


            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                <ul className="list-disc pl-4 space-y-2">
                  <li className="pl-4">PIET has been ranked <b> 3rd in QIV ranking. </b></li>
                  <li className="pl-4">
                    Two of its programs, namely B.Tech in Computer Engineering and B.Tech in Civil Engineering, are accredited by the <b> National Board of Accreditation (NBA) </b>, India, for the quality education.
                  </li>
                  <li className="pl-4">
                    PIET is the only institute in Rajasthan to be funded by <b> AICTE </b> with a fund of <b> Rs. 55 Lakh for establishing IDEA Lab </b>.
                  </li>
                  <li className="pl-4">
                    PIET has been granted in aid of Rs. 12.84314/- for establishing the Neural Network & Deep Learning Lab under the <b> MODROB Scheme </b>.
                  </li>
                  <li className="pl-4">
                    PIET received a research grant of more than 50 Lakh in 2019-20 & 2020-21 from agencies like <b> TEQIP III, AICTE, NITTTR </b>, etc.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About