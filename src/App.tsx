import { useState } from "react";
import {
  ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, CircleHelp,
  Clock3, Flame, HeartPulse, Menu, Play, Sparkles, Stethoscope, X
} from "lucide-react";

const lessons = [
  { title: "Welcome & learning outcomes", time: "4 min", done: true, description: "Set the foundations for a confident, person-centred consultation." },
  { title: "A quick guide to POPs", time: "8 min", done: true, description: "Review the essentials before moving into real-world prescribing decisions." },
  { title: "Choosing the right pill", time: "12 min", done: false, description: "Match the method to the person in front of you. Explore the key differences and decision points." },
  { title: "Safe prescribing scenarios", time: "15 min", done: false, description: "Work through practical scenarios that strengthen your prescribing confidence." },
  { title: "Knowledge check", time: "10 min", done: false, description: "Consolidate your learning with a short, supportive knowledge check." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(2);
  const [complete, setComplete] = useState(false);
  const [playing, setPlaying] = useState(false);
  const progress = complete ? 60 : 40;
  const currentLesson = lessons[activeLesson];

  return (
    <div className="academy">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark"><HeartPulse size={19} /></span>
          <span>clinica<span>academy</span></span>
        </a>
        <nav className="desktop-nav">
          <a className="active" href="#learning">My learning</a>
          <a href="#library">Library</a>
          <a href="#support">Support</a>
        </nav>
        <div className="profile-area">
          <button className="icon-button" aria-label="Notifications"><Bell size={19} /></button>
          <button className="avatar">EA</button>
          <button className="menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && <nav className="mobile-nav"><a href="#learning">My learning</a><a href="#library">Library</a><a href="#support">Support</a></nav>}

      <main>
        <section className="hero" id="learning">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> CLINICAL ESSENTIALS</div>
            <h1>Confident care,<br /><em>one decision at a time.</em></h1>
            <p>Build your expertise with practical, beautifully designed learning for everyday clinical care.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => document.getElementById("course")?.scrollIntoView({ behavior: "smooth" })}>Continue learning <ArrowRight size={18} /></button>
              <button className="text-button"><CircleHelp size={18} /> How it works</button>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a clinician reviewing training">
            <div className="sun" />
            <div className="visual-card visual-card-back"><span>Clinical confidence</span><div className="chart-bars"><i /><i /><i /><i /></div></div>
            <div className="visual-card visual-card-front">
              <div className="visual-header"><span className="tiny-logo"><Stethoscope size={15} /></span><span>Today’s focus</span></div>
              <strong>Safe prescribing</strong><div className="pulse-line" />
              <div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85" alt="Clinician in a white coat" /></div>
            </div>
            <div className="float-badge"><Award size={18} /><span><b>2</b> lessons complete</span></div>
          </div>
        </section>

        <section className="content-shell" id="course">
          <div className="section-heading">
            <div><p className="kicker">IN PROGRESS</p><h2>Your current course</h2></div>
            <a href="#library">View all learning <ArrowRight size={16} /></a>
          </div>

          <article className="course-card">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85" alt="Healthcare professional working at a desk" />
              <span className="course-tag">CONTRACEPTION</span>
              <button className="play-button" aria-label="Play course overview" onClick={() => setPlaying(!playing)}>
                {playing ? <X fill="currentColor" size={22} /> : <Play fill="currentColor" size={22} />}
              </button>
              {playing && <div className="video-notice">Course introduction ready to play</div>}
            </div>
            <div className="course-body">
              <div className="course-meta"><span><Clock3 size={16} /> 49 min remaining</span><span className="dot" /><span>Intermediate</span></div>
              <h3>Progestogen-only pills:<br />prescribe with confidence</h3>
              <p>Evidence-based guidance for clear, person-centred conversations and safer prescribing decisions.</p>
              <div className="progress-row"><div><span>Course progress</span><b>{progress}%</b></div><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
              <button className="primary-button course-cta" onClick={() => setActiveLesson(2)}>Resume lesson <ArrowRight size={18} /></button>
            </div>
          </article>

          <section className="lesson-section">
            <div className="section-heading compact"><div><p className="kicker">COURSE ROADMAP</p><h2>Learn at your pace</h2></div><span className="lesson-count">2 of 5 complete</span></div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <button key={lesson.title} className={`lesson ${activeLesson === index ? "selected" : ""} ${lesson.done || (index === 2 && complete) ? "finished" : ""}`} onClick={() => setActiveLesson(index)}>
                  <span className="lesson-status">{lesson.done || (index === 2 && complete) ? <Check size={17} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</span>
                  <span className="lesson-title"><b>{lesson.title}</b><small><Clock3 size={13} /> {lesson.time}</small></span>
                  {activeLesson === index ? <span className="now">NOW</span> : <ChevronDown className="lesson-chevron" size={18} />}
                </button>
              ))}
            </div>
          </section>

          <section className="active-lesson">
            <div className="lesson-number">{String(activeLesson + 1).padStart(2, "0")}</div>
            <div className="active-copy"><p className="kicker">SELECTED LESSON · {currentLesson.time.toUpperCase()}</p><h2>{currentLesson.title}</h2><p>{currentLesson.description}</p><div className="active-tags"><span><BookOpen size={15} /> 3 short chapters</span><span><Flame size={15} /> Case-based learning</span></div></div>
            <button className={`complete-button ${complete ? "is-complete" : ""}`} onClick={() => setComplete(!complete)}>{complete ? <><Check size={19} /> Completed</> : "Mark as complete"}</button>
          </section>
        </section>
      </main>
      <footer><span>© 2026 Clinica Academy</span><span>Learning designed for better care</span></footer>
    </div>
  );
}
