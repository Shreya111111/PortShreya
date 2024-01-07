import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "DealZone Hub",
    description:
      "The e-commerce app features robust authentication mechanisms, enabling users to securely create accounts and manage their profiles. It incorporates seamless checkout processes and efficient add/delete functionality to the shopping basket, providing a streamlined and user-friendly online shopping experience.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/DealZone_Auth",
  },
  {
    name: "GenRecognition",
    description: "The Gender Classification App employs OpenCV for Eigenvalue Face Analysis, delivering accurate gender predictions with an associated prediction score. By leveraging advanced facial recognition techniques, it provides a sophisticated yet user-friendly solution for classifying genders based on facial features.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/Gen_Recognition",
  },
  {
    name: "LinkScrape",
    description:
      "LinkScrape is a dynamic application designed to extract and collect essential links from specific websites. It operates by traversing through the pages of a designated site, meticulously capturing the names of embedded links along with their respective addresses.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/Linkscrape",
    
  },
  {
    name: "CodeScribe",
    description:
      "CodeScribe offers a seamless coding experience for individuals at all skill levels, fostering creativity and efficiency in programming tasks. Whether you are a seasoned professional or a beginner, the platform supports various programming languages, accommodating a diverse range of developers and enabling them to streamline their workflow with ease.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/CodeScribe",
    
  },
  {
    name: "ImagiSwitch",
    description:
      "ImagiSwitch Converter is a versatile and user-friendly Chrome extension designed to effortlessly switch between JPG and PNG image formats. Whether you need to optimize file sizes for web use, preserve transparency, or adapt to specific requirements, ImagiSwitch Converter is your go-to tool.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/ImagiSwitch",
    
  },
  {
    name: "VideoStream",
    description:
      "The Videocalling App built with Django boasts a user-friendly interface and leverages the framework's capabilities to provide a seamless multi-user experience within a single virtual room. Users can effortlessly join and participate in video calls, fostering collaborative interactions and enabling group communication through Django's powerful and scalable architecture.",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/VideoChat",
    
  },
  {
    name: "VoiceAssistant",
    description:
      "This voice recognition assistant converts speech from microphone to text with various features built using react speech recognition - a react hook that listens from device mic and performs various functions which includes changing text size, colors, fonts and viewing browser sites",
    image: "/sample.png",
    github: "https://github.com/Shreya111111/Voice-Recognition",
    
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection