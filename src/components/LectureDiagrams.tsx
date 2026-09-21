import { useEffect, useState, type ReactNode } from "react";
import type { DiagramId } from "@/data/lectures";

function useLectureStep(length: number, delay = 2400) {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setStep((current) => (current + 1) % length), delay);
    return () => window.clearInterval(timer);
  }, [length, delay, paused]);
  return { step, setStep, paused, setPaused };
}

function Stage({
  captions,
  step,
  setStep,
  paused,
  setPaused,
  children,
}: {
  captions: string[];
  step: number;
  setStep: (value: number) => void;
  paused: boolean;
  setPaused: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="lecture-diagram">
      {children}
      <p className="lecture-caption">{captions[step]}</p>
      <div className="lecture-controls">
        {captions.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === step ? "on" : ""}
            onClick={() => { setPaused(true); setStep(index); }}
            aria-label={`Lecture step ${index + 1}`}
          />
        ))}
        <button type="button" className="lecture-play" onClick={() => setPaused(!paused)}>
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}

function Decisions() {
  const captions = [
    "Safety is a UKMEC question — not a brand recommendation.",
    "Effectiveness asks whether it will actually work in this person’s life.",
    "Pregnancy today is a separate clock from next month’s cover.",
    "Acceptability decides whether they will keep using it.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4);
  const labels = ["Safety", "Effectiveness", "Pregnancy today", "Acceptability"];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-stations">
        {labels.map((label, index) => (
          <button key={label} type="button" className={`diag-station s${index} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>
            <i />
            <b>{label}</b>
          </button>
        ))}
      </div>
    </Stage>
  );
}

function Axis() {
  const captions = [
    "GnRH pulses from the brain set the pace.",
    "The pituitary releases FSH and LH.",
    "The ovary makes estradiol and can release an oocyte.",
    "The uterus and cervix show lining and mucus changes.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2200);
  const nodes = ["Brain", "Pituitary", "Ovary", "Uterus"];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-axis">
        {nodes.map((label, index) => (
          <div key={label} className="diag-axis-item">
            <button type="button" className={`diag-node n${index} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
            {index < nodes.length - 1 && <span className={`diag-flow ${step > index ? "gone" : step === index ? "moving" : ""}`} />}
          </div>
        ))}
      </div>
    </Stage>
  );
}

function Packs() {
  const captions = [
    "Traditional POP: mucus-led, 3-hour window, continuous.",
    "Desogestrel: ovulation more consistent, 12-hour window.",
    "Drospirenone: 24 active + 4 placebo, then 7 active days after a miss.",
    "CHC: estrogen plus progestogen. Recovery is usually 7 active days.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2600);
  const packs = [
    { name: "Traditional", tone: "trad", late: "3 h" },
    { name: "DSG", tone: "dsg", late: "12 h" },
    { name: "DRSP", tone: "drsp", late: "24 h" },
    { name: "CHC", tone: "chc", late: "7 d" },
  ];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-packs">
        {packs.map((pack, index) => (
          <button key={pack.name} type="button" className={`diag-pack ${pack.tone} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>
            <div className="diag-blister">{Array.from({ length: 12 }, (_, i) => <i key={i} className={pack.tone === "drsp" && i > 9 ? "ghost" : ""} />)}</div>
            <b>{pack.name}</b>
            <em>{pack.late}</em>
          </button>
        ))}
      </div>
    </Stage>
  );
}

function Estrogen() {
  const captions = [
    "Ethinylestradiol is a potent oral estrogen with important hepatic effects.",
    "Estradiol-based products are still CHC — contraindications remain.",
    "Generations are historical labels, not a safety ladder.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(3, 2500);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-molecule">
        <div className={`hex ${step === 0 ? "on" : ""}`} />
        <div className={`hex ${step === 1 ? "on" : ""}`} />
        <div className={`hex ${step === 2 ? "on" : ""}`} />
        <p>{["EE", "E2 / E4", "Generation trap"][step]}</p>
      </div>
    </Stage>
  );
}

function Vte() {
  const captions = [
    "No CHC, not pregnant: about 2 events per 10,000 per year.",
    "EE with LNG, NET or norgestimate: about 5–7 per 10,000.",
    "EE with DSG, gestodene or DRSP: about 9–12 per 10,000.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(3, 2300);
  const bars = [
    { label: "No CHC", h: 22 },
    { label: "EE / LNG", h: 55 },
    { label: "EE / DSG or DRSP", h: 92 },
  ];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-bars">
        {bars.map((bar, index) => (
          <button key={bar.label} type="button" className={step === index ? "on" : ""} onClick={() => { setPaused(true); setStep(index); }}>
            <i style={{ height: `${bar.h}%` }} />
            <span>{bar.label}</span>
          </button>
        ))}
      </div>
    </Stage>
  );
}

function PatchRing() {
  const captions = [
    "Patch: new patch week 1, change week 2, change week 3.",
    "Then a patch-free week — then restart with a new patch.",
    "Ring: insert, leave in for 3 weeks, remove for 7 days, insert a new ring.",
    "Same hormones as combined pills. Different kit. Same CHC eligibility.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2200);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-kit">
        <div className={`kit-patch ${step < 2 ? "on" : ""}`}>
          {["W1", "W2", "W3", "Off"].map((week, index) => (
            <i key={week} className={`${index === 3 ? "ghost" : ""} ${step === 0 && index < 3 ? "lit" : ""} ${step === 1 && index === 3 ? "lit" : ""}`}>{week}</i>
          ))}
        </div>
        <div className={`kit-ring ${step >= 2 ? "on" : ""}`}>
          <span className={`ring-disc ${step === 2 ? "in" : step === 3 ? "out" : ""}`} />
          <b>{step === 3 ? "7 days out" : "3 weeks in"}</b>
        </div>
      </div>
    </Stage>
  );
}

function Consult() {
  const captions = [
    "Start with the goal: what they want the method to do.",
    "Build the timeline: last bleed, last active tablet, UPSI, EC.",
    "Eligibility: migraine, smoking, BP, BMI, VTE, medicines.",
    "Write a plan another clinician could reconstruct.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4);
  const items = ["Goal", "Timeline", "Eligibility", "Plan"];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <ol className="diag-check">
        {items.map((item, index) => (
          <li key={item} className={index <= step ? "done" : ""}><i />{item}</li>
        ))}
      </ol>
    </Stage>
  );
}

function Ukmec() {
  const captions = [
    "1 — that condition does not restrict the method.",
    "2 — advantages generally outweigh risks. Usually offer.",
    "3 — risks usually outweigh advantages. Expert judgement if used.",
    "4 — unacceptable health risk. Do not prescribe.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2300);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-orbs">
        {[1, 2, 3, 4].map((n, index) => (
          <button key={n} type="button" className={`orb o${n} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{n}</button>
        ))}
      </div>
    </Stage>
  );
}

function StartCal() {
  const captions = [
    "Days 1–5 of a natural cycle: standard EE CHC is immediate.",
    "Any other day, if not pregnant: extra cover for 7 days.",
    "Amenorrhoeic: start any time if not pregnant — still 7 days cover.",
    "Do not invent one universal 7-day rule for every product.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2200);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-cal">
        {Array.from({ length: 14 }, (_, day) => (
          <i key={day} className={`${day < 5 ? "mint" : "amber"} ${step === 0 && day < 5 ? "on" : ""} ${step === 1 && day >= 5 ? "on" : ""}`}>{day + 1}</i>
        ))}
      </div>
    </Stage>
  );
}

function Postpartum() {
  const captions = [
    "Day 21 if not breastfeeding and no extra VTE risk: CHC can start.",
    "After day 21, treat as cycling or amenorrhoeic.",
    "Breastfeeding under 6 weeks is UKMEC 4 for CHC. Do not start.",
    "A POP is a different method from combined hormones.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-post">
        <div className={`post-mark ${step === 0 ? "on" : ""}`}>Day 21</div>
        <div className="post-line"><i style={{ width: step === 0 ? "30%" : step === 2 ? "18%" : "55%" }} /></div>
        <div className={`post-stop ${step === 2 ? "on" : ""}`}>Under 6 weeks feeding = do not start CHC</div>
      </div>
    </Stage>
  );
}

function Hfi() {
  const captions = [
    "Standard 21/7: follicles can begin to grow in the 7-day break.",
    "Shortened or tricycle use can cut withdrawal symptoms.",
    "Flexible extended: at least 21 active days, then a 4-day break if needed.",
    "Do not give a POP a homemade CHC holiday because of spotting.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  const gap = step === 0 ? 7 : step === 2 ? 4 : step === 1 ? 4 : 0;
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-hfi">
        <div className="hfi-pills">{Array.from({ length: 21 }, (_, i) => <i key={i} />)}</div>
        <div className={`hfi-gap g${gap}`}>{gap ? `${gap}-day HFI` : "No HFI"}</div>
      </div>
    </Stage>
  );
}

function Clocks() {
  const captions = [
    "Traditional POP is missed if more than 3 hours late.",
    "Desogestrel is missed if more than 12 hours late.",
    "A missed DRSP active tablet is more than 24 hours late.",
    "Then use that method’s recovery rule — not another pill’s.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2300);
  const faces = [
    { label: "3 hours", cls: "c3" },
    { label: "12 hours", cls: "c12" },
    { label: "24 hours", cls: "c24" },
  ];
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-clocks">
        {faces.map((face, index) => (
          <button key={face.label} type="button" className={`clock ${face.cls} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>
            <span className="hand" />
            <b>{face.label}</b>
          </button>
        ))}
      </div>
    </Stage>
  );
}

function Switch() {
  const captions = [
    "Is the previous method still effective?",
    "Could sperm from recent sex still matter?",
    "How long until the new method works?",
    "Write the last old dose, first new dose, and backup end date.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2200);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-switch">
        <div className={`sw-old ${step < 2 ? "on" : ""}`}>Old method</div>
        <span className={`sw-arrow ${step >= 2 ? "on" : ""}`} />
        <div className={`sw-new ${step >= 2 ? "on" : ""}`}>New method</div>
      </div>
    </Stage>
  );
}

function Liver() {
  const captions = [
    "Enzyme induction needs a method that induction does not weaken.",
    "A patch or ring is still CHC — not a workaround for rifampicin.",
    "Lamotrigine is often the contraceptive changing the other drug.",
    "Most ordinary antibiotics are not enzyme inducers.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-liver">
        <div className={`pill-fade ${step === 0 || step === 1 ? "fade" : ""}`}>Pills / patch / ring</div>
        <div className="liver-shape">Liver</div>
        <div className={`safe-glow ${step === 0 ? "on" : ""}`}>Copper IUD · LNG-IUD · DMPA</div>
      </div>
    </Stage>
  );
}

function Ec() {
  const captions = [
    "Copper IUD is the most effective option and can continue as contraception.",
    "Ulipristal: wait 5 days before starting hormones, then extra cover.",
    "After LNG-EC, hormones can usually start immediately, plus extra cover.",
    "Oral EC mainly delays ovulation. It does not undo a fertilisation that has already happened.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2500);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-ec">
        {["Copper IUD", "UPA 30 mg", "LNG 1.5 mg"].map((label, index) => (
          <button key={label} type="button" className={`ec-opt e${index} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
        ))}
      </div>
    </Stage>
  );
}

function Bleed() {
  const captions = [
    "A physiological period usually follows an ovulatory cycle.",
    "A CHC withdrawal bleed does not prove ovulation and is not required.",
    "Breakthrough bleeding is not a reliable measure of efficacy.",
    "Amenorrhoea on hormones does not mean blood is building up.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2300);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-bleed">
        {["Period", "Withdrawal", "Breakthrough", "Amenorrhoea"].map((label, index) => (
          <button key={label} type="button" className={`bleed-cell b${index} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>
            <i />
            <b>{label}</b>
          </button>
        ))}
      </div>
    </Stage>
  );
}

function Flags() {
  const captions = [
    "Calf pain, chest pain or haemoptysis: urgent review, not a brand change.",
    "New migraine or neurological symptoms: stop and reassess estrogen.",
    "A new UKMEC 3 or 4 diagnosis changes the method, not the packet strength.",
    "Diagnose first. Support early nuisance symptoms if they are acceptable.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-flags">
        {["Clot signs", "New aura", "New UKMEC 3/4", "Then the consult"].map((label, index) => (
          <button key={label} type="button" className={`flag-card ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
        ))}
      </div>
    </Stage>
  );
}

function Complex() {
  const captions = [
    "CHC eligibility worsens with BMI and stacked VTE factors.",
    "Current breast cancer is generally UKMEC 4 for hormonal methods too.",
    "Move away from CHC at 50. POP can generally continue to 55.",
    "HRT is not contraception.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-complex">
        {["BMI / surgery", "Cancer / liver", "Age 50", "HRT ≠ contraception"].map((label, index) => (
          <button key={label} type="button" className={`cx ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
        ))}
      </div>
    </Stage>
  );
}

function Cases() {
  const captions = [
    "Aura during CHC is category 4. Dose reduction does not fix the class.",
    "Acne benefit does not cancel age-and-smoking arterial risk.",
    "Rifampicin is enzyme induction. A ring is still CHC.",
    "Write the transition: last old dose, first new dose, backup, EC, test.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2500);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-cases">
        {["Aura trap", "Smoking trap", "Induction trap", "Write the switch"].map((label, index) => (
          <button key={label} type="button" className={`case-tab ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
        ))}
      </div>
    </Stage>
  );
}

function Self() {
  const captions = [
    "Why is traditional POP less late-tolerant than DSG?",
    "Why is a monthly withdrawal bleed not required?",
    "Do not add UKMEC numbers together.",
    "A safe record shows eligibility, start logic, backup dates and review.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2600);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-self">
        {["A", "B", "C", "D"].map((letter, index) => (
          <i key={letter} className={step === index ? "on" : ""}>{letter}</i>
        ))}
      </div>
    </Stage>
  );
}

function Record() {
  const captions = [
    "Why this method: safety, effectiveness, acceptability.",
    "How it starts: first-dose date and backup end date.",
    "EC and a 21-day test if pregnancy cannot be excluded.",
    "What if they are sick, miss a pill, or start a new medicine.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2300);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-record">
        {["Why", "Start", "EC / test", "Safety-net"].map((label, index) => (
          <div key={label} className={`rec-line ${index <= step ? "on" : ""}`}>{label}</div>
        ))}
      </div>
    </Stage>
  );
}

function Books() {
  const captions = [
    "FSRH CHC, amended October 2023.",
    "FSRH POP, amended April 2026.",
    "UKMEC 2025 is the eligibility edition.",
    "A 2026 amendment date does not create a “UKMEC 2026”.",
  ];
  const { step, setStep, paused, setPaused } = useLectureStep(4, 2400);
  return (
    <Stage captions={captions} step={step} setStep={setStep} paused={paused} setPaused={setPaused}>
      <div className="diag-books">
        {["CHC 2023", "POP 2026", "UKMEC 2025", "Not UKMEC 2026"].map((label, index) => (
          <button key={label} type="button" className={`book b${index} ${step === index ? "on" : ""}`} onClick={() => { setPaused(true); setStep(index); }}>{label}</button>
        ))}
      </div>
    </Stage>
  );
}

const diagrams: Record<DiagramId, () => JSX.Element> = {
  decisions: Decisions,
  axis: Axis,
  packs: Packs,
  estrogen: Estrogen,
  vte: Vte,
  patchring: PatchRing,
  consult: Consult,
  ukmec: Ukmec,
  startcal: StartCal,
  postpartum: Postpartum,
  hfi: Hfi,
  clocks: Clocks,
  switch: Switch,
  liver: Liver,
  ec: Ec,
  bleed: Bleed,
  flags: Flags,
  complex: Complex,
  cases: Cases,
  self: Self,
  record: Record,
  books: Books,
};

export function LectureHero({ scene, diagram, title }: { scene: string; diagram: DiagramId; title: string }) {
  const View = diagrams[diagram];
  return (
    <div className="lecture-hero">
      <figure className="lecture-scene">
        <img src={scene} alt="" />
        <figcaption>Lecture illustration · {title}</figcaption>
      </figure>
      <View />
    </div>
  );
}
