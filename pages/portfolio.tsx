import Image from "next/image";
import diag from "/public/diag.png";
import office from "/public/office.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const qualities = {
  I: "Innovative",
  M: "Motivated",
  B: "Brilliant",
  U: "Understanding",
  E: "Efficient",
};

const sections = [
  {
    id: "about-me",
    title: "About Me",
    content:
      "I am a graduate student at Syracuse University - College of Engineering and Computer Science pursuing MS in Computer Science. Experienced in Data Analysis, Python Programming, Data Engineering, and Machine Learning. Hands-on experience with Python (Pandas, Numpy, Sklearn, Matplotlib, Plotly), Jupyter, Tableau, PowerBI, SQL. Currently optimizing my time in 'I can make your data tell a story'. I want to pursue a career in Data Science to put my passion for Mathematics, Statistics, and analytic thinking to use. I would like to develop my career at an association driven by innovation and work closely with clients in the AI/ML domain using the knowledge and skills acquired to implement models' execution and scheduling, machine learning libraries to their extremes, and often adding new functionalities.",
  },  
  {
    id: "company-culture",
    title: "What is Imbue?",
    content: 
      "Imbue builds AI systems that reason and code, enabling AI agents to accomplish larger goals and safely work in the real world. We train our own foundation models optimized for reasoning and prototype agents on top of these models. By using these agents extensively, we gain insights into improving both the capabilities of the underlying models and the interaction design for agents. \n\n We aim to rekindle the dream of the personal computer, where computers become truly intelligent tools that empower us, giving us freedom, dignity, and agency to pursue the things we love.\n\nMission: To create AI systems that reason and code, enabling robust AI agents to accomplish larger goals in the real world.\n\nVision: Empower users with personal computers that can reason, iterate, and reflect, enhancing human potential and creativity.",
    imageUrl: diag,
    imagePosition: "left",
  },  
  
  {
    id: "machine-learning-engineer-role",
    title: "My Vision for the Future as an Imbue Machine Learning Engineer",
    content:
      "I aim to leverage my machine learning skills to contribute to groundbreaking projects and further develop my expertise in deep learning and GenAI infrastructure. I am looking for a role that offers opportunities to work on GenAI and implement improvements to AI models, aligning with Imbue's mission. At Imbue, I expect to collaborate with talented professionals, engage in continuous learning, and take on challenges that push the boundaries of AI capabilities. My goal is to make meaningful contributions that enhance the performance and practical application of AI models, supporting Imbue's strategic initiatives in creating general human-like machine intelligence.",
    imageUrl: office, // Replace with actual image URL or import path if using Next.js
    imagePosition: "left",
  }    
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  


  return (
    <div className="text-black-200">
      <div className="container mx-auto px-4 py-4">
        {sections.map((section) => (
          <section key={section.id} className="mb-12" style={{marginBottom:'1rem'}}>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              {section.imagePosition === "left" && (
                <div className="md:col-span-2">
                  <div className="image-container">
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      layout="responsive"
                      className="image-3d-effect"
                      width={600} // Set a suitable width based on your design
                      height={600} // Set a suitable height based on your design
                    
                    />
                  </div>
                </div>
              )}
              <div className={section.id === "about-me" ? "md:col-span-6" : "md:col-span-4"} style={{paddingRight:20}}>
                <h2 className="text-2xl font-bold font-serif text-accent-color mb-4">
                  {section.title}
                </h2>
                {section.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-md text-justify font-serif leading-relaxed text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.imagePosition === "right" && (
                <div className="md:col-span-2">
                  <div className="image-container" style={{width:'200px',height:'140px'}}>
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      layout="responsive"
                       width={600} // Set a suitable width based on your design
                     height={1000} // Set a suitable height based on your design
                      className="image-3d-effect"                    
                      />
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="mb-10">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-1"
            ref={ref}
          >
            {Object.entries(qualities).map(([letter, quality]) => (
              <div
                key={letter}
                className={`flex flex-col items-center justify-center p-4 w-25 h-20 m-2 border rounded-lg shadow hover:bg-accent-color text-orange-800 hover:text-white ${
                  inView ? "scale-110" : "scale-100"
                } transition-transform duration-500`}
              >
                <h3 className="text-xl font-semibold font-serif">
                {letter}
                </h3>
                <p className="text-sm">{quality}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;
