import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BcaGeneral from "../assets/OnlineBcaGeneral-img/online-bca-general-program.webp";
import Education from "../assets/OnlineBca-img/who-should-pursue-bca-distance-education-course.webp";
import AdmissionProcedure from "../assets/OnlineBca-img/AdmissionProcedure.jpg";
import CVCourseBcaSalary from "../assets/OnlineBca-img/CVCourseBcaSalary.png";
import CVCourseBcaSalaryGraph from "../assets/OnlineBca-img/CVCourseSalaryGraph.png";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import AccordionMenu from "../pages/AccordionMenu";
import Carousel from "../pages/Carousel";


export const OnlineBcaGeneral = () => {
  return (
    <>
      <Main>
        <div className="row">
          <div className="img-div">
            <img className="bca-img" src={BcaGeneral} alt="" />
            <div className="para-div">
              <p className="para-updated">UPDATED AT : NOVEMBER 8,2023</p>
              <h1 className="main-heading">Online BCA General</h1>
              <p className="main-para">
               BCA or Bachelor of Computer Applications is one of the best undergraduate programs that is also offered in online mode by many universities. This course is ideal for students and working professionals who wish to venture into the field of IT and Computer Applications. BCA is offered for a minimum duration of 3 years with 6 semesters to candidates who have completed their 10+2 or equivalent education.
              </p>
              <div className="media-div">
                <h4 className="watch-video">Watch Video</h4>
                <h4 className="Listen-heading">Listen Podcast</h4>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="top-div">
              <div className="UC-div">
                <p>Universities</p>
                <p>11</p>
              </div>
              <div className="UC-div">
                <p>Duration</p>
                <p>3 - 6 Years</p>
              </div>
              <div className="UC-div">
                <p className="Eligi-para">Eligibiliy</p>
                <p>10+2 Pass out</p>
                <div>
                  <p className="info-para">info</p>
                </div>
              </div>
            </div>
            <p className="para first-para">
            The online BCA program is valid as per the guidelines of the UGC-DEB and is of equal value as a regular BCA. It is a 3-year bachelor's degree program that offers best-in-class computer education with in-depth skills related to programming, database management, networking, and others. It is an undergraduate course that has been designed to provide practical knowledge of various aspects of computer applications.
            </p>
            <div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons" />
                <p className="">
                  {" "}
                  <span className="highlight">
                    People who want to work as computer professionals:
                  </span>{" "}
                  Online BCA is a great choice for people who want to work as
                  computer professional. This program gives you the information
                  and skill to start your job if you are interested in
                  technology, Programming, and digital systems.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-1" />
                <p className="">
                  {" "}
                  <span className="highlight">Working Professionals:</span>{" "}
                  Online BCA is very helpful for people already working in
                  non-technical areas but want to switch to a tech-related job.
                  It lets them learn new skills while keeping their current job,
                  which can lead to new chances in the tech field.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-2" />
                <p className="">
                  {" "}
                  <span className="highlight">
                    Geographically Diverse Learners:
                  </span>{" "}
                  Students from many places can attend online BCA. Online
                  learning is a good option if you live in an area where going
                  to school on campus is hard to get to or if you have personal
                  issues that keep you from going regularly.
                </p>
              </div>
              <div className="para-div-2">
                <BsFillCheckSquareFill className="icons-3" />
                <p className="">
                  {" "}
                  <span className="highlight">Remote Professionals: </span> The
                  flexibility of Online BCA can help professionals whose jobs
                  require them to move a lot or work from home. It's easier for
                  them to keep up with their schoolwork because they can access
                  course materials and attend class from anywhere.
                </p>
              </div>
            </div>
            <h1 className="second-heading">
              Key Highlight of online BCA In India
            </h1>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
                A <span className="blue">BCA Online Course</span> is approved by the UGC-DEB, the online education
                division of the UGC as being a valid and credible course for online and OBL modes.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
                The course has a duraiton of 3 years (minimun) and the maximum duration of the program is 6 years in most online universiton.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
              There are a total of 6 semester in all in a 3 year BCA degree course.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
              Candidates who have completed their 10-2 or equivalent education from a recognised board can apply the program
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
              A few of the main subjects of this course include computer basics, software, C++, statistical techniques etc.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
              The average fee range for this course ranges from INR 70,000 to INR 2,00,000 for private universities. Most government universities offering an online BCA have a fee range between INR 30,000 to INR 60,000.
              </p>
            </div>

            {/* //Online BCA Course Subjects */}
            <div>
              <h1 className="second-heading">Subjects of online BCA Course</h1>
              <p className="para-2 Subject-para">
                An online BCA course has a duration of 3 years which is futher divided into 6 semesters. A general syllabus for the course has been given below.
              </p>
            </div>
            <div className="subject-grid">
              <div className="inner-div">
                <strong>Semester 1</strong>
              </div>
              <div className="inner-div">
              <strong>Semester 2</strong>
              </div>
              <div className="inner-div">

              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
             Foundation Course in English
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
             Computer Business and PC software
              </p>
            </div>

              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
            Computer Basice and PC Software Lap
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
            Business organization
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
           Mathematics
              </p>
            </div>
              </div>
              <div className="inner-div">

              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
            Problem Solving and Programming
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
             Accoutancy 1
              </p>
            </div>

              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
            Communication Skills
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
            Computer Organization and Assembly Language Programming
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
           C language Programming Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
          Discrete Mathematics
              </p>
            </div>
              </div>
              <div className="inner-div">
                <strong>Semester 3</strong>
              </div>
              <div className="inner-div">
                <strong>Semester 4</strong>
              </div>
              <div className="inner-div">
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
          Systems Analytics and Design
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Data and Files Structures
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         C++ Programming Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Data and File Structure Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         DBMS Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Programming in C++
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Introduction to DBMS
              </p>
            </div>
              </div>
              <div className="inner-div">
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Fundamentals of Computer Networks
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Internet Concepts and Web Design
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Java Programming
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Algorithm Design Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
       Statistical Techniques Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Object-oriented Technologies and Java <br /> Programming
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Introduction to Algorithm Design
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
         Statistical Techniques
              </p>
            </div>
              </div>
              <div className="inner-div">
                <strong>Semester 5</strong>
              </div>
              <div className="inner-div">
                <strong>Semester 6</strong>
              </div>
              <div className="inner-div">
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Network Programming and Administration
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Business Communication
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Computer-Orented Numerical Techniques Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Web Programming Lab
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Computer-oriented numerical techniques
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Web programming
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
       Introduction to Software Engineering
              </p>
            </div>
              </div>
              <div className="inner-div">
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        E-Commerce
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Operatin System Concepts and Networking Management
              </p>
            </div>
              <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons" />
              <p>
        Project and Dissertation
              </p>
            </div>
              </div>
            </div>
            <h1 className="second-heading">Eligibility Criteria for Online BCA Course</h1>
            <p className="para-2">
             The basic eligibility criteria for pursuing a BCA degree are provided below:
            </p>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                Students must have passed 10+2 or equivalent level of education from a recognized board of schooling.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                Some universities require the candidates to have studied Mathematics as one one of the subject at the 10+2 level.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                A minimum of 45%-55% aggregate marks in the qualifying examination is required for admission by some universities
              </p>
            </div>
            <h1 className="second-heading">Online BCA Duration</h1>
            <p className="para-2">
             The minimum course duration for an online BCA is 3 years and it may extend up to a maximum period of 6 years. The course consists of 6 semesters which need to be completed in 3 years.
            </p>


            <h1 className="second-heading Books-heading">
              Average Course Fee of online BCA
            </h1>
            <p className="para-2">
            The average fee range for an online BCA varies as per the university you select. Most government universities have a fee range of INR 30,000 to INR 60,000. The average fee range for the full course varies in an online BCA is between INR 70,000 to INR 2,00,000.
            </p>

            <p className="para-2">
            Most universities have facilities for EMI mode of fee payment and some universities may provide financial aid through educational loans.
            </p>

            <h1 className="second-heading Books-heading">
             Admission Procedure for Online BCA
            </h1>
            <p className="para-2">
              The admission procedure for online universities is completed virtually A basic guidelines for seeking admission in an online BCA course is provided here.
            </p>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
                Visit the official university website where you wish to pursure the course from.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
               Check and confirm the eligibility criteria of the course before applying
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              Then, register yourseft on the website of the universities as a new user.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
             Login to the website with your credentials and fill the application form for admission.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              Attach the necessary documents (digital copies) for admission as mandated by the university.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              Pay the registration fee/application fee via the designated payment mode.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              Submit your application, documents and fee.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              The university will screen your application and update the status of admission via email.
              </p>
            </div>
            <div className="para-div-3">
              <BsFillCheckSquareFill className="second-icons " />
              <p className="para-3">
              Once your admission to the course is confirmed by the university, pay the tuition fee to secure your seat in the course.
              </p>
            </div>
            <h1 className="second-heading">
             Other Online BCA Course Specializations
            </h1>
            <div className="Top-Specializations-grid">
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online In Multimedia and Animation
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online in Database Management System
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online in Data Science and Big Data Analytics
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online in Data Analytics
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                BCA Online in Al & ML
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                 BCA Online in Cloud and Security
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                 BCA Online in Cybersecurity
                </Link>
              </div>
              <div className="inner-div">
                {" "}
                <Link className="link-tag" to="">
                  BCA Online in Computer Science and IT
                </Link>
              </div>
            </div>
            <h1 className="second-heading Books-heading">Top Recruiters</h1>
            <p className="para-2 last-para">
            There are many career opportunities you can grab after completing the course of BCA as it is a technical and career-oriented program. With a general BCA, a student learns about the various domains of computer applications and hence their career opportunities are also vast. They can venture into top corporate firms, public sector jobs as well as IT jobs, all of which are fairly compensated.
            </p>
            <p className="para-2 last-para">
           Some of the top career opportunities after completing an online BCA couse are:
            </p>
            <div className="jop-grid">
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Programmer</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Backend Developer</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  Software Tester
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">System Administrator</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">System Analyst</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">System Inspection Officer</p>
              </div>
            </div>
            <h1 className="second-heading Books-heading">Top Hiring Firms</h1>
            <div className="jop-grid">
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Cognizant</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">HCL</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">
                  IBM
                </p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">Infosys</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">TCS</p>
              </div>
              <div className="inner-div  inner-part-time">
                {" "}
                <p className="part-time-para Book-para">WIPRO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="University-choose">
          <div>
            <h1 className="Choose-University-heading">
              Choose Your University Wisely
            </h1>
          </div>
          <div className="Carousel-div">
            <div >
              <Carousel/>
            </div>
          </div>
        </div>
        <div className="doubts-clear">
          <div>
           <AccordionMenu/>
          </div>
        </div>
      </Main>
    </>
  );
};
const Main = styled.div`
   *{
     padding: 0;
     margin: 0;
     font-family: poppins !important;

    }
    p{
      font-size: 16px;
      font-weight: 400 !important;
      color: #6D7073 !important;
    }
   .center{
    text-align: center;
   }
   .row{
     max-width: 70%;
     margin: auto;
     padding-left: 200px;
     
   }
  .bca-img{
     width: 350px;
     border-radius: 7px;
}
.main-heading{
     font-size: 1.5rem;
     color: #212529;
     margin-bottom: 17px;
}
.img-div{
     display: flex;
     background-color: #F8F9FA;
     width: 81%;
     padding-right: 50px;
     border-radius: 8px;
     margin-bottom: 100px;
   }
   .para-div{
     padding-top: 35px;
     margin-left: 30px;
   }
   .para-updated{
     font-size: 0.7rem;
     font-weight: 500;
     color: #A5ABB0;
}
.main-para{
     color: #6D7073;
     font-size: 1rem;
   }
   .media-div{
     display: flex;
     margin-top: 30px;
   }
   .watch-video{
     margin-right: 135px;
   }
   .top-div{
    display: flex;
    justify-content: space-around;
    border:0.131rem solid #0056d2;
    /* align-items: center; */
    position: relative;
    top: -49px;
    left: 43px;
    width: 90%;
    background-color: #f0f8ff;
    padding: 10px;
    border-radius: 8px;
   }
   .UC-div p{
      text-align: center;
      font-size: 1rem;
   }
   .Eligi-para{
    padding-top: 1px;
   }
   .info-para{
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
    background-color: #212529;
    color: #fff;
    font-size: 0.7rem !important;
    width: 20%;
    border-radius: 25px;
    margin-left: 30px;
   }
   .row-2{
    border: 1px solid #A5ABB0;
    padding: 70px 24px;
    margin-top: 50px;
    width: 81%;
    border-radius: 8px;
   }
   .para{
    margin-bottom: 18px;
    color: #3C3F43;
   }
   .second-heading{
    font-size: 1.6rem;
    color: #212529;
   }
   .para-2{
    color: #3C3F43;
    margin-bottom: 20px;
   }
   .education-img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
   }
   .highlight{
    font-weight: bold;
   }
   .para-div-2{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
   }
   .icons{
    font-size: 2.4rem;
    margin-bottom: 50px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-1{
    font-size: 2.4rem;
    margin-bottom: 27px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-2{
    font-size: 2.4rem;
    margin-bottom: 27px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .icons-3{
    font-size: 2.4rem;
    margin-bottom: 50px;
    margin-right: 5px;
    color: #BDE3FF;
   }
   .gird-div{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    /* border: 0.3rem solid; */
    margin-bottom: 15px;
   }
   .inner-div{
    padding: 10px;
    border: 1px solid;
    padding-bottom: 10px;
   }
   .para-div-3{
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
   }
   .second-icons{
    font-size: 1rem;
    margin-bottom: 4px;
    margin-right: 5px;
    margin-left: 6px;
    color: #BDE3FF;
  }
  .icon-3{
     margin-bottom: 27px;
   }
  .icon-4{
     margin-bottom: 1px;
   }
  .icon-5{
     margin-bottom: 25px;
   }
  .icon-6{
     margin-bottom: 1px;
   }
  .icon-7{
     margin-bottom: 1px;
   }
  .icon-8{
     margin-bottom: 22px;
     font-size: 1.2rem;
   }
  .icon-9{
     margin-bottom: 1px;
   }
   .Subject-para{
    margin: 10px 0;
   }
   .subject-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 10px 0;
   }
   .para-2 a{
    color: #568CDA;
   }
   .Top-Specializations-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 15px;
    padding-bottom: 10px;
   }
   .link-tag{
    text-decoration: none;
    color: #0056d2;
   }
   .Ranking-heading{
    margin-top: 10px;
    margin-bottom: 10px;
   }
   .Top-Universities-grid{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 20px;
  }
   .part-time-BCA{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 20px;
   }
   .inner-part-time{
    display: flex;
    align-items: end;
  }
  .part-time-para{
     padding: 0 10px;
   }
   .icon-4{
    font-size: 1.4rem;
    margin-bottom: 25px;
   }
   .icon-5{
    font-size: 1.2rem;
    margin-bottom: 25px;
   }
   .icon-6{
    font-size: 1.5rem;
    margin-bottom: 25px;
   }
   .para-3{
    color: #3C3F43;
   }
   .BCA-exams-grid{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .Books-heading{
     margin-top: 20px;
  }
  .Books-grid{
  display: grid;
  grid-template-columns: 44% 28% 28%;
  /* margin-top: 20px; */
  margin-bottom: 20px;
   }
   .Book-para{
    /* padding-top: 10px ; */
    padding-bottom: 10px ;
   }
   .blue-para{
    color: #7752FE;
    font-weight: 900;
   }
   .jop-grid{
    display: grid;
    grid-template-columns: 50% 50%;
   }
   .last-para{
    margin-bottom: 40px;
   }
   .University-choose{
    background-color: #F0F3FF;
    padding-bottom: 20px;

   }
   .Choose-University-heading{
    text-align: center;
    color: #2f80ed;
    margin-top: 25px;
    padding-top: 20px;
   }
   .Carousel-div{
    max-width: 70%;
    margin: auto;
   }
.doubts-clear{
  max-width: 60%;
  margin: auto;
}
.doubts-clear-heading{
  text-align: center;
}


   // for S mobile

   @media (max-width : 1024px) {
     .bca-img {
    width: 387px;
    border-radius: 7px;
}
.main-heading {
    font-size: 1.2rem;
    color: #212529;
    text-align: center;
  }
    .img-div {
      /* flex-direction: column; */
      padding-right: 1px;
      width: 100%;
    }
    .row {
    max-width: 75%;
    margin: auto;
    padding-left: 0;
}
 .para-updated {
    text-align: center;
}
.para-div {
  /* width: 100%; */
    padding-top: 35px;
    margin-left: 0px;
}
.main-para {
  text-align: center;
    color: #6D7073;
    font-size:0.9rem;
    margin-left: 10px;
}
.top-div{
  top: -37px;
  left: 26px;
}
.watch-video {
  margin-left: 30px;
    margin-right: 165px;
    font-size: 0.7rem;
  }
  .Listen-heading{
  font-size: 0.7rem;

}
.inner-div{
  padding: 0px;
  border: 0.1px thin !important;
}
.inner-div strong{
  font-size: 0.5rem;
  text-align: center;
  margin-left: 5px;

}
.inner-div a{
  font-size: 0.9rem;
  margin-left: 5px;
}
.inner-div p{
  font-size: 0.8rem;
  text-align: left;
  margin-left: 5px;
  padding: 5px;
}
.center{
  font-size: 9px;
}
.media-div{
  margin-top: 100px;
}
.part-time-para{
  padding: 0 5px;
  font-size: 2px;
 }
 .row-2{
  width: 100%;
  padding: 2px 4px;
 }
 .UC-div p {
    text-align: center;
    font-size: 0.7rem;
}
.second-heading {
    font-size: 1rem;
    color: #212529;
}
.para {
    margin-bottom: 18px;
    color: #3C3F43;
    font-size: 0.9rem;

}
.para-2 {
  font-size: 0.9rem;

}
.para-div-2 p{
  font-size: 0.9rem;
}
.para-div-3 p{
  font-size: 0.9rem
}
.para-4{
  font-size: 0.7rem
}
.Book-para{
  font-size: 0.8rem !important;

}
.part-time-para{
  /* font-size: 0.4rem !important; */
  padding: 0;
}
  }
   @media (max-width : 768px) {
     .bca-img {
    width: 387px;
    border-radius: 7px;
}
.main-heading {
    font-size: 1.2rem;
    color: #212529;
    text-align: center;
  }
    .img-div {
      /* flex-direction: column; */
      padding-right: 1px;
      width: 100%;
    }
    .row {
    max-width: 95%;
    margin: auto;
    padding-left: 0;
}
 .para-updated {
    text-align: center;
}
.para-div {
  /* width: 100%; */
    padding-top: 35px;
    margin-left: 0px;
}
.main-para {
  text-align: center;
    color: #6D7073;
    font-size:0.9rem;
    margin-left: 10px;
}
.top-div{
  top: -37px;
  left: 22px;
}
.watch-video {
  margin-left: 30px;
    margin-right: 165px;
    font-size: 0.7rem;
  }
  .Listen-heading{
  font-size: 0.7rem;

}
.inner-div{
  padding: 0px;
  border: 0.1px thin !important;
}
.inner-div strong{
  font-size: 0.5rem;
  text-align: center;
  margin-left: 5px;

}
.inner-div a{
  font-size: 0.9rem;
  margin-left: 5px;
}
.inner-div p{
  font-size: 0.8rem;
  text-align: left;
  margin-left: 5px;
  padding: 5px;
}
.center{
  font-size: 9px;
}
.part-time-para{
  padding: 0 5px;
  font-size: 2px;
 }
 .row-2{
  width: 100%;
  padding: 2px 4px;
 }
 .UC-div p {
    text-align: center;
    font-size: 0.7rem;
}
.second-heading {
    font-size: 1rem;
    color: #212529;
}
.para {
    margin-bottom: 18px;
    color: #3C3F43;
    font-size: 0.7rem;

}
.para-2 {
  font-size: 0.7rem;

}
.para-div-2 p{
  font-size: 0.7rem;
}
.para-div-3 p{
  font-size: 0.7rem
}
.para-4{
  font-size: 0.7rem
}
.Book-para{
  font-size: 0.6rem !important;

}
.part-time-para{
  /* font-size: 0.4rem !important; */
  padding: 0;
}
.doubts-clear{
  max-width: 95%;
  margin: auto;
}
  }
  @media (max-width : 425px) {
     .bca-img {
    width: 387px;
    border-radius: 7px;
}
.main-heading {
    font-size: 1.2rem;
    color: #212529;
    text-align: center;
  }
    .img-div {
      flex-direction: column;
      padding-right: 1px;
      width: 100%;
    }
    .row {
    max-width: 95%;
    margin: auto;
    padding-left: 0;
}
 .para-updated {
    text-align: center;
}
.para-div {
  /* width: 100%; */
    padding-top: 35px;
    margin-left: 0px;
}
.main-para {
  text-align: center;
    color: #6D7073;
    font-size:0.9rem;
}
.top-div{
  top: -37px;
  left: 9px;
}
.watch-video {
  margin-left: 30px;
    margin-right: 165px;
    font-size: 0.7rem;
  }
  .Listen-heading{
  font-size: 0.7rem;

}
.inner-div{
  padding: 0px;
  border: 0.1px thin !important;
}
.inner-div strong{
  font-size: 0.5rem;
  text-align: center;
}
.inner-div a{
  font-size: 0.9rem;
}
.inner-div p{
  font-size: 0.5rem;
  text-align: center;
}
.center{
  font-size: 9px;
}
.part-time-para{
  padding: 0 5px;
  font-size: 2px;
 }
 .row-2{
  width: 100%;
  padding: 2px 4px;
 }
 .UC-div p {
    text-align: center;
    font-size: 0.7rem;
}
.second-heading {
    font-size: 1rem;
    color: #212529;
}
.para {
    margin-bottom: 18px;
    color: #3C3F43;
    font-size: 0.7rem;

}
.para-2 {
  font-size: 0.7rem;

}
.para-div-2 p{
  font-size: 0.7rem;
}
.para-div-3 p{
  font-size: 0.7rem
}
.para-4{
  font-size: 0.7rem
}
.Book-para{
  font-size: 0.6rem !important;

}
.part-time-para{
  /* font-size: 0.4rem !important; */
  padding: 0;
}
.doubts-clear{
  max-width: 95%;
  margin: auto;
}
  }
  @media (max-width : 375px) {
     .bca-img {
    width: 338px;
    border-radius: 7px;
}
.main-heading {
    font-size: 1.2rem;
    color: #212529;
    text-align: center;
  }
    .img-div {
      flex-direction: column;
      padding-right: 1px;
      width: 100%;
    }
    .row {
    max-width: 95%;
    margin: auto;
    padding-left: 0;
}
 .para-updated {
    text-align: center;
}
.para-div {
  /* width: 100%; */
    padding-top: 35px;
    margin-left: 0px;
}
.main-para {
  text-align: center;
    color: #6D7073;
    font-size:0.7rem;
}
.top-div{
  top: -37px;
  left: 2px;
}
.watch-video {
    margin-right: 65px;
    font-size: 0.7rem;
  }
  .Listen-heading{
  font-size: 0.7rem;

}
.inner-div{
  padding: 0px;
  border: 0.1px thin !important;
}
.inner-div strong{
  font-size: 0.5rem;
  text-align: center;
}
.inner-div a{
  font-size: 0.9rem;
}
.inner-div p{
  font-size: 0.5rem;
  text-align: center;
}
.center{
  font-size: 9px;
}
.part-time-para{
  padding: 0 5px;
  font-size: 2px;
 }
 .row-2{
  width: 100%;
  padding: 2px 4px;
 }
 .UC-div p {
    text-align: center;
    font-size: 0.7rem;
}
.second-heading {
    font-size: 1rem;
    color: #212529;
}
.para {
    margin-bottom: 18px;
    color: #3C3F43;
    font-size: 0.7rem;

}
.para-2 {
  font-size: 0.7rem;

}
.para-div-2 p{
  font-size: 0.7rem;
}
.para-div-3 p{
  font-size: 0.7rem
}
.para-4{
  font-size: 0.7rem
}
.Book-para{
  font-size: 0.6rem !important;

}
.part-time-para{
  /* font-size: 0.4rem !important; */
  padding: 0;
}
.doubts-clear{
  max-width: 95%;
  margin: auto;
}
  }
  @media (max-width : 320px) {
     .bca-img {
    width: 286px;
    border-radius: 7px;
}
.main-heading {
    font-size: 1.2rem;
    color: #212529;
    text-align: center;
  }
    .img-div {
      flex-direction: column;
      padding-right: 1px;
      width: 100%;
    }
    .row {
    max-width: 95%;
    margin: auto;
    padding-left: 0;
}
 .para-updated {
    text-align: center;
}
.para-div {
  /* width: 100%; */
    padding-top: 35px;
    margin-left: 0px;
}
.main-para {
  text-align: center;
    color: #6D7073;
    font-size:0.7rem;
}
.top-div{
  top: -37px;
  left: 2px;
}
.watch-video {
    margin-right: 65px;
    font-size: 0.7rem;
  }
  .Listen-heading{
  font-size: 0.7rem;

}
.inner-div{
  padding: 0px;
  border: 0.1px thin !important;
}
.inner-div strong{
  font-size: 0.5rem;
}
.inner-div a{
  font-size: 0.9rem;
}
.inner-div p{
  font-size: 0.6rem;
}
.center{
  font-size: 9px;
}
.part-time-para{
  padding: 0 5px;
  font-size: 2px;
 }
 .row-2{
  width: 100%;
  padding: 2px 4px;
 }
 .UC-div p {
    text-align: center;
    font-size: 0.7rem;
}
.second-heading {
    font-size: 1rem;
    color: #212529;
}
.para {
    margin-bottom: 18px;
    color: #3C3F43;
    font-size: 0.7rem;

}
.para-2 {
  font-size: 0.7rem;

}
.para-div-2 p{
  font-size: 0.7rem;
}
.para-div-3 p{
  font-size: 0.7rem
}
.para-4{
  font-size: 0.7rem
}
.Book-para{
  font-size: 0.5rem !important;

}
.part-time-para{
  font-size: 0.4rem !important;
  padding: 0;
}
.doubts-clear{
  max-width: 95%;
  margin: auto;
}
  }
`;
