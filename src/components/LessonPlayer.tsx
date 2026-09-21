import { useState } from "react";
import { ArrowLeft, ArrowRight, Lightbulb, ListChecks, Scale, ShieldAlert } from "lucide-react";
import type { Block, Lesson, PillTag } from "@/data/curriculum";
import { ChcStartGuide } from "@/components/ChcStartGuide";
import { TeachDeck } from "@/components/TeachBoard";
import { LectureHero } from "@/components/LectureDiagrams";
import { lessonLectures } from "@/data/lectures";

const tagLabel: Record<PillTag, string> = {
  chc: "CHC",
  trad: "Traditional POP",
  dsg: "DSG",
  drsp: "DRSP",
  all: "All methods",
};

function Tag({ tone }: { tone: PillTag }) {
  return <span className={`pill-tag ${tone}`}>{tagLabel[tone]}</span>;
}

function Quiz({ block }: { block: Extract<Block, { kind: "quiz" }> }) {
  const [choice, setChoice] = useState<number | null>(null);
  const answered = choice !== null;
  return (
    <section className="teach-quiz">
      <p className="quiz-label">Check your reasoning</p>
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
      {answered && <p className="quiz-explain">{choice === block.answer ? "Yes. " : "Not quite. "}{block.explain}</p>}
    </section>
  );
}

function Graphic({ variant }: { variant: Extract<Block, { kind: "graphic" }>["variant"] }) {
  if (variant === "decisions") {
    return (
      <div className="graphic-panel decisions">
        {["Safety", "Effectiveness", "Pregnancy today", "Acceptability"].map((item, index) => (
          <div key={item} className="decision-orb">
            <em>0{index + 1}</em>
            <b>{item}</b>
          </div>
        ))}
      </div>
    );
  }
  if (variant === "axis") {
    return (
      <div className="graphic-panel axis">
        <div className="axis-node"><span>Brain</span><small>GnRH pulses</small></div>
        <i />
        <div className="axis-node"><span>Pituitary</span><small>FSH · LH</small></div>
        <i />
        <div className="axis-node"><span>Ovary</span><small>Estradiol · oocyte</small></div>
        <i />
        <div className="axis-node"><span>Uterus · cervix</span><small>Lining · mucus</small></div>
      </div>
    );
  }
  if (variant === "windows") {
    return (
      <div className="window-lanes">
        {[
          { tone: "trad" as const, name: "Traditional POP", label: "Missed after 3 hours" },
          { tone: "dsg" as const, name: "Desogestrel", label: "Missed after 12 hours" },
          { tone: "drsp" as const, name: "Drospirenone", label: "Missed after 24 hours" },
          { tone: "chc" as const, name: "Standard EE COC", label: "Product-specific; often 24 hours" },
        ].map((lane) => (
          <div className="window-lane" key={lane.name}>
            <div><Tag tone={lane.tone} /><strong>{lane.name}</strong><small>{lane.label}</small></div>
            <div className={`window-bar ${lane.tone}`} />
          </div>
        ))}
      </div>
    );
  }
  if (variant === "vte") {
    return (
      <div className="vte-chart">
        {[
          { label: "No CHC", value: 2, max: 12 },
          { label: "EE/LNG", value: 6, max: 12 },
          { label: "EE/DSG or DRSP", value: 10, max: 12 },
        ].map((row) => (
          <div key={row.label}>
            <span>{row.label}</span>
            <b style={{ width: `${(row.value / row.max) * 100}%` }}>{row.value}</b>
          </div>
        ))}
        <small>Estimated VTE events per 10,000 women per year</small>
      </div>
    );
  }
  if (variant === "packs") {
    return (
      <div className="pack-grid">
        <div className="pack-card trad"><b>Traditional · continuous</b><div className="blister">{Array.from({ length: 28 }, (_, i) => <i key={i} />)}</div></div>
        <div className="pack-card dsg"><b>DSG · all active</b><div className="blister">{Array.from({ length: 28 }, (_, i) => <i key={i} />)}</div></div>
        <div className="pack-card drsp"><b>DRSP · 24 + 4</b><div className="blister">{Array.from({ length: 28 }, (_, i) => <i key={i} className={i >= 24 ? "placebo" : ""} />)}</div></div>
        <div className="pack-card chc"><b>COC · 21 + 7 or 24 + 4</b><div className="blister">{Array.from({ length: 28 }, (_, i) => <i key={i} className={i >= 21 ? "placebo chc" : ""} />)}</div></div>
      </div>
    );
  }
  return (
    <div className="hfi-graphic">
      <div className="hfi-row"><span>21 active</span><em>7-day HFI</em></div>
      <div className="hfi-row long"><span>63 active · tricycle</span><em>4-day HFI</em></div>
      <div className="hfi-row continuous"><span>Continuous active tablets</span></div>
    </div>
  );
}

function TeachBlock({ block }: { block: Block }) {
  if (block.kind === "p") return <p className="teach-copy">{block.text}</p>;
  if (block.kind === "src") return <p className="source-note">{block.text}</p>;
  if (block.kind === "graphic") return <Graphic variant={block.variant} />;
  if (block.kind === "guide") return <ChcStartGuide />;
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
        <div className="table-cards">
          {block.rows.map((row) => (
            <article className={`table-card${block.headers.length <= 3 ? " compact" : ""}`} key={row.join("-")}>
              {block.headers.map((header, index) => (
                <div key={`${header}-${index}`} className={index === 0 ? "lead" : ""}>
                  <span>{header}</span>
                  <b>{row[index]}</b>
                </div>
              ))}
            </article>
          ))}
        </div>
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
  return <Quiz block={block} />;
}

export function LessonPlayer({
  lesson,
  lessonNumber,
  total,
  onExit,
  onPrev,
  onNext,
  onComplete,
}: {
  lesson: Lesson;
  lessonNumber: number;
  total: number;
  onExit: () => void;
  onPrev: () => void;
  onNext: () => void;
  onComplete: () => void;
}) {
  const last = lessonNumber === total;
  const lecture = lessonLectures[lesson.title];
  return (
    <main className="reader">
      <div className="reader-bar">
        <button className="back-button" onClick={onExit}><ArrowLeft size={17} /> Contents</button>
        <span className="reader-part">{lesson.part}</span>
        <span className="reader-progress">{String(lessonNumber).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>
      <header className={`chapter-hero ${lesson.visual}`}>
        <p>CHAPTER {String(lessonNumber).padStart(2, "0")} · {lesson.time.toUpperCase()}</p>
        <h1>{lesson.title}</h1>
        <p className="chapter-lede">{lesson.description}</p>
        {lecture ? (
          <LectureHero scene={lecture.scene} diagram={lecture.diagram} title={lesson.title} />
        ) : (
          <div className="hero-graphic"><Graphic variant={lesson.visual as Extract<Block, { kind: "graphic" }>["variant"]} /></div>
        )}
      </header>
      <article className="chapter-body">
        <TeachDeck lessonTitle={lesson.title} />
        {lesson.sections.map((section) => (
          <section key={section.title} className={`chapter-section${section.blocks[0]?.kind === "guide" ? " has-guide" : ""}`}>
            {section.blocks[0]?.kind !== "guide" && <h2>{section.title}</h2>}
            {section.blocks.map((block, index) => <TeachBlock key={`${section.title}-${index}`} block={block} />)}
          </section>
        ))}
        <p className="source-note">Educational summary of FSRH CHC (amended Oct 2023), FSRH POP (amended Apr 2026) and UKMEC 2025. Use local protocols and the current SmPC. This manual does not confer accreditation.</p>
        <div className="chapter-nav">
          <button className="previous-button" onClick={onPrev} disabled={lessonNumber === 1}>Previous chapter</button>
          <button className="primary-button" onClick={() => { onComplete(); if (!last) onNext(); else onExit(); }}>
            {last ? "Finish manual" : "Next chapter"} <ArrowRight size={17} />
          </button>
        </div>
      </article>
    </main>
  );
}
