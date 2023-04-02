import React, { useEffect, useState } from "react";
import "../Styles/Course.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Nav from "../Components/Nav";
import Sidebar from "../Components/Sidebar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LockIcon from '@mui/icons-material/Lock';

import axios from "axios";
import { Container } from "@mui/material";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Course() {
  const navigate = useNavigate()
  const isloggedin = useSelector((state) => state.Auth.isloggedin);
  if(!isloggedin){
navigate('/')
  }

  const [coursedata, setCoursedata] = useState({});
  const [chaptersdata, setChaptersdata] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async (req, res) => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:4000/api/courses");
      const { courses } = data;
      console.log(courses[0]);
      setCoursedata({ ...courses[0] });
      setChaptersdata([...courses[0].chapters]);
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <>
      {loading ? (
        <div><Loader/></div>
      ) : (
        <div className="main">
          <Sidebar />

          <div className="main-course">
            <Nav />
            <div className="container">
              <div className="course">
                <div className="breadcrumbs">
                  All Courses <ChevronRightIcon /> {coursedata.course_name}
                </div>
                <div className="card">
                  <img src={coursedata.course_img} alt="course_img" />
                  <div className="card-content">
                    <div className="title">{coursedata.course_name}</div>
                    <div className="batchnumber">
                      {
                        `Batch: Default_Batch_1625571974257_${coursedata.course_name}`
                      }
                    </div>
                    <div className="content">0% Complete</div>
                  </div>
                </div>
                <div className="accordian">
                  {loading ? (
                    <h3>Loading....</h3>
                  ) : (
                    <div>
                      {chaptersdata.map((chapter) => {
                        return (
                          <Accordion key={chapter._id}>
                            <AccordionSummary 
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Container>
                              <h2>
                                {
                                  `${chaptersdata.indexOf(chapter) + 1}.  ${chapter.chapter_name}`
                                }
                                
                              </h2>
                              <p>{
                                `${chapter.lectures.length} Lectures` 
                              }</p>
                              </Container>
                            </AccordionSummary>
                            <AccordionDetails>
                              {chapter.lectures.map((lecture) => {
                                return (
                                  <Container key={lecture._id}
                                    sx={{ display: "flex", margin: "1rem" }}
                                    fixed
                                  >
                                    <PlayCircleOutlineIcon
                                      sx={{
                                        color: "#212a39",
                                        mx: "1rem",
                                      }}
                                    /> {
                                      `${chapter.lectures.indexOf(lecture) + 1}. ${lecture.lecture_name}`
                                    }
                                   
                                  </Container>
                                );
                              })}
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="certificate-card">
                  <img src="https://cdn.eckovation.com/courses/images/leran-cetificate-icon.svg" alt="" />
                  <div className="certificate-card-content">
                    <div className="title">
                      Certificate
                    </div>
                    <div className="description">
                    <LockIcon sx={{
                      color: '#91949D',
                      mx: '5px'
                    }}/>
                    Complete the course to download the certificate
                  
                    </div>
                    <button>
                      Get Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Course;
