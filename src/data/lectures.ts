export type DiagramId =
  | "decisions"
  | "axis"
  | "packs"
  | "estrogen"
  | "vte"
  | "patchring"
  | "consult"
  | "ukmec"
  | "startcal"
  | "postpartum"
  | "hfi"
  | "clocks"
  | "switch"
  | "liver"
  | "ec"
  | "bleed"
  | "flags"
  | "complex"
  | "cases"
  | "self"
  | "record"
  | "books";

export const lessonLectures: Record<string, { scene: string; diagram: DiagramId }> = {
  "How to think like a contraceptive prescriber": { scene: "/lecture/scene-decisions.png", diagram: "decisions" },
  "Reproductive anatomy and normal physiology": { scene: "/lecture/scene-axis.png", diagram: "axis" },
  "Pharmacology: how the methods work": { scene: "/lecture/scene-mechanisms.png", diagram: "packs" },
  "Why formulations evolved": { scene: "/lecture/scene-formulations.png", diagram: "estrogen" },
  "Benefits, harms and risk communication": { scene: "/lecture/scene-vte.png", diagram: "vte" },
  "Reading a formulation and choosing a product": { scene: "/lecture/scene-patch-ring.png", diagram: "patchring" },
  "The initial consultation": { scene: "/lecture/scene-consult.png", diagram: "consult" },
  "UKMEC: applying eligibility correctly": { scene: "/lecture/scene-ukmec.png", diagram: "ukmec" },
  "Pregnancy assessment and initiation": { scene: "/lecture/scene-start.png", diagram: "startcal" },
  "Postpartum, breastfeeding and changing circumstances": { scene: "/lecture/scene-postpartum.png", diagram: "postpartum" },
  "Regimens and the hormone-free interval": { scene: "/lecture/scene-hfi.png", diagram: "hfi" },
  "Missed pills, vomiting and diarrhoea": { scene: "/lecture/scene-missed.png", diagram: "clocks" },
  "Switching methods without a contraceptive gap": { scene: "/lecture/scene-switch.png", diagram: "switch" },
  "Drug interactions: mechanisms and practical decisions": { scene: "/lecture/scene-interact.png", diagram: "liver" },
  "Emergency contraception and restarting": { scene: "/lecture/scene-ec.png", diagram: "ec" },
  "Unscheduled bleeding: investigate before escalating": { scene: "/lecture/scene-bleeding.png", diagram: "bleed" },
  "Other adverse effects: structured management": { scene: "/lecture/scene-adverse.png", diagram: "flags" },
  "Complex patients, review and stopping": { scene: "/lecture/scene-complex.png", diagram: "complex" },
  "Worked clinical cases": { scene: "/lecture/scene-cases.png", diagram: "cases" },
  "Self-assessment with explained answers": { scene: "/lecture/scene-self.png", diagram: "self" },
  "Consultation templates and glossary": { scene: "/lecture/scene-record.png", diagram: "record" },
  "Sources, version control and further reading": { scene: "/lecture/scene-sources.png", diagram: "books" },
};
