import AssignmentsControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BiCaretDown, BiEdit } from "react-icons/bi";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as assignmentsClient from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const [assignments, setAssignments] = useState([]);


  const fetchAssignments = async () => {
    const a = await assignmentsClient.fetchAssignment(cid);
    setAssignments(a);
  };

  const deleteAssignment = async (assignId: any) => {
    await assignmentsClient.deleteAssignment(assignId);
    fetchAssignments();
  }

  useEffect(() => {
    fetchAssignments();
  }, []);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-assignments">
            <AssignmentsControls cid={cid!} />
            <ul id="wd-assignment-list" className="list-group rounded-0 my-4">
                <div className="wd-title p-3 ps-2 bg-secondary mb-4">
                    <BsGripVertical className="me-2 fs-3" />
                    <BiCaretDown className="me-2" />
                    Assignments
                    <AssignmentControlButtons />
                </div>


                {assignments
                   .map((item: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "4px solid green" }}>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="fs-4" />
                                </div>
                                {currentUser?.role === 'FACULTY' ? (
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${item._id}`} className="wd-assignment-link custom-link fs-4">
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span className="fs-4"><strong>{item.title}</strong></span>
                                )}
                    
                                <div className="col">
                                  
                                    <p>
                                        <span className="text-danger"> Multiple Modules </span>
                                        | <b>Available from</b> {item.available} | <b>Until</b> {item.until} | <b>Due</b> {item.due} | {item.points} pts
                                    </p>
                                </div>
                                <div className="col float-end">
                                    <LessonControlButtons assignmentId={item._id}
                                               deleteAssignment = {deleteAssignment} />
                                </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>
    );
}