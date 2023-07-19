import React from 'react'
import { motion } from "framer-motion"
import Card from '../Card'

const SmallDiv4 = () => {

    const transition = { duration: 5, type: "spring" };

  return (
    <div className="main-home-4">
<div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>Knowly mindAtlas</span>
        <span>Learning platform</span>
        <spane>
        The website ensures a secure environment for students by incorporating advanced security measures such as encryption and 
        authentication protocols. Whether students are seeking to improve their coding skills, stay up-to-date with the latest industry trends, 
        or connect with like-minded peers, the student discussion website provides a robust platform to help them achieve their goals.
        <br />
        The student discussion website is a valuable tool for students to enhance their knowledge and skills in the field of IT. With its wide range of features and advantages, it is a useful resource for students to access a variety of programming languages, tutorials, and discussions on recent IT developments. The website's user-friendly interface and intuitive navigation make it easy for students to find relevant content and engage with other members of the community.
One of the most significant advantages of the student discussion website is its interactive features. Through live coding challenges, discussion forums, and peer-to-peer engagement, students can collaborate and learn from each other. The website also offers tutorials and resources on various programming languages, which can help students develop their skills and stay up-to-date with the latest industry trends.
Another advantage of the website is its secure backend, which ensures the privacy and safety of its users. The website's advanced security features and protocols protect users' personal information and prevent unauthorized access to the website's database.
        </spane>
        <div className="blur s-blur1" style={{ background: "#fff" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ top: "8rem",left: "30rem",rotate:"10deg" }}
          // whileInView={{ top: "2rem" }}
          transition={transition}
        >
          <Card
            detail={"Foster a dynamic learning community where students can collaborate and learn from one another."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ right: "-15rem", top: "12rem", rotate:"10deg" }}
          // whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            detail={"It's comprehensive resources on programming languages and recent developments in the IT industry, students can explore and deepen their understanding of the subject matter."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem", rotate:"-10deg"}}
          // whileInView={{ left: "25rem"  }}
          transition={transition}
        >
          <Card
            detail={
              "Interactive features such as live chat and discussion forums, which facilitate meaningful conversations and peer-to-peer learning."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
</div>
  )
}

export default SmallDiv4
