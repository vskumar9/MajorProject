import React from 'react'
// import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


import FloatinDiv from '../../FloatingDiv/FloatingDiv'

import Vector1 from '../../../../assets/img/Vector1.png'
import Vector2 from '../../../../assets/img/Vector2.png'
import boy from '../../../../assets/img/boy.png'
import python from '../../../../assets/img/python.svg'
import mysql from '../../../../assets/img/mysql.svg'
import java from '../../../../assets/img/java.svg'
import html from '../../../../assets/img/html.svg'
import css from '../../../../assets/img/css3.svg'
import git from '../../../../assets/img/github.svg'
import angularjs from '../../../../assets/img/angularjs.svg'
import kotlin from '../../../../assets/img/kotlin.svg'
import node from '../../../../assets/img/nodejs.svg'
import postSql from '../../../../assets/img/postgresql.svg'





const SmallDiv3 = () => {

    
  const transition = { duration: 2, type: "spring" };


  return (
    <div className="main-home-3">
<div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Knowly mindAtlas</span>
          <span>Learning platform</span>
          <span>
          The Knowly mindAtlas website is a powerful tool for students to engage in meaningful conversations, <br />
          share knowledge and learn from one another. With its user-friendly interface, up-to-date information on <br />
          programming languages and recent developments in the IT industry, and secure backend, the website provides a <br />
          safe and inclusive space for students to expand their horizons and grow their understanding of the subject matter. <br />
          From discussions on the latest industry trends to tutorials on programming languages, the website offers a diverse range <br/>
          of topics to cater to the varied interests and expertise of the student community. By encouraging collaboration and knowledge-sharing,
           the website empowers students to become lifelong learners and pursue their passion for technology in a supportive and engaging environment.
          </span>
        </div>
        
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{top: "2%", left: "36%" }}
          whileInView={{ left: "6%" }}
          transition={transition}
          className='SmalldivImg'
          src={python}
          alt=""
        />
        <motion.img
          initial={{top: "1%", left: "-26%" }}
          className='SmalldivImg'
          whileInView={{ left: "25%" }}
          transition={transition}
          src={css}
          alt=""
        />
        <motion.img
          initial={{top: "20%", left: "-6%" }}
          className='SmalldivImg'
          whileInView={{ left: "12%" }}
          transition={transition}
          src={git}
          alt=""
        />
        <motion.img
          initial={{top: "1%", left: "6%" }}
          className='SmalldivImg'
          whileInView={{ left: "-5%" }}
          transition={transition}
          src={angularjs}
          alt=""
        />
        <motion.img
          initial={{top: "7%", left: "10%" }}
          className='SmalldivImg'
          whileInView={{ left: "40%" }}
          transition={transition}
          src={kotlin}
          alt=""
        />

        <motion.div
          initial={{ top: "80%", left: "74%" }}
          whileInView={{ left: "80%" }}
          transition={transition}
          className="floating-div SmalldivImg"
        >
          <FloatinDiv img={html} />
        </motion.div>

        <motion.div
          initial={{ top: "14%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div SmalldivImg"
        >
          <FloatinDiv img={mysql} />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "10%", top: "70%" }}
          whileInView={{ left: "-25%" }}
          transition={transition}
          className="floating-div SmalldivImg"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={postSql} text1="" text2="" />
        </motion.div>

        <motion.div
          initial={{ left: "44%", top: "30rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="floating-div SmalldivImg"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={node} text1="" text2="" />
        </motion.div>
        
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div SmalldivImg"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={java} text1="" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
</div>
  )
}

export default SmallDiv3
