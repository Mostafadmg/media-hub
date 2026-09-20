import { useState } from "react";
import {
  ArrowLeft, ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, CircleHelp,
  Clock3, Flame, HeartPulse, Lightbulb, ListChecks, Menu, Play, Sparkles, Stethoscope, X
} from "lucide-react";

const lessons = [
  { title: "Welcome & learning outcomes", time: "4 min", description: "Set the foundations for a confident, person-centred consultation.", chapters: ["Your course compass", "What good care looks like", "Set your intention"], insight: "The best clinical conversations are collaborative: expertise meets each person's priorities." },
  { title: "A quick guide to POPs", time: "8 min", description: "Review the essentials before moving into real-world prescribing decisions.", chapters: ["The essentials", "How POPs work", "The three formulations"], insight: "A progestogen-only pill is a daily contraceptive choice with options that differ in their timing window and mechanism." },
  { title: "Choosing the right pill", time: "12 min", description: "Match the method to the person in front of you. Explore the key differences and decision points.", chapters: ["Start with the person", "Compare the options", "Make a shared plan"], insight: "There is rarely one universally 'best' option—there is a best fit for this person's health, circumstances, and preferences." },
  { title: "Safe prescribing scenarios", time: "15 min", description: "Work through practical scenarios that strengthen your prescribing confidence.", chapters: ["Recognise the context", "Check safety nets", "Practise your explanation"], insight: "Safety-netting is not an afterthought. It turns a prescription into an ongoing plan for safe care." },
  { title: "Knowledge check", time: "10 min", description: "Consolidate your learning with a short, supportive knowledge check.", chapters: ["Recall the essentials", "Apply your reasoning", "Reflect and continue"], insight: "Retrieval practice helps turn guidance into knowledge you can use under pressure." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(2);
  const [completedLessons, setCompletedLessons] = useState<number[]>([0, 1]);
  const [isLearning, setIsLearning] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const progress = completedLessons.length * 20;
  const currentLesson = lessons[activeLesson];
  const currentChapter = currentLesson.chapters[chapterIndex];
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
  const nextChapter = () => {
    if (chapterIndex < currentLesson.chapters.length - 1) {
      setChapterIndex(chapterIndex + 1);
    } else {
      if (!isComplete) toggleComplete();
      setIsLearning(false);
    }
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
        <main className="player-shell">
          <div className="player-top"><button className="back-button" onClick={() => setIsLearning(false)}><ArrowLeft size={17} /> Back to course</button><span>CLINICA ACADEMY</span><button className="exit-button" onClick={() => setIsLearning(false)} aria-label="Exit lesson"><X size={18} /></button></div>
          <div className="player-progress"><i style={{ width: `${((chapterIndex + 1) / currentLesson.chapters.length) * 100}%` }} /></div>
          <div className="player-layout">
            <aside className="chapter-rail"><p>LESSON {String(activeLesson + 1).padStart(2, "0")}</p><h2>{currentLesson.title}</h2><div className="chapter-list">{currentLesson.chapters.map((chapter, index) => <button className={chapterIndex === index ? "current" : chapterIndex > index ? "read" : ""} key={chapter} onClick={() => setChapterIndex(index)}><span>{chapterIndex > index ? <Check size={14} /> : String(index + 1).padStart(2, "0")}</span>{chapter}</button>)}</div></aside>
            <article className="learning-card">
              <p className="kicker">CHAPTER {chapterIndex + 1} OF {currentLesson.chapters.length}</p><h1>{currentChapter}</h1>
              <p className="learning-lead">{currentLesson.description}</p>
              <div className="learning-visual"><div className="visual-number">0{chapterIndex + 1}</div><div><span>CLINICAL PRACTICE NOTE</span><b>Start with curiosity,<br />then build clarity.</b></div><HeartPulse size={43} /></div>
              <div className="insight-box"><Lightbulb size={20} /><div><b>Key insight</b><p>{currentLesson.insight}</p></div></div>
              <div className="reflection"><ListChecks size={19} /><div><b>Pause & reflect</b><p>What question would help you understand what matters most to this person?</p></div></div>
              <div className="player-actions"><button className="previous-button" onClick={() => setChapterIndex(Math.max(0, chapterIndex - 1))} disabled={chapterIndex === 0}>Previous</button><button className="primary-button" onClick={nextChapter}>{chapterIndex === currentLesson.chapters.length - 1 ? "Finish lesson" : "Continue"} <ArrowRight size={17} /></button></div>
            </article>
          </div>
        </main>
      ) : <main>
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
              <button className="primary-button course-cta" onClick={() => beginLesson()}>Resume lesson <ArrowRight size={18} /></button>
            </div>
          </article>

          <section className="lesson-section">
            <div className="section-heading compact"><div><p className="kicker">COURSE ROADMAP</p><h2>Learn at your pace</h2></div><span className="lesson-count">{completedLessons.length} of {lessons.length} complete</span></div>
            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <button key={lesson.title} className={`lesson ${activeLesson === index ? "selected" : ""} ${completedLessons.includes(index) ? "finished" : ""}`} onClick={() => selectLesson(index)}>
                  <span className="lesson-status">{completedLessons.includes(index) ? <Check size={17} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</span>
                  <span className="lesson-title"><b>{lesson.title}</b><small><Clock3 size={13} /> {lesson.time}</small></span>
                  {activeLesson === index ? <span className="now">NOW</span> : <ChevronDown className="lesson-chevron" size={18} />}
                </button>
              ))}
            </div>
          </section>

          <section className="active-lesson">
            <div className="lesson-number">{String(activeLesson + 1).padStart(2, "0")}</div>
            <div className="active-copy"><p className="kicker">SELECTED LESSON · {currentLesson.time.toUpperCase()}</p><h2>{currentLesson.title}</h2><p>{currentLesson.description}</p><div className="active-tags"><span><BookOpen size={15} /> 3 short chapters</span><span><Flame size={15} /> Case-based learning</span></div></div>
            <div className="lesson-actions"><button className="start-button" onClick={() => beginLesson()}>Start lesson <ArrowRight size={16} /></button><button className={`complete-button ${isComplete ? "is-complete" : ""}`} onClick={toggleComplete}>{isComplete ? <><Check size={19} /> Completed</> : "Mark as complete"}</button></div>
          </section>
        </section>
      </main>}
      <footer><span>© 2026 Clinica Academy</span><span>Learning designed for better care</span></footer>
    </div>
  );
}
