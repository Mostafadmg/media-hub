export type PillTag = "trad" | "dsg" | "drsp" | "all";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "goals"; items: string[] }
  | { kind: "cards"; items: { title: string; text: string; tone?: PillTag }[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "rule"; title: string; text: string }
  | { kind: "why"; title: string; text: string }
  | { kind: "concept"; title: string; text: string }
  | { kind: "warn"; title: string; text: string }
  | { kind: "note"; title: string; text: string }
  | { kind: "facts"; items: { value: string; label: string }[] }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: { title: string; text: string }[] }
  | { kind: "legend" }
  | { kind: "timeline"; items: { year: string; title: string; text: string; tone?: PillTag }[] }
  | { kind: "packs" }
  | { kind: "windows" }
  | { kind: "quiz"; question: string; options: string[]; answer: number; explain: string }
  | { kind: "src"; text: string };

export type Step = {
  title: string;
  lead: string;
  blocks: Block[];
};

export type Lesson = {
  title: string;
  time: string;
  description: string;
  part: string;
  steps: Step[];
};

export const lessons: Lesson[] = [
  {
    title: "Start here",
    time: "5 min",
    part: "START",
    description: "One module, built from the FSRH progestogen-only pill guideline. It starts with how ovulation works and ends with you running a full pill consultation.",
    steps: [
      {
        title: "What you will be able to do",
        lead: "By the end of this programme you can move from first principles to a safe, auditable consultation.",
        blocks: [
          { kind: "goals", items: [
            "Explain what each of the four UK POPs does in the body, and why that changes the rules for each.",
            "Tell the pills apart by dose, regimen, pack and UK brand.",
            "Decide whether a pill is on time, late or missed, and say exactly what to do next, including when emergency contraception is needed.",
            "Screen who cannot use a pill, and apply the extra drospirenone checks.",
            "Start, switch and stop a pill safely, including after emergency contraception.",
            "Counsel on bleeding, mood, weight, acne and cancer risk with real numbers.",
            "Run a consultation that meets the guideline's minimum checklist, including remote and pharmacy supply.",
          ]},
          { kind: "src", text: "FSRH Clinical Guideline: Progestogen-only Pills, August 2022, amended April 2026." },
        ],
      },
      {
        title: "How to use this module",
        lead: "Each chapter builds on the last, but every chapter stands alone if you need to look something up.",
        blocks: [
          { kind: "legend" },
          { kind: "why", title: "Why boxes", text: "Purple boxes explain the reasoning behind a rule. If you understand the mechanism, you can work the rule out again when you forget it." },
          { kind: "concept", title: "Key idea", text: "Boxes with a dark left edge hold the idea the whole chapter hangs on." },
          { kind: "rule", title: "Rule to know cold", text: "Outlined boxes are the things you must be able to state without looking: windows, start rules, extra precautions and UKMEC 3/4." },
        ],
      },
      {
        title: "What this is, and is not",
        lead: "This is training, not your prescribing protocol and not advice for an individual patient.",
        blocks: [
          { kind: "p", text: "Primary source: FSRH Clinical Guideline Progestogen-only Pills, August 2022, amended April 2026 (updated to UKMEC 2025). Product facts come from SmPCs, the MHRA and NHS SPS listings and can change." },
          { kind: "note", title: "What this is not", text: "It summarises the guideline in its own structure and words. Where the guideline and a product licence (SmPC) disagree, the module says so rather than picking one silently." },
          { kind: "quiz", question: "What should you do when an SmPC and the FSRH guideline disagree?", options: ["Always follow the SmPC silently", "Always follow the guideline silently", "Recognise the difference and discuss it", "Pick whichever is more convenient"], answer: 2, explain: "The module flags disagreements rather than choosing one silently. Use local protocol, the current SmPC and clinical judgement." },
        ],
      },
    ],
  },
  {
    title: "The cycle and the four brakes",
    time: "12 min",
    part: "FOUNDATIONS",
    description: "Everything about how a POP behaves follows from what it does to four things. Learn those four and the rest of the guideline stops looking like a list of arbitrary rules.",
    steps: [
      {
        title: "A cycle in one minute",
        lead: "Contraception works by breaking one or more links in the cycle, or by making the journey from cervix to egg impossible.",
        blocks: [
          { kind: "p", text: "The hypothalamus pulses a signal to the pituitary. The pituitary releases FSH and LH. FSH grows a follicle, and the follicle makes oestradiol. When oestradiol has risen high enough, an LH surge triggers ovulation. The empty follicle becomes the corpus luteum and makes progesterone, which thickens cervical mucus and prepares the endometrium. If there is no pregnancy, progesterone falls and the lining sheds." },
          { kind: "concept", title: "Say “progestogen”", text: "Progesterone is the natural hormone. A progestogen is a synthetic steroid designed to have some of progesterone's properties. Every POP contains a progestogen, never progesterone." },
        ],
      },
      {
        title: "The four brakes",
        lead: "A progestogen can interfere at four points. The pill is only as good as its dose for each job.",
        blocks: [
          { kind: "cards", items: [
            { title: "1. Stop ovulation", text: "An anti-gonadotrophic effect: the progestogen dampens pituitary signals so no egg is released." },
            { title: "2. Make mucus hostile", text: "Less mucus, thicker and more cellular. Sperm cannot get through. About 2 days of pill-taking establishes it; it can fade within 24 hours if pills stop." },
            { title: "3. Thin the endometrium", text: "The lining becomes thinner and less receptive. In a small 13-cycle drospirenone study, mean thickness fell from 8.2 mm to 5.6 mm." },
            { title: "4. Slow the tubes", text: "Reduced ciliary activity and tubal motility slow transport of eggs and sperm." },
          ]},
          { kind: "src", text: "FSRH POP guideline §5 and §11.4." },
        ],
      },
      {
        title: "Which brakes each pill leans on",
        lead: "This table is the reason the missed-pill windows differ.",
        blocks: [
          { kind: "table", headers: ["", "Traditional", "DSG", "DRSP"], rows: [
            ["1 Ovulation", "Not reliably inhibited (~4 in 10 cycles)", "Primary effect", "Primary effect, even with the 4-day interval"],
            ["2 Cervical mucus", "Primary effect", "Additional", "Additional"],
            ["3 Endometrium", "Thinned", "Additional", "Additional"],
            ["4 Tubal motility", "Altered", "Additional", "Additional"],
          ]},
          { kind: "why", title: "Why the windows differ", text: "A traditional pill relies on mucus, which is short-lived unless the next pill arrives on time. DSG and DRSP suppress ovulation, a sustained state: studies found suppression still present when DSG was 12 hours late and DRSP 24 hours late." },
          { kind: "why", title: "Why sex before a missed pill is not the problem", text: "Hostile mucus blocks sperm, and sperm left in the lower tract do not survive more than a few hours. EC is judged on sex after the pill was missed. DRSP is different: sex since the start of the hormone-free interval can matter if pills are then missed on restart." },
          { kind: "quiz", question: "A patient takes a traditional POP. Which effect is she mainly relying on?", options: ["Reliable suppression of ovulation", "Permanent thinning of the endometrium", "Hostile cervical mucus", "Suppression of tubal cilia"], answer: 2, explain: "Traditional POPs do not reliably stop ovulation. Their effectiveness rests on the mucus effect, plus endometrial and tubal effects." },
        ],
      },
    ],
  },
  {
    title: "The four pills",
    time: "14 min",
    part: "FOUNDATIONS",
    description: "Four progestogen-only pills are used in the UK. Learn what separates them and you have most of the guideline's structure.",
    steps: [
      {
        title: "The comparison you will use every day",
        lead: "Dose, regimen, mechanism, window and start rules — this is the table you will reach for in clinic.",
        blocks: [
          { kind: "table", headers: ["", "LNG 30 µg", "NET 350 µg", "DSG 75 µg", "DRSP 4 mg"], rows: [
            ["Regimen", "Continuous", "Continuous", "Continuous", "24 active + 4 placebo"],
            ["Main effect", "Mucus, lining, tubes", "Mucus, lining, tubes", "Ovulation inhibition", "Ovulation inhibition"],
            ["Missed if", ">3 h late (27 h)", ">3 h late", ">12 h late (36 h)", ">24 h late (48 h)"],
            ["After a miss", "Condoms 48 h", "Condoms 48 h", "Condoms 48 h", "Condoms 7 days"],
            ["Immediate start", "Days 1–5", "Days 1–5", "Days 1–5", "Day 1 only"],
          ]},
          { kind: "rule", title: "Age range", text: "All POPs can be used by medically eligible people from menarche to age 55. There is no maximum duration of use. Contraception is not required after 55." },
        ],
      },
      {
        title: "How the packs look",
        lead: "Schematic layouts, not manufacturers' artwork. Never assume a 28-pack means 28 active pills.",
        blocks: [
          { kind: "packs" },
          { kind: "cards", items: [
            { title: "Levonorgestrel 30 µg", text: "Example: Norgeston, a calendar strip of 35 white tablets. Start the next strip the next day.", tone: "trad" },
            { title: "Norethisterone 350 µg", text: "Example: Noriday, blister strips of 28 tablets in cartons of 28 or 84.", tone: "trad" },
            { title: "Desogestrel 75 µg", text: "Example: Hana, 28 white tablets. Continuous, no break between packs.", tone: "dsg" },
            { title: "Drospirenone 4 mg", text: "Example: Slynd, 24 white active tablets then 4 green placebo tablets.", tone: "drsp" },
          ]},
        ],
      },
      {
        title: "How to take them",
        lead: "Same time each day. Never a gap between packs.",
        blocks: [
          { kind: "list", items: [
            "Traditional and DSG: one pill every 24 hours with no hormone-free interval. Start the next pack immediately.",
            "DRSP: 24 white active pills, then 4 green placebo pills, then straight into the next pack.",
            "All POPs: take at about the same time each day.",
          ]},
          { kind: "why", title: "Why does DRSP have 4 placebo days?", text: "The interval is meant to give a more predictable bleed while keeping contraceptive effect. The guideline notes the evidence does not show it necessarily does. Use the licensed 24/4 regimen because there is no evidence for tailored or continuous DRSP." },
          { kind: "concept", title: "Desogestrel is a prodrug", text: "Desogestrel is converted to etonogestrel, the same progestogen released by the implant. That is why DSG and the implant share an ovulation-suppressing profile." },
          { kind: "quiz", question: "Which pill is taken as 24 active tablets plus 4 placebo tablets?", options: ["Desogestrel 75 µg", "Drospirenone 4 mg", "Norethisterone 350 µg", "Levonorgestrel 30 µg"], answer: 1, explain: "Only DRSP has a hormone-free interval. The others are continuous." },
        ],
      },
    ],
  },
  {
    title: "Where each pill came from",
    time: "10 min",
    part: "FOUNDATIONS",
    description: "Each pill was designed to fix a problem with the one before. Knowing the problem, and the trial that showed it was fixed, makes the rules memorable.",
    steps: [
      {
        title: "Timeline",
        lead: "From oestrogen-free compromise to pharmacy-counter access.",
        blocks: [
          { kind: "timeline", items: [
            { year: "1960s", title: "The problem", text: "Concern about oestrogen in combined pills drives development of oestrogen-free pills." },
            { year: "1973", title: "First mini-pill", text: "Norethisterone 0.35 mg is launched. LNG and NET become the “traditional” POPs.", tone: "trad" },
            { year: "1998–05", title: "Desogestrel", text: "Head-to-head RCT vs LNG. The 12-hour missed-pill window follows ovulation-delay studies.", tone: "dsg" },
            { year: "2019–24", title: "Drospirenone", text: "FDA approval 2019. UK launch of Slynd 2024. 24-hour delay studies support a 24-hour window.", tone: "drsp" },
            { year: "2021–26", title: "Access and guideline", text: "Hana and Lovima become Pharmacy medicines. FSRH 2022 includes DRSP; amended to UKMEC 2025 in April 2026." },
          ]},
        ],
      },
      {
        title: "The story in four acts",
        lead: "Purpose first, then the trial that changed practice.",
        blocks: [
          { kind: "cards", items: [
            { title: "Act 1. Traditional POPs", text: "Low-dose and oestrogen-free, but ovulation is not reliably suppressed. That is why the window is 3 hours.", tone: "trad" },
            { title: "Act 2. Desogestrel", text: "Aim: inhibit ovulation more consistently. Ovulation 1.7% of DSG cycles vs 28% of LNG cycles; still suppressed after 12-hour delays.", tone: "dsg" },
            { title: "Act 3. Drospirenone", text: "Ovulation suppression like DSG, with a 24/4 regimen and a new safety issue: potassium.", tone: "drsp" },
            { title: "Act 4. Access", text: "In 2021, Hana and Lovima became the first oral contraceptive pills available from UK pharmacies without prescription." },
          ]},
        ],
      },
      {
        title: "Reading the evidence",
        lead: "A lower Pearl Index is not automatically a proven effectiveness difference.",
        blocks: [
          { kind: "concept", title: "Read the trial, not the headline", text: "In the 1998 DSG vs LNG RCT, Pearl Indices were 0.17 and 1.41, but the difference was not statistically significant. Studies also differ in whether pregnancies just after stopping count as method failures." },
          { kind: "quiz", question: "Which finding best explains why DSG has a 12-hour missed-pill window?", options: ["Ovulation stayed suppressed when DSG tablets were taken 12 hours late", "DSG halves the Pearl Index", "DSG thickens mucus for 12 hours", "A regulator required it"], answer: 0, explain: "A pharmacodynamic study found ovulation still suppressed when DSG was taken 12 hours late." },
        ],
      },
    ],
  },
  {
    title: "UK products and brands",
    time: "10 min",
    part: "FOUNDATIONS",
    description: "Match common UK brands to pill type, legal status and supply limits. Spot where an SmPC differs from FSRH advice.",
    steps: [
      {
        title: "Brand map",
        lead: "Learn the names you will hear on the phone and see on the pack.",
        blocks: [
          { kind: "cards", items: [
            { title: "Traditional LNG", text: "Norgeston. Calendar strip of 35 tablets.", tone: "trad" },
            { title: "Traditional NET", text: "Noriday. 28-tablet blister strips.", tone: "trad" },
            { title: "Desogestrel 75 µg", text: "Cerazette, Cerelle (POM). Hana and Lovima (Pharmacy medicines).", tone: "dsg" },
            { title: "Drospirenone 4 mg", text: "Slynd. 24 white “E/D” active tablets and 4 green “E/4” placebos.", tone: "drsp" },
          ]},
          { kind: "quiz", question: "Which pair are Pharmacy medicines?", options: ["Cerazette and Cerelle", "Slynd and Norgeston", "Noriday and Hana", "Hana and Lovima"], answer: 3, explain: "Hana and Lovima are P medicines supplied under pharmacist supervision. They are not on the General Sales List." },
        ],
      },
      {
        title: "What the pack tells you",
        lead: "Excipients, tablet identity, regimen and legal status.",
        blocks: [
          { kind: "cards", items: [
            { title: "Excipients", text: "Check for lactose and soya. Some DSG preparations contain soya and may cross-react in people with peanut allergy." },
            { title: "Tablet identity", text: "Slynd active tablets are white with “E” and “D”; placebos are green with “E” and “4”." },
            { title: "Regimen", text: "Continuous 28 or 35 pills, or 24 + 4. Never assume a “28 pack” means 28 active pills." },
            { title: "Legal status", text: "POM needs a prescriber. Hana and Lovima are P medicines. They are not on the General Sales List." },
          ]},
        ],
      },
      {
        title: "Pharmacy supply of desogestrel",
        lead: "Limits depend on age and whether the person is a new or current user.",
        blocks: [
          { kind: "list", items: [
            "New users: up to 3 months.",
            "Current or recent users aged 18 or over: up to 12 months.",
            "Under 18: limited to 3 months. The consultation is also a safeguarding opportunity.",
          ]},
          { kind: "note", title: "SmPC vs FSRH", text: "Product licences and the guideline do not always match. The module flags differences rather than silently choosing one." },
          { kind: "quiz", question: "An 18-year-old buys Hana for the first time. Maximum supply?", options: ["3 months, because she is a new user", "12 months", "6 months", "1 month"], answer: 0, explain: "New users are limited to 3 months under the Pharmacy medicine route." },
        ],
      },
    ],
  },
  {
    title: "How well they work",
    time: "10 min",
    part: "USING THE PILLS",
    description: "Two numbers matter: how well a pill works when taken perfectly, and how well it works in real life. The gap is the counselling job.",
    steps: [
      {
        title: "Perfect use, typical use, LARC",
        lead: "Picture 100 people for a year. That is how to counsel, not a Pearl Index.",
        blocks: [
          { kind: "facts", items: [
            { value: ">99%", label: "Perfect use of any POP" },
            { value: "about 9%", label: "Pregnant within a year with typical use" },
            { value: "<1%", label: "Typical use of LARC" },
          ]},
          { kind: "why", title: "Why typical is so far from perfect", text: "A POP is user-dependent. LARC is not. Every POP consultation should offer LARC and document that typical and perfect use were both explained (auditable standard 3, target 100%)." },
        ],
      },
      {
        title: "Are DSG and DRSP more effective?",
        lead: "Plausible, but not proven.",
        blocks: [
          { kind: "concept", title: "Insufficient evidence of a significant difference", text: "It was postulated that DSG and DRSP could be more effective because ovulation is suppressed more consistently and the window is longer. Studies cannot be compared cleanly. The guideline concludes there is insufficient evidence of a true effectiveness difference." },
          { kind: "p", text: "The practical use of this: the wider window can make perfect use easier. That is a reason to choose DSG or DRSP for someone who struggles with a 3-hour window — not a claim that they cannot fail." },
          { kind: "table", headers: ["Study", "Finding"], rows: [
            ["DSG v LNG ovulation RCT", "Ovulation 1.7% v 28% of cycles"],
            ["Literature review, DSG", "Ovulation in 1.25% of subjects"],
            ["Pooled DRSP phase III", "Pearl Index 0.73"],
            ["DSG started at follicle 14–16 mm", "Ovulation in 11 of 29 (38%)"],
          ]},
        ],
      },
      {
        title: "After stopping",
        lead: "No significant delay in return of fertility is expected.",
        blocks: [
          { kind: "list", items: [
            "Tell her she needs alternative contraception straight away if she does not want to conceive.",
            "In short-term studies, ovulation returned no sooner than about 7 to 9 days, and on average after roughly 2.5 to 3 weeks.",
            "Only short-term DSG and DRSP use (up to 56 days) has been studied for return of ovulation.",
          ]},
          { kind: "quiz", question: "What is the estimated first-year pregnancy risk with typical POP use?", options: ["0.3%", "1%", "3%", "About 9%"], answer: 3, explain: "Perfect use exceeds 99% effectiveness; typical use is about 9%." },
        ],
      },
    ],
  },
  {
    title: "Taking pills correctly",
    time: "16 min",
    part: "USING THE PILLS",
    description: "The single most common counselling and telephone question. Get the windows right, then the actions, then emergency contraception.",
    steps: [
      {
        title: "Step 1. Is it a missed pill?",
        lead: "Hours since the last pill decide the answer. The windows are not interchangeable.",
        blocks: [
          { kind: "windows" },
          { kind: "rule", title: "The three windows", text: "Traditional: missed if more than 3 hours late (over 27 hours since the last pill). DSG: more than 12 hours late (over 36 hours). DRSP: more than 24 hours late (over 48 hours, or more than 24 hours after a new pack should have started)." },
          { kind: "src", text: "FSRH POP guideline §7, Table 1." },
        ],
      },
      {
        title: "Step 2. What to do if it is missed",
        lead: "Take the most recent missed pill now. Then the extra-precaution clock starts.",
        blocks: [
          { kind: "cards", items: [
            { title: "Traditional and DSG", text: "Take the most recent missed pill now. Next at the usual time, even if that means two in one day. Condoms or abstain for 48 hours. Consider EC if unprotected sex happened from the first miss until 48 hours of correct taking.", tone: "trad" },
            { title: "Drospirenone", text: "Take the most recent missed pill now, then continue. Condoms or abstain for 7 days. Omit the placebo pills if any of the last 7 active pills were missed. EC depends on where in the pack pills were missed.", tone: "drsp" },
          ]},
          { kind: "why", title: "Why omit placebos after missing days 18–24?", text: "Missing pills near the end of the active run and then adding a 4-day gap gives the ovary a much longer unprotected stretch. Going straight to the next pack closes that gap." },
        ],
      },
      {
        title: "Vomiting, diarrhoea and DRSP EC",
        lead: "If a pill may not have been absorbed, replace it — then apply the window to the replacement.",
        blocks: [
          { kind: "table", headers: ["Pill", "Vomiting may matter if within"], rows: [
            ["DRSP", "3 to 4 hours"],
            ["LNG", "2 hours"],
            ["NET", "Not stated; guideline group suggests 2 hours"],
            ["DSG", "3 to 4 hours"],
          ]},
          { kind: "note", title: "DRSP and emergency contraception", text: "Missing up to 4 consecutive days between days 8 and 24, with all other pills correct, is likely low risk. If EC is indicated, levonorgestrel EC (within 96 hours) with immediate restart, or a copper IUD. Ulipristal is generally not recommended after missed DRSP pills." },
          { kind: "quiz", question: "A traditional POP user takes a pill 5 hours late. What is the advice?", options: ["Take it now, next at the usual time, condoms 48 hours, consider EC if sex since the miss", "Nothing, pills are covered for 12 hours", "Condoms for 7 days", "Stop and restart on day 1"], answer: 0, explain: "Over 3 hours late is a missed traditional pill. Precautions are 48 hours after restarting." },
        ],
      },
    ],
  },
  {
    title: "What can weaken protection",
    time: "12 min",
    part: "USING THE PILLS",
    description: "Beyond forgotten pills: absorption, body weight, surgery and drug interactions. Some of these are dead ends, some are real problems.",
    steps: [
      {
        title: "Body weight and BMI",
        lead: "Do not double the dose for weight.",
        blocks: [
          { kind: "rule", title: "No dose doubling for weight", text: "Available evidence suggests POP effectiveness is not affected by body weight or BMI. Double-dose POP for contraception is not required. SmPCs do not advise dose adjustment by weight. Evidence is limited (grade D)." },
          { kind: "list", items: [
            "DRSP: 4 pregnancies in 301 people with BMI 25–30 and none in 71 with BMI over 30.",
            "Traditional: one old UK cohort found no association between weight and failure.",
            "DSG: no study specifically compares DSG by weight.",
          ]},
        ],
      },
      {
        title: "Bariatric surgery and malabsorption",
        lead: "Evidence is thin. Be cautious.",
        blocks: [
          { kind: "warn", title: "Consider non-oral options after bariatric surgery", text: "There is insufficient evidence to say whether bariatric surgery affects POP effectiveness. Absorption of combined pills after Roux-en-Y looked unaffected in two studies, but that is not evidence for POPs." },
          { kind: "p", text: "Also ask about vomiting, severe diarrhoea, weight-management drugs that induce malabsorption, small bowel resection and active inflammatory bowel disease." },
        ],
      },
      {
        title: "Drug interactions and EC",
        lead: "Keep two DRSP problems apart: enzyme inducers reduce effect; potassium raisers are a safety issue.",
        blocks: [
          { kind: "table", headers: ["Interaction", "What happens", "What to do"], rows: [
            ["All POPs + enzyme inducers", "Faster metabolism during use and for 28 days after stopping", "Offer DMPA, copper IUD or LNG-IUS. If she chooses a POP, advise reliable condoms too."],
            ["Ulipristal EC", "A POP within 5 days can blunt UPA's delay of ovulation", "Wait 5 days, condoms during the wait, then 2 days (LNG/DSG) or 7 days (DRSP)."],
            ["DRSP + potassium raisers", "Hyperkalaemia risk", "Avoid potassium-sparing diuretics or supplements. With ACEI/ARB consider U&E in the first cycle."],
          ]},
          { kind: "why", title: "Why 28 days after stopping an inducer?", text: "Enzyme induction does not switch off when the drug does. The liver keeps metabolising hormones faster until enzyme levels return to normal." },
          { kind: "quiz", question: "A patient with a BMI of 41 asks whether she should take two pills. What is right?", options: ["No dose doubling is needed for weight or BMI", "Double the dose above BMI 30", "Only traditional pills work", "Use DRSP at double dose"], answer: 0, explain: "The guideline says double-dose POP for contraception is not required in overweight or obesity." },
        ],
      },
    ],
  },
  {
    title: "Who can and cannot use them",
    time: "14 min",
    part: "PRESCRIBING",
    description: "POPs have few contraindications. Know the short list, the drospirenone extras, and what UKMEC category 3 really means.",
    steps: [
      {
        title: "UKMEC in four lines",
        lead: "Category 3 is not a casual yes. It needs expert judgement.",
        blocks: [
          { kind: "concept", title: "The four categories", text: "1 no restriction. 2 benefits generally outweigh risks. 3 risks usually outweigh benefits: needs expert judgement or specialist referral, and is not usual unless better methods are unavailable or unacceptable. 4 unacceptable health risk." },
          { kind: "table", headers: ["Condition", "UKMEC", "Note"], rows: [
            ["Current breast cancer", "4", "Do not use"],
            ["Past breast cancer", "3", "Best decided with oncology"],
            ["IHD, current or history", "3 continuing; 2 initiating", "Consider timing relative to onset"],
            ["History of stroke", "3 continuing; 2 initiating", "The POP might have contributed"],
            ["Severe decompensated cirrhosis", "3", "Ascites, jaundice, encephalopathy or GI bleed"],
            ["Hepatocellular adenoma or carcinoma", "3", ""],
          ]},
        ],
      },
      {
        title: "What people wrongly worry about",
        lead: "Obesity alone, previous VTE, cysts and prior ectopic are not UKMEC 3 or 4.",
        blocks: [
          { kind: "list", items: [
            "Age under 18: no minimum age other than menarche. A DRSP study in 12–17 year olds raised no safety concerns.",
            "Obesity alone is UKMEC 1. With other cardiovascular risk factors it is UKMEC 2.",
            "Thrombophilia or previous VTE is UKMEC 2.",
            "Cardiovascular disease: POPs can generally be used with risk factors; the concern is a first event that happened during POP use.",
          ]},
        ],
      },
      {
        title: "Extra checks for drospirenone",
        lead: "Kidneys and potassium are the DRSP-specific safety issue.",
        blocks: [
          { kind: "cards", items: [
            { title: "Do not use", text: "Severe renal insufficiency or acute renal failure. Known hyperkalaemia. Untreated hypoaldosteronism. Current potassium-sparing diuretics, aldosterone antagonists or potassium supplements.", tone: "drsp" },
            { title: "Use with caution", text: "Mild or moderate renal impairment. Treated hypoaldosteronism. Discuss with renal or endocrine teams and monitor U&E and blood pressure.", tone: "drsp" },
          ]},
          { kind: "rule", title: "When to consider U&E and BP before DRSP", text: "People with significant CKD risk factors (hypertension, cardiovascular disease or diabetes), particularly if aged 50 or over. No routine examination or blood test is needed before traditional or DSG pills." },
          { kind: "why", title: "Why kidneys and potassium?", text: "Drospirenone opposes aldosterone: more sodium and water lost, potassium retained. In people whose kidneys or adrenals already limit potassium handling, that can tip into hyperkalaemia." },
          { kind: "quiz", question: "A patient takes spironolactone. Which POP should you generally avoid?", options: ["DRSP", "DSG", "LNG", "NET"], answer: 0, explain: "DRSP is not recommended with potassium-sparing diuretics or aldosterone antagonists." },
        ],
      },
    ],
  },
  {
    title: "Health risks in perspective",
    time: "10 min",
    part: "PRESCRIBING",
    description: "What POPs do and do not do to clots, arteries, cancers, cysts and ectopics. Most of the evidence is reassuring but thin.",
    steps: [
      {
        title: "At a glance",
        lead: "The honest answer is often “small and uncertain”. Use absolute numbers.",
        blocks: [
          { kind: "table", headers: ["Question", "Answer"], rows: [
            ["VTE", "Very limited evidence, no increased risk. Pooled RR 1.06 (0.7–1.62)."],
            ["Stroke and MI", "No increase. Pooled ORs 0.98 for MI and 1.02 for stroke."],
            ["Breast cancer", "Possible small rise in relative risk. Absolute risk very small."],
            ["Ovarian cysts", "Common, usually asymptomatic and self-resolving. UKMEC 1."],
            ["Ectopic pregnancy", "All effective methods reduce ectopic risk vs no contraception. Prior ectopic UKMEC 1."],
          ]},
          { kind: "concept", title: "This is why POPs are the pill when oestrogen is off-limits", text: "Combined pills raise VTE risk. The evidence suggests POPs do not, which is why they are a first choice when oestrogen is contraindicated. VTE/thrombophilia remain UKMEC 2 because the evidence is sparse." },
        ],
      },
      {
        title: "Breast cancer, in absolute numbers",
        lead: "Relative risk without a denominator is a poor counselling tool.",
        blocks: [
          { kind: "facts", items: [
            { value: "RR 1.29", label: "Current or recent POP use vs none" },
            { value: "0.50% → 0.57%", label: "15-year risk after 5 years' use aged 25–29" },
            { value: "2.0% → 2.2%", label: "15-year risk after 5 years' use aged 35–39" },
          ]},
          { kind: "note", title: "How to say it", text: "“Some large studies suggest a small rise in relative risk while using hormonal contraception including the mini-pill. Because breast cancer is uncommon at reproductive ages, the extra cases are few. The added risk fades after stopping.”" },
        ],
      },
      {
        title: "Cysts and ectopic pregnancy",
        lead: "Common questions that are often counselled too anxiously.",
        blocks: [
          { kind: "p", text: "Functional ovarian cysts are common on POPs, usually incidental and self-resolving. Prior ovarian cysts are UKMEC 1. All effective contraception reduces ectopic risk compared with no method; previous ectopic is UKMEC 1." },
          { kind: "quiz", question: "Which condition is UKMEC 3 or 4 for starting a POP?", options: ["History of ovarian cysts", "History of breast cancer", "Previous ectopic pregnancy", "History of migraine"], answer: 1, explain: "Past breast cancer is UKMEC 3. Cysts and ectopic pregnancy are UKMEC 1." },
        ],
      },
    ],
  },
  {
    title: "Side effects and bleeding",
    time: "16 min",
    part: "PRESCRIBING",
    description: "Irregular bleeding is the main reason people stop a POP. Give real numbers before the first pill, and have a plan for when it happens.",
    steps: [
      {
        title: "The counselling rule",
        lead: "For any person, bleeding on any POP is unpredictable. Numbers describe groups, not individuals.",
        blocks: [
          { kind: "concept", title: "Do not promise a pattern", text: "Someone can do badly on one pill and well on another. A Cochrane review found no evidence that the bleeding pattern with one progestogen-only method predicts the pattern with another." },
          { kind: "table", headers: ["In cycles 7–9", "DRSP", "DSG"], rows: [
            ["Any bleeding or spotting", "73.3%", "67.9% (NS)"],
            ["Unscheduled bleeding, mean days", "7.2", "10.8 (significant)"],
            ["Prolonged bleeding >14 days", "2.9%", "10.9% (significant)"],
            ["Stopped because of bleeding", "3.2%", "6.6%"],
          ]},
          { kind: "p", text: "About 2 to 3 in 10 DSG users are amenorrhoeic in the last 90 days of a 12-month period; about 4 in 10 have normal-frequency bleeding." },
        ],
      },
      {
        title: "Other side effects",
        lead: "Counsel honestly. The evidence is often inadequate, and that is still useful to say.",
        blocks: [
          { kind: "cards", items: [
            { title: "Mood", text: "Evidence does not establish that POPs cause depression. Small register associations exist, especially in 15–19 year olds, with confounding. Depression is UKMEC 1. Take complaints seriously and offer an alternative if she feels the pill has affected her mood." },
            { title: "Headache", text: "Reported by fewer than 1 in 10. Evidence cannot confirm or exclude a cause. Headache history is UKMEC 1." },
            { title: "Acne", text: "Fewer than 1 in 10 report it. DRSP is anti-androgenic and might help, but this has not been studied." },
            { title: "Weight and libido", text: "Some gain is possible; no clear evidence of significant gain. Libido evidence is inadequate. Take the concern seriously anyway." },
          ]},
        ],
      },
      {
        title: "Managing problematic bleeding",
        lead: "Never assume irregular bleeding is “just the POP”.",
        blocks: [
          { kind: "steps", items: [
            { title: "Assess other causes first", text: "Pregnancy, infection, missed pills, interacting drugs, cervical or other gynaecological pathology." },
            { title: "Reassure and set expectations", text: "For DSG and DRSP, bleeding generally becomes less frequent and shorter over the first year." },
            { title: "Consider a different POP", text: "No evidence that switching improves bleeding, but people respond differently." },
            { title: "Short-term aids", text: "Oestrogen supplementation, mefenamic acid, naproxen or tranexamic acid are often used. No evidence for long-term strategies." },
          ]},
          { kind: "warn", title: "Double-dose DSG is unproven", text: "Some clinicians use 150 µg DSG. There is no robust evidence and none on safety. If your protocol permits it, document the rationale and that the patient was told it is unproven." },
          { kind: "quiz", question: "A patient on LNG has six bleeding episodes in 90 days. First action?", options: ["Look for other causes (pregnancy, missed pills, infection, interactions)", "Double the dose of LNG", "Stop the pill", "Start tranexamic acid only"], answer: 0, explain: "Always exclude other causes before attributing bleeding to the POP." },
        ],
      },
    ],
  },
  {
    title: "Extra benefits",
    time: "8 min",
    part: "PRESCRIBING",
    description: "Some people take a POP partly for what else it does. The evidence is weaker than for contraception, so be careful what you promise.",
    steps: [
      {
        title: "What the guideline supports",
        lead: "Separate established practice from marketing claims.",
        blocks: [
          { kind: "table", headers: ["Use", "What the guideline says"], rows: [
            ["Heavy menstrual bleeding", "Some clinicians offer DSG or double-dose DSG, but there is no robust evidence. LNG-IUS and combined pills have proven benefit."],
            ["Dysmenorrhoea", "DSG and DRSP could reduce pain for some. Observational data: moderate/severe pain fell from about 84% to 7% over 3–4 cycles."],
            ["PCOS", "Not specifically studied. Established practice: no need to induce a withdrawal bleed if amenorrhoeic on a POP."],
            ["Acne, hirsutism, BP, weight (DRSP)", "Anti-androgenic and diuretic properties make benefit plausible. Effects on acne, hirsutism, weight and PMS have not been specifically studied."],
          ]},
          { kind: "warn", title: "Careful with claims", text: "Marketing pages sometimes claim DRSP “clears acne” or “reduces bloating”. The guideline says these are theoretical and unstudied for the POP. Do not repeat them as fact." },
          { kind: "quiz", question: "A patient with PCOS is amenorrhoeic on DSG and asks if she needs a withdrawal bleed. Answer?", options: ["Yes, monthly progestogen courses", "Yes, every 3 months", "Stop the pill", "No, induction of a withdrawal bleed is not required"], answer: 3, explain: "Established practice: not required in PCOS on a POP even if amenorrhoeic." },
        ],
      },
    ],
  },
  {
    title: "Starting and switching",
    time: "18 min",
    part: "PRESCRIBING",
    description: "When does protection start? The answer depends on the pill, the cycle day, recent sex, and what she was using before.",
    steps: [
      {
        title: "The core start rules",
        lead: "Standard start versus quick start. Learn this cold.",
        blocks: [
          { kind: "cards", items: [
            { title: "Traditional and DSG", text: "Days 1 to 5 of a natural cycle: protected straight away. Any other time (quick start): condoms for 2 days, pregnancy-test follow-up if appropriate.", tone: "trad" },
            { title: "DRSP", text: "Day 1 only of a natural cycle: protected straight away. Any other time: condoms for 7 days.", tone: "drsp" },
          ]},
          { kind: "why", title: "Why does DRSP need day 1?", text: "It follows the manufacturer's licence, which the guideline group chose to align with. Starting DRSP on days 2–5 without extra precautions is listed as an area for future research." },
          { kind: "p", text: "A POP can be started at any time if a pregnancy test is negative, or if it is certain there has been no unprotected sex, even if very early pregnancy cannot be completely excluded because of sex in the last 21 days. There is no indication of harm from POP use in very early pregnancy." },
        ],
      },
      {
        title: "After pregnancy and emergency contraception",
        lead: "Childbirth, abortion and the two oral EC methods each have their own clock.",
        blocks: [
          { kind: "list", items: [
            "Childbirth: any POP can start immediately. If started by day 21 it works immediately. From day 21, condoms for 2 days (traditional/DSG) or 7 days (DRSP), unless LAM applies.",
            "Miscarriage, abortion, ectopic: can start at any time, even at mifepristone. Traditional/DSG within 5 days, or DRSP on day 1: immediate cover.",
            "Breastfeeding: progestogen-only methods have no adverse effects on lactation, infant growth or development (grade A).",
          ]},
          { kind: "table", headers: ["EC used", "Start POP", "Extra precautions"], rows: [
            ["Levonorgestrel EC", "Now", "2 days (traditional/DSG) or 7 days (DRSP); pregnancy test 21 days after last sex"],
            ["Ulipristal EC", "Wait 5 days", "Condoms during the wait, then a further 2 or 7 days; pregnancy test at 21 days"],
            ["Copper IUD", "Not needed", "Keep IUD until pregnancy test 21 days after insertion"],
          ]},
          { kind: "why", title: "Why wait after ulipristal?", text: "UPA works by delaying ovulation. Starting a progestogen too soon can blunt that effect, so the guideline delays the POP for at least 120 hours." },
        ],
      },
      {
        title: "Switching and stopping",
        lead: "A traditional POP does not reliably suppress ovulation, so moving from it to CHC needs 7 days of extra protection.",
        blocks: [
          { kind: "table", headers: ["Coming from", "Start POP", "Extra precautions"], rows: [
            ["CHC taken correctly, weeks 2–3 or days 1–2 of the break", "Now", "None"],
            ["Implant in date, DMPA within 14 weeks, or DSG taken correctly", "Now", "None"],
            ["Traditional POP taken correctly", "Now", "None to another traditional/DSG; 7 days for DRSP"],
            ["Incorrect or expired method", "Pregnancy test and EC first", "Yes, plus pregnancy test at 21 days if sex was under 21 days ago"],
          ]},
          { kind: "list", items: [
            "Fertility returns without significant delay. Contraception is needed at once if pregnancy is not wanted.",
            "Offer folic acid and vitamin D before stopping if she wants to conceive.",
            "If she becomes pregnant on a POP, stop the pill. There is no indication of fetal harm.",
          ]},
          { kind: "quiz", question: "A patient takes ulipristal EC on Saturday. When can she start DSG?", options: ["Straight away", "After 48 hours", "After 5 days, using condoms meanwhile and for 2 days after", "Not at all"], answer: 2, explain: "Starting sooner can reduce UPA's effect." },
        ],
      },
    ],
  },
  {
    title: "The consultation and follow-up",
    time: "14 min",
    part: "PRESCRIBING",
    description: "Put it together: assess, choose, counsel, supply, review. This is the guideline's minimum standard.",
    steps: [
      {
        title: "The minimum checklist",
        lead: "These are the things that must be true before starting or continuing.",
        blocks: [
          { kind: "steps", items: [
            { title: "Medically eligible", text: "Full medical and drug history. No routine examination or blood tests for traditional or DSG. For DRSP, U&E and BP if risk factors." },
            { title: "No interacting drugs or herbals", text: "Enzyme inducers, and for DRSP potassium raisers." },
            { title: "No allergy to the pill’s contents", text: "Some DSG brands contain soya which can cross-react in peanut allergy." },
            { title: "Pregnancy risk", text: "Need for EC, extra precautions, and follow-up pregnancy testing." },
            { title: "Advice given", text: "Effectiveness (perfect and typical), how to take pills, extra contraception, missed pills, interactions, bleeding and side effects, and LARC alternatives." },
          ]},
          { kind: "rule", title: "What FSRH says you must document (target 100%)", text: "Comprehensive drug history. Anyone on an enzyme inducer was offered contraception it does not affect. Typical and perfect use were explained. Advice, and a route to reliable information, was given on correct pill-taking and errors." },
        ],
      },
      {
        title: "Choosing and supplying",
        lead: "The choice is individual. Supply can be up to 12 months.",
        blocks: [
          { kind: "table", headers: ["If she…", "Think about"], rows: [
            ["Cannot reliably take a pill within 3 hours", "DSG or DRSP"],
            ["Had bothersome unscheduled bleeding on DSG", "DRSP, a traditional pill, or another method"],
            ["Has kidney disease, hyperkalaemia, or takes potassium-raising drugs", "Avoid DRSP; choose DSG or traditional"],
            ["Takes an enzyme inducer", "A non-oral method or IUD rather than any POP"],
            ["Wants the most effective method", "LARC. Say so."],
          ]},
          { kind: "concept", title: "Up to 12 months", text: "A 12-month supply can be given to medically eligible people starting or continuing, with advice to get in touch if their medical history changes. Restricting supply can cause unwanted discontinuation and pregnancy." },
        ],
      },
      {
        title: "Information and follow-up",
        lead: "Verbal advice alone is not enough. Review generally once a year.",
        blocks: [
          { kind: "list", items: [
            "When protection starts and whether extra contraception is needed.",
            "What to do when a pill is late or missed, and when EC may be needed.",
            "Health events that should prompt a review, such as a diagnosis of breast cancer.",
            "To check any new medicine, prescribed or bought, with a pharmacist or prescriber.",
            "How to get further supplies, follow-up, stop or change method, plus a leaflet or trusted link.",
          ]},
          { kind: "rule", title: "Review generally once a year", text: "This can usually be done without seeing the person in person. Recheck eligibility, update drug history, assess adherence and satisfaction, and offer alternatives including LARC. Inability to review within a year should not stop continuation." },
          { kind: "quiz", question: "A healthy 24-year-old requests DSG. Which of these is required before starting?", options: ["Blood tests", "A medical and drug history, and counselling; no examination or blood tests are routinely needed", "A breast examination", "A pelvic ultrasound"], answer: 1, explain: "No clinical examination or laboratory tests are routinely required for traditional or DSG POPs." },
        ],
      },
    ],
  },
  {
    title: "Remote and pharmacy supply",
    time: "12 min",
    part: "PRESCRIBING",
    description: "The guideline explicitly accepts remote prescribing of POPs and pharmacy supply of desogestrel. It also tells you what must still be true.",
    steps: [
      {
        title: "What remote care must still do",
        lead: "An in-person consultation is not required if the assessment is adequate and reliable.",
        blocks: [
          { kind: "rule", title: "The guideline’s position", text: "Remote prescribing is acceptable if the prescriber has adequate knowledge of the patient's health and is satisfied the medicine meets their needs. A remote prescriber must be sure they can make an adequate and reliable assessment that does not compromise care." },
          { kind: "list", items: [
            "Make the user aware of the failure rate of user-dependent contraception and advise about LARC.",
            "Signpost clear information on safe, effective use.",
            "Explain how to get further supplies and advice if there are problems or new health issues.",
            "Exclude UKMEC 3 and 4 conditions, DRSP kidney and potassium risks, and interacting drugs.",
            "Address pregnancy risk, EC need, and follow-up testing if quick starting.",
          ]},
          { kind: "note", title: "Validated forms only", text: "Self-completed checklists can exclude contraindications if they are developed and validated. A form you wrote yourself is not a validated form. In one study of 1,271 people, a checklist missed a contraindication in only 0.4%." },
        ],
      },
      {
        title: "Inspect your pathway",
        lead: "Training prompts for you, not FSRH text.",
        blocks: [
          { kind: "table", headers: ["Question", "Why it matters"], rows: [
            ["Can she choose a specific pill before the consultation is complete?", "A pre-selected product turns the consultation into a formality."],
            ["Can the patient talk to the prescriber?", "A one-way form cannot explore a hesitant answer."],
            ["How is pregnancy risk excluded?", "A tick-box “I am not pregnant” is weak."],
            ["What happens with an enzyme inducer or potassium raiser?", "A hard stop or redirect, with the reason explained."],
            ["Are typical-use and perfect-use rates shown, and LARC offered?", "These are auditable standards."],
          ]},
        ],
      },
      {
        title: "Pharmacy provision",
        lead: "POM versus P is a different legal test. Do not copy one checklist onto the other.",
        blocks: [
          { kind: "cards", items: [
            { title: "What the pharmacist does", text: "Uses the manufacturer's checklist, supply algorithm and pregnancy exclusion tool. Covers contraindications, interactions, information, safeguarding, safer sex, cervical screening, bleeding that may need investigation, and breast awareness." },
            { title: "Limits", text: "3 months for new users. 12 months for current or recent users aged 18 or over. 3 months if under 18. Never off the shelf." },
          ]},
          { kind: "quiz", question: "Does the FSRH POP guideline require an in-person consultation before prescribing?", options: ["No, remote prescribing is acceptable if the assessment is adequate and reliable", "Yes, always", "Only for under 25s", "Only for DRSP"], answer: 0, explain: "The guideline group recommends an in-person consultation is not required for safe POP prescribing." },
        ],
      },
    ],
  },
  {
    title: "Practice cases",
    time: "20 min",
    part: "PRACTICE",
    description: "Ten short scenarios that mix the rules. Decide first, then check the reasoning.",
    steps: [
      {
        title: "Missed-pill decisions",
        lead: "Establish the pill and the hours first. Then sex. Then the action.",
        blocks: [
          { kind: "quiz", question: "Case 1. A 27-year-old takes Norgeston (LNG) at 8 am. Yesterday she took it at 1 pm, and she had unprotected sex last night. Best advice?", options: ["Fine, she is inside the window", "Missed pill: take it as normal next, condoms 48 hours, consider EC because of sex after the missed pill", "Condoms 7 days and repeat the pack", "Switch to DRSP today"], answer: 1, explain: "5 hours late exceeds 3 hours, so protection may have lapsed. The sex was after the miss, so EC is considered." },
          { kind: "quiz", question: "Case 2. A 31-year-old on DSG took her pill 10 hours late on Sunday. Unprotected sex on Saturday and Sunday night. Advice?", options: ["EC needed", "Condoms for 7 days", "Not a missed pill; no extra precautions or EC are needed", "Restart the pack"], answer: 2, explain: "10 hours late is inside the 12-hour DSG window." },
          { kind: "quiz", question: "Case 3. A 22-year-old on DRSP missed days 1 and 2 of a new pack and had unprotected sex during the placebo days. Now restarted on day 3. What is right?", options: ["Consider EC, condoms for 7 days, pregnancy test 3 weeks after last unprotected sex", "Nothing further", "Omit next placebo pills only", "2 days of condoms only"], answer: 0, explain: "Missed pills in days 1–7 with sex during the interval or week 1 could carry significant risk." },
        ],
      },
      {
        title: "Prescribing risk cases",
        lead: "Eligibility, interactions, starts and absorption, mixed together.",
        blocks: [
          { kind: "quiz", question: "Case 4. A 45-year-old with type 2 diabetes and hypertension asks for Slynd. Most appropriate step?", options: ["Refuse; contraindicated", "Prescribe without checks", "Insist on a pelvic exam", "Check drug history, and consider U&E and blood pressure because of kidney risk factors"], answer: 3, explain: "Diabetes and hypertension are risk factors for CKD. Ask about ACE inhibitors, ARBs and potassium." },
          { kind: "quiz", question: "Case 5. A patient started carbamazepine 2 weeks ago and asks for a repeat of desogestrel. What should you do?", options: ["Supply as normal", "Explain reduced effectiveness, offer a method unaffected by inducers, and if she chooses DSG advise reliable condoms too", "Double the DSG dose", "Switch to a traditional pill"], answer: 1, explain: "Enzyme inducers reduce POP effectiveness during use and for 28 days after." },
          { kind: "quiz", question: "Case 6. A person takes ulipristal EC on Friday and wants to start Cerelle. Last period started 12 days ago. Advice?", options: ["Start today, condoms 2 days", "Start today, condoms 7 days", "Start after 5 days, condoms until then and for 2 days after; pregnancy test 21 days after sex", "Do not start any POP"], answer: 2, explain: "POP start is delayed at least 120 hours after UPA." },
          { kind: "quiz", question: "Case 8. BMI 38 and Roux-en-Y bypass last year. Best advice?", options: ["POPs are contraindicated", "Take double doses", "Any POP is proven reliable after bypass", "Evidence is insufficient after bariatric surgery; discuss effective non-oral options. Weight itself does not need dose change"], answer: 3, explain: "Do not double-dose for BMI. Users may wish to consider effective non-oral contraception after bariatric surgery." },
        ],
      },
      {
        title: "Supply and safeguarding",
        lead: "Pharmacy limits, vomiting windows and UKMEC 3 decisions.",
        blocks: [
          { kind: "quiz", question: "Case 7. A 19-year-old on DRSP vomits 2 hours after her pill. Which advice?", options: ["Take another DRSP pill as soon as possible; missed-pill rules only apply if the replacement is over 24 hours after the original was due", "Ignore it", "Take a different POP", "Wait until tomorrow"], answer: 0, explain: "Within 3 to 4 hours of taking a DRSP pill, vomiting may prevent absorption." },
          { kind: "quiz", question: "Case 9. A 16-year-old wants Hana from a pharmacy. What are the limits?", options: ["She cannot be supplied any POP", "Up to 3 months, and the consultation should include safeguarding", "12 months", "Only with a parent"], answer: 1, explain: "Supply is limited to 3 months for under-18s." },
          { kind: "quiz", question: "Case 10. Previous breast cancer treated 6 years ago, requesting DSG. Right framing?", options: ["UKMEC 1, supply", "UKMEC 4, refuse without discussion", "UKMEC 3: not usual, involve oncology or specialist SRH, and offer non-hormonal options", "UKMEC 2, supply"], answer: 2, explain: "Past breast cancer is UKMEC 3, and any decision is best made with the oncology team." },
        ],
      },
    ],
  },
  {
    title: "Summary sheet and final check",
    time: "12 min",
    part: "PRACTICE",
    description: "One page to keep, and a last set of questions.",
    steps: [
      {
        title: "The comparison sheet",
        lead: "Keep this on one page: mechanism, window, start and extra checks.",
        blocks: [
          { kind: "table", headers: ["", "Traditional", "DSG 75 µg", "DRSP 4 mg"], rows: [
            ["Main effect", "Mucus", "Ovulation", "Ovulation"],
            ["Regimen", "Continuous", "Continuous", "24 + 4 placebo"],
            ["Missed if over", "3 h (27 h)", "12 h (36 h)", "24 h (48 h)"],
            ["After a missed pill", "Condoms 48 h. EC if sex since first miss", "Condoms 48 h. EC if sex since first miss", "Condoms 7 days. Omit placebos if last 7 active missed"],
            ["Standard start", "Days 1–5", "Days 1–5", "Day 1"],
            ["Quick start extra protection", "2 days", "2 days", "7 days"],
            ["After UPA-EC", "Wait 5 days, then 2 days", "Wait 5 days, then 2 days", "Wait 5 days, then 7 days"],
            ["Vomiting window", "Within 2 h", "Within 3–4 h", "Within 3–4 h"],
          ]},
        ],
      },
      {
        title: "The rules to retain",
        lead: "If you remember nothing else, remember these.",
        blocks: [
          { kind: "cards", items: [
            { title: "UKMEC 3 or 4, all POPs", text: "Current breast cancer (4). Past breast cancer (3). IHD or stroke, continuing (3). Severe decompensated cirrhosis (3). Hepatocellular adenoma or carcinoma (3)." },
            { title: "Always", text: "Enzyme inducer: offer another method; 28-day tail. Typical 9% v LARC under 1%. Supply up to 12 months; review yearly. Use to age 55." },
          ]},
          { kind: "note", title: "Where to go next", text: "This module does not cover implants, injectables, IUDs or emergency contraception in depth. For interactions use the BNF and the FSRH Drug Interactions guideline. Use your own protocol and governance for anything you supply." },
        ],
      },
      {
        title: "Final check",
        lead: "Ten last questions. Decide, then reveal.",
        blocks: [
          { kind: "quiz", question: "A DSG pill is missed if taken more than how long after the previous pill?", options: ["27 hours", "24 hours", "36 hours", "48 hours"], answer: 2, explain: "12 hours late equals 36 hours since the last pill." },
          { kind: "quiz", question: "Which is NOT a UKMEC 3 or 4 condition for POPs?", options: ["Past breast cancer", "Previous ectopic pregnancy", "Severe decompensated cirrhosis", "Hepatocellular adenoma"], answer: 1, explain: "Previous ectopic pregnancy is UKMEC 1." },
          { kind: "quiz", question: "What primarily explains why DRSP needs U&E consideration in some patients?", options: ["It is an aldosterone antagonist, so potassium can rise", "It contains oestrogen", "It is a strong enzyme inducer", "It causes bone loss"], answer: 0, explain: "Anti-mineralocorticoid action increases potassium retention." },
          { kind: "quiz", question: "After ulipristal EC, a patient may start a DSG pill after:", options: ["Immediately", "24 hours", "72 hours", "5 days"], answer: 3, explain: "Delay start for at least 120 hours." },
          { kind: "quiz", question: "On which of these does the FSRH guideline set an auditable standard of 100%?", options: ["All patients are given LARC", "All patients are examined", "All patients have a blood pressure taken", "Typical and perfect use effectiveness is explained to every POP user"], answer: 3, explain: "Four auditable standards include effectiveness information, drug history, inducer alternatives, and advice on correct use and errors." },
        ],
      },
    ],
  },
];
