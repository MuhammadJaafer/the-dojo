import { useParams } from "react-router-dom";
import { useDocuments } from "../../hooks/useDocuments";
//styles
import "./Project.css";
import ProjectComments from "./ProjectComments";
import ProjectSummery from "./ProjectSummery";

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocuments("projects", id);
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="project-details">
      <ProjectSummery project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
