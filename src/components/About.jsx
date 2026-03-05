export default function About({ lang }) {
  const isEn = lang === 'en'
  return (
    <div className="prompt reveal">
      <div className="cmd-line">
        {isEn ? (
          <>
            <span className="prompt-symbol">About Me</span>
          </>
        ) : (
          <>
            <span className="prompt-symbol">Qui suis-je?</span>
          </>
        )}
      </div>
      <div className="section-block">
        {isEn ? (
          <>
            <span className="bright">Hungry and motivated CS student with hands-on experience in full-stack development.</span><br />
            <span className="dim">Interested in making personal projects come to life and AI.</span><br />
            <span className="dim">Skilled in front-end development, authentication, databases.</span><br />
            <span className="dim">Strong teamwork and problem-solving skills.</span>
          </>
        ) : (
          <>
            <span className="bright">Étudiant motivé et ambitieux en informatique avec une expérience pratique en développement full-stack.</span><br />
            <span className="dim">Passionné par la concrétisation de projets personnels et l'intelligence artificielle.</span><br />
            <span className="dim">Compétent en développement front-end, authentification, gestion de bases de données.</span><br />
            <span className="dim">Solides aptitudes pour le travail d'équipe et la résolution de problèmes.</span>
          </>
        )}
      </div>
    </div>
  )
}
