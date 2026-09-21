export type Cover = "none" | "seven" | "wait";

export type GuideRow = {
  situation: string;
  cover: Cover;
  label: string;
};

export type GuideTile = {
  id: string;
  title: string;
  hint: string;
  icon: string;
  cover: Cover;
  start: string;
  rows: GuideRow[];
};

export type GuidePanel = {
  id: string;
  number: string;
  title: string;
  lede: string;
  takeaway: string;
  note?: string;
  tiles: GuideTile[];
};

export const chcStartPanels: GuidePanel[] = [
  {
    id: "scratch",
    number: "1",
    title: "Start from scratch",
    lede: "Starting CHC in someone not already using hormonal contraception.",
    takeaway: "Days 1–5 of a natural cycle are immediate. Any other day needs 7 days of extra cover.",
    tiles: [
      {
        id: "cycling",
        title: "Cycling, not pregnant",
        hint: "Days 1–5 immediate. Any other day needs 7 days.",
        icon: "/guide/icon-calendar-cycle.png",
        cover: "none",
        start: "Day 1–5 of a natural menstrual cycle, if reasonably certain she is not pregnant.",
        rows: [
          { situation: "Day 1–5 of the menstrual cycle", cover: "none", label: "No extra cover" },
          { situation: "Any other time if reasonably certain she is not pregnant", cover: "seven", label: "Yes, 7 days" },
        ],
      },
      {
        id: "amenorrhoea",
        title: "Amenorrhoeic (no periods)",
        hint: "Start any time if certain not pregnant. Extra cover for 7 days.",
        icon: "/guide/icon-uterus.png",
        cover: "seven",
        start: "Start any time if reasonably certain she is not pregnant.",
        rows: [
          { situation: "Reasonably certain she is not pregnant", cover: "seven", label: "Yes, 7 days" },
        ],
      },
    ],
  },
  {
    id: "hormone",
    number: "2",
    title: "Switch from another hormone",
    lede: "Assume the previous method is in date, used correctly, and there is no interacting medicine or absorption problem.",
    takeaway: "If the previous method already suppresses ovulation, CHC can usually start without extra cover. Traditional POP is the exception.",
    tiles: [
      {
        id: "other-chc",
        title: "Other CHC",
        hint: "Pill, patch or ring. Day after last active tablet if used correctly.",
        icon: "/guide/icon-chc-methods.png",
        cover: "none",
        start: "The day after the last active tablet, patch or ring.",
        rows: [
          { situation: "Previous CHC used correctly", cover: "none", label: "No extra cover" },
        ],
      },
      {
        id: "trad-pop",
        title: "Traditional POP",
        hint: "Norethisterone or LNG. Immediate start, then 7 days of extra cover.",
        icon: "/guide/icon-pop-pack.png",
        cover: "seven",
        start: "Immediately if the POP was used correctly.",
        rows: [
          { situation: "Correct traditional POP use", cover: "seven", label: "Yes, 7 days" },
        ],
      },
      {
        id: "dsg-pop",
        title: "Desogestrel POP",
        hint: "After the last desogestrel pill. No extra cover.",
        icon: "/guide/icon-pop-pack.png",
        cover: "none",
        start: "The next day after the last desogestrel pill.",
        rows: [
          { situation: "Correct DSG use — ovulation already suppressed", cover: "none", label: "No extra cover" },
        ],
      },
      {
        id: "injectable",
        title: "Injectable (depot)",
        hint: "Any time before the next injection is due.",
        icon: "/guide/icon-injection.png",
        cover: "none",
        start: "Any time before the next injection is due.",
        rows: [
          { situation: "Injection still within its effective interval", cover: "none", label: "No extra cover" },
        ],
      },
      {
        id: "implant",
        title: "Implant",
        hint: "Any time before the implant expires.",
        icon: "/guide/icon-implant.png",
        cover: "none",
        start: "Any time up to when the implant is due for removal.",
        rows: [
          { situation: "Implant still in date", cover: "none", label: "No extra cover" },
        ],
      },
    ],
  },
  {
    id: "iud",
    number: "3",
    title: "Switch from an IUD",
    lede: "Sperm may remain viable after removal. Keep the device until CHC is effective, or confirm the required interval without unprotected sex.",
    takeaway: "Copper IUD on days 1–5 is immediate. An LNG-IUD is not CHC-level ovulation cover at removal.",
    tiles: [
      {
        id: "cu-iud",
        title: "Copper IUD",
        hint: "Day 5 is immediate. Later in the cycle needs 7 days.",
        icon: "/guide/icon-copper-iud.png",
        cover: "none",
        start: "Up to day 5 of a menstrual cycle, or later if reasonably certain she is not pregnant.",
        rows: [
          { situation: "Up to day 5 of the menstrual cycle", cover: "none", label: "No extra cover" },
          { situation: "Any other time in the cycle", cover: "seven", label: "Yes, 7 days" },
        ],
      },
      {
        id: "lng-iud",
        title: "LNG-IUD",
        hint: "Start immediately. The coil can come out the same day. Extra cover for 7 days.",
        icon: "/guide/icon-lng-iud.png",
        cover: "seven",
        start: "Start immediately. The device can be removed the same day.",
        rows: [
          { situation: "LNG-IUD in situ and CHC started today", cover: "seven", label: "Yes, 7 days" },
        ],
      },
    ],
  },
  {
    id: "pregnancy",
    number: "4",
    title: "After pregnancy",
    lede: "Postpartum VTE risk is raised. Timing since birth matters even if CHC was suitable before pregnancy.",
    takeaway: "Do not start CHC while breastfeeding under 6 weeks — that is UKMEC 4. After day 21 without extra VTE risk, treat as cycling or amenorrhoeic.",
    note: "Not breastfeeding. Additional VTE risks or breastfeeding change the category before you reach a start rule.",
    tiles: [
      {
        id: "postpartum",
        title: "Postpartum, not breastfeeding",
        hint: "Day 21 if no extra VTE risk. Then treat as cycling or amenorrhoeic.",
        icon: "/guide/icon-postpartum.png",
        cover: "wait",
        start: "From day 21 if there are no additional VTE risks. Breastfeeding under 6 weeks is UKMEC 4.",
        rows: [
          { situation: "After day 21, cycles returned, by day 5", cover: "none", label: "No extra cover" },
          { situation: "After day 21, cycles returned, after day 5", cover: "seven", label: "Yes, 7 days" },
          { situation: "After day 21, still amenorrhoeic", cover: "seven", label: "Yes, 7 days" },
          { situation: "Breastfeeding under 6 weeks", cover: "wait", label: "Do not start CHC" },
        ],
      },
    ],
  },
  {
    id: "abortion",
    number: "5",
    title: "After abortion",
    lede: "Once the clinical situation and timing are established, immediate initiation is often appropriate if CHC is otherwise eligible.",
    takeaway: "By day 5 after abortion, standard EE CHC generally needs no extra cover. Later starts need 7 days if pregnancy is reasonably excluded.",
    tiles: [
      {
        id: "after-abortion",
        title: "First or second trimester",
        hint: "By day 5, or later if not pregnant.",
        icon: "/guide/icon-calendar-cycle.png",
        cover: "none",
        start: "By day 5 after abortion, or later if reasonably certain she is not pregnant.",
        rows: [
          { situation: "Up to and including day 5", cover: "none", label: "No extra cover" },
          { situation: "Any other time if reasonably certain she is not pregnant", cover: "seven", label: "Yes, 7 days" },
        ],
      },
    ],
  },
  {
    id: "ec",
    number: "6",
    title: "After emergency contraception",
    lede: "LNG and UPA are not interchangeable for restart timing. Write dates, not only “use protection”.",
    takeaway: "After LNG-EC, start CHC immediately with 7 days of extra cover. After UPA, wait 5 days, then start, then another 7 days.",
    tiles: [
      {
        id: "lng-ec",
        title: "After LNG-EC",
        hint: "Start immediately. Extra cover for 7 days.",
        icon: "/guide/icon-white-tablet.png",
        cover: "seven",
        start: "Start CHC immediately after levonorgestrel EC.",
        rows: [
          { situation: "CHC started after LNG-EC", cover: "seven", label: "Yes, 7 days" },
        ],
      },
      {
        id: "upa-ec",
        title: "After UPA-EC",
        hint: "Wait 5 days, then start CHC, then 7 days extra cover.",
        icon: "/guide/icon-upa-tablet.png",
        cover: "wait",
        start: "Wait 5 days after ulipristal. Starting too soon can make UPA fail.",
        rows: [
          { situation: "First 5 days after UPA", cover: "wait", label: "Do not start CHC" },
          { situation: "Then start CHC and use extra cover", cover: "seven", label: "Then 7 days" },
        ],
      },
    ],
  },
];

export const chcStartKeys = [
  "Always be reasonably certain the person is not pregnant before starting CHC.",
  "A reasonable first CHC to reduce VTE risk is ≤30 µg ethinylestradiol with levonorgestrel or norethisterone.",
  "A 7-day hormone-free interval is not required — tailored regimens are safe and effective on a suitable monophasic 21/7 product.",
  "Breastfeeding under 6 weeks postpartum is UKMEC 4 — do not start CHC.",
  "After ulipristal, wait 5 days before starting CHC.",
];

export const chcStartSafety = [
  "Calf pain, chest pain or coughing blood",
  "New neurological symptoms or a new migraine",
  "Any new UKMEC 3 or 4 diagnosis",
];
