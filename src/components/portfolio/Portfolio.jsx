import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    organization: 'Cognizant',
    projectName:"Oxford University Press",
    type:"Full Time",
    img: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2024/01/cognizant.jpg',
    desc: "Experienced Result-driven Full Stack Developer with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js). Certified AWS Cloud Practitioner with experience in managing and inventive cloud services, particularly AWS S3 and EC2 instances for test and development environments.",
    desc2: "Expertise in implementing and problem-solving MongoDB aggregation pipelines to optimize data aggregation and improve RESTful API performance. Proficiently used CI/CD pipelines, github repositories and Jira tickets for client projects.",
    
  },
  {
    id: 2,
    organization: 'Cognizant',
    projectName:"Developed Scholarship Website ",
    type:"Internship",
    img: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2024/01/cognizant.jpg',
    desc: 'Collaborated closely with leading architects to develop a responsive and user-friendly scholarship website using the MERN stack (MongoDB, Express.js, React, Node.js).Engineered robust RESTful APIs to facilitate efficient data retrieval and management, allowing applicants to view application statuses, log in securely, and apply for various scholarships.Implemented secure user authentication and authorization protocols, including JWT and OAuth, to protect sensitive information and maintain data integrity.'

  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h3>Experience : {item.projectName}</h3>
            <h3>Organization : {item.organization}</h3>
            <h3>Type : {item.type}</h3>
            <p>{item.desc}</p>
            <p>{item.desc2}</p>
            
            
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='experience' ref={ref}>
      <div className='progress'>
        <h1>Work Experience</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
