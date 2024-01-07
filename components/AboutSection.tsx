import React from "react"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "AIML" },
  { skill: "Jupyter Notebook" },
  { skill: "Machine Learning" },
  { skill: "Generative AI" },
  { skill: "Django" },
  { skill: "Flask" },
  { skill: "Tensorflow" },
  { skill: "NLP" },
  { skill: "Java" },
  { skill: "Android" },
  { skill: "Firebase" },
  { skill: "MySQL" },
  { skill: "Bootstrap" },
  { skill: "AWS" },
  { skill: "Google Cloud" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Terraform" },
  { skill: "Solidity" },
  { skill: "Selenium" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Shreya Nalawade and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              enthusiast from Mumbai University.
            </p>
            <br />
            <p>
              I am pre-final year CSE Enthusiast with keen interest in Technologies like AIML, Deep Learning and Devops as well as I am full-stack developer contributing to various open-source projects.
            </p>
            <br />
            <p>
            I have a diverse array of hobbies and passions that continually captivate my attention. Whether it's immersing myself in various novels, watching a wide range of movies and documentaries, or listening to engaging technology podcasts, my interests are eclectic and ever-evolving. I find joy in the world of literature, exploring different genres and narratives through novels. Simultaneously, the visual medium of movies and documentaries offers me a unique perspective on diverse subjects. Additionally, staying informed and entertained through technology podcasts allows me to delve into the latest advancements and discussions in the tech world. This dynamic mix of activities keeps me engaged and fueled by a perpetual desire to learn and experience new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-yellow-600">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection