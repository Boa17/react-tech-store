import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
 return (
  <section className="py-5">
   <div className="container">
    <div className="row">
  <div className="col-10 mx-auto col-md-6 my-3">
   <img src={aboutBcg} 
    className="img-fluid img-thumbnail"
    alt="about company"
    style={{background: "var(--darkGrey)"}}
    />
  </div>
  <div className="col-10 mx-auto col-md-6 my-3">
<Title title="about us"/>
<p className="text-lead text-muted my-3">A company, abbreviated as co., is a legal entity representing an association of people, whether natural, legal or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals. Companies take various forms, such as:</p>

<p className="text-lead text-muted my-3">A company, abbreviated as co., is a legal entity representing an association of people, whether natural, legal or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals. Companies take various forms, such as:</p>
<button className="main-link"
 type="button"
 style={{marginTop: "2rem"}}
 >
  more info</button>
  </div>
  
    </div>
   </div>
   
   
  </section>
 );
}
