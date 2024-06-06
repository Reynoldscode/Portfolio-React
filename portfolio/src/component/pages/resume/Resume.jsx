import Header from "../../header/Header";
import "./Resume.css";
import resumefiles from "../../../../public/Resume.pdf"

export default function ResumePage() {

  const resumefile = "/path/to/your/resume"; 

  return (
    <div>
      <Header />

      <p className="text33">Download my resume below</p>
      <a href={resumefiles} download target='_blank' rel='noreferrer'>
        <button className="btn"> Download Resume </button>
      </a>
    </div>
  );
}