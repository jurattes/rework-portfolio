const SKILLS = [
  {
    en: 'LANGUAGES/',
    fr: 'LANGAGES/',
    tags: ['Swift', 'C#', 'Python', 'JavaScript', 'Java'],
  },
  {
    en: 'WEB_MOBILE/',
    fr: 'WEB_MOBILE/',
    tags: ['HTML', 'CSS', 'React', 'Django', 'ASP.NET', 'iOS', 'MAUI', 'Android'],
  },
  {
    en: 'DATABASES/',
    fr: 'BASES_DONNEES/',
    tags: ['MySQL', 'MongoDB', 'Firebase', 'AWS'],
  },
  {
    en: 'TOOLS/',
    fr: 'OUTILS/',
    tags: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Xcode'],
  },
]

export default function Skills({ lang }) {
  return (
    <div className="prompt reveal">
      <div className="cmd-line">
        <span className="prompt-symbol"> {lang === "en" ? "Skills" : "Compétences"}</span>
      </div>
      <div className="section-block">
        <table className="skills-table">
          <tbody>
            {SKILLS.map((row) => (
              <tr key={row.en}>
                <td>{lang === 'en' ? row.en : row.fr}</td>
                <td>
                  {row.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
