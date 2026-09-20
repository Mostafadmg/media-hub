import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Lightbulb, ListChecks, Scale, ShieldAlert, X } from "lucide-react";
import type { Block, Lesson, PillTag } from "@/data/curriculum";

const tagLabel: Record<PillTag, string> = {
  trad: "Traditional",
  dsg: "DSG",
  drsp: "DRSP",
  all: "All POPs",
};

function Tag({ tone }: { tone: PillTag }) {
  return <span className={`pill-tag ${tone}`}>{tagLabel[tone]}</span>;
}

function Quiz({ block }: { block: Extract<Block, { kind: "quiz" }> }) {
  const [choice, setChoice] = useState<number | null>(null);
  const answered = choice !== null;
  return (
    <section className="teach-quiz">
      <p className="quiz-label">Check yourself</p>
      <p className="quiz-question">{block.question}</p>
      <div className="quiz-options">
        {block.options.map((option, index) => {
          const selected = choice === index;
          const correct = index === block.answer;
          return (
            <button
              key={option}
              className={`quiz-option ${answered && correct ? "correct" : ""} ${selected && !correct ? "wrong" : ""}`}
              onClick={() => setChoice(index)}
              disabled={answered}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          );
        })}
      </div>
      {answered && <p className="quiz-explain">{choice === block.answer ? "Correct. " : "Not quite. "}{block.explain}</p>}
    </section>
  );
}

function Packs() {
  return (
    <div className="pack-grid">
      <div className="pack-card trad">
        <b>LNG 30 µg · 35 tablets</b>
        <div className="blister">{Array.from({ length: 35 }, (_, i) => <i key={i} />)}</div>
      </div>
      <div className="pack-card trad">
        <b>NET 350 µg · 28 tablets</b>
        <div className="blister four">{Array.from({ length: 28 }, (_, i) => <i key={i} />)}</div>
      </div>
      <div className="pack-card dsg">
        <b>DSG 75 µg · 28 tablets</b>
        <div className="blister four">{Array.from({ length: 28 }, (_, i) => <i key={i} />)}</div>
      </div>
      <div className="pack-card drsp">
        <b>DRSP 4 mg · 24 + 4</b>
        <div className="blister four">
          {Array.from({ length: 28 }, (_, i) => <i key={i} className={i >= 24 ? "placebo" : ""} />)}
        </div>
      </div>
    </div>
  );
}

function Windows() {
  return (
    <div className="window-lanes">
      {[
        { tone: "trad" as const, name: "Traditional", late: 3, miss: 27, label: "Missed after 3 hours" },
        { tone: "dsg" as const, name: "DSG", late: 12, miss: 36, label: "Missed after 12 hours" },
        { tone: "drsp" as const, name: "DRSP", late: 24, miss: 48, label: "Missed after 24 hours" },
      ].map((lane) => (
        <div className="window-lane" key={lane.name}>
          <div><Tag tone={lane.tone} /><strong>{lane.name}</strong><small>{lane.label}</small></div>
          <div className="window-bar">
            <i className="on-time" style={{ width: `${(24 / 48) * 100}%` }} />
            <i className="late" style={{ left: `${(24 / 48) * 100}%`, width: `${(lane.late / 48) * 100}%` }} />
            <i className="missed" style={{ left: `${((24 + lane.late) / 48) * 100}%`, width: `${((48 - 24 - lane.late) / 48) * 100}%` }} />
          </div>
        </div>
      ))}
      <p className="window-key"><span className="on-time" /> On time <span className="late" /> Late but covered <span className="missed" /> Missed</p>
    </div>
  );
}

function TeachBlock({ block }: { block: Block }) {
  if (block.kind === "p") return <p className="teach-copy">{block.text}</p>;
  if (block.kind === "src") return <p className="source-note">{block.text}</p>;
  if (block.kind === "goals") {
    return (
      <div className="goal-box">
        <b>By the end you can</b>
        <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
  if (block.kind === "cards") {
    return (
      <div className={`teach-cards ${block.items.length > 2 ? "four" : ""}`}>
        {block.items.map((card) => (
          <article key={card.title} className={`teach-card ${card.tone ?? ""}`}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    );
  }
  if (block.kind === "table") {
    return (
      <div className="table-wrap">
        <table>
          <thead><tr>{block.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
          <tbody>{block.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${cell}-${index}`} className={index === 0 ? "k" : ""}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  if (block.kind === "rule") return <aside className="callout rule"><Scale size={18} /><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
  if (block.kind === "why") return <aside className="callout why"><Lightbulb size={18} /><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
  if (block.kind === "concept") return <aside className="callout concept"><ListChecks size={18} /><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
  if (block.kind === "warn") return <aside className="callout warn"><ShieldAlert size={18} /><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
  if (block.kind === "note") return <aside className="callout note"><ListChecks size={18} /><div><b>{block.title}</b><p>{block.text}</p></div></aside>;
  if (block.kind === "facts") {
    return (
      <div className="fact-row">
        {block.items.map((fact) => <div className="fact" key={fact.label}><b>{fact.value}</b><span>{fact.label}</span></div>)}
      </div>
    );
  }
  if (block.kind === "list") return <ul className="teach-list">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  if (block.kind === "steps") {
    return (
      <ol className="teach-steps">
        {block.items.map((item, index) => <li key={item.title}><span>{index + 1}</span><div><b>{item.title}</b><p>{item.text}</p></div></li>)}
      </ol>
    );
  }
  if (block.kind === "legend") {
    return (
      <div className="legend">
        <div><Tag tone="trad" /><span>Levonorgestrel 30 µg and norethisterone 350 µg. These two behave alike, so they share a colour.</span></div>
        <div><Tag tone="dsg" /><span>Desogestrel 75 µg.</span></div>
        <div><Tag tone="drsp" /><span>Drospirenone 4 mg. Whenever a rule differs by pill, it carries one of these tags.</span></div>
        <div><Tag tone="all" /><span>The rule applies to every type.</span></div>
      </div>
    );
  }
  if (block.kind === "timeline") {
    return (
      <ol className="timeline">
        {block.items.map((item) => (
          <li key={item.year} className={item.tone ?? ""}>
            <time>{item.year}</time>
            <div><b>{item.title}</b><p>{item.text}</p></div>
          </li>
        ))}
      </ol>
    );
  }
  if (block.kind === "packs") return <Packs />;
  if (block.kind === "windows") return <Windows />;
  return <Quiz block={block} />;
}

export function LessonPlayer({
  lesson,
  lessonNumber,
  stepIndex,
  onStep,
  onExit,
  onFinish,
}: {
  lesson: Lesson;
  lessonNumber: number;
  stepIndex: number;
  onStep: (index: number) => void;
  onExit: () => void;
  onFinish: () => void;
}) {
  const step = lesson.steps[stepIndex];
  const last = stepIndex === lesson.steps.length - 1;
  return (
    <main className="player-shell">
      <div className="player-top">
        <button className="back-button" onClick={onExit}><ArrowLeft size={17} /> Back to course</button>
        <span>CLINICA ACADEMY</span>
        <button className="exit-button" onClick={onExit} aria-label="Exit lesson"><X size={18} /></button>
      </div>
      <div className="player-progress"><i style={{ width: `${((stepIndex + 1) / lesson.steps.length) * 100}%` }} /></div>
      <div className="player-layout">
        <aside className="chapter-rail">
          <p>{lesson.part} · LESSON {String(lessonNumber).padStart(2, "0")}</p>
          <h2>{lesson.title}</h2>
          <div className="chapter-list">
            {lesson.steps.map((item, index) => (
              <button className={stepIndex === index ? "current" : stepIndex > index ? "read" : ""} key={item.title} onClick={() => onStep(index)}>
                <span>{stepIndex > index ? <Check size={14} /> : String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </button>
            ))}
          </div>
        </aside>
        <article className="learning-card teach-card-wide" key={`${lesson.title}-${step.title}`}>
          <p className="kicker">STEP {stepIndex + 1} OF {lesson.steps.length}</p>
          <h1>{step.title}</h1>
          <p className="learning-lead">{step.lead}</p>
          {step.blocks.map((block, index) => <TeachBlock key={`${step.title}-${index}`} block={block} />)}
          <p className="source-note">Source: FSRH Progestogen-only Pills Guideline (August 2022; amended April 2026). Use local protocols and the current SmPC when making clinical decisions.</p>
          <div className="player-actions">
            <button className="previous-button" onClick={() => onStep(Math.max(0, stepIndex - 1))} disabled={stepIndex === 0}>Previous</button>
            <button className="primary-button" onClick={() => last ? onFinish() : onStep(stepIndex + 1)}>
              {last ? "Finish lesson" : "Continue"} <ArrowRight size={17} />
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}
