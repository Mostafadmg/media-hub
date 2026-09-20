import { useState } from "react";
import {
  ArrowRight, Award, Bell, BookOpen, Check, CircleHelp,
  Clock3, HeartPulse, Menu, Sparkles, X
} from "lucide-react";
import { lessons } from "@/data/curriculum";
import { LessonPlayer } from "@/components/LessonPlayer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const progress = Math.round((completedLessons.length / lessons.length) * 100);
  const currentLesson = lessons[activeLesson];
  const markComplete = (index = activeLesson) => {
    setCompletedLessons((previous) => previous.includes(index) ? previous : [...previous, index]);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`academy${isLearning ? " learning" : ""}`}>
      {!isLearning && (
        <header className="topbar">
          <a className="brand" href="#" onClick={closeMenu}>
            <span className="brand-mark"><HeartPulse size={19} /></span>
            <span>clinica<span>academy</span></span>
          </a>
          <nav className="desktop-nav">
            <a className="active" href="#learning">Manual</a>
            <a href="#contents">Contents</a>
            <a href="#support">Sources</a>
          </nav>
          <div className="profile-area">
            <button className="icon-button" aria-label="Notifications"><Bell size={19} /></button>
            <button className="avatar">EA</button>
            <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <nav className="mobile-nav">
              <a href="#learning" onClick={closeMenu}>Manual</a>
              <a href="#contents" onClick={closeMenu}>Contents</a>
              <a href="#support" onClick={closeMenu}>Sources</a>
            </nav>
          )}
        </header>
      )}

      {isLearning ? (
        <LessonPlayer
          lesson={currentLesson}
          lessonNumber={activeLesson + 1}
          total={lessons.length}
          onExit={() => setIsLearning(false)}
          onPrev={() => setActiveLesson((index) => Math.max(0, index - 1))}
          onNext={() => setActiveLesson((index) => Math.min(lessons.length - 1, index + 1))}
          onComplete={() => markComplete()}
        />
      ) : <main>
        <section className="hero" id="learning">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> PRESCRIBER’S MANUAL</div>
            <h1>Oral contraception,<br /><em>taught as reasoning.</em></h1>
            <p>Combined hormonal contraception and progestogen-only pills. A 22-chapter self-study manual for doctors, pharmacist independent prescribers and advanced nurse practitioners.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setIsLearning(true)}>Open the manual <ArrowRight size={18} /></button>
              <button className="text-button" onClick={() => document.getElementById("contents")?.scrollIntoView({ behavior: "smooth" })}><CircleHelp size={18} /> See contents</button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="sun" />
            <div className="visual-card visual-card-back"><span>Four decisions</span><div className="chart-bars"><i /><i /><i /><i /></div></div>
            <div className="visual-card visual-card-front">
              <div className="visual-header"><span className="tiny-logo"><BookOpen size={15} /></span><span>UK practice</span></div>
              <strong>CHC · POP · UKMEC</strong><div className="pulse-line" />
              <div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85" alt="" /></div>
            </div>
            <div className="float-badge"><Award size={18} /><span><b>{completedLessons.length}</b> of {lessons.length} chapters</span></div>
          </div>
        </section>

        <section className="content-shell" id="contents">
          <div className="section-heading">
            <div><p className="kicker">22 CHAPTERS</p><h2>Contents</h2></div>
            <span className="lesson-count">{progress}% complete</span>
          </div>
          <div className="progress-row contents-progress"><div><span>Manual progress</span><b>{progress}%</b></div><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
          <div className="chapter-index">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.title}
                className={`index-card ${activeLesson === index ? "selected" : ""} ${completedLessons.includes(index) ? "finished" : ""}`}
                onClick={() => { setActiveLesson(index); setIsLearning(true); }}
              >
                <span className="index-num">{completedLessons.includes(index) ? <Check size={16} /> : String(index + 1).padStart(2, "0")}</span>
                <span className="index-copy">
                  <small>{lesson.part}</small>
                  <b>{lesson.title}</b>
                  <em><Clock3 size={12} /> {lesson.time}</em>
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>}
      {!isLearning && <footer id="support"><span>© 2026 Clinica Academy</span><span>FSRH CHC · FSRH POP · UKMEC 2025 · review 20 Sep 2026</span></footer>}
    </div>
  );
}
