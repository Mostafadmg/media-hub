export type ChipTone = "none" | "seven" | "wait";

export type BoardRow = { label: string; chip: string; tone: ChipTone };
export type BoardStep = { title: string; text: string; ghost?: boolean };
export type BoardCard = {
  letter?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  tone?: "mint" | "lilac" | "peach" | "sky";
  rows?: BoardRow[];
  points?: string[];
  steps?: BoardStep[];
  warn?: string;
};

export type TeachSlide = {
  id: string;
  kicker?: string;
  title: string;
  lede?: string;
  takeaway: string;
  source?: string;
  legend?: boolean;
  cards: BoardCard[];
};

const I = {
  cal: "/guide/icon-calendar-cycle.png",
  uterus: "/guide/icon-uterus.png",
  chc: "/guide/icon-chc-methods.png",
  pop: "/guide/icon-pop-pack.png",
  inj: "/guide/icon-injection.png",
  implant: "/guide/icon-implant.png",
  cu: "/guide/icon-copper-iud.png",
  lng: "/guide/icon-lng-iud.png",
  upa: "/guide/icon-upa-tablet.png",
  white: "/guide/icon-white-tablet.png",
  post: "/guide/icon-postpartum.png",
  patch: "/guide/icon-patch.png",
  ring: "/guide/icon-ring.png",
};

export const slides: Record<string, TeachSlide> = {
  "four-decisions": {
    id: "four-decisions",
    kicker: "Every prescription",
    title: "Four decisions, kept separate",
    lede: "A prescription is the end of several assessments. None of these questions answers all of the others.",
    takeaway: "Safe, effective, covering today’s pregnancy risk, and acceptable enough to use — check each one.",
    cards: [
      { letter: "A", title: "Safety", subtitle: "Can this person use this hormonal method without an unacceptable health risk?", icon: I.uterus, tone: "mint", points: ["UKMEC answers this question", "It is not a brand recommendation"] },
      { letter: "B", title: "Effectiveness", subtitle: "Will it work given medicines, absorption, adherence and circumstances?", icon: I.pop, tone: "sky", points: ["Enzyme induction can make a “safe” POP a poor contraceptive", "A late pack start can fail a medically suitable COC"] },
      { letter: "C", title: "Pregnancy today", subtitle: "Is there already a possible pregnancy, a need for EC, or a gap before the new method works?", icon: I.cal, tone: "peach", points: ["A negative test is time-dependent", "Quick start still needs a follow-up test after UPSI"] },
      { letter: "D", title: "Acceptability", subtitle: "Does it fit their priorities well enough that they are likely to use it?", icon: I.chc, tone: "lilac", points: ["Bleeding pattern, privacy, daily memory", "An effective method can still be the wrong choice"] },
    ],
  },
  "recommendation-types": {
    id: "recommendation-types",
    kicker: "How confident are you?",
    title: "Three types of recommendation",
    lede: "This distinction matters for consent, documentation and how you present an expected benefit.",
    takeaway: "Say whether something is established guidance, off-label but guideline-supported, or limited-evidence practice.",
    cards: [
      { letter: "A", title: "Established guidance", tone: "mint", subtitle: "Supported by the relevant guideline or product instructions.", points: ["Missed-pill algorithms", "UKMEC categories", "Product-specific start rules"] },
      { letter: "B", title: "Guideline-supported off-label", tone: "sky", subtitle: "A recognised approach that differs from the licence.", points: ["Tailored monophasic 21/7 CHC regimens", "Some EC timing and restart sequences"] },
      { letter: "C", title: "Limited-evidence practice", tone: "peach", subtitle: "Tried clinically, but not a reliable universal sequence.", points: ["Doubling DSG to 150 µg for bleeding", "Do not present this as a licensed regimen"] },
    ],
  },
  "bleeding-events": {
    id: "bleeding-events",
    kicker: "Physiology",
    title: "Bleeding is not one event",
    lede: "The same word “period” can mean four different things. Teach the cause, then what it tells you.",
    takeaway: "A CHC withdrawal bleed does not prove ovulation and is not medically required.",
    cards: [
      { letter: "A", title: "Physiological menstruation", icon: I.cal, tone: "peach", subtitle: "Steroid withdrawal after the corpus luteum regresses.", points: ["Usually follows an ovulatory cycle", "Abnormal or anovulatory bleeding also occurs"] },
      { letter: "B", title: "CHC withdrawal bleed", icon: I.chc, tone: "mint", subtitle: "Planned withdrawal of exogenous hormones.", points: ["Does not prove natural ovulation", "Not required for endometrial “cleansing”"] },
      { letter: "C", title: "Breakthrough bleeding", icon: I.uterus, tone: "lilac", subtitle: "Endometrial instability during active hormones, or another cause.", points: ["Not a reliable measure of efficacy", "Needs contextual assessment"] },
      { letter: "D", title: "Amenorrhoea on hormones", icon: I.uterus, tone: "sky", subtitle: "Limited proliferation and/or altered ovarian activity.", points: ["Often expected", "Does not mean retained blood is building up"] },
    ],
  },
  "four-methods": {
    id: "four-methods",
    kicker: "Pharmacology",
    title: "Four oral methods, four windows",
    lede: "They are not interchangeable “mini-pills”. Mechanism explains the lateness rule and the recovery interval.",
    legend: true,
    takeaway: "Traditional POP is mucus-led and 3 hours late. DSG is 12 hours. DRSP active tablets are 24 hours, then 7 days to recover.",
    cards: [
      { letter: "A", title: "Traditional POP", icon: I.pop, tone: "peach", subtitle: "NET 350 µg or LNG 30 µg. Mucus is the principal action.", rows: [{ label: "Lateness window", chip: "3 hours", tone: "seven" }, { label: "Backup after a miss", chip: "48 hours", tone: "seven" }] },
      { letter: "B", title: "Desogestrel POP", icon: I.pop, tone: "sky", subtitle: "75 µg. Ovulation inhibition is much more consistent.", rows: [{ label: "Lateness window", chip: "12 hours", tone: "none" }, { label: "Backup after a miss", chip: "48 hours", tone: "seven" }] },
      { letter: "C", title: "Drospirenone POP", icon: I.pop, tone: "mint", subtitle: "Slynd 4 mg. 24 active + 4 placebo. Watch potassium.", rows: [{ label: "Lateness window", chip: "24 hours", tone: "none" }, { label: "Backup after a miss", chip: "7 active days", tone: "seven" }] },
      { letter: "D", title: "CHC / COC", icon: I.chc, tone: "lilac", subtitle: "Estrogen plus progestogen. Principal action: ovulation suppression.", rows: [{ label: "Standard EE miss", chip: "Often 24 hours", tone: "seven" }, { label: "Backup after ≥48 h lapse", chip: "7 active days", tone: "seven" }] },
    ],
  },
  "estrogen-types": {
    id: "estrogen-types",
    kicker: "Formulations",
    title: "The estrogen is not a marketing slogan",
    lede: "Milligrams of estradiol valerate cannot be compared with micrograms of ethinylestradiol. “Bio-identical” does not remove CHC contraindications.",
    takeaway: "Choose by the whole product and the patient, not by generation or the word natural.",
    cards: [
      { letter: "A", title: "Ethinylestradiol", tone: "peach", subtitle: "Most established COCs. Potent oral estrogen with important hepatic effects.", points: ["20 µg may reduce estrogen symptoms but can give more spotting than 30 µg", "EE/LNG or EE/NET is a reasonable first CHC"] },
      { letter: "B", title: "Estradiol-based", tone: "sky", subtitle: "Qlaira (E2V), Zoely (E2), Drovelis (E4).", points: ["Phase-specific instructions matter", "Different biomarkers do not prove lower clinical VTE risk"] },
      { letter: "C", title: "Generation trap", tone: "lilac", subtitle: "Generations are historical labels, not a safety ladder.", points: ["Norgestimate VTE risk sits with LNG/NET, not automatically with DSG", "Do not transfer EE/DSG VTE estimates to the DSG-only pill"] },
    ],
  },
  "vte-talk": {
    id: "vte-talk",
    kicker: "Risk communication",
    title: "VTE in numbers you can say out loud",
    lede: "Per 10,000 women per year. These are not personalised estimates for someone with multiple major risk factors.",
    takeaway: "A change from about 6 to about 10 per 10,000 is four extra cases per 10,000 users per year — more useful than saying only “higher”.",
    cards: [
      { letter: "A", title: "No CHC, not pregnant", tone: "mint", subtitle: "About 2 events per 10,000 per year.", points: ["Baseline, not zero", "Pregnancy itself has a higher VTE risk"] },
      { letter: "B", title: "EE + LNG, NET or norgestimate", tone: "sky", subtitle: "About 5–7 per 10,000 per year.", points: ["Reasonable first combined option when eligible", "Still CHC — contraindications remain"] },
      { letter: "C", title: "EE + DSG, gestodene or DRSP", tone: "peach", subtitle: "About 9–12 per 10,000 per year.", points: ["The extra risk is small in absolute terms for a low-baseline patient", "Do not ignore it in someone with additional VTE factors"] },
    ],
  },
  "say-the-risk": {
    id: "say-the-risk",
    kicker: "Counselling",
    title: "Say the number, then the choice",
    lede: "People need a usable picture of clot risk, pregnancy risk, and what else could work — not only the word “small”.",
    takeaway: "Name the extra cases per 10,000, name the contraindications that remain, and name an estrogen-free alternative.",
    cards: [
      { letter: "A", title: "What to say", tone: "mint", points: ["Effective when used correctly, with room for daily mistakes", "May help bleeding", "Estrogen versions carry a small clot risk shaped by their history"] },
      { letter: "B", title: "What not to say", tone: "peach", points: ["“Natural estrogen means no clot risk”", "“Higher” with no denominator", "“We’ll just drop the dose” for a UKMEC 4 condition"] },
    ],
  },
  "patch-ring": {
    id: "patch-ring",
    kicker: "Same hormones, different kit",
    title: "Combined patch and vaginal ring",
    lede: "Both are CHC containing oestrogen + progestogen. Bypassing the gut does not remove estrogen-related thrombotic contraindications.",
    takeaway: "Teach the schedule first — then what to do if use is delayed or the device comes off / comes out.",
    source: "FSRH CHC. Same start and extra-cover rules as combined pills unless the product says otherwise.",
    cards: [
      {
        letter: "A",
        title: "Combined transdermal patch",
        subtitle: "Applied to the skin. Changed once a week for 3 weeks, then 1 patch-free week.",
        icon: I.patch,
        tone: "mint",
        steps: [
          { title: "Week 1", text: "New patch" },
          { title: "Week 2", text: "Change patch" },
          { title: "Week 3", text: "Change patch" },
          { title: "Week 4", text: "Patch-free week", ghost: true },
        ],
        points: ["Applied to the skin", "Then restart with a new patch", "Same CHC eligibility as the pill"],
      },
      {
        letter: "B",
        title: "Combined vaginal ring",
        subtitle: "Inserted into the vagina. Position does not need to be exact.",
        icon: I.ring,
        tone: "sky",
        steps: [
          { title: "Insert", text: "New ring" },
          { title: "Leave in", text: "3 weeks" },
          { title: "Remove", text: "7 days" },
          { title: "Insert", text: "New ring" },
        ],
        points: ["3 weeks in, 7 days out", "Tailored use follows CHC principles on a suitable product", "Still estrogen-containing CHC"],
      },
    ],
  },
  "eight-things": {
    id: "eight-things",
    kicker: "Products",
    title: "Read the formulation, not the brand",
    lede: "“One contraceptive pill daily” is not enough when the pack may contain inactive tablets or several hormone strengths.",
    takeaway: "Identify estrogen, progestogen, phasing, pack calendar, lateness rule and excipients before you counsel.",
    cards: [
      { letter: "A", title: "What is in it?", tone: "mint", points: ["Estrogen present or absent", "Exact estrogen molecule and dose", "Exact progestogen molecule and dose", "Monophasic or multiphasic"] },
      { letter: "B", title: "How is it taken?", tone: "sky", points: ["Number of active and inactive tablets", "Licensed and intended regimen", "Product-specific lateness and missed-pill instructions", "Excipients or allergy issues"] },
    ],
  },
  "consult-map": {
    id: "consult-map",
    kicker: "Consultation",
    title: "Gather what changes the decision",
    lede: "Start with the patient’s goal. Then build a timeline that another clinician could reconstruct.",
    takeaway: "A complete plan names the formulation, start date, backup, EC decision, test date, urgent symptoms and review.",
    cards: [
      { letter: "A", title: "Goal and story", icon: I.cal, tone: "peach", points: ["What they want the method to do", "What the last method did wrong", "Last normal bleed, current product, last active tablet"] },
      { letter: "B", title: "Risk today", icon: I.white, tone: "lilac", points: ["UPSI dates", "EC already used, drug and time", "Vomiting, diarrhoea, extra breaks"] },
      { letter: "C", title: "Eligibility", icon: I.uterus, tone: "mint", points: ["Migraine/aura, smoking, BP, BMI, VTE", "Medicines including St John’s wort", "CHC: document BP and BMI"] },
    ],
  },
  "ukmec-orbs": {
    id: "ukmec-orbs",
    kicker: "UKMEC 2025",
    title: "Categories are not points",
    lede: "Category 3 is not a routine “prescribe with a disclaimer”. Two category 2 conditions do not add up to 4.",
    takeaway: "Use the combined clinical situation and the full clarification — do not invent a score.",
    cards: [
      { letter: "1", title: "No restriction from that condition", tone: "mint", subtitle: "Continue the rest of the assessment.", rows: [{ label: "Action", chip: "Offer if otherwise suitable", tone: "none" }] },
      { letter: "2", title: "Advantages generally outweigh risks", tone: "sky", subtitle: "Usually offer, with counselling.", rows: [{ label: "Action", chip: "Counsel and continue", tone: "none" }] },
      { letter: "3", title: "Risks usually outweigh advantages", tone: "peach", subtitle: "Usually choose another method.", rows: [{ label: "Action", chip: "Expert judgement if used", tone: "seven" }] },
      { letter: "4", title: "Unacceptable health risk", tone: "lilac", subtitle: "Do not use the method.", rows: [{ label: "Action", chip: "Do not prescribe", tone: "wait" }] },
    ],
  },
  "pop-start": {
    id: "pop-start",
    kicker: "Initiation",
    title: "When protection starts — POP versus CHC",
    lede: "Do not invent one universal 7-day rule. It is too strict for some methods and not enough for Qlaira.",
    legend: true,
    takeaway: "Days 1–5 give immediate cover for standard EE COC and traditional/DSG POP. DRSP day 1 only. Qlaira may need 9 days.",
    cards: [
      { letter: "A", title: "Traditional / DSG POP", icon: I.pop, tone: "mint", rows: [{ label: "Days 1–5", chip: "Immediate", tone: "none" }, { label: "Any other start", chip: "48 hours", tone: "seven" }] },
      { letter: "B", title: "Drospirenone POP", icon: I.pop, tone: "sky", rows: [{ label: "Day 1", chip: "Immediate", tone: "none" }, { label: "Any other start", chip: "7 active days", tone: "seven" }] },
      { letter: "C", title: "Standard EE COC", icon: I.chc, tone: "peach", rows: [{ label: "Days 1–5", chip: "Immediate", tone: "none" }, { label: "Any other start", chip: "7 active days", tone: "seven" }] },
      { letter: "D", title: "Qlaira", icon: I.chc, tone: "lilac", rows: [{ label: "Day 1", chip: "Immediate", tone: "none" }, { label: "Outside that timing", chip: "9 days", tone: "wait" }] },
    ],
  },
  "after-pregnancy": {
    id: "after-pregnancy",
    kicker: "CHC start rule",
    title: "After pregnancy or abortion",
    lede: "Postpartum status changes the rule. Timing since birth matters even if CHC was suitable before pregnancy.",
    legend: true,
    takeaway: "Know whether they are cycling, amenorrhoeic, or under 6 weeks postpartum.",
    source: "UKMEC 2025 · FSRH CHC",
    cards: [
      {
        letter: "A",
        title: "Postpartum, not breastfeeding",
        subtitle: "Day 21 if no extra VTE risk. After day 21, treat as cycling or amenorrhoeic.",
        icon: I.post,
        tone: "sky",
        rows: [
          { label: "Day 21 if no extra VTE risk", chip: "No extra cover", tone: "none" },
          { label: "After day 21, cycles returned — by day 5", chip: "No extra cover", tone: "none" },
          { label: "After day 21, cycles returned — after day 5", chip: "Yes, 7 days", tone: "seven" },
          { label: "After day 21, still amenorrhoeic", chip: "Yes, 7 days", tone: "seven" },
        ],
      },
      {
        letter: "B",
        title: "After abortion",
        subtitle: "First or second trimester. By day 5, or later if not pregnant.",
        icon: I.cal,
        tone: "lilac",
        rows: [
          { label: "Up to and including day 5", chip: "No extra cover", tone: "none" },
          { label: "Any other time if reasonably certain she is not pregnant", chip: "Yes, 7 days", tone: "seven" },
        ],
        warn: "Breastfeeding under 6 weeks postpartum = UKMEC 4 for CHC. Do not start.",
      },
    ],
  },
  "hfi-regimens": {
    id: "hfi-regimens",
    kicker: "Regimens",
    title: "The bleed is optional. The HFI is not harmless.",
    lede: "During the hormone-free interval, suppression becomes less complete. Tailored use is for suitable monophasic 21/7 CHC, generally off-label.",
    takeaway: "Do not take a break whenever spotting begins, and do not turn a POP into a 21/7 schedule.",
    cards: [
      { letter: "A", title: "Standard 21/7", tone: "sky", subtitle: "21 active days, 7-day HFI.", points: ["Start the next pack on time even if still bleeding", "Follicles can begin to grow in the break"] },
      { letter: "B", title: "Shortened / tricycle / continuous", tone: "mint", subtitle: "4-day HFI, 63 active days, or no scheduled break.", points: ["Can reduce withdrawal symptoms", "Spotting can be more common at first"] },
      { letter: "C", title: "Flexible extended", tone: "peach", subtitle: "At least 21 active days, then a 4-day break if bleeding is troublesome.", points: ["Restart on day 5", "Then at least 21 active days before another break"] },
    ],
  },
  "missed-map": {
    id: "missed-map",
    kicker: "Missed pills",
    title: "Start with the product and the clock",
    lede: "“I missed yesterday’s pill” is not precise enough. Lateness and hours since the last dose are different questions.",
    legend: true,
    takeaway: "Traditional POP: more than 3 hours late. DSG: 12. DRSP active: 24. Then use that method’s recovery rule, not another pill’s.",
    cards: [
      { letter: "A", title: "Traditional POP", icon: I.pop, tone: "peach", rows: [{ label: "Missed if more than", chip: "3 hours late", tone: "wait" }, { label: "Since last correct dose", chip: "> 27 hours", tone: "seven" }, { label: "Then", chip: "48 hours backup", tone: "seven" }] },
      { letter: "B", title: "DSG POP", icon: I.pop, tone: "sky", rows: [{ label: "Missed if more than", chip: "12 hours late", tone: "seven" }, { label: "Since last correct dose", chip: "> 36 hours", tone: "seven" }, { label: "Then", chip: "48 hours backup", tone: "seven" }] },
      { letter: "C", title: "DRSP POP", icon: I.pop, tone: "mint", rows: [{ label: "Missed active tablet", chip: "24 hours late", tone: "none" }, { label: "Then", chip: "7 active days", tone: "seven" }, { label: "Days 18–24 miss", chip: "Skip placebos", tone: "wait" }] },
    ],
  },
  "switch-questions": {
    id: "switch-questions",
    kicker: "Switching",
    title: "Three questions behind every switch",
    lede: "A switch is not simply a new prescription. Do not infer protection from bleeding or amenorrhoea.",
    takeaway: "Is the old method still working, could sperm from recent sex still matter, and how long does the new method take to work?",
    cards: [
      { letter: "A", title: "Is the previous method still effective?", icon: I.chc, tone: "mint", points: ["In date, used correctly", "No interacting medicine or absorption problem"] },
      { letter: "B", title: "Could sperm still be viable?", icon: I.cal, tone: "peach", points: ["Intercourse before IUD removal", "Sex in an extended HFI"] },
      { letter: "C", title: "How long until the new method works?", icon: I.pop, tone: "sky", points: ["Immediate, 48 hours, 7 days, or 9 days", "Write the backup end date"] },
    ],
  },
  "interaction-map": {
    id: "interaction-map",
    kicker: "Interactions",
    title: "Four different interaction problems",
    lede: "Do not give the same advice for every “interaction”. The mechanism decides the plan.",
    takeaway: "Enzyme induction needs an unaffected method. Lamotrigine is often the contraceptive changing the other drug. Most ordinary antibiotics do not.",
    cards: [
      { letter: "A", title: "Enzyme induction", tone: "peach", subtitle: "Rifampicin, carbamazepine, St John’s wort and others.", points: ["Offer copper IUD, LNG-IUD or DMPA where suitable", "Precautions often continue 28 days after stopping"] },
      { letter: "B", title: "Lamotrigine", tone: "lilac", subtitle: "Estrogen can lower lamotrigine.", points: ["Starting or stopping CHC needs specialist coordination", "An HFI can raise lamotrigine again"] },
      { letter: "C", title: "Antibiotics", tone: "mint", subtitle: "Most non-inducing antibiotics do not need extra contraception.", points: ["Ask: is it rifampicin? Is there vomiting or diarrhoea?", "Has illness disrupted adherence?"] },
      { letter: "D", title: "Tirzepatide", tone: "sky", subtitle: "Absorption around initiation and dose increases.", points: ["Non-oral method, or barrier for 4 weeks after starting", "And 4 weeks after each dose increase"] },
    ],
  },
  "ec-options": {
    id: "ec-options",
    kicker: "Emergency contraception",
    title: "Compare the options, then the restart",
    lede: "Oral EC mainly delays ovulation. It does not reliably work after ovulation has already happened.",
    legend: true,
    takeaway: "Copper IUD is most effective. After LNG, hormonal contraception can usually start immediately. After UPA, wait 5 days.",
    cards: [
      { letter: "A", title: "Copper IUD", icon: I.cu, tone: "mint", subtitle: "Usually within 5 days of first UPSI, or within 5 days of earliest estimated ovulation.", rows: [{ label: "Efficacy", chip: "Most effective", tone: "none" }, { label: "Ongoing contraception", chip: "Yes", tone: "none" }] },
      { letter: "B", title: "Ulipristal 30 mg", icon: I.upa, tone: "lilac", subtitle: "Up to 120 hours. Usually the more effective oral option.", rows: [{ label: "Then start hormones", chip: "Wait 5 days", tone: "wait" }, { label: "Then extra cover", chip: "Method-specific", tone: "seven" }] },
      { letter: "C", title: "Levonorgestrel 1.5 mg", icon: I.white, tone: "peach", subtitle: "Licensed within 72 hours. Can permit immediate hormonal restart.", rows: [{ label: "Then start hormones", chip: "Usually immediately", tone: "none" }, { label: "Extra cover", chip: "Until the method works", tone: "seven" }] },
    ],
  },
  "bleeding-path": {
    id: "bleeding-path",
    kicker: "Unscheduled bleeding",
    title: "Investigate before you escalate",
    lede: "Fragile superficial vessels can bleed. That does not prove the dose is too low — and “normal pill effect” can miss pathology.",
    takeaway: "Check pregnancy, errors, infection and the cervix before changing the brand.",
    cards: [
      { letter: "1", title: "Safety and pattern", tone: "peach", points: ["Pregnancy and efficacy errors", "Onset, volume, postcoital bleeding, pain"] },
      { letter: "2", title: "Cause", tone: "sky", points: ["STI risk, discharge, screening history", "Structural or endometrial risk factors"] },
      { letter: "3", title: "Then the pill", tone: "mint", points: ["CHC: consider tailored use after 21 active days", "POP: no hormone-free “reset”", "Do not double DSG as a routine licensed fix"] },
    ],
  },
  "adverse-map": {
    id: "adverse-map",
    kicker: "Adverse effects",
    title: "A four-line habit for every symptom",
    lede: "Diagnose first. Do not let a brand change carry the entire treatment burden.",
    takeaway: "Red flags and alternative diagnoses come before “try a different pill”.",
    cards: [
      { letter: "A", title: "First line", tone: "peach", subtitle: "Is this an emergency or another diagnosis?", points: ["Aura, thunderclap headache, a breast lump", "Pregnancy, infection, medicines"] },
      { letter: "B", title: "Second line", tone: "sky", subtitle: "Support and observe if it is early and acceptable.", points: ["Food with the tablet for nausea", "Explain expected early spotting"] },
      { letter: "C", title: "Third line", tone: "mint", subtitle: "A planned formulation or method change, with a review date.", points: ["Lower estrogen may help nausea and worsen bleeding", "DRSP CHC is not a weight-loss medicine"] },
      { letter: "D", title: "Fourth line", tone: "lilac", subtitle: "Refer, treat the condition, keep contraception safe.", points: ["Acne still needs dermatology when severe", "New aura: stop estrogen"] },
    ],
  },
  "complex-map": {
    id: "complex-map",
    kicker: "Complex patients",
    title: "Safety and effectiveness are different questions",
    lede: "Obesity, bariatric surgery, epilepsy, breast cancer and age 50 each change a different part of the decision.",
    takeaway: "Estrogen-free is not automatically appropriate for every estrogen contraindication. Current breast cancer is UKMEC 4 for POP too.",
    cards: [
      { letter: "A", title: "BMI and surgery", icon: I.post, tone: "peach", points: ["CHC eligibility worsens with BMI and combined VTE factors", "Malabsorption can make an oral method unreliable even when UKMEC looks reassuring"] },
      { letter: "B", title: "Breast cancer / liver", icon: I.uterus, tone: "lilac", points: ["Current breast cancer: hormonal methods generally 4", "A copper IUD is often the discussion, with oncology"] },
      { letter: "C", title: "Age 50", icon: I.cal, tone: "mint", points: ["Move away from CHC at 50 toward a safer alternative", "POP can generally continue to 55", "HRT is not contraception"] },
    ],
  },
  "case-method": {
    id: "case-method",
    kicker: "Worked cases",
    title: "How to work a case",
    lede: "Read the scenario for the four decisions, then write a dated plan. The teaching point is the reasoning, not the brand.",
    takeaway: "A safety contraindication beats cycle-control optimisation. Dose reduction cannot convert a UKMEC 4 class into an acceptable method.",
    cards: [
      { letter: "A", title: "Name the problem", tone: "peach", points: ["Aura during CHC is category 4", "Age ≥35 and smoking is not cancelled by acne benefit", "Rifampicin is induction, not “use a ring instead”"] },
      { letter: "B", title: "Write the transition", tone: "mint", points: ["Last old dose, first new dose", "Backup end date, EC, pregnancy-test date", "What to do if they are sick tomorrow"] },
    ],
  },
  "self-themes": {
    id: "self-themes",
    kicker: "Self-assessment",
    title: "If you can explain these, you can prescribe more safely",
    lede: "These are reasoning questions, not trivia.",
    takeaway: "A safe record shows eligibility, pregnancy exclusion or quick-start logic, the exact regimen, backup dates and review.",
    cards: [
      { letter: "A", title: "Windows and bleeds", tone: "sky", points: ["Why traditional POP is less late-tolerant than DSG", "Why a monthly withdrawal bleed is not required"] },
      { letter: "B", title: "Rules you must not invent", tone: "peach", points: ["Do not add UKMEC numbers", "Do not give a POP a 4-day spotting break", "Natural estrogen is not “no clot risk”"] },
    ],
  },
  "record-check": {
    id: "record-check",
    kicker: "Templates",
    title: "What a safe record demonstrates",
    lede: "Another clinician should be able to reconstruct why this method, this start date, and this backup.",
    takeaway: "If you cannot explain eligibility, effectiveness, pregnancy risk, the regimen, missed-dose advice and review — do not sign yet.",
    cards: [
      { letter: "1", title: "Why this method", tone: "mint", points: ["UKMEC and other conditions", "Why it should work in this person’s real life", "Why it fits their goal"] },
      { letter: "2", title: "How it starts", tone: "sky", points: ["Pregnancy exclusion or quick-start plan", "First-dose date and backup end date", "EC and 21-day test if needed"] },
      { letter: "3", title: "What if it goes wrong", tone: "peach", points: ["Missed pill, vomiting, a new medicine", "Urgent symptoms and how to get help", "When routine review will happen"] },
    ],
  },
  "source-stack": {
    id: "source-stack",
    kicker: "Sources",
    title: "What this manual is sitting on",
    lede: "Check the live guideline and the dispensed product’s SmPC. This page is teaching, not a protocol.",
    takeaway: "UKMEC 2025 is the UK eligibility edition. A 2026 amendment date does not create a “UKMEC 2026”.",
    cards: [
      { letter: "A", title: "Core", tone: "mint", points: ["FSRH CHC, amended Oct 2023", "FSRH POP, amended Apr 2026", "UKMEC 2025"] },
      { letter: "B", title: "Also in the room", tone: "sky", points: ["FSRH EC, amended Apr 2026", "Current SmPC for the brand in the box", "BNF at the point of prescribing"] },
    ],
  },
  "axis-map": {
    id: "axis-map",
    kicker: "Physiology",
    title: "Brain to uterus in four steps",
    lede: "Hormonal contraception works by changing this axis. Teach the chain, then the bleed.",
    takeaway: "Reduce gonadotrophin drive and you change both the ovary and the endometrium.",
    cards: [
      { letter: "A", title: "Brain", tone: "peach", subtitle: "GnRH pulses set the pace.", icon: I.cal, points: ["Pulse frequency matters", "This is upstream of the pill’s main effect"] },
      { letter: "B", title: "Pituitary", tone: "sky", subtitle: "FSH and LH.", icon: I.chc, points: ["FSH supports follicular recruitment", "LH is needed for the ovulatory surge"] },
      { letter: "C", title: "Ovary", tone: "mint", subtitle: "Estradiol and the oocyte.", icon: I.uterus, points: ["Theca androgens, granulosa aromatase", "Less gonadotrophin drive can mean less ovarian androgen"] },
      { letter: "D", title: "Uterus and cervix", tone: "lilac", subtitle: "Lining and mucus.", icon: I.pop, points: ["Mucus can block sperm even if ovulation is not fully suppressed", "A withdrawal bleed is not a natural period"] },
    ],
  },
  "mucus-vs-ovulation": {
    id: "mucus-vs-ovulation",
    kicker: "Mechanism",
    title: "Mucus-led is not ovulation-sure",
    lede: "The lateness window follows the main mechanism. Do not copy a CHC missed-pill story onto a traditional POP.",
    takeaway: "Traditional POP is mucus-led. DSG, DRSP and CHC rely much more on stopping ovulation.",
    cards: [
      { letter: "A", title: "Traditional POP", icon: I.pop, tone: "peach", subtitle: "Mucus is the principal action.", points: ["Ovulation is not reliably stopped", "3-hour window because mucus needs recent hormone"] },
      { letter: "B", title: "DSG / DRSP / CHC", icon: I.chc, tone: "mint", subtitle: "Ovulation inhibition is the main story.", points: ["DSG 12 hours, DRSP active 24 hours", "Standard EE CHC recovery is usually 7 active days"] },
    ],
  },
  "first-chc": {
    id: "first-chc",
    kicker: "Choosing",
    title: "A reasonable first combined pill",
    lede: "When CHC is suitable, start with a familiar, lower-VTE-estimate option unless there is a clear reason not to.",
    takeaway: "EE ≤30 µg with LNG or NET is a reasonable first CHC. “Natural estrogen” does not cancel UKMEC.",
    cards: [
      { letter: "A", title: "First combined option", icon: I.chc, tone: "mint", subtitle: "EE with LNG or norethisterone.", points: ["Often EE 30 µg / LNG 150 µg", "Explain standard and tailored regimens before switching brand"] },
      { letter: "B", title: "Not a shortcut", icon: I.white, tone: "peach", subtitle: "Marketing language is not eligibility.", points: ["Estradiol-based products still have CHC contraindications", "Norgestimate VTE risk sits with LNG/NET, not automatically with DSG"] },
    ],
  },
  "complete-plan": {
    id: "complete-plan",
    kicker: "Documentation",
    title: "A complete plan names seven things",
    lede: "If another clinician cannot reconstruct the decision, the record is not finished.",
    takeaway: "Write the formulation, start date, backup, EC decision, test date, urgent symptoms and review.",
    cards: [
      { letter: "A", title: "The method", tone: "mint", points: ["Exact formulation, not just “the pill”", "Why this method for this person"] },
      { letter: "B", title: "The start", tone: "sky", points: ["First-dose date", "Backup end date", "EC and 21-day test if needed"] },
      { letter: "C", title: "The safety net", tone: "peach", points: ["Missed pill, vomiting, a new medicine", "Urgent symptoms and how to get help"] },
    ],
  },
  "common-ukmec": {
    id: "common-ukmec",
    kicker: "UKMEC 2025",
    title: "Four situations that change the room",
    lede: "These are teaching prompts, not a complete eligibility check. Read the clarification.",
    legend: true,
    takeaway: "Aura, current breast cancer, and breastfeeding under 6 weeks are not “try a lower dose”.",
    cards: [
      { letter: "A", title: "Migraine with aura", icon: I.uterus, tone: "lilac", rows: [{ label: "CHC", chip: "UKMEC 4", tone: "wait" }, { label: "Typical action", chip: "Do not use estrogen", tone: "wait" }] },
      { letter: "B", title: "Breastfeeding under 6 weeks", icon: I.post, tone: "peach", rows: [{ label: "CHC", chip: "UKMEC 4", tone: "wait" }, { label: "POP", chip: "Usually usable", tone: "none" }] },
      { letter: "C", title: "Current breast cancer", icon: I.white, tone: "sky", rows: [{ label: "Hormonal methods", chip: "Generally 4", tone: "wait" }, { label: "Often discuss", chip: "Copper IUD", tone: "none" }] },
      { letter: "D", title: "BMI 35 or above", icon: I.chc, tone: "mint", rows: [{ label: "CHC", chip: "UKMEC 3", tone: "seven" }, { label: "Action", chip: "Usually another method", tone: "seven" }] },
    ],
  },
  "start-scratch": {
    id: "start-scratch",
    kicker: "CHC start rule",
    title: "Start from scratch",
    lede: "When starting CHC in someone not already using hormonal contraception.",
    legend: true,
    takeaway: "Day 1–5 is immediate. Any other day needs 7 days.",
    source: "Same start rules apply to the pill, patch and ring unless the product says otherwise.",
    cards: [
      {
        letter: "A",
        title: "Cycling, not pregnant",
        subtitle: "Day 1–5 of the menstrual cycle.",
        icon: I.cal,
        tone: "mint",
        rows: [
          { label: "Day 1–5 of the menstrual cycle", chip: "No extra cover", tone: "none" },
          { label: "Any other time if reasonably certain she is not pregnant", chip: "Yes, 7 days", tone: "seven" },
        ],
      },
      {
        letter: "B",
        title: "Amenorrhoeic (no periods)",
        subtitle: "Start any time if certain not pregnant.",
        icon: I.uterus,
        tone: "lilac",
        rows: [{ label: "Reasonably certain she is not pregnant", chip: "Yes, 7 days", tone: "seven" }],
      },
    ],
  },
  "breastfeeding-rule": {
    id: "breastfeeding-rule",
    kicker: "Postpartum",
    title: "Feeding changes CHC, not the whole toolkit",
    lede: "Estrogen and early lactation are the issue. A POP is a different method.",
    legend: true,
    takeaway: "Breastfeeding under 6 weeks postpartum is UKMEC 4 for CHC. Do not start.",
    cards: [
      { letter: "A", title: "CHC while feeding", icon: I.chc, tone: "peach", rows: [{ label: "Under 6 weeks", chip: "UKMEC 4", tone: "wait" }, { label: "6 weeks to 6 months", chip: "Usually 2", tone: "seven" }] },
      { letter: "B", title: "POP while feeding", icon: I.pop, tone: "mint", rows: [{ label: "Traditional / DSG", chip: "Generally usable", tone: "none" }, { label: "LAM", chip: "Strict criteria only", tone: "seven" }] },
    ],
  },
  "pop-no-break": {
    id: "pop-no-break",
    kicker: "Regimens",
    title: "Do not give a POP a CHC holiday",
    lede: "Spotting on a POP is not a reason to insert a 7-day hormone-free interval.",
    takeaway: "Traditional and DSG POP are continuous. DRSP has a licensed 24+4 pack — that is not a CHC-style HFI you invent.",
    cards: [
      { letter: "A", title: "CHC tailored use", icon: I.chc, tone: "sky", subtitle: "Suitable monophasic 21/7 products.", points: ["Can shorten or skip the HFI", "Still estrogen-containing CHC"] },
      { letter: "B", title: "POP", icon: I.pop, tone: "peach", subtitle: "No homemade 21/7 schedule.", points: ["Do not stop for 4 days because of spotting", "Investigate bleeding rather than “resetting”"] },
    ],
  },
  "vomit-clock": {
    id: "vomit-clock",
    kicker: "Missed pills",
    title: "Vomiting is a timing question",
    lede: "If the tablet may not have been absorbed, treat it as a missed pill for that method — then use that method’s recovery rule.",
    takeaway: "Check the product, the clock, and whether EC is needed. Do not copy another pill’s window.",
    cards: [
      { letter: "A", title: "Oral tablet", icon: I.white, tone: "peach", points: ["Vomiting soon after a dose can mean it was not absorbed", "Diarrhoea is assessed in context — severe, persistent illness matters"] },
      { letter: "B", title: "Then use the method rule", icon: I.pop, tone: "mint", points: ["Traditional POP: 3 hours / 48 hours backup", "DSG: 12 hours / 48 hours", "DRSP or CHC: product-specific recovery, often 7 active days"] },
    ],
  },
  "typical-switch": {
    id: "typical-switch",
    kicker: "Switching",
    title: "If the old method is still working",
    lede: "These are teaching patterns assuming correct use, no interacting medicine, and reasonably certain not pregnant.",
    legend: true,
    takeaway: "Traditional POP is not ovulation-sure. LNG-IUD is not CHC-level suppression at removal.",
    cards: [
      { letter: "A", title: "Other CHC, DSG, implant, injection", icon: I.chc, tone: "mint", rows: [{ label: "Start CHC", chip: "Usually no extra cover", tone: "none" }] },
      { letter: "B", title: "Traditional POP or LNG-IUD", icon: I.lng, tone: "peach", rows: [{ label: "Start CHC", chip: "Yes, 7 days", tone: "seven" }] },
    ],
  },
  "inducer-plan": {
    id: "inducer-plan",
    kicker: "Interactions",
    title: "Enzyme induction is not “use a ring instead”",
    lede: "The patch and ring are still combined hormonal contraception. Induction affects the hormone, not only the gut.",
    takeaway: "Offer a method unaffected by induction. Precautions often continue 28 days after the inducer stops.",
    cards: [
      { letter: "A", title: "Usually offer", icon: I.cu, tone: "mint", points: ["Copper IUD", "LNG-IUD where suitable", "DMPA where suitable"] },
      { letter: "B", title: "Do not invent", icon: I.chc, tone: "peach", points: ["Do not switch pill to patch/ring to “avoid the interaction”", "Most ordinary antibiotics are not inducers"] },
    ],
  },
  "restart-clock": {
    id: "restart-clock",
    kicker: "After EC",
    title: "The restart depends on which EC you used",
    lede: "Oral EC delays ovulation. Starting hormones too soon after ulipristal can make the EC fail.",
    legend: true,
    takeaway: "After LNG, hormones can usually start immediately. After UPA, wait 5 days, then extra cover until the method works.",
    cards: [
      { letter: "A", title: "After LNG-EC", icon: I.white, tone: "mint", rows: [{ label: "Start hormones", chip: "Usually immediately", tone: "none" }, { label: "Then extra cover", chip: "Until the method works", tone: "seven" }] },
      { letter: "B", title: "After UPA", icon: I.upa, tone: "lilac", rows: [{ label: "Start hormones", chip: "Wait 5 days", tone: "wait" }, { label: "Then extra cover", chip: "Method-specific", tone: "seven" }] },
    ],
  },
  "no-reset": {
    id: "no-reset",
    kicker: "Bleeding",
    title: "Do not “reset” the method first",
    lede: "Unscheduled bleeding can be a method effect. It can also be pregnancy, infection, or cervical disease.",
    takeaway: "Check pregnancy, errors, infection and the cervix before you change the brand.",
    cards: [
      { letter: "1", title: "First", tone: "peach", points: ["Pregnancy and missed-pill errors", "Postcoital bleeding, pain, discharge"] },
      { letter: "2", title: "Then the method", tone: "mint", points: ["CHC: tailored use after 21 active days can help", "POP: no hormone-free reset", "Do not double DSG as a licensed routine fix"] },
    ],
  },
  "red-flags": {
    id: "red-flags",
    kicker: "Safety-net",
    title: "Always explain urgent review",
    lede: "A brand change is not the response to a possible clot, new aura, or a breast lump.",
    takeaway: "Calf pain, chest pain, new migraine or a new UKMEC 3/4 diagnosis needs review — not a different packet.",
    cards: [
      { letter: "A", title: "Seek urgent review", icon: I.white, tone: "peach", points: ["Calf pain, chest pain or haemoptysis", "New migraine or neurological symptoms", "A new UKMEC 3 or 4 diagnosis"] },
      { letter: "B", title: "Then the consultation", icon: I.cal, tone: "mint", points: ["Diagnose before switching brand", "Support early nuisance symptoms if they are acceptable", "Plan a review date if you do change formulation"] },
    ],
  },
  "age-fifty": {
    id: "age-fifty",
    kicker: "Stopping",
    title: "Age 50 changes the estrogen conversation",
    lede: "Eligibility, background VTE/stroke risk and the need for contraception all shift. HRT is not contraception.",
    takeaway: "Move away from CHC at 50 toward a safer alternative. POP can generally continue to 55.",
    cards: [
      { letter: "A", title: "CHC at 50", icon: I.chc, tone: "peach", points: ["Generally stop combined methods", "Do not keep CHC because bleeding is convenient"] },
      { letter: "B", title: "POP and HRT", icon: I.pop, tone: "mint", points: ["POP can generally continue to 55", "HRT does not replace contraception", "FSH is not a reliable test while hormones continue"] },
    ],
  },
  "case-traps": {
    id: "case-traps",
    kicker: "Cases",
    title: "Three traps that fail cases",
    lede: "The teaching point is the class of error, not the brand you would have preferred.",
    takeaway: "A safety contraindication beats cycle-control. Dose reduction cannot convert UKMEC 4 into an acceptable method.",
    cards: [
      { letter: "A", title: "Aura on CHC", tone: "lilac", points: ["Stop estrogen", "Category 4 is not “use 20 µg instead”"] },
      { letter: "B", title: "Age, smoking, acne", tone: "peach", points: ["Acne benefit does not cancel CHC arterial risk", "Offer an estrogen-free option"] },
      { letter: "C", title: "Rifampicin", tone: "sky", points: ["This is enzyme induction", "A vaginal ring is still CHC"] },
    ],
  },
  "not-ukmec-2026": {
    id: "not-ukmec-2026",
    kicker: "Version control",
    title: "Name the edition you actually used",
    lede: "FSRH documents are amended on dates. UKMEC has its own edition year.",
    takeaway: "UKMEC 2025 is the eligibility edition in this manual. There is no “UKMEC 2026” to invent.",
    cards: [
      { letter: "A", title: "Write this", tone: "mint", points: ["UKMEC 2025", "FSRH CHC amended Oct 2023", "FSRH POP amended Apr 2026"] },
      { letter: "B", title: "Do not write this", tone: "peach", points: ["“UKMEC 2026”", "A remembered category without the clarification", "A local shortcut that contradicts the guideline"] },
    ],
  },
};

export const lessonBoards: Record<string, string[]> = {
  "How to think like a contraceptive prescriber": ["four-decisions", "recommendation-types"],
  "Reproductive anatomy and normal physiology": ["axis-map", "bleeding-events"],
  "Pharmacology: how the methods work": ["four-methods", "mucus-vs-ovulation"],
  "Why formulations evolved": ["estrogen-types", "first-chc"],
  "Benefits, harms and risk communication": ["vte-talk", "say-the-risk"],
  "Reading a formulation and choosing a product": ["patch-ring", "eight-things", "first-chc"],
  "The initial consultation": ["consult-map", "complete-plan"],
  "UKMEC: applying eligibility correctly": ["ukmec-orbs", "common-ukmec"],
  "Pregnancy assessment and initiation": ["start-scratch", "pop-start"],
  "Postpartum, breastfeeding and changing circumstances": ["after-pregnancy", "breastfeeding-rule"],
  "Regimens and the hormone-free interval": ["hfi-regimens", "pop-no-break"],
  "Missed pills, vomiting and diarrhoea": ["missed-map", "vomit-clock"],
  "Switching methods without a contraceptive gap": ["switch-questions", "typical-switch"],
  "Drug interactions: mechanisms and practical decisions": ["interaction-map", "inducer-plan"],
  "Emergency contraception and restarting": ["ec-options", "restart-clock"],
  "Unscheduled bleeding: investigate before escalating": ["bleeding-path", "no-reset"],
  "Other adverse effects: structured management": ["adverse-map", "red-flags"],
  "Complex patients, review and stopping": ["complex-map", "age-fifty"],
  "Worked clinical cases": ["case-method", "case-traps"],
  "Self-assessment with explained answers": ["self-themes"],
  "Consultation templates and glossary": ["record-check", "complete-plan"],
  "Sources, version control and further reading": ["source-stack", "not-ukmec-2026"],
};
