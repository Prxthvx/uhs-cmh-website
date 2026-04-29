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
  // Healthcare Professionals
  {
    id: "hp-1",
    title: "What To Expect at Your First OB Visit: Step-by-Step Guide",
    description:
      "A comprehensive step-by-step walkthrough of your very first OB appointment — what tests are done, what questions to ask, and what the doctor checks so you walk in prepared and confident.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    duration: "12:34",
    tags: ["prenatal care", "OB-GYN", "first appointment", "what to expect"],
    youtubeId: "qOBhAufdGA0",
  },
  {
    id: "hp-2",
    title: "Breastfeeding Tips for New Moms from a Lactation Consultant",
    description:
      "Registered nurse and IBCLC-certified lactation consultant Debbie Frye walks through the most common breastfeeding challenges, proper latching techniques, and when to seek professional help.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
    duration: "15:20",
    tags: ["breastfeeding", "lactation", "newborn care", "IBCLC"],
    youtubeId: "FM7yVudLjiE",
  },
  {
    id: "hp-3",
    title: "OB-GYN Answers Your Most Common First Trimester Questions",
    description:
      "An OB-GYN answers the questions every expectant mother has in the first trimester — nausea, spotting, safe medications, what's normal, and warning signs to watch for immediately.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    duration: "18:45",
    tags: ["first trimester", "OB-GYN", "FAQs", "prenatal"],
    youtubeId: "Jr4nt6XM3gA",
  },

  // Postpartum Testimonials
  {
    id: "pt-1",
    title: "Talking Postpartum Depression — Emily's Story",
    description:
      "Emily shares her raw and honest experience with postpartum depression: the warning signs she missed, the moment she finally sought help, and how she rebuilt her life with the right support.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
    duration: "22:10",
    tags: ["postpartum depression", "mental health", "real story", "PPD"],
    youtubeId: "F4NMCPBXFcY",
  },
  {
    id: "pt-2",
    title: "Postpartum Depression — Real Mom Stories",
    description:
      "Multiple mothers share their personal journeys through postpartum depression, the different ways it showed up in their lives, and the resources that helped them recover.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    duration: "16:00",
    tags: ["postpartum depression", "mom stories", "recovery", "mental health"],
    youtubeId: "c1FlrDJvN7I",
  },
  {
    id: "pt-3",
    title: "Talking Postpartum Depression — Allison's Story",
    description:
      "Allison's postpartum depression looked different from what she expected — it came out as rage and detachment, not sadness. Her story helps normalize the many faces of PPD.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&h=400&fit=crop",
    duration: "19:30",
    tags: ["postpartum depression", "PPD", "real story", "healing"],
    youtubeId: "Rr_lXsMJXoE",
  },

  // New Parent Journeys
  {
    id: "np-1",
    title: "7 Ways to Support Your Partner During Pregnancy",
    description:
      "Dad University shares practical, actionable ways partners can be truly supportive during pregnancy — beyond just attending appointments, including emotional presence, household adjustments, and communication.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
    duration: "14:15",
    tags: ["partner support", "dad", "pregnancy support", "relationship"],
    youtubeId: "_7kAW0lUVAk",
  },
  {
    id: "np-2",
    title: "The Best Ways to Support Your Partner Postpartum — Dad's Guide",
    description:
      "A guide for partners and dads covering the critical postpartum period — how to take over household tasks, support breastfeeding, recognize postpartum depression, and be a true co-parent from day one.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
    duration: "20:40",
    tags: ["partner support", "postpartum", "dad guide", "new parent"],
    youtubeId: "wD6WXclb2bY",
  },
  {
    id: "np-3",
    title: "First Trimester Guide for Partners — What You Need to Know",
    description:
      "An OB-GYN and pediatrician team up to walk partners through everything happening in the first trimester — physical changes, emotional shifts, how to help with symptoms, and what to expect at appointments.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
    duration: "25:00",
    tags: ["first trimester", "partner", "dad", "pregnancy guide"],
    youtubeId: "wubyy8atoqQ",
  },

  // Mental Wellbeing
  {
    id: "mw-1",
    title: "Anxiety During Pregnancy: You're Not Alone",
    description:
      "A therapist specializing in perinatal mental health discusses the prevalence of prenatal anxiety, what it looks like, how it differs from normal worry, and practical coping strategies backed by evidence.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop",
    duration: "17:30",
    tags: ["anxiety", "pregnancy", "perinatal mental health", "therapy"],
    youtubeId: "-9zIAIyxOHA",
  },
  {
    id: "mw-2",
    title: "Breastfeeding Tips 101 — Latch, Positions, Pumping & More",
    description:
      "A comprehensive guide covering the essentials of breastfeeding: achieving a good latch, different feeding positions, pumping strategies, nipple care, and building a healthy milk supply.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    duration: "11:45",
    tags: ["breastfeeding", "latching", "pumping", "newborn nutrition"],
    youtubeId: "-Ds3QW3CWJ0",
  },
  {
    id: "mw-3",
    title: "Postpartum Depression & Grief — Real Stories of Two Women",
    description:
      "Two women share their honest experiences — one with postpartum depression and one processing grief during motherhood. Their stories highlight how loss, identity, and mental health intersect after birth.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop",
    duration: "23:15",
    tags: ["postpartum depression", "grief", "mental health", "real stories"],
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
