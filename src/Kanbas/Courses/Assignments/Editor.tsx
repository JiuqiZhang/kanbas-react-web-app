import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { addAssignment, updateAssignment, cancelUpdate } from "./reducer";
import { useParams, useNavigate,useLocation } from 'react-router-dom';
import * as db from "../../Database";
export default function AssignmentEditor() {
  const dispatch = useDispatch();
    const router = useNavigate();
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
     const existingAssignment = assignments.find((a: any) => a.course === cid && a._id === aid)
     const [assignment, setAssignment] = useState<any | null>(null);
  useEffect(()=>{
    if (existingAssignment) {
      setAssignment(existingAssignment);
    } else if (!aid) {
      setAssignment({
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        dueDate: new Date().toISOString(),
        availableDate: new Date().toISOString(),
        untilDate: new Date().toISOString(),
        _id: "",
      });
    }
  },[])

    const handleSave = () => {
      if (!aid) {
        const newAssignment = { ...assignment, _id: new Date().getTime().toString(), course: cid };
        dispatch(addAssignment(newAssignment));
      } else {
        dispatch(updateAssignment(assignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };
                             
    const handleCancel = () => {
      dispatch(cancelUpdate(aid));
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const {pathname} = useLocation();



  return (
    <div id="wd-assignment-editor" className="p-3">
        <h2>{aid ? "Edit Assignment" : "New Assignment"}</h2>
      <div className="mb-3">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" name="title"          value={assignment?.title || ""}
                        onChange={(e: any) => {
                          setAssignment({...assignment, 'title': e.target.value});
                      }}/>
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
            id="wd-description"
            className="form-control"
            rows={12}
            cols={50}
            value={assignment?.description || ""}
            onChange={(e) => {setAssignment({ ...assignment, "description": e.target.value })}}
          />
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Points</label>
        </div>
        <div className="col-9">
          <input
            type="number"
            className="form-control"
            value={assignment?.points || ""}
          onChange={(e) => {setAssignment({ ...assignment, "points": e.target.value })}}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Assignment Group</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Display Grade as</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Points</option>
            <option>Letter Grade</option>
            <option>GPA</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Submission Type</label>
        </div>
        <div className="col-9">
          <select className="form-control">
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </select>
          <div className="mt-2">
            <label>Online Entry Options</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Text Entry" id="textEntry" />
              <label className="form-check-label" htmlFor="textEntry">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Website URL" id="websiteURL" checked />
              <label className="form-check-label" htmlFor="websiteURL">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Media Recordings" id="mediaRecordings" />
              <label className="form-check-label" htmlFor="mediaRecordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="Student Annotation" id="studentAnnotation" />
              <label className="form-check-label" htmlFor="studentAnnotation">
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="File Uploads" id="fileUploads" />
              <label className="form-check-label" htmlFor="fileUploads">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Assign to</label>
        </div>
        <div className="col-9">
          <input type="text" className="form-control" defaultValue="Everyone" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Due</label>
        </div>
        <div className="col-9">
        <input
                    type="datetime-local"
                    id="wd-due-date"
                    className="form-control"
                    value={assignment?.dueDate || ""}
                    onChange={(e) =>setAssignment({ ...assignment, "dueDate": e.target.value })}
                  />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Available from</label>
        </div>
        <div className="col-9">
        <input
                      type="datetime-local"
                      id="wd-available-from"
                      className="form-control"
                      value={assignment?.availableDate || ""}
                      onChange={(e) =>setAssignment({ ...assignment, "availableDate": e.target.value })}
                    />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <label>Until</label>
        </div>
        <div className="col-9">
        <input
                      type="datetime-local"
                      id="wd-available-until"
                      className="form-control"
                      value={assignment?.untilDate || ""}
                      onChange={(e) =>setAssignment({ ...assignment, "untilDate": e.target.value })}
                    />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
        <button  onClick={handleSave} className="btn btn-success">Save</button>
      </div>
    </div>
  );
}