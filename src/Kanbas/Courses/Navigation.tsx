import { Link } from "react-router-dom";
export default function CoursesNavigation(props: any) {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link,i)=>{
        return(
          <Link key={i} to={"/Kanbas/Courses/"+props.name+"/"+link} id="wd-course-home-link"
        className="list-group-item active border border-0">{link}</Link> 
        )

      })}
  
    </div>
);}
