const LANGUAGES = [
  { en: 'English', fr: 'Anglais', pct: '100%', level: { en: 'NATIVE', fr: 'NATIF' } },
  { en: 'French',  fr: 'Français', pct: '90%',  level: { en: 'FLUENT', fr: 'COURANT' } },
]

export default function Languages({ lang }) {
  return (
    <div className="prompt reveal">
      <div className="cmd-line">
        <span className="prompt-symbol">{lang === "en" ? "Languages Spoken" : "Langues parleés"}</span>
      </div>
      <div className="section-block">
        <div className="lang-bars">
          {LANGUAGES.map((l) => (
            <div className="lang-row" key={l.en}>
              <span className="lang-name-text">{lang === 'en' ? l.en : l.fr}</span>
              <div className="lang-bar-wrap">
                <div className="lang-bar-fill" style={{ width: l.pct }} />
              </div>
              <span className="lang-pct">{l.level[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
