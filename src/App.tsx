import { useState } from "react";
import {
  ArrowLeft, ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, CircleHelp,
  Clock3, Flame, HeartPulse, Lightbulb, ListChecks, Menu, Play, Sparkles, Stethoscope, X
} from "lucide-react";

const lessons = [
  { title: "Start here", time: "5 min", description: "Orient yourself to a full, guideline-based module on progestogen-only pills—from first principles to safe prescribing.", chapters: ["Your learning outcomes", "How to use this module", "Evidence and scope"], insight: "This is training, not an individual prescribing protocol. Where an SmPC and guideline differ, recognise and discuss the difference.", part: "START" },
  { title: "The cycle and the four brakes", time: "12 min", description: "Understand the menstrual cycle and the four contraceptive effects a progestogen can use.", chapters: ["A cycle in one minute", "The four brakes", "Which brakes each POP relies on"], insight: "Traditional POPs rely mainly on cervical mucus; desogestrel and drospirenone reliably suppress ovulation as well.", part: "FOUNDATIONS" },
  { title: "The four pills", time: "14 min", description: "Recognise the four UK POPs by dose, regimen, pack, brand and primary mechanism.", chapters: ["Everyday comparison", "How the packs look", "How to take each pill"], insight: "Traditional and DSG POPs are continuous; drospirenone is 24 active tablets plus 4 placebos, with no gap between packs.", part: "FOUNDATIONS" },
  { title: "Where each pill came from", time: "10 min", description: "Follow the evidence story from traditional POPs through desogestrel and drospirenone.", chapters: ["Timeline", "The story in four acts", "Reading the trial evidence"], insight: "A longer missed-pill window reflects evidence about ovulation suppression—not a promise that one POP is proven more effective than another.", part: "FOUNDATIONS" },
  { title: "UK products and brands", time: "10 min", description: "Match UK brands and packs to pill type, legal status and supply limits.", chapters: ["Brand map", "What the pack tells you", "Pharmacy supply of DSG"], insight: "Hana and Lovima are Pharmacy medicines, not general-sale products; supply limits depend on age and prior use.", part: "FOUNDATIONS" },
  { title: "How well they work", time: "10 min", description: "Communicate perfect- and typical-use effectiveness, ovulation data and return to fertility accurately.", chapters: ["Effectiveness in context", "Pregnancy and ovulation numbers", "After stopping"], insight: "Better ovulation suppression does not by itself prove a clinically meaningful difference in effectiveness; LARC remains the most effective option.", part: "USING THE PILLS" },
  { title: "Taking pills correctly", time: "16 min", description: "Apply late and missed-pill rules, emergency contraception advice and vomiting or diarrhoea guidance.", chapters: ["Is it a missed pill?", "What to do next", "The DRSP pack day by day"], insight: "Windows differ: traditional 3 hours, DSG 12 hours and DRSP 24 hours. Extra precautions differ too—48 hours for traditional/DSG and 7 days for DRSP.", part: "USING THE PILLS" },
  { title: "What can weaken protection", time: "12 min", description: "Assess body weight, malabsorption, bariatric surgery, drug interactions and EC timing.", chapters: ["Body weight and BMI", "Bariatric surgery and malabsorption", "Drug interactions and EC"], insight: "Enzyme inducers can reduce POP effectiveness during use and for 28 days afterwards; discuss an unaffected method rather than simply increasing the dose.", part: "USING THE PILLS" },
  { title: "Who can and cannot use them", time: "14 min", description: "Screen UKMEC 3 and 4 conditions and apply drospirenone kidney and potassium checks.", chapters: ["The complete short list", "Conditions people worry about", "Extra checks for DRSP"], insight: "For DRSP, assess renal function, hyperkalaemia risk and potassium-raising medicines before prescribing where relevant.", part: "PRESCRIBING" },
  { title: "Health risks in perspective", time: "10 min", description: "Counsel about clots, arterial events, breast cancer, cysts and ectopic pregnancy using absolute risk.", chapters: ["Risk at a glance", "Breast cancer in numbers", "Cysts and ectopic pregnancy"], insight: "Risk conversations should put small absolute numbers into context and avoid implying that a POP is risk-free or that a relative risk is the whole story.", part: "PRESCRIBING" },
  { title: "Side effects and bleeding", time: "16 min", description: "Set bleeding expectations, discuss mood and other side effects honestly, and assess problematic bleeding safely.", chapters: ["Bleeding patterns", "Other side effects", "Managing problematic bleeding"], insight: "Irregular bleeding is unpredictable. Exclude pregnancy, infection, missed pills, interactions and pathology before attributing it to the POP.", part: "PRESCRIBING" },
  { title: "Extra benefits", time: "8 min", description: "Separate established practice from promising but unproven benefits for heavy bleeding, pain, PCOS and acne.", chapters: ["Heavy bleeding", "Pain and PCOS", "Careful with claims"], insight: "Some non-contraceptive benefits are plausible or observed, but avoid presenting theoretical effects—such as DRSP clearing acne—as established fact.", part: "PRESCRIBING" },
  { title: "Starting and switching", time: "18 min", description: "Use standard-start, quick-start, post-pregnancy, EC and switching rules for each POP.", chapters: ["The core start rules", "After pregnancy and EC", "Switching and stopping"], insight: "Traditional/DSG offer immediate cover on cycle days 1–5; DRSP offers it on day 1 only. After ulipristal EC, wait 5 days before starting a POP.", part: "PRESCRIBING" },
  { title: "The consultation and follow-up", time: "14 min", description: "Run a complete, auditable consultation: assess, choose, counsel, supply and review.", chapters: ["The minimum checklist", "Choosing and supplying", "Information and follow-up"], insight: "A thorough medical and drug history, pregnancy-risk assessment and clear written/verbal advice are core; routine exams are not needed for traditional or DSG POPs.", part: "PRESCRIBING" },
  { title: "Remote and pharmacy supply", time: "12 min", description: "Design an adequate remote pathway and understand Pharmacy supply of desogestrel.", chapters: ["What remote care must do", "Inspect your pathway", "Pharmacy provision"], insight: "In-person assessment is not required if the remote assessment is adequate and reliable—but a self-completed form must be validated, not improvised.", part: "PRESCRIBING" },
  { title: "Practice cases", time: "20 min", description: "Apply missed-pill windows, eligibility, interactions, starts and safeguarding across mixed real-world scenarios.", chapters: ["Missed-pill decisions", "Prescribing risk cases", "Supply and safeguarding"], insight: "Work through the sequence: establish the pill and timing, assess pregnancy/EC risk, then give type-specific precautions and a safety net.", part: "PRACTICE" },
  { title: "Summary sheet and final check", time: "12 min", description: "Consolidate the comparison table, critical rules and final knowledge check before applying the learning in practice.", chapters: ["The comparison sheet", "The rules to retain", "Final check"], insight: "Keep the comparison simple: mechanism, regimen, missed-pill window, precautions, start rules and DRSP-specific kidney/potassium considerations.", part: "PRACTICE" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(2);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const progress = Math.round((completedLessons.length / lessons.length) * 100);
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
            <aside className="chapter-rail"><p>{currentLesson.part} · LESSON {String(activeLesson + 1).padStart(2, "0")}</p><h2>{currentLesson.title}</h2><div className="chapter-list">{currentLesson.chapters.map((chapter, index) => <button className={chapterIndex === index ? "current" : chapterIndex > index ? "read" : ""} key={chapter} onClick={() => setChapterIndex(index)}><span>{chapterIndex > index ? <Check size={14} /> : String(index + 1).padStart(2, "0")}</span>{chapter}</button>)}</div></aside>
            <article className="learning-card">
              <p className="kicker">CHAPTER {chapterIndex + 1} OF {currentLesson.chapters.length}</p><h1>{currentChapter}</h1>
              <p className="learning-lead">{currentLesson.description}</p>
              <div className="learning-visual"><div className="visual-number">0{chapterIndex + 1}</div><div><span>CLINICAL PRACTICE NOTE</span><b>Start with curiosity,<br />then build clarity.</b></div><HeartPulse size={43} /></div>
              <div className="insight-box"><Lightbulb size={20} /><div><b>Key insight</b><p>{currentLesson.insight}</p></div></div>
              <div className="reflection"><ListChecks size={19} /><div><b>Pause & reflect</b><p>What question would help you understand what matters most to this person?</p></div></div>
              <p className="source-note">Source: FSRH Progestogen-only Pills Guideline (August 2022; amended April 2026). Use local protocols and the current SmPC when making clinical decisions.</p>
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
              <div className="course-meta"><span><Clock3 size={16} /> 3 h 25 min total</span><span className="dot" /><span>17 lessons</span></div>
              <h3>Progestogen-only pills:<br />safe prescribing, step by step</h3>
              <p>A complete FSRH-based programme—from mechanisms and medicines to real prescribing, remote supply and practice cases.</p>
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
            <div className="active-copy"><p className="kicker">{currentLesson.part} · {currentLesson.time.toUpperCase()}</p><h2>{currentLesson.title}</h2><p>{currentLesson.description}</p><div className="active-tags"><span><BookOpen size={15} /> 3 short chapters</span><span><Flame size={15} /> Source-aligned learning</span></div></div>
            <div className="lesson-actions"><button className="start-button" onClick={() => beginLesson()}>Start lesson <ArrowRight size={16} /></button><button className={`complete-button ${isComplete ? "is-complete" : ""}`} onClick={toggleComplete}>{isComplete ? <><Check size={19} /> Completed</> : "Mark as complete"}</button></div>
          </section>
        </section>
      </main>}
      <footer><span>© 2026 Clinica Academy</span><span>Learning designed for better care</span></footer>
    </div>
  );
}
