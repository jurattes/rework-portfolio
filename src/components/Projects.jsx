const PROJECTS = [
  {
    id: "KitsuRec",
    date: { en: 'Mar 2025 – May 2025', fr: 'Mars 2025 – Mai 2025' },
    title: 'KitsuRec',
    subtitle: { en: 'AI MEDIA RECOMMENDER', fr: 'RECOMMANDATEUR DE MÉDIAS IA' },
    logs: {
      en: [
        { prefix: '[INFO]', msg: 'Developed database access layers using the DAO pattern — modular, maintainable data management.' },
        { prefix: '[AUTH]', msg: 'Implemented user authentication & authorization with login and account validation.' },
        { prefix: '[UI]  ', msg: 'Built and styled the application UI — intuitive UX & responsive design.' },
      ],
      fr: [
        { prefix: '[INFO]', msg: 'Développement des couches d\'accès aux données via le modèle DAO — gestion modulaire et maintenable.' },
        { prefix: '[AUTH]', msg: 'Implémentation de l\'authentification et de l\'autorisation avec gestion de la connexion.' },
        { prefix: '[UI]  ', msg: 'Conception et stylisation de l\'interface utilisateur — intuitive et responsive.' },
      ],
    },
    link: 'https://github.com/UND34TAK3R/KitsuRec',
    stack: ['Firebase', 'IntelliJ', 'Java'],
  },
  {
    id: "TradeLab",
    date: { en: 'Oct 2025 – Dec 2025', fr: 'Oct 2025 – Déc 2025' },
    title: 'TradeLab',
    subtitle: { en: 'STOCK MARKET SIMULATOR', fr: 'SIMULATEUR DE MARCHÉ BOURSIER' },
    logs: {
      en: [
        { prefix: '[UI]  ', msg: 'Led SwiftUI front-end development — intuitive layout, modern mobile design.' },
        { prefix: '[NAV] ', msg: 'Built navigation structures, tab bars and portfolio screens to improve usability.' },
        { prefix: '[INT] ', msg: 'Translated design into clean, maintainable code fully integrated with backend.' },
      ],
      fr: [
        { prefix: '[UI]  ', msg: 'Responsable du frontend SwiftUI — mise en page intuitive, design mobile moderne.' },
        { prefix: '[NAV] ', msg: 'Création des structures de navigation, barres d\'onglets et écrans de portefeuille.' },
        { prefix: '[INT] ', msg: 'Code frontend propre et maintenable, entièrement intégré aux fonctionnalités backend.' },
      ],
    },
    link: 'https://github.com/UND34TAK3R/TradeLab',
    stack: ['Firebase', 'Xcode', 'Swift'],
  },
]

export default function Projects({ lang }) {
  return (
    <div className="prompt reveal">
      <div className="cmd-line">
        <span className="prompt-symbol"> {lang === "en" ? "Projects" : "Projets"} </span>
      </div>
      <div className="section-block">
        {PROJECTS.map((p) => (
          <div className="project-block" key={p.title}>
            <div className="proj-glow" />
            <div className="project-header-bar">
              <span className="proj-id">{p.id}</span>
              <span className="proj-date">{p.date[lang]}</span>
              <a href = {p.link}
              target = "_blank"
              rel = "noopener nonreferer"
              style={{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '1px', textDecoration: 'none' }}> [View] </a>
            </div>
            <div className="project-inner">
              <div className="proj-title">{p.title}</div>
              <div className="proj-subtitle">{p.subtitle[lang]}</div>
              <div className="proj-log">
                {p.logs[lang].map((log, i) => (
                  <div className="proj-log-line" key={i}>
                    <span className="log-prefix">{log.prefix}</span>
                    <span className="log-msg">{log.msg}</span>
                  </div>
                ))}
              </div>
              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span className="stack-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
