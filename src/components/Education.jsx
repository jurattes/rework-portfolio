const COURSES = {
  en: [
    'Object-Oriented Programming', 'Software Design',
    'Data Structures & Algo', 'Software Documentation',
    'Operating Systems', 'Web Development',
    'Database Systems (SQL)', 'Computer Networks',
  ],
  fr: [
    'Programmation orientée objet', 'Conception logicielle',
    'Structures données & Algo', 'Documentation logicielle',
    'Systèmes d\'exploitation', 'Développement Web',
    'Systèmes SQL', 'Réseaux informatiques',
  ],
}

export default function Education({ lang }) {
  const isEn = lang === 'en'
  return (
    <div className="prompt reveal">
      <div className="cmd-line">
        <span className="prompt-symbol">{isEn ? "Education" : "Formation"}</span>
      </div>
      <div className="section-block">
        <div className="edu-box">
          <div className="edu-topbar">
            {isEn
              ? 'RECORD_ID: EDU_001 | STATUS: IN_PROGRESS | TABLE: education'
              : 'RECORD_ID: EDU_001 | STATUT: EN_COURS | TABLE: formation'}
          </div>
          <div className="edu-inner">
            <div>
              <div className="edu-field">
                <div className="edu-label">{isEn ? 'INSTITUTION' : 'ÉTABLISSEMENT'}</div>
                <div className="edu-value">Collège LaSalle</div>
              </div>
              <div className="edu-field">
                <div className="edu-label">{isEn ? 'DEGREE' : 'DIPLÔME'}</div>
                <div className="edu-value">{isEn ? 'DEC — Computer Science' : 'DEC — Informatique'}</div>
              </div>
              <div className="edu-field">
                <div className="edu-label">{isEn ? 'LOCATION' : 'LIEU'}</div>
                <div className="edu-value-sm">Montréal, QC, Canada</div>
              </div>
              <div className="edu-status">
                {isEn ? '⬤ EXPECTED GRAD: JUNE 2026' : '⬤ DIPLÔME PRÉVU: JUIN 2026'}
              </div>
            </div>
            <div>
              <div className="edu-label" style={{ marginBottom: '12px' }}>
                {isEn ? 'RELATED_COURSEWORK[]' : 'COURS_PERTINENTS[]'}
              </div>
              <div className="course-grid">
                {COURSES[lang].map((c) => (
                  <div className="course-entry" key={c}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
