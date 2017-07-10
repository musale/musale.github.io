import React from 'react';

const Landing = () => {
  return (
    <section>
      <p>
        Lorem ipsum dolor sit amet, cum quod pericula reformidans cu. Pri id voluptua adipiscing, no ius noster quaeque epicurei. Duo ponderum suavitate in. Voluptatum scripserit usu te.
      </p>
      <SocialMedia />
    </section>
  )
}

const SocialMedia = () => {
  return (
    <div className="social-media">
      <i className="fa fa-github fa-2x" aria-hidden="true"></i>
      <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
      <i className="fa fa-medium fa-2x" aria-hidden="true"></i>
    </div>
  )
}

export default Landing;
