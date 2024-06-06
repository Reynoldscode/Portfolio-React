import React from "react";
import "./Footer.css"; 
import socialImage from "./174857.png"
import socialImage2 from "./25231.png"
import socialImage3 from "./84_Dev_logo_logos-512.webp"

export default function Footer() {
  const linkedInUrl = "https://www.linkedin.com/jobs/?src=go-pa&trk=sem-ga_campid.18853522261_asid.146084015209_crid.633923221414_kw.linkedin_d.c_tid.kwd-296170574619_n.g_mt.e_geo.9019794&mcid=6994434350142418944&cid=&gad_source=1&gclid=CjwKCAjwmYCzBhA6EiwAxFwfgErTEWBOH6c9CytE-T8GReQaIqulxAac9ukY3ilaa3FvbeoziCl6-hoCsUEQAvD_BwE&gclsrc=aw.ds";
  const githubUrl = "https://github.com/Reynoldscode?tab=repositories";
  const devUrl = "https://dev.to/reynoldscode";

  return (
    <footer className="footer">
      <a href={linkedInUrl} target="_blank" rel="Linkdin Link">
        <img src={ socialImage } alt="LinkedIn" className="icon" />
      </a>

      <a href={githubUrl} target="_blank" rel="Gitlink">
        <img src={ socialImage2 } alt="GitHub" className="icon" />
      </a>

      <a href={devUrl} target="_blank" rel="Dev Link">
        <img src={ socialImage3 } alt="Dev" className="icon" />
      </a>

      <p>© {new Date().getFullYear()} Reynolds Addy. All rights reserved.</p>
    </footer>
  );
}