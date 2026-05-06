export type VideoCategory =
  | "Healthcare Professionals"
  | "Postpartum Testimonials"
  | "New Parent Journeys"
  | "Mental Wellbeing";

export interface Video {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  thumbnail: string;
  duration: string;
  tags: string[];
  youtubeId: string;
}

export const videos: Video[] = [
  // ── Healthcare Professionals ─────────────────────────────────────────────────
  {
    id: "hp-1",
    title: "What To Expect at Your First OB Visit: Step-by-Step Guide",
    description:
      "A comprehensive step-by-step walkthrough of your very first OB appointment — what tests are done, what questions to ask, and what the doctor checks so you walk in prepared and confident. Published by Emory Healthcare.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    duration: "12:34",
    tags: ["prenatal care", "OB-GYN", "first appointment", "what to expect"],
    // Source: Emory Healthcare (verified reputable academic medical center)
    youtubeId: "qOBhAufdGA0",
  },
  {
    id: "hp-2",
    title: "Breastfeeding Tips for New Moms — Inspira Health Lactation Consultant",
    description:
      "Registered nurse and IBCLC-certified lactation consultant Debbie Frye from Inspira Health walks through the most common breastfeeding challenges, proper latching techniques, and when to seek professional help.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
    duration: "15:20",
    tags: ["breastfeeding", "lactation", "newborn care", "IBCLC"],
    // Source: Inspira Health — hospital system, IBCLC-certified presenter (verified)
    youtubeId: "FM7yVudLjiE",
  },
  {
    id: "hp-3",
    title: "OB-GYN Answers Your Most Common First Trimester Questions",
    description:
      "An OB-GYN from the What to Expect team answers the questions every expectant mother has in the first trimester — nausea, spotting, safe medications, what's normal, and warning signs to watch for immediately.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    duration: "18:45",
    tags: ["first trimester", "OB-GYN", "FAQs", "prenatal"],
    // Source: What to Expect (leading maternal health resource) — published Jan 2022 (verified)
    youtubeId: "Jr4nt6XM3gA",
  },

  // ── Postpartum Testimonials ──────────────────────────────────────────────────
  {
    id: "pt-1",
    title: "Talking Postpartum Depression — Emily's Story",
    description:
      "Part of the U.S. Office on Women's Health \"Talking PPD\" public health campaign. Emily shares her raw and honest experience with postpartum depression: the warning signs she missed, the moment she finally sought help, and how she rebuilt her life with the right support. Content warning: mentions of self-harm and suicidal thoughts.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
    duration: "22:10",
    tags: ["postpartum depression", "mental health", "real story", "PPD"],
    // Source: U.S. Dept of Health & Human Services — Office on Women's Health (verified federal source)
    youtubeId: "F4NMCPBXFcY",
  },
  {
    id: "pt-2",
    title: "Postpartum Depression — Real Mom Stories",
    description:
      "Multiple mothers share their personal journeys through postpartum depression, the different ways it showed up in their lives, and the resources that helped them recover. Published by BabyCenter.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    duration: "16:00",
    tags: ["postpartum depression", "mom stories", "recovery", "mental health"],
    // Source: BabyCenter — established pregnancy and parenting resource (verified)
    youtubeId: "c1FlrDJvN7I",
  },
  {
    id: "pt-3",
    title: "Talking Postpartum Depression — Allison's Story",
    description:
      "Part of the U.S. Office on Women's Health \"Talking PPD\" campaign. Allison's postpartum depression looked different from what she expected — it came out as rage and detachment, not sadness. Her story helps normalize the many faces of PPD. Content warning: mentions of self-harm.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&h=400&fit=crop",
    duration: "19:30",
    tags: ["postpartum depression", "PPD", "real story", "healing"],
    // Source: U.S. Dept of Health & Human Services — Office on Women's Health (verified federal source)
    youtubeId: "Rr_lXsMJXoE",
  },

  // ── New Parent Journeys ──────────────────────────────────────────────────────
  {
    id: "np-1",
    title: "7 Ways to Support Your Partner During Pregnancy",
    description:
      "Dad University shares practical, actionable ways partners can be truly supportive during pregnancy — beyond just attending appointments, including emotional presence, household adjustments, and communication strategies.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
    duration: "14:15",
    tags: ["partner support", "dad", "pregnancy support", "relationship"],
    // Source: Dad University — Jason Kreidman, established parenting education channel (verified)
    youtubeId: "_7kAW0lUVAk",
  },
  {
    id: "np-2",
    title: "The Ultimate Dad Guide to Pregnancy — Dad University",
    description:
      "Dad University covers everything a partner needs to know from the first trimester through delivery and early postpartum — how to handle appointments, what changes to expect, emotional support techniques, and how to be a true co-parent from day one.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
    duration: "20:40",
    tags: ["partner support", "pregnancy guide", "dad guide", "new parent"],
    // Source: Dad University — verified trusted parenting education channel (replaces previously unverified channel)
    youtubeId: "nroBoxuTAkU",
  },
  {
    id: "np-3",
    title: "1st Trimester Guide for Partners — OB-GYN & Pediatrician Tips",
    description:
      "A pregnant OB-GYN and her pediatrician husband walk partners through everything happening in the first trimester — physical changes, emotional shifts, how to help with symptoms, and what to expect at appointments. From The Doctors Bjorkman.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
    duration: "25:00",
    tags: ["first trimester", "partner", "dad", "pregnancy guide"],
    // Source: The Doctors Bjorkman — OB-GYN + Pediatrician couple, published Jan 2025 (verified)
    youtubeId: "wubyy8atoqQ",
  },

  // ── Mental Wellbeing ─────────────────────────────────────────────────────────
  {
    id: "mw-1",
    title: "Doc Talk: Anxiety and Fear During Pregnancy",
    description:
      "Certified Nurse-Midwife Suzanne Barton (Women's Health Connecticut) discusses the prevalence of prenatal anxiety, what it looks like, how it differs from normal pregnancy worry, and practical evidence-based coping strategies for managing fear during pregnancy.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop",
    duration: "17:30",
    tags: ["anxiety", "pregnancy", "perinatal mental health", "midwife"],
    // Source: Women's Health Connecticut — CNM Suzanne Barton (verified reputable clinical source)
    // Replaces previous ID which was incorrectly labeled as anxiety but showed PPD content
    youtubeId: "xV7KU1MP81s",
  },
  {
    id: "mw-2",
    title: "Postpartum Depression: Real Stories of Two Women — Geisinger Health",
    description:
      "Two women share their deeply personal journeys through postpartum depression with Geisinger Health. Their stories highlight how PPD can present differently in every mother — and how with the right care and support, recovery is possible.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    duration: "11:45",
    tags: ["postpartum depression", "real stories", "Geisinger", "mental health"],
    // Source: Geisinger Health — major Pennsylvania health system (verified)
    // Replaces previous ID which was a breastfeeding video incorrectly placed in Mental Wellbeing
    youtubeId: "-9zIAIyxOHA",
  },
  {
    id: "mw-3",
    title: "Postnatal Depression — Leanne's Story",
    description:
      "Leanne, a young mother from Manchester, shares her honest experience with postnatal depression in this UK perinatal mental health series. Her story — produced with women who have lived experience of perinatal mental health conditions — helps normalize seeking help.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop",
    duration: "23:15",
    tags: ["postnatal depression", "PPD", "mental health", "real story"],
    // Source: ERGSY — UK perinatal mental health education series (verified)
    youtubeId: "DRJF2ddmHWU",
  },
];

export const videoCategories: {
  key: VideoCategory;
  description: string;
  image: string;
}[] = [
  {
    key: "Healthcare Professionals",
    description:
      "Expert insights from OB-GYNs, midwives, lactation consultants, and patient advocates.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
  },
  {
    key: "Postpartum Testimonials",
    description:
      "Honest, unfiltered stories from mothers navigating the postpartum experience.",
    image:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
  },
  {
    key: "New Parent Journeys",
    description:
      "Diverse perspectives on the path to parenthood — every journey is different.",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
  },
  {
    key: "Mental Wellbeing",
    description:
      "Support for anxiety, depression, grief, and emotional wellness throughout the maternal journey.",
    image:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop",
  },
];
