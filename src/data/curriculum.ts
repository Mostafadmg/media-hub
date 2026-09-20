export type PillTag = "chc" | "trad" | "dsg" | "drsp" | "all";

export type Block =
  | { kind: "p"; text: string }
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
  | { kind: "quiz"; question: string; options: string[]; answer: number; explain: string }
  | { kind: "graphic"; variant: "decisions" | "axis" | "windows" | "vte" | "packs" | "hfi" }
  | { kind: "guide"; id: "chc-start" }
  | { kind: "src"; text: string };

export type Section = {
  title: string;
  blocks: Block[];
};

export type Lesson = {
  title: string;
  time: string;
  description: string;
  part: string;
  visual: string;
  sections: Section[];
};

export const lessons: Lesson[] = [
  {
    title: "How to think like a contraceptive prescriber",
    time: "12 min",
    part: "FOUNDATIONS",
    visual: "decisions",
    description: "A prescription is the end of four separate assessments. Keep them apart, then choose a product.",
    sections: [
      {
        title: "The four decisions behind every prescription",
        blocks: [
          { kind: "graphic", variant: "decisions" },
          { kind: "cards", items: [
            { title: "1. Safety", text: "Can this person use this hormonal method without an unacceptable health risk?" },
            { title: "2. Effectiveness", text: "Will it work given their medicines, absorption, adherence and circumstances?" },
            { title: "3. Pregnancy risk today", text: "Is there already a possible pregnancy, a need for EC, or a gap before the new method works?" },
            { title: "4. Acceptability", text: "Does the method fit their priorities well enough that they are likely to use it?" },
          ]},
          { kind: "p", text: "A POP can be medically safe with carbamazepine yet be a poor contraceptive because enzyme induction reduces hormone exposure. A COC can be safe but fail if the next pack is started late. An effective method can still be unacceptable if the bleeding pattern is intolerable." },
        ],
      },
      {
        title: "Eligibility is not a brand recommendation",
        blocks: [
          { kind: "concept", title: "UKMEC answers safety, not branding", text: "UKMEC categorises the safety of a method in a defined condition. It does not tell you that Yasmin is the best pill, or that Cerelle is better than Cerazette. Brand selection comes after method eligibility." },
          { kind: "rule", title: "UKMEC 1 is not a certificate of overall safety", text: "It means the particular condition being considered does not restrict that method. You still need to ask about other conditions." },
        ],
      },
      {
        title: "Why the physiology matters",
        blocks: [
          { kind: "list", items: [
            "CHC mainly prevents ovulation. Extending the hormone-free interval lets the ovary recover — that is why late pack starts matter.",
            "Traditional POPs rely heavily on cervical mucus. That effect is relatively short-lived, which explains the 3-hour window.",
            "Desogestrel and drospirenone inhibit ovulation more consistently. They have different windows and recovery instructions; they are not interchangeable “mini-pills”.",
            "A thin endometrium can bleed unpredictably because its surface vessels are fragile. Spotting does not prove inadequate contraception or a need for more estrogen.",
          ]},
          { kind: "cards", items: [
            { title: "Established guidance", text: "Supported by the relevant guideline or product instructions." },
            { title: "Guideline-supported off-label use", text: "A recognised approach that differs from the licence, such as a tailored monophasic 21/7 COC regimen." },
            { title: "Limited-evidence practice", text: "Sometimes tried clinically but not a reliable universal sequence, such as increasing DSG to 150 µg for bleeding." },
          ]},
          { kind: "src", text: "FSRH CHC (amended Oct 2023); FSRH POP (amended Apr 2026); UKMEC 2025." },
        ],
      },
    ],
  },
  {
    title: "Reproductive anatomy and normal physiology",
    time: "16 min",
    part: "FOUNDATIONS",
    visual: "axis",
    description: "If you understand what the drug is trying to prevent, practical instructions become easier to explain.",
    sections: [
      {
        title: "The structures that matter",
        blocks: [
          { kind: "graphic", variant: "axis" },
          { kind: "table", headers: ["Structure", "Normal role", "Why it matters"], rows: [
            ["Hypothalamus", "Pulsatile GnRH", "Hormonal feedback changes reproductive signalling"],
            ["Anterior pituitary", "FSH and LH", "Suppressing these prevents follicular development and the LH surge"],
            ["Ovary", "Follicles, oocyte, estradiol, progesterone", "Ovulation is the principal target of CHC and ovulation-inhibiting POPs"],
            ["Fallopian tube", "Fertilisation usually in the ampulla", "Altered motility may contribute to hormonal effects"],
            ["Endometrium", "Proliferation, secretion, shedding", "Hormonal exposure changes bleeding and thickness"],
            ["Cervix", "Cycle-dependent mucus", "Progestogen-associated mucus limits sperm penetration"],
          ]},
        ],
      },
      {
        title: "GnRH, FSH, LH and the two-cell model",
        blocks: [
          { kind: "p", text: "GnRH is released in pulses into the hypophyseal portal circulation. It does not travel down a nerve into the anterior pituitary. The pituitary responds to the timing and strength of the signal." },
          { kind: "concept", title: "Two-cell, two-gonadotrophin", text: "LH acts on theca cells to make androgens. FSH stimulates granulosa-cell aromatase, converting those androgens to estradiol. Reducing gonadotrophin stimulation can therefore reduce ovarian androgen production — one reason some people see acne improve on CHC." },
          { kind: "p", text: "Do not assume every person ovulates on day 14. The follicular phase varies substantially. That variability matters for emergency contraception and for deciding whether pregnancy is reasonably excluded." },
        ],
      },
      {
        title: "Bleeding is not one event",
        blocks: [
          { kind: "table", headers: ["Event", "What causes it", "What it tells you"], rows: [
            ["Physiological menstruation", "Steroid withdrawal after corpus luteum regression", "Usually follows an ovulatory cycle"],
            ["CHC withdrawal bleeding", "Planned withdrawal of exogenous hormones", "Does not prove ovulation and is not medically required"],
            ["Breakthrough bleeding", "Endometrial instability, or another cause", "Not a reliable measure of contraceptive efficacy"],
            ["Amenorrhoea on hormones", "Limited proliferation and/or altered ovarian activity", "Often expected; does not mean retained blood is building up"],
          ]},
          { kind: "why", title: "Why sperm timing matters", text: "Sperm can remain capable of fertilisation for several days. The oocyte is viable for a much shorter period. Ask about intercourse in the preceding interval, not only after a missed pill." },
          { kind: "note", title: "Worked example", text: "A patient takes a COC correctly for 21 days, has the 7-day break, then forgets the first three tablets of the new pack. The ovary has now had a longer unsuppressed stretch. Sperm from intercourse during the break may still be relevant. That is why first-week missed-pill EC assessment exists." },
        ],
      },
    ],
  },
  {
    title: "Pharmacology: how the methods work",
    time: "18 min",
    part: "FOUNDATIONS",
    visual: "windows",
    description: "CHC, traditional POP, desogestrel and drospirenone are four different pharmacological stories.",
    sections: [
      {
        title: "CHC versus COC",
        blocks: [
          { kind: "p", text: "Combined hormonal contraception includes the combined oral contraceptive, the patch and the ring. All three are systemic estrogen-containing methods. Bypassing the gut does not remove estrogen-related thrombotic contraindications." },
          { kind: "cards", items: [
            { title: "Estrogen’s job", text: "Helps suppress FSH and follicular recruitment, supports endometrial stability, and changes hepatic protein synthesis — including SHBG and coagulation proteins.", tone: "chc" },
            { title: "Progestogen’s job", text: "Inhibits the LH surge, thickens cervical mucus and opposes estrogen-driven endometrial proliferation.", tone: "chc" },
          ]},
        ],
      },
      {
        title: "The four oral methods",
        blocks: [
          { kind: "cards", items: [
            { title: "Traditional POP", text: "NET 350 µg (Noriday) or LNG 30 µg (Norgeston). Do not reliably suppress every ovulation. Principal action: cervical mucus. 3-hour window. Continuous, no planned break.", tone: "trad" },
            { title: "Desogestrel POP", text: "75 µg converted to etonogestrel. Inhibits ovulation more consistently. 12-hour window. All tablets active. After a miss: 48 hours of correct dosing.", tone: "dsg" },
            { title: "Drospirenone POP", text: "Slynd 4 mg: 24 active + 4 inactive. 24-hour window. After a missed active pill: 7 consecutive active days. Spironolactone derivative — watch potassium and kidneys.", tone: "drsp" },
            { title: "CHC / COC", text: "Estrogen plus progestogen. Principal mechanism: consistent ovulation suppression. Missed-pill recovery is usually 7 active days for a standard EE COC.", tone: "chc" },
          ]},
          { kind: "graphic", variant: "windows" },
        ],
      },
      {
        title: "Compare the mechanisms",
        blocks: [
          { kind: "table", headers: ["Feature", "CHC", "Traditional POP", "DSG", "DRSP"], rows: [
            ["Estrogen", "Yes", "No", "No", "No"],
            ["Ovulation suppression", "Principal, usually consistent", "Inconsistent", "Much more consistent", "Much more consistent"],
            ["Mucus effect", "Additional", "Particularly important", "Additional", "Additional"],
            ["Planned HFI", "Product-dependent", "None", "None", "4 placebo days"],
            ["Lateness rule", "Product-specific", ">3 h late", ">12 h late", ">24 h late (active)"],
            ["Backup after a relevant miss", "Usually 7 active days", "48 hours", "48 hours", "7 active days"],
          ]},
          { kind: "facts", items: [
            { value: "<1%", label: "Perfect-use first-year failure, pills" },
            { value: "~9%", label: "Typical-use first-year pregnancy estimate" },
            { value: "~0.3%", label: "COC perfect-use estimate commonly cited" },
          ]},
          { kind: "concept", title: "Do not teach that a pill terminates pregnancy", text: "Main effects act before pregnancy is established, by preventing ovulation and/or sperm access. “I took the tablet” does not prove it was absorbed." },
        ],
      },
    ],
  },
  {
    title: "Why formulations evolved",
    time: "14 min",
    part: "FOUNDATIONS",
    visual: "packs",
    description: "Generations are historical categories, not a validated ladder of safety.",
    sections: [
      {
        title: "Generations are a poor shortcut",
        blocks: [
          { kind: "warn", title: "Do not prescribe by generation", text: "Classification varies between publications. Norgestimate is a common trap: often called third generation, yet its estimated COC VTE risk sits with LNG and NET, not automatically with desogestrel or gestodene." },
          { kind: "cards", items: [
            { title: "First generation", text: "Norethisterone made practical oral contraception possible. Androgenic activity can matter for acne, but breakthrough bleeding is not unique to this generation.", tone: "trad" },
            { title: "Second generation", text: "Levonorgestrel enabled effective lower-dose formulations. For eligible CHC starters, EE ≤30 µg with LNG or NET is a reasonable first option to minimise VTE risk.", tone: "trad" },
            { title: "Third generation", text: "Desogestrel and gestodene: more selective, less androgenic. EE-containing COCs with these progestogens have higher estimated VTE rates than EE/LNG. Do not transfer those VTE estimates to the DSG-only pill.", tone: "dsg" },
            { title: "Drospirenone", text: "Anti-androgenic and anti-mineralocorticoid. EE/DRSP COC has a higher VTE estimate than EE/LNG. Anti-mineralocorticoid activity does not make it a treatment for unexplained oedema or a general weight-loss medicine.", tone: "drsp" },
          ]},
        ],
      },
      {
        title: "The estrogen component",
        blocks: [
          { kind: "table", headers: ["Estrogen", "Example", "Prescribing lesson"], rows: [
            ["Ethinylestradiol", "Most established COCs", "20 µg may reduce estrogen symptoms but can give more spotting than 30 µg"],
            ["Estradiol valerate", "Qlaira", "mg E2V cannot be numerically compared with µg EE; phase-specific instructions matter"],
            ["17β-estradiol", "Zoely", "“Bio-identical” does not remove CHC contraindications"],
            ["Estetrol", "Drovelis", "Different hepatic biomarkers do not prove freedom from clinical VTE risk"],
          ]},
          { kind: "why", title: "Connect hepatic effects to harm", text: "Estrogen can increase SHBG, angiotensinogen and coagulation-related proteins. Obesity, thrombophilia, previous VTE and immobilisation change baseline thrombotic risk onto which that effect is added." },
        ],
      },
    ],
  },
  {
    title: "Benefits, harms and risk communication",
    time: "16 min",
    part: "FOUNDATIONS",
    visual: "vte",
    description: "Discuss benefit as well as risk. Use absolute numbers, not only “higher”.",
    sections: [
      {
        title: "VTE in absolute terms",
        blocks: [
          { kind: "graphic", variant: "vte" },
          { kind: "table", headers: ["Exposure", "Estimated VTE per 10,000 women/year"], rows: [
            ["Not pregnant, not using CHC", "About 2"],
            ["EE COC with LNG, NET or norgestimate", "About 5–7"],
            ["EE COC with DSG, gestodene or DRSP", "About 9–12"],
            ["Etonogestrel ring or norelgestromin patch", "About 6–12"],
          ]},
          { kind: "p", text: "A change from about 6 to about 10 per 10,000 is four extra cases per 10,000 users per year. These are not personalised estimates for someone with multiple major risk factors." },
          { kind: "rule", title: "Starting and restarting", text: "VTE risk is particularly relevant after initiation and after restarting CHC following a break of at least a month. There is no general requirement to stop a well-tolerated COC periodically to “clear hormones”." },
        ],
      },
      {
        title: "Arterial events, cancer and counselling",
        blocks: [
          { kind: "p", text: "Stroke and myocardial infarction are different from venous thrombosis. Smoking, hypertension, migraine with aura and other cardiovascular disease alter the arterial-risk assessment. Absence of a DVT history does not make CHC suitable in someone with aura or marked hypertension." },
          { kind: "list", items: [
            "CHC is associated with lower endometrial and ovarian cancer risk; benefits can persist after cessation.",
            "Current or recent hormonal contraception is associated with a small increase in breast-cancer diagnoses. Absolute excess depends strongly on age.",
            "Current breast cancer, completed treatment, family history and a high-risk gene mutation are not the same UKMEC situation.",
            "Evidence does not establish substantial average weight gain from CHC. Fertility generally returns promptly after stopping COC or POP — unlike DMPA.",
          ]},
          { kind: "note", title: "A useful counselling formulation", text: "“This method is effective when used correctly, but daily use leaves room for mistakes. It may also help your bleeding. The estrogen-containing version carries a small clot risk, and your personal history determines whether that risk is acceptable. We can also discuss an estrogen-free pill or a method that does not require daily dosing.”" },
        ],
      },
    ],
  },
  {
    title: "Reading a formulation and choosing a product",
    time: "18 min",
    part: "PRODUCTS",
    visual: "packs",
    description: "Start with the active ingredients, not the brand. “One contraceptive pill daily” is not enough.",
    sections: [
      {
        title: "Eight things to identify",
        blocks: [
          { kind: "steps", items: [
            { title: "Estrogen present or absent", text: "Then the exact estrogen molecule and dose." },
            { title: "Exact progestogen and dose", text: "Then monophasic or multiphasic dosing." },
            { title: "Active and inactive tablets", text: "Number, licensed regimen, and product-specific lateness rules." },
            { title: "Excipients and allergy issues", text: "Generic active ingredients do not imply identical excipients." },
          ]},
          { kind: "graphic", variant: "packs" },
        ],
      },
      {
        title: "Common combined formulations",
        blocks: [
          { kind: "table", headers: ["Formulation", "Examples", "Teaching point"], rows: [
            ["EE 30 + LNG 150", "Microgynon 30, Rigevidon", "Reasonable initial option; lower estimated VTE-risk COC group"],
            ["Same EE/LNG, ED pack", "Microgynon 30 ED", "ED means every-day packaging, not a different active dose"],
            ["EE 30 + DRSP 3 mg", "Yasmin, Lucette", "Anti-androgenic/anti-mineralocorticoid; VTE and potassium considerations"],
            ["EE 20 + DRSP 3 mg", "Eloine", "24/4 pack. Lower EE does not remove contraindications"],
            ["EE 30 + DSG 150", "Marvelon, Gedarel 30/150", "Not the same as DSG 75 µg POP"],
            ["E2 1.5 mg + NOMAC 2.5 mg", "Zoely", "24/4. Meningioma/history contraindication"],
            ["E4 14.2 mg + DRSP 3 mg", "Drovelis", "Remains CHC"],
            ["EE 35 + cyproterone 2 mg", "Dianette / co-cyprindiol", "Reserved for acne/hirsutism indication, not routine contraception-only start"],
          ]},
          { kind: "warn", title: "Qlaira is not a standard 21/7 COC", text: "28 tablets, four active-dose phases, 26 active + 2 placebo. Early and late estrogen-only tablets are still active. Missed-pill and starting rules can require nine days of additional contraception. Do not rearrange the sequence." },
        ],
      },
      {
        title: "POP products and a pragmatic sequence",
        blocks: [
          { kind: "table", headers: ["Formulation", "Examples", "Pattern", "Window"], rows: [
            ["NET 350 µg", "Noriday", "Continuous active", "3 hours"],
            ["LNG 30 µg", "Norgeston", "Continuous; often 35-tablet pack", "3 hours"],
            ["DSG 75 µg", "Cerazette, Cerelle, Hana, Lovima", "Continuous active", "12 hours"],
            ["DRSP 4 mg", "Slynd", "24 active + 4 inactive", "24 hours (active)"],
          ]},
          { kind: "rule", title: "A pragmatic CHC start", text: "For an otherwise eligible person who wants CHC: consider EE/LNG or EE/NET, commonly EE 30/LNG 150. Explain standard and tailored regimens before assuming a brand change is needed. For an oral estrogen-free method, DSG 75 µg is often practical. DRSP may suit a wider window if renal/potassium checks allow." },
          { kind: "note", title: "Hana and Lovima", text: "Legal supply arrangements can differ between brands containing the same active drug. A pharmacist’s P-medicine checklist and an independent prescribing consultation are not interchangeable." },
        ],
      },
    ],
  },
  {
    title: "The initial consultation",
    time: "16 min",
    part: "ASSESSMENT",
    visual: "decisions",
    description: "Gather the information that changes the decision. Start with the patient’s goal.",
    sections: [
      {
        title: "Goals, timeline and diagnoses",
        blocks: [
          { kind: "p", text: "Ask what they want the method to do and what they want to avoid. “The last pill did not suit me” needs exploration: nausea, mood, spotting, headache, a true contraindication, or difficulty remembering it?" },
          { kind: "list", items: [
            "First day and nature of the last normal menstrual bleed; usual cycle length.",
            "Current method, exact product and regimen; when the most recent active pill was taken.",
            "Recent missed tablets, extra breaks, vomiting or diarrhoea.",
            "Dates of intercourse without adequate protection; EC already used, including drug and time.",
            "Recent pregnancy, childbirth, miscarriage, abortion or ectopic pregnancy.",
          ]},
          { kind: "warn", title: "Do not rely on the label “protected sex”", text: "A condom that broke or a pill taken with an enzyme inducer may mean protection was inadequate. Intercourse during a correctly used CHC HFI is not automatically unprotected." },
        ],
      },
      {
        title: "What must be measured?",
        blocks: [
          { kind: "cards", items: [
            { title: "CHC", text: "Document a recent, reliable BP and BMI. A confirmed home average has different UKMEC hypertension thresholds from a clinic reading.", tone: "chc" },
            { title: "Traditional / DSG POP", text: "BP, pelvic examination, thrombophilia screening and reproductive hormone tests are not prerequisites.", tone: "dsg" },
            { title: "DRSP POP", text: "Targeted renal function and potassium where history or medicines identify a risk — not a universal laboratory panel.", tone: "drsp" },
          ]},
          { kind: "rule", title: "A complete plan documents", text: "Formulation, why it was chosen, start date, exact regimen, backup period, EC decision, pregnancy-test follow-up, expected bleeding, urgent symptoms and routine review. Record any off-label use and the discussion around it." },
        ],
      },
    ],
  },
  {
    title: "UKMEC: applying eligibility correctly",
    time: "20 min",
    part: "ASSESSMENT",
    visual: "decisions",
    description: "Use UKMEC 2025. Categories are classifications, not points you add together.",
    sections: [
      {
        title: "Categories 1–4",
        blocks: [
          { kind: "table", headers: ["Category", "Meaning", "Action"], rows: [
            ["1", "No restriction from that condition", "Continue the rest of the assessment"],
            ["2", "Advantages generally outweigh risks", "Usually offer, with counselling"],
            ["3", "Risks usually outweigh advantages", "Usually choose another method; exceptional use needs expert judgement"],
            ["4", "Unacceptable health risk", "Do not use the method"],
          ]},
          { kind: "concept", title: "Initiation versus continuation", text: "A history of stroke can be POP category 2 for initiation, whereas a stroke occurring during POP use is category 3 for continuation. A routine repeat prescription does not automatically convert every diagnosis into a “new-on-method” condition." },
          { kind: "rule", title: "Do not add category numbers", text: "Two category 2 conditions do not arithmetically equal category 4. Combined clinical situations may have their own multiple-risk rules." },
        ],
      },
      {
        title: "Age, smoking, BMI, BP and migraine",
        blocks: [
          { kind: "table", headers: ["Condition", "CHC", "POP"], rows: [
            ["Age under 40, alone", "1", "1"],
            ["Age 40–49, alone", "2", "1"],
            ["Age ≥35, <15 cigarettes/day", "3", "1"],
            ["Age ≥35, ≥15 cigarettes/day", "4", "1"],
            ["Age ≥35, stopped <1 year", "3", "1"],
            ["BMI 30–34.9", "2", "1"],
            ["BMI ≥35", "3", "1"],
            ["Adequately controlled hypertension", "3", "1"],
            ["Clinic SBP ≥160 or DBP ≥100", "4", "1"],
            ["Migraine without aura, initiation", "2", "1"],
            ["Migraine with aura", "4", "2"],
          ]},
          { kind: "warn", title: "Either BP number can change the category", text: "A clinic BP of 128/102 is not acceptable for CHC because the systolic is normal. The diastolic reaches category 4 if confirmed. Vaping has no assigned UKMEC category; prioritise alternatives to CHC because long-term cardiovascular risks remain uncertain." },
        ],
      },
      {
        title: "VTE, breast, liver and DRSP extras",
        blocks: [
          { kind: "table", headers: ["Condition", "CHC", "POP"], rows: [
            ["Previous VTE or current VTE on anticoagulants", "4", "2"],
            ["First-degree relative with VTE", "3", "1"],
            ["Known thrombogenic mutation", "4", "2"],
            ["Current breast cancer / ongoing treatment", "4", "4"],
            ["Breast-cancer treatment completed", "3", "3"],
            ["Family history of breast cancer alone", "1", "1"],
            ["Decompensated cirrhosis", "4", "3"],
            ["Hepatocellular adenoma or carcinoma", "4", "3"],
          ]},
          { kind: "note", title: "UKMEC 2025 family-history change", text: "First-degree family VTE history is not split by the relative’s age at thrombosis in the way many older teaching resources described it." },
          { kind: "warn", title: "DRSP-specific qualification", text: "Severe renal insufficiency and acute renal failure are contraindications in the Slynd SmPC. A generic POP category cannot override a molecule-specific contraindication." },
          { kind: "quiz", question: "A 36-year-old smokes ten cigarettes a day and wants Yasmin for acne. CHC category?", options: ["1 — acne benefit outweighs risk", "2 — counsel and prescribe", "3 — usually choose another method", "4 — unacceptable"], answer: 2, explain: "Age ≥35 with fewer than 15 cigarettes/day is CHC category 3. Yasmin’s anti-androgenic properties do not erase the eligibility problem." },
        ],
      },
    ],
  },
  {
    title: "Pregnancy assessment and initiation",
    time: "16 min",
    part: "ASSESSMENT",
    visual: "hfi",
    description: "When CHC can start, and when extra cover is needed. A negative test is a time-dependent result.",
    sections: [
      {
        title: "When CHC can start",
        blocks: [
          { kind: "guide", id: "chc-start" },
          { kind: "p", text: "The same hormones sit in the pill, patch and ring. Extra cover means condoms used correctly, or no sex that could cause pregnancy. It does not mean withdrawal or calendar tracking." },
        ],
      },
      {
        title: "Reasonable certainty and quick start",
        blocks: [
          { kind: "concept", title: "Which episode can this test exclude?", text: "A negative test shortly after intercourse cannot exclude a very early pregnancy from that episode. A test 21 days after the last relevant UPSI is used in quick-start follow-up." },
          { kind: "p", text: "Useful situations include no intercourse since the last normal period, or correct consistent use of a reliable method. Do not apply “within five days of a period” to any bleed without asking whether it was typical." },
        ],
      },
      {
        title: "When does protection start?",
        blocks: [
          { kind: "table", headers: ["Method", "Immediate protection", "If started outside that timing"], rows: [
            ["Standard EE COC", "Days 1–5 of a natural cycle", "7 consecutive active-pill days"],
            ["Traditional / DSG POP", "Days 1–5", "48 hours of correct use"],
            ["Drospirenone POP", "Day 1", "7 consecutive active-pill days"],
            ["Qlaira", "Day 1", "9 days under applicable guidance"],
            ["Zoely / Drovelis", "Day 1 in product-specific initiation", "Usually 7 days; confirm the product"],
          ]},
          { kind: "rule", title: "Do not invent one universal 7-day rule", text: "It is unnecessarily restrictive for some methods and insufficiently protective in certain Qlaira situations." },
          { kind: "quiz", question: "A patient presents on cycle day 12, had UPSI two days earlier, and wants desogestrel. First action?", options: ["Start DSG with 2 days of condoms and call the earlier sex covered", "Assess EC first, including the copper IUD, then time the POP start around the EC chosen", "Wait for the next period", "Start DRSP instead because the window is wider"], answer: 1, explain: "You cannot simply start DSG and call the preceding intercourse covered. Assess EC first. If UPA is chosen, wait 5 days before starting hormonal contraception." },
        ],
      },
    ],
  },
  {
    title: "Postpartum, breastfeeding and changing circumstances",
    time: "12 min",
    part: "ASSESSMENT",
    visual: "decisions",
    description: "Pregnancy and the postpartum period alter coagulation. Timing since birth matters even if CHC was suitable before pregnancy.",
    sections: [
      {
        title: "CHC postpartum eligibility",
        blocks: [
          { kind: "table", headers: ["Situation", "CHC"], rows: [
            ["Not breastfeeding, <21 days, no extra VTE risks", "3"],
            ["Not breastfeeding, <21 days, additional VTE risks", "4"],
            ["Not breastfeeding, days 21–41, no extra VTE risks", "2"],
            ["Not breastfeeding, days 21–41, additional VTE risks", "3"],
            ["Not breastfeeding, ≥6 weeks", "1 for postpartum status alone"],
            ["Breastfeeding, <6 weeks", "4"],
            ["Primarily breastfeeding, ≥6 weeks to <6 months", "2"],
            ["Breastfeeding, ≥6 months", "1 for breastfeeding status alone"],
          ]},
          { kind: "p", text: "Being seven months postpartum does not cancel migraine with aura or a personal VTE history." },
        ],
      },
      {
        title: "POP, LAM and oral EC while feeding",
        blocks: [
          { kind: "rule", title: "POP is generally category 1 for breastfeeding/postpartum status", text: "Explain product-specific start and backup instructions rather than saying only that it is “safe while feeding”." },
          { kind: "concept", title: "LAM needs all criteria", text: "Amenorrhoeic, fully/nearly fully breastfeeding, and less than six months postpartum. “I am breastfeeding” alone is not enough." },
          { kind: "note", title: "FSRH EC, April 2026", text: "Breastfeeding does not need to be interrupted after a single dose of UPA-EC or LNG-EC. Older leaflets may still say otherwise. This concerns a single emergency dose, not unrelated repeated-dose indications." },
        ],
      },
    ],
  },
  {
    title: "Regimens and the hormone-free interval",
    time: "14 min",
    part: "USE",
    visual: "hfi",
    description: "There is no general health requirement for a monthly withdrawal bleed.",
    sections: [
      {
        title: "Standard, shortened, extended and continuous",
        blocks: [
          { kind: "graphic", variant: "hfi" },
          { kind: "table", headers: ["Regimen", "Active treatment", "HFI", "How to explain it"], rows: [
            ["Standard", "21 consecutive active days", "7 days", "Start the next pack on time regardless of ongoing bleeding"],
            ["Shortened interval", "21 active days", "4 days", "Restart on day 5 of the break"],
            ["Tricycling", "63 active days (9 weeks)", "4 or 7 days", "Three active 21-tablet packs back-to-back; omit ED placebos"],
            ["Continuous", "Active tablets every day", "None scheduled", "There is no required withdrawal bleed"],
            ["Flexible extended", "At least 21 active days; continue until troublesome bleeding 3–4 days", "4 days", "Restart on day 5, then at least 21 active days before another break"],
          ]},
          { kind: "rule", title: "Who can use tailored approaches?", text: "FSRH supports tailored regimens using suitable monophasic CHC products licensed as 21/7. The tailored pattern is generally off-label. Do not automatically apply it to Qlaira, other multiphasic pills, or any POP." },
          { kind: "warn", title: "Why not take a break whenever spotting begins?", text: "Frequent or premature breaks can undermine ovarian suppression. Someone who has taken only ten active COC tablets after their last HFI should not start another four-day break because spotting has appeared." },
        ],
      },
      {
        title: "POP regimens are different",
        blocks: [
          { kind: "list", items: [
            "Traditional NET/LNG POP: every day, indefinitely, no HFI.",
            "DSG POP: every day, no HFI.",
            "DRSP POP: 24 active + 4 placebo, unless missed-pill guidance requires omission of the placebo interval.",
          ]},
          { kind: "p", text: "There is no routine “have a period and restart” instruction for traditional or DSG POP. A bleed does not mark the beginning of a new dosing cycle." },
        ],
      },
    ],
  },
  {
    title: "Missed pills, vomiting and diarrhoea",
    time: "20 min",
    part: "USE",
    visual: "windows",
    description: "Start with the exact product and clock time. “I missed yesterday’s pill” is not precise enough.",
    sections: [
      {
        title: "Lateness versus hours since the last dose",
        blocks: [
          { kind: "graphic", variant: "windows" },
          { kind: "table", headers: ["Method", "Missed if more than this late", "Interval after last correctly timed dose"], rows: [
            ["Traditional POP", "3 hours", "More than 27 hours"],
            ["DSG POP", "12 hours", "More than 36 hours"],
            ["DRSP POP", "24 hours", "More than 48 hours"],
          ]},
        ],
      },
      {
        title: "Traditional or DSG POP",
        blocks: [
          { kind: "steps", items: [
            { title: "Take the most recent missed pill now", text: "Continue the next tablet at the normal time; two tablets in one day may be taken." },
            { title: "Do not take every earlier omitted tablet", text: "Use condoms or abstain until 48 hours of correct dosing have elapsed." },
            { title: "Assess EC", text: "If UPSI occurred from the time the first pill was missed until 48 hours after correct use restarted." },
            { title: "Pregnancy test", text: "21 days after the last relevant UPSI when indicated." },
          ]},
          { kind: "p", text: "For these POPs, intercourse before the lapse is not usually the EC trigger when prior use was correct." },
        ],
      },
      {
        title: "DRSP and standard EE COC",
        blocks: [
          { kind: "cards", items: [
            { title: "DRSP active tablet >24 h late", text: "Take the most recent missed active tablet. Continue. Condoms until 7 consecutive active days. If any of days 18–24 were missed, omit the 4 placebos. If days 1–7 were missed, also assess UPSI during the preceding HFI.", tone: "drsp" },
            { title: "DRSP placebo missed", text: "Discard it and keep the next pack’s active start on schedule. The problem is allowing missed placebos to delay the next active pack.", tone: "drsp" },
            { title: "Standard EE COC, one miss 24–48 h", text: "Take it promptly and continue. If prior use was correct, extra precautions are not usually required. This is not permission to miss one pill repeatedly.", tone: "chc" },
            { title: "Standard EE COC, ≥48 h lapse", text: "Take the most recent missed tablet. Extra protection for 7 active days. First-week errors: assess EC for HFI/week-1 sex. Final-week errors: omit the next HFI.", tone: "chc" },
          ]},
          { kind: "warn", title: "Qlaira: do not use the standard algorithm", text: "A single active tablet more than 12 hours late has day-specific actions, and additional contraception may be needed for nine days. Do not take more than two active tablets in one day." },
          { kind: "quiz", question: "A DSG user remembers at 23:00 that the 08:00 tablet was missed. Best description?", options: ["9 hours late — still inside the window", "15 hours late — apply the missed-pill pathway and 48-hour recovery", "Apply the 7-day CHC rule", "Omit the next pack’s placebos"], answer: 1, explain: "15 hours exceeds the 12-hour DSG window. Explain the recovery interval in actual dates and times." },
        ],
      },
    ],
  },
  {
    title: "Switching methods without a contraceptive gap",
    time: "14 min",
    part: "USE",
    visual: "hfi",
    description: "A switch is not simply a new prescription. Ask whether the old method is still effective, whether sperm from recent intercourse could remain viable, and how long the new method takes to work.",
    sections: [
      {
        title: "The three questions",
        blocks: [
          { kind: "cards", items: [
            { title: "Is the previous method still effective?", text: "Correct use, in date, no interacting medicine, no absorption problem." },
            { title: "Could sperm from recent intercourse remain viable?", text: "Especially before IUD removal or during an extended HFI." },
            { title: "How long until the new method works?", text: "2 days, 7 days or 9 days depending on the product." },
          ]},
          { kind: "p", text: "Do not infer protection from bleeding. A withdrawal bleed during an extended HFI does not prove ovulation cannot occur." },
        ],
      },
      {
        title: "CHC to POP, and between POPs",
        blocks: [
          { kind: "list", items: [
            "Correct CHC in weeks 2–3 of active tablets, or established continuous use: immediate POP usually needs no extra precautions.",
            "Days 1–2 of a correctly scheduled HFI: POP generally without extra protection.",
            "Later in the HFI or first active week, no UPSI since the HFI began: start POP with 2 days (traditional/DSG) or 7 days (DRSP).",
            "Traditional POP to another traditional or DSG: immediate, no gap. Traditional to DRSP: 7 days extra precautions.",
            "Correct DSG generally allows a direct switch to another POP without extra protection.",
          ]},
          { kind: "warn", title: "New estrogen contraindication", text: "If a patient develops migraine with aura during the HFI and wants a POP, stop further estrogen. “Finish the combined pack first” would prioritise convenience over safety." },
        ],
      },
    ],
  },
  {
    title: "Drug interactions: mechanisms and practical decisions",
    time: "16 min",
    part: "USE",
    visual: "decisions",
    description: "Enzyme induction, lamotrigine, antibiotics, tirzepatide and potassium are five different problems.",
    sections: [
      {
        title: "Enzyme induction",
        blocks: [
          { kind: "p", text: "Rifampicin/rifabutin, carbamazepine, phenytoin, phenobarbital, primidone, oxcarbazepine, some antiretrovirals and St John’s wort can increase clearance. Precautions are commonly needed during treatment and for 28 days afterwards." },
          { kind: "rule", title: "Choose a method unaffected by induction where possible", text: "Copper IUD, LNG-IUD and DMPA are usual options. Oral CHC, traditional POP, DSG, DRSP and the implant can be affected. Do not casually double a POP." },
          { kind: "why", title: "Why the implant is not automatic", text: "The implant avoids the gut but still releases a hormone subject to systemic metabolism. Enzyme induction can lower its concentration." },
        ],
      },
      {
        title: "Lamotrigine, antibiotics, tirzepatide, DRSP",
        blocks: [
          { kind: "concept", title: "Lamotrigine is not the usual inducer story", text: "Estrogen-containing contraception increases lamotrigine clearance. Concentrations can fall when CHC starts and rise when estrogen is withdrawn, including during an HFI. Coordinate with the epilepsy specialist before starting, stopping or changing estrogen." },
          { kind: "cards", items: [
            { title: "Antibiotics", text: "Most non-inducing antibiotics do not require extra contraception solely because they are antibiotics. Ask: is this rifampicin? Is vomiting or diarrhoea preventing absorption? Has illness disrupted adherence?" },
            { title: "Tirzepatide", text: "MHRA: switch to a non-oral method or add a barrier for 4 weeks after starting and 4 weeks after each dose increase. This is absorption-related, not CYP induction." },
            { title: "DRSP and potassium", text: "Review renal function and potassium-raising medicines. “POP is UKMEC 1 for this cardiovascular factor” does not override a product-specific contraindication.", tone: "drsp" },
          ]},
        ],
      },
    ],
  },
  {
    title: "Emergency contraception and restarting",
    time: "16 min",
    part: "USE",
    visual: "windows",
    description: "Oral EC mainly prevents or delays ovulation. It does not reliably work after ovulation has already occurred.",
    sections: [
      {
        title: "Compare the options",
        blocks: [
          { kind: "table", headers: ["Option", "Timing", "Key teaching point"], rows: [
            ["Copper IUD", "Usually within 5 days of first UPSI, or within 5 days of earliest estimated ovulation", "Most effective; provides continuing contraception"],
            ["Ulipristal 30 mg", "Up to 120 hours", "Usually more effective oral option; interacts with progestogen restart"],
            ["Levonorgestrel 1.5 mg", "Licensed within 72 hours", "Can permit immediate hormonal restart; later use is guideline-specific"],
          ]},
          { kind: "p", text: "LNG between 72 and 96 hours is off-label; evidence suggests it is ineffective beyond 96 hours. Weight >70 kg or BMI >26 may reduce oral EC effectiveness — consider UPA or double-dose LNG when a copper IUD is not used. Do not double UPA." },
        ],
      },
      {
        title: "Restarting after EC",
        blocks: [
          { kind: "cards", items: [
            { title: "After LNG-EC", text: "Hormonal contraception can usually start immediately. Backup: 2 days traditional/DSG; 7 days DRSP or most CHC; 9 days Qlaira." },
            { title: "After UPA-EC", text: "Wait 5 days (120 hours) before starting or restarting hormones. Then add the method’s establishment period. Write dates and times." },
          ]},
          { kind: "note", title: "A narrow CHC exception", text: "The April 2026 FSRH EC guideline retains a specific exception for someone who restarted CHC after a scheduled HFI and then missed pills later in the first week. Do not extrapolate this to delayed pack starts, POP errors, or every missed CHC episode." },
          { kind: "rule", title: "Follow-up", text: "Pregnancy test 21 days after the last UPSI, even if there is intervening bleeding. Vomiting within 3 hours of oral EC generally needs a replacement dose." },
        ],
      },
    ],
  },
  {
    title: "Unscheduled bleeding: investigate before escalating",
    time: "16 min",
    part: "TROUBLESHOOTING",
    visual: "axis",
    description: "A thin, unstable endometrium can bleed. That does not mean the dose is too low — and it does not mean you skip assessment.",
    sections: [
      {
        title: "Six domains, then a pathway",
        blocks: [
          { kind: "steps", items: [
            { title: "Pregnancy and efficacy", text: "Missed pills, illness, interactions, intercourse, testing." },
            { title: "Bleeding pattern", text: "Onset, duration, volume, postcoital bleeding, pain, change from baseline." },
            { title: "Infection and cervix", text: "STI risk, discharge, screening history. Screening is not a diagnostic test for symptomatic bleeding." },
            { title: "Structural or endometrial causes", text: "Fibroids, polyps, age, obesity, persistent anovulation." },
            { title: "Systemic or medicines", text: "Anticoagulants, bleeding disorders." },
            { title: "Impact", text: "Anaemia, sexual wellbeing, work, desire to continue the method." },
          ]},
        ],
      },
      {
        title: "Four-step pathways",
        blocks: [
          { kind: "cards", items: [
            { title: "CHC pathway", text: "1. Safety and correct use. 2. Optimise the regimen (tailored use after ≥21 active days). 3. Consider formulation change — 20 µg EE may bleed more than 30–35 µg. 4. Reassess and offer an alternative. LNG-IUD can treat heavy bleeding and provide contraception.", tone: "chc" },
            { title: "POP pathway", text: "1. Assess and explain. 2. Optimise use; no HFI “reset” for traditional/DSG. 3. Discuss a different POP — switching generic DSG brands is not a pharmacological fix. Doubling DSG to 150 µg is not a standard licensed regimen. 4. Escalate persistent or newly changed bleeding.", tone: "dsg" },
          ]},
          { kind: "warn", title: "Tranexamic acid and NSAIDs are not a ladder", text: "Tranexamic acid reduces fibrinolysis and can reduce heavy menstrual loss; it does not correct missed-pill risk or treat an STI. Do not automatically combine it with CHC without assessing thrombosis risk." },
          { kind: "quiz", question: "New recurrent postcoital bleeding after a year of stable DSG. First move?", options: ["Double the DSG dose", "Repeat tranexamic acid", "Investigate: pregnancy, infection, cervix and other causes", "Tell her spotting is always normal"], answer: 2, explain: "A new pattern after stable use weakens the “early adaptation” assumption. A previous normal screening result does not complete the evaluation." },
        ],
      },
    ],
  },
  {
    title: "Other adverse effects: structured management",
    time: "16 min",
    part: "TROUBLESHOOTING",
    visual: "decisions",
    description: "A four-line approach: diagnose, support, trial a change, escalate. Do not let the contraceptive carry every treatment burden.",
    sections: [
      {
        title: "Skin, nausea, breasts, bloating",
        blocks: [
          { kind: "cards", items: [
            { title: "Acne and hirsutism", text: "A lower-VTE-risk EE/LNG COC can still improve acne. Co-cyprindiol is not a routine first-choice contraceptive. DRSP-only is not interchangeable with a combined anti-androgenic pill." },
            { title: "Nausea", text: "Consider pregnancy and other medicines. Lowering estrogen may help nausea but can worsen bleeding control." },
            { title: "Breast tenderness", text: "Distinguish diffuse cyclical tenderness from a focal mass or nipple change. HFI-related patterns may improve with a tailored regimen." },
            { title: "Bloating", text: "CHC has not been shown to cause large predictable weight gain. DRSP is not a weight-loss treatment." },
          ]},
        ],
      },
      {
        title: "Mood, libido, headache and blood pressure",
        blocks: [
          { kind: "list", items: [
            "Mood: assess severity and risk. Some specific combined formulations have evidence in selected premenstrual disorders; that does not mean DRSP generally treats depression.",
            "Libido: CHC can increase SHBG and reduce free testosterone, but that biochemical effect does not reliably predict experience.",
            "Headache: new aura on CHC requires cessation of estrogen. Withdrawal headaches may improve with a tailored regimen.",
            "Blood pressure: CHC can raise BP via angiotensinogen. Controlled hypertension remains CHC category 3; clinic ≥160/100 is category 4. Dose reduction cannot convert a contraindicated class into an acceptable method.",
          ]},
        ],
      },
    ],
  },
  {
    title: "Complex patients, review and stopping",
    time: "14 min",
    part: "TROUBLESHOOTING",
    visual: "decisions",
    description: "Obesity, surgery, epilepsy, cancer, liver disease and age 50 each split safety from effectiveness.",
    sections: [
      {
        title: "Complex situations",
        blocks: [
          { kind: "cards", items: [
            { title: "Obesity", text: "Increases baseline VTE risk. Do not arbitrarily double routine pills for body weight. Access to contraception is not conditional on weight loss." },
            { title: "Bariatric surgery", text: "UKMEC safety classification does not prove adequate oral absorption. Patch/ring still contain estrogen." },
            { title: "Epilepsy", text: "Identify the exact antiseizure medicines. Do not abruptly alter them to solve a contraception problem. Lamotrigine needs care around estrogen start and stop." },
            { title: "Breast cancer / severe liver disease", text: "Current breast cancer: hormonal methods including POP are generally UKMEC 4. Estrogen-free is not synonymous with appropriate." },
          ]},
        ],
      },
      {
        title: "Perimenopause, review and safety-netting",
        blocks: [
          { kind: "rule", title: "Age 50 and 55", text: "FSRH advises moving away from CHC at age 50 to a suitable alternative. Eligible POP users can generally continue to 55. FSH on CHC is not a dependable menopause test. HRT is not contraception." },
          { kind: "list", items: [
            "At review: goals, new diagnoses, migraine/aura, smoking, medicines, pregnancy plans, adherence, adverse effects.",
            "CHC: review BP and relevant BMI. A POP review does not need unnecessary invasive examinations in an asymptomatic person.",
            "Urgent symptoms: new unilateral leg pain/swelling, sudden breathlessness or chest pain, coughing blood, sudden neurological symptoms, severe unusual headache, collapse, or severe abdominal pain with possible pregnancy.",
          ]},
        ],
      },
    ],
  },
  {
    title: "Worked clinical cases",
    time: "22 min",
    part: "PRACTICE",
    visual: "decisions",
    description: "Twelve scenarios. Decide first, then reveal the reasoning.",
    sections: [
      {
        title: "Starting, safety and missed pills",
        blocks: [
          { kind: "quiz", question: "Case 1. Healthy 24-year-old wants the “newest and safest” pill. Best first CHC option if she chooses combined hormones?", options: ["The newest marketed estrogen", "EE/DRSP because it is anti-androgenic", "An EE/LNG formulation with no more than 30 µg EE", "Co-cyprindiol"], answer: 2, explain: "“Newest” is not a clinical safety category. EE/LNG ≤30 µg combines efficacy, familiarity and a lower estimated VTE risk." },
          { kind: "quiz", question: "Case 2. Evolving zigzag visual symptoms then migraine on a 30 µg EE COC. Next step?", options: ["Drop to 20 µg EE", "Switch to Yasmin", "Stop CHC and arrange an estrogen-free or non-hormonal transition", "Reassure — photophobia is common"], answer: 2, explain: "CHC with migraine aura is UKMEC 4. Lowering the estrogen dose does not remove the contraindication." },
          { kind: "quiz", question: "Case 4. DSG taken 15 hours late, intercourse after the tablet became late. Integrated plan?", options: ["Inside the window — no action", "Missed-pill pathway, 48-hour backup, assess EC using the intercourse timeline", "7 days of condoms and omit placebos", "Double the next tablet"], answer: 1, explain: "Exceeds the 12-hour window. If UPA is selected, apply its restart rules." },
          { kind: "quiz", question: "Case 5. Slynd active tablet missed on day 20. Extra action?", options: ["Treat like continuous DSG", "Take the missed tablet, 7-day backup, and omit the upcoming placebo interval when indicated", "Ignore — it is near the end of the pack", "Restart on day 1 after a bleed"], answer: 1, explain: "An active-tablet error in the final seven active days plus a scheduled 4-day gap extends the interruption." },
        ],
      },
      {
        title: "Complex transitions",
        blocks: [
          { kind: "quiz", question: "Case 3. Age 37, smokes 10/day, wants Yasmin for acne. Framing?", options: ["CHC 1 if BP is normal", "CHC 3 — discuss cessation, offer estrogen-free/non-hormonal options, treat acne separately", "CHC 4", "Prescribe Yasmin with a disclaimer"], answer: 1, explain: "Age ≥35 and <15 cigarettes/day is CHC category 3. Do not average a normal BP against the smoking category." },
          { kind: "quiz", question: "Case 6. Breastfeeding at 4 weeks, wants her old COC. CHC category?", options: ["1", "2", "3", "4"], answer: 3, explain: "CHC is UKMEC 4 before 6 weeks postpartum while breastfeeding. A POP can generally be used." },
          { kind: "quiz", question: "Case 7. Established COC user starts rifampicin, intercourse 2 days ago. Preferred EC?", options: ["UPA 30 mg", "A vaginal ring to bypass the gut", "Copper IUD where appropriate; UPA is unsuitable with induction", "Double the COC"], answer: 2, explain: "Rifampicin is a potent inducer. Route of administration and susceptibility to hepatic metabolism are not the same thing." },
          { kind: "quiz", question: "Case 10. Clinic BP 168/104, repeated, in a CHC user. Action?", options: ["Change to 20 µg EE", "CHC category 4: stop estrogen, assess BP urgently, plan a safe alternative", "Repeat in 6 months", "Switch to the patch"], answer: 1, explain: "Dose reduction cannot convert a contraindicated drug class into an acceptable method." },
          { kind: "quiz", question: "Case 11. Current breast cancer treatment, asks for Cerazette because it has no estrogen. Framing?", options: ["UKMEC 1", "UKMEC 2", "UKMEC 4 for hormonal methods including POP; discuss non-hormonal options", "Any POP is acceptable"], answer: 2, explain: "Estrogen-free is not synonymous with appropriate for all estrogen contraindications." },
        ],
      },
    ],
  },
  {
    title: "Self-assessment with explained answers",
    time: "14 min",
    part: "PRACTICE",
    visual: "decisions",
    description: "Ten checks on the reasoning, not the brand names.",
    sections: [
      {
        title: "Explain these",
        blocks: [
          { kind: "quiz", question: "Why is the traditional POP window shorter than DSG’s?", options: ["Traditional users need more discipline", "Mucus effect is less tolerant of delay; DSG suppresses ovulation more consistently", "Traditional pills contain less hormone overall", "A regulator chose 3 hours at random"], answer: 1, explain: "The difference is pharmacological." },
          { kind: "quiz", question: "Does monthly withdrawal bleeding protect the endometrium during CHC use?", options: ["Yes — it is a necessary cleanse", "No. Progestogen restrains proliferation; the bleed is a withdrawal response, not required"], answer: 1, explain: "Suitable monophasic tailored regimens can safely reduce or omit scheduled bleeds." },
          { kind: "quiz", question: "Can UKMEC categories be added together?", options: ["Yes: 2 + 2 = 4", "No. They are classifications, not points"], answer: 1, explain: "Several factors can change eligibility through a specifically listed multiple-risk condition, but the arithmetic is wrong." },
          { kind: "quiz", question: "Why is an implant not an automatic solution for enzyme induction?", options: ["It still releases hormone subject to systemic metabolism", "Implants contain estrogen", "They always fail after 6 months"], answer: 0, explain: "LNG-IUD, copper IUD or DMPA may avoid the relevant interaction, subject to eligibility." },
          { kind: "quiz", question: "Why not prescribe a 4-day break for spotting on DSG?", options: ["It can permit loss of protection; the 4-day HFI strategy belongs to selected tailored CHC regimens", "DSG users never bleed", "You should use a 7-day break instead"], answer: 0, explain: "Both methods happen to be tablets. Their regimens are not interchangeable." },
          { kind: "quiz", question: "Why is “natural estrogen means no clot risk” incorrect?", options: ["It is correct", "Estrogen-containing formulations still have systemic and hepatic effects; molecular novelty does not remove CHC contraindications"], answer: 1, explain: "Laboratory markers are surrogate outcomes." },
        ],
      },
    ],
  },
  {
    title: "Consultation templates and glossary",
    time: "10 min",
    part: "PRACTICE",
    visual: "decisions",
    description: "The purpose of expert prescribing is not to memorise every brand.",
    sections: [
      {
        title: "What a safe record demonstrates",
        blocks: [
          { kind: "steps", items: [
            { title: "Why this method is medically eligible", text: "UKMEC applied to the actual diagnoses, with initiation vs continuation clear." },
            { title: "Why it should be effective here", text: "Medicines, absorption, adherence and circumstances." },
            { title: "Pregnancy exclusion or quick-start uncertainty", text: "Including EC and the 21-day test date." },
            { title: "Why this formulation and regimen", text: "Fits the patient’s goals; off-label use is documented." },
            { title: "Missed dose, vomiting, new medicines", text: "Written dates, not only “use protection”." },
            { title: "Safety-net and review", text: "Urgent symptoms and a planned review." },
          ]},
          { kind: "table", headers: ["Term", "Meaning"], rows: [
            ["CHC / COC", "Combined hormonal contraception / combined oral contraceptive"],
            ["HFI", "Hormone-free interval, including placebo days"],
            ["UPSI", "Unprotected sexual intercourse, including relevant contraceptive failure"],
            ["I / C", "Initiation / continuation classifications in MEC tables"],
            ["Off-label", "Use outside the marketing authorisation; may still be guideline-supported"],
            ["LAM", "Lactational amenorrhoea method — only when all criteria are met"],
          ]},
        ],
      },
    ],
  },
  {
    title: "Sources, version control and further reading",
    time: "8 min",
    part: "PRACTICE",
    visual: "decisions",
    description: "This is a substantial self-study manual. It does not confer accreditation or prescribing competence.",
    sections: [
      {
        title: "Core documents",
        blocks: [
          { kind: "list", items: [
            "FSRH Combined Hormonal Contraception, January 2019, amended October 2023.",
            "FSRH Progestogen-only Pills, August 2022, amended April 2026.",
            "CoSRH UKMEC 2025 (December 2025). This manual does not invent a “UKMEC 2026” edition.",
            "FSRH Emergency Contraception, March 2017, amended April 2026.",
            "NICE NG88 for heavy menstrual bleeding investigation principles.",
            "MHRA GLP-1 advice, including tirzepatide and oral contraception.",
            "Current SmPCs for the actual dispensed product: Qlaira, Zoely, Eloine, Slynd, Drovelis, Noriday, Norgeston.",
          ]},
          { kind: "note", title: "Scope and limits", text: "Oral contraception is the main subject. Patch, ring, EC and LARC appear where they explain an alternative or a transition. BNF full-text access was restricted during preparation; interaction details requiring a current BNF check are identified rather than represented as independently verified against it. Evidence review date: 20 September 2026." },
          { kind: "rule", title: "How to maintain this manual", text: "Review eligibility tables when a new UKMEC edition appears. Review product instructions when a pack or licence changes. Check EC updates separately. Check interaction resources at the time of prescribing." },
        ],
      },
    ],
  },
];
