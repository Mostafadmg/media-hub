import { useState } from "react";
import {
  ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, CircleHelp,
  Clock3, Flame, HeartPulse, Menu, Play, Sparkles, Stethoscope, X
} from "lucide-react";
import { lessons } from "@/data/curriculum";
import { LessonPlayer } from "@/components/LessonPlayer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const progress = Math.round((completedLessons.length / lessons.length) * 100);
  const currentLesson = lessons[activeLesson];
  const isComplete = completedLessons.includes(activeLesson);
  const selectLesson = (index: number) => {
    setActiveLesson(index);
    setChapterIndex(0);
  };
  const toggleComplete = () => setCompletedLessons((previous) =>
    previous.includes(activeLesson) ? previous.filter((lesson) => lesson !== activeLesson) : [...previous, activeLesson]
  );
  const beginLesson = (index = activeLesson) => {
    selectLesson(index);
    setIsLearning(true);
  };
  const finishLesson = () => {
    if (!isComplete) toggleComplete();
    setIsLearning(false);
  };

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

      {isLearning ? (
        <LessonPlayer
          lesson={currentLesson}
          lessonNumber={activeLesson + 1}
          stepIndex={chapterIndex}
          onStep={setChapterIndex}
          onExit={() => setIsLearning(false)}
          onFinish={finishLesson}
        />
      ) : <main>
        <section className="hero" id="learning">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> CLINICAL ESSENTIALS</div>
            <h1>Confident care,<br /><em>one decision at a time.</em></h1>
            <p>A full FSRH-based module: from the cycle and the four brakes to missed pills, prescribing and remote supply.</p>
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
            <div className="float-badge"><Award size={18} /><span><b>{completedLessons.length}</b> of {lessons.length} complete</span></div>
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
              <div className="course-meta"><span><Clock3 size={16} /> 3 h 25 min total</span><span className="dot" /><span>{lessons.length} lessons</span></div>
              <h3>Progestogen-only pills:<br />from first principles to safe prescribing</h3>
              <p>Built from the FSRH guideline. Start with how ovulation works. Finish by running a full consultation, in person, by pharmacy, or remotely.</p>
              <div className="progress-row"><div><span>Course progress</span><b>{progress}%</b></div><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
              <button className="primary-button course-cta" onClick={() => beginLesson()}>Resume lesson <ArrowRight size={18} /></button>
            </div>
          </article>

          <section className="lesson-section">
            <div className="section-heading compact"><div><p className="kicker">COURSE ROADMAP</p><h2>Learn at your pace</h2></div><span className="lesson-count">{completedLessons.length} of {lessons.length} complete</span></div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <button key={lesson.title} className={`lesson ${activeLesson === index ? "selected" : ""} ${completedLessons.includes(index) ? "finished" : ""}`} onClick={() => selectLesson(index)}>
                  <span className="lesson-status">{completedLessons.includes(index) ? <Check size={17} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</span>
                  <span className="lesson-title"><b>{lesson.title}</b><small><Clock3 size={13} /> {lesson.time} · {lesson.part}</small></span>
                  {activeLesson === index ? <span className="now">NOW</span> : <ChevronDown className="lesson-chevron" size={18} />}
                </button>
              ))}
            </div>
          </section>

          <section className="active-lesson">
            <div className="lesson-number">{String(activeLesson + 1).padStart(2, "0")}</div>
            <div className="active-copy"><p className="kicker">{currentLesson.part} · {currentLesson.time.toUpperCase()}</p><h2>{currentLesson.title}</h2><p>{currentLesson.description}</p><div className="active-tags"><span><BookOpen size={15} /> {currentLesson.steps.length} teaching steps</span><span><Flame size={15} /> Source-aligned learning</span></div></div>
            <div className="lesson-actions"><button className="start-button" onClick={() => beginLesson()}>Start lesson <ArrowRight size={16} /></button><button className={`complete-button ${isComplete ? "is-complete" : ""}`} onClick={toggleComplete}>{isComplete ? <><Check size={19} /> Completed</> : "Mark as complete"}</button></div>
          </section>
        </section>
      </main>}
      {!isLearning && <footer><span>© 2026 Clinica Academy</span><span>Educational summary of the FSRH POP guideline</span></footer>}
    </div>
  );
}
