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
}

export const videos: Video[] = [
  // Healthcare Professionals
  {
    id: "hp-1",
    title: "What Every New Mom Should Know — An OB-GYN's Perspective",
    description:
      "Dr. Priya Sharma shares essential advice for expectant and new mothers, covering prenatal care milestones, warning signs to watch for, and how to build a trusting relationship with your care team.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    duration: "12:34",
    tags: ["prenatal care", "OB-GYN", "medical advice"],
  },
  {
    id: "hp-2",
    title: "Lactation Support: Beyond the Basics",
    description:
      "A certified lactation consultant walks through common breastfeeding challenges, latching techniques, and when to seek professional help.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
    duration: "15:20",
    tags: ["breastfeeding", "lactation", "newborn care"],
  },
  {
    id: "hp-3",
    title: "Navigating the Healthcare System as a New Parent",
    description:
      "A patient advocate explains insurance coverage, your rights during labor and delivery, and how to navigate the sometimes confusing medical system.",
    category: "Healthcare Professionals",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    duration: "18:45",
    tags: ["insurance", "patient rights", "advocacy"],
  },

  // Postpartum Testimonials
  {
    id: "pt-1",
    title: "My Postpartum Journey: Finding Light in the Darkness",
    description:
      "A mother shares her raw and honest experience with postpartum depression, the turning point that led her to seek help, and the support system that carried her through.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
    duration: "22:10",
    tags: ["postpartum depression", "mental health", "recovery"],
  },
  {
    id: "pt-2",
    title: "The Fourth Trimester Nobody Talks About",
    description:
      "Exploring the physical and emotional recovery after birth — the leaking, the exhaustion, the identity shift — and why we need to normalize these conversations.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    duration: "16:00",
    tags: ["postpartum recovery", "fourth trimester", "new mom"],
  },
  {
    id: "pt-3",
    title: "Healing After a Traumatic Birth",
    description:
      "One mother's journey from a traumatic birth experience to finding peace, with advice on processing birth trauma and seeking proper support.",
    category: "Postpartum Testimonials",
    thumbnail:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=600&h=400&fit=crop",
    duration: "19:30",
    tags: ["birth trauma", "recovery", "mental health"],
  },

  // New Parent Journeys
  {
    id: "np-1",
    title: "First-Time Dad: What Nobody Told Me",
    description:
      "A first-time father opens up about the anxieties, surprises, and profound love of becoming a parent, and what partners can do to be truly supportive.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
    duration: "14:15",
    tags: ["fatherhood", "partner support", "new parent"],
  },
  {
    id: "np-2",
    title: "Becoming a Mom at 19",
    description:
      "A young mother discusses the unique challenges of early parenthood, societal judgment, and how she built a support network from scratch.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
    duration: "20:40",
    tags: ["young parent", "support", "resilience"],
  },
  {
    id: "np-3",
    title: "Our Adoption Story: A Different Path to Parenthood",
    description:
      "A couple shares the emotional rollercoaster of the adoption process, the waiting, the paperwork, and the moment they finally held their child.",
    category: "New Parent Journeys",
    thumbnail:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop",
    duration: "25:00",
    tags: ["adoption", "non-traditional family", "parenthood"],
  },

  // Mental Wellbeing
  {
    id: "mw-1",
    title: "Anxiety During Pregnancy: You're Not Alone",
    description:
      "A therapist specializing in perinatal mental health discusses the prevalence of prenatal anxiety and practical coping strategies.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop",
    duration: "17:30",
    tags: ["anxiety", "pregnancy", "mental health"],
  },
  {
    id: "mw-2",
    title: "Self-Care Is Not Selfish: A Mom's Guide",
    description:
      "Why taking care of yourself makes you a better parent, and simple, realistic self-care practices for the postpartum period.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    duration: "11:45",
    tags: ["self-care", "wellness", "postpartum"],
  },
  {
    id: "mw-3",
    title: "When Grief and Motherhood Intersect",
    description:
      "Processing the loss of a pregnancy or infant while navigating the complexities of grief, healing, and moving forward.",
    category: "Mental Wellbeing",
    thumbnail:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop",
    duration: "23:15",
    tags: ["grief", "loss", "healing"],
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
];
