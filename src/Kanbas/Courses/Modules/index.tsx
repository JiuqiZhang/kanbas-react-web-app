import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    return (
        <div>
            <ModulesControls />
            <br />
            <br />
            <br />
            <br />

            {/* Implement Collapse All button, View Progress button, etc. */}
            <button id="wd-btn-collapse" type="button">
                Collapse All
            </button>
            <button id="wd-btn-progress" type="button">
                View Progress
            </button>
            <select id="wd-select-publish">
                <option value="COMEDY">Pusblish All</option>
            </select>

            <button id="wd-btn-module" type="button">
                + Module
            </button>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1 - Course Introduction, Syllabus, Agenda, Assignment 1
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            Introduction to the course
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            Learn what is Web Development
                            <LessonControlButtons />
                        </li>


                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">READING</span>                              <LessonControlButtons />
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 1 - Introduction
                                </li>
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 2 - Creating User Interfaces
                                    With HTML
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">SLIDES</span>                      <span className="wd-title">SLIDES</span>                       <LessonControlButtons />

                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Introduction to Web Development
                                </li>
                                <li className="wd-content-item">
                                    Creating an HTTP server with Node.js{" "}
                                </li>
                                <li className="wd-content-item">
                                    Creating a React Application
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 2 - Formatting User
                        Interfaces with HTML <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES              <span className="wd-title">SLIDES</span>                       <LessonControlButtons />

                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">
                                    Learn what is Web Development
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            READING                    <span className="wd-title">SLIDES</span>                       <LessonControlButtons />

                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 1 - Introduction
                                </li>
                                <li className="wd-content-item">
                                    Full Stack Developer - Chapter 2 - Creating User Interfaces
                                    With HTML
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
