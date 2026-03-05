const ASCII_NAME = `
     ██╗██╗   ██╗███████╗████████╗██╗███╗   ██╗    ██████╗ ███████╗███████╗ ██████╗ █████╗ ██████╗  ██████╗ ██████╗
     ██║██║   ██║██╔════╝╚══██╔══╝██║████╗  ██║    ██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
     ██║██║   ██║███████╗   ██║   ██║██╔██╗ ██║    ██████╔╝█████╗  ███████╗██║     ███████║██║  ██║██║   ██║██████╔╝
██   ██║██║   ██║╚════██║   ██║   ██║██║╚██╗██║    ██╔═══╝ ██╔══╝  ╚════██║██║     ██╔══██║██║  ██║██║   ██║██╔══██╗
╚█████╔╝╚██████╔╝███████║   ██║   ██║██║ ╚████║    ██║     ███████╗███████║╚██████╗██║  ██║██████╔╝╚██████╔╝██║  ██║
 ╚════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝`

export default function AsciiHero({ lang }) {
  const role = lang === 'en'
    ? 'CS Student & Full-Stack Developer'
    : 'Étudiant en Info & Développeur Full-Stack'

  return (
    <div className="ascii-section">
      <pre className="ascii-name">{ASCII_NAME}</pre>
      <div className="ascii-sub">
        <div className="ascii-role">{role}</div>
        <div className="ascii-contact">
          j.pescador03@gmail.com
          {' | '}
          438-887-7205
          <br />
          <a href="https://github.com/jurattes">GitHub</a> | <a href="https://www.linkedin.com/in/justin-pescador/">LinkedIn</a> | Montréal, QC
        </div>
      </div>
    </div>
  )
}
