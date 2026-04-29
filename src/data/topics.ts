export interface Topic {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const trendingTopics: Topic[] = [
  {
    slug: "postpartum-depression",
    title: "Navigating Postpartum Depression",
    description:
      "Understanding the signs, seeking help, and knowing you're not alone. Hear from professionals and real moms who've been through it.",
    category: "Mental Health",
    image:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
  },
  {
    slug: "pregnancy-care-tips",
    title: "Pregnancy Care Tips from OB-GYNs",
    description:
      "Evidence-based guidance from obstetricians on nutrition, exercise, warning signs, and staying healthy throughout pregnancy.",
    category: "Professional Advice",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
  },
  {
    slug: "what-i-wish-i-knew",
    title: "What I Wish I Knew: Stories from New Moms",
    description:
      "Real stories from first-time mothers sharing the surprises, challenges, and joys they experienced during their journey.",
    category: "Real Stories",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
  },
  {
    slug: "nutrition-during-pregnancy",
    title: "Eating Well During Pregnancy: A Complete Guide",
    description:
      "What to eat, what to avoid, and how your nutritional needs shift each trimester. Evidence-based guidance from dietitians and OB-GYNs.",
    category: "Professional Advice",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
  },
  {
    slug: "birth-plan-preparation",
    title: "Creating Your Birth Plan",
    description:
      "A step-by-step guide to building a birth plan that reflects your values, preferences, and medical needs.",
    category: "Professional Advice",
    image:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop",
  },
  {
    slug: "partner-support",
    title: "How Partners Can Help During Pregnancy",
    description:
      "Guidance for partners on providing emotional, physical, and practical support throughout the pregnancy journey.",
    category: "Real Stories",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
  },
];

export const topicHubContent: Record<
  string,
  {
    title: string;
    introduction: string;
    expertGuidance: { title: string; summary: string }[];
    realStories: { title: string; summary: string; anonymous?: boolean }[];
    resources: { title: string; url: string; type: string }[];
  }
> = {
  "postpartum-depression": {
    title: "Navigating Postpartum Depression",
    introduction:
      "Postpartum depression affects up to 1 in 5 new mothers, yet it often goes unrecognized and untreated. This hub brings together expert guidance, real experiences, and practical resources to help you understand, identify, and seek support for postpartum mood disorders.",
    expertGuidance: [
      {
        title: "Recognizing the Signs Early",
        summary:
          "Dr. Sarah Mitchell explains the difference between 'baby blues' and clinical postpartum depression, and when to seek professional help.",
      },
      {
        title: "Treatment Options and What to Expect",
        summary:
          "An overview of therapy, medication, and holistic approaches to managing PPD, with guidance on talking to your provider.",
      },
      {
        title: "The Role of Hormones in Postpartum Mood",
        summary:
          "Understanding the biological factors behind postpartum mood changes and how they interact with environmental stressors.",
      },
    ],
    realStories: [
      {
        title: "I Didn't Realize It Was PPD Until Month 6",
        summary:
          "A first-time mother shares her journey from dismissing her struggles as normal exhaustion to finally getting diagnosed and treated.",
        anonymous: true,
      },
      {
        title: "My Partner Noticed Before I Did",
        summary:
          "How one mother's partner recognized the warning signs and helped her get the support she needed.",
      },
    ],
    resources: [
      {
        title: "Postpartum Support International Helpline",
        url: "https://www.postpartum.net/",
        type: "Hotline",
      },
      {
        title: "Edinburgh Postnatal Depression Scale (Self-Assessment)",
        url: "https://www.mchb.hrsa.gov/",
        type: "Tool",
      },
      {
        title: "SAMHSA National Helpline",
        url: "https://www.samhsa.gov/find-help/national-helpline",
        type: "Hotline",
      },
    ],
  },
  "pregnancy-care-tips": {
    title: "Pregnancy Care Tips from OB-GYNs",
    introduction:
      "Get evidence-based advice directly from obstetricians and gynecologists. From nutrition and exercise to understanding warning signs, this hub provides professional guidance for a healthy pregnancy.",
    expertGuidance: [
      {
        title: "Nutrition Essentials for Each Trimester",
        summary:
          "What to eat, what to avoid, and how your nutritional needs change as your pregnancy progresses.",
      },
      {
        title: "Safe Exercise During Pregnancy",
        summary:
          "Guidelines on staying active, modifications for each trimester, and exercises to avoid.",
      },
      {
        title: "Warning Signs You Shouldn't Ignore",
        summary:
          "Key symptoms that warrant an immediate call to your provider, from unusual bleeding to severe headaches.",
      },
    ],
    realStories: [
      {
        title: "How I Managed Gestational Diabetes",
        summary:
          "A mother shares her experience with gestational diabetes diagnosis and how she worked with her care team.",
      },
    ],
    resources: [
      {
        title: "ACOG Patient Resources",
        url: "https://www.acog.org/womens-health",
        type: "Guide",
      },
      {
        title: "March of Dimes — Pregnancy Health",
        url: "https://www.marchofdimes.org/",
        type: "Organization",
      },
    ],
  },
  "what-i-wish-i-knew": {
    title: "What I Wish I Knew: Stories from New Moms",
    introduction:
      "Honest, unfiltered stories from mothers about the realities of pregnancy, birth, and early parenthood. These are the things no one tells you — until now.",
    expertGuidance: [
      {
        title: "Setting Realistic Expectations",
        summary:
          "A counselor discusses why the gap between expectations and reality can feel so overwhelming for new parents.",
      },
    ],
    realStories: [
      {
        title: "The First Week Home Was Nothing Like I Expected",
        summary:
          "Adjusting to life with a newborn, dealing with sleep deprivation, and finding your new rhythm.",
      },
      {
        title: "Breastfeeding Was Harder Than I Thought",
        summary:
          "The challenges, the guilt, and the eventual peace that came with making the right feeding choice for my family.",
      },
      {
        title: "I Wish Someone Told Me About Postpartum Recovery",
        summary:
          "The physical recovery process that no one prepares you for, and how I navigated it.",
        anonymous: true,
      },
    ],
    resources: [
      {
        title: "KellyMom — Evidence-Based Breastfeeding Info",
        url: "https://kellymom.com/",
        type: "Guide",
      },
      {
        title: "La Leche League International",
        url: "https://www.llli.org/",
        type: "Organization",
      },
    ],
  },
  "nutrition-during-pregnancy": {
    title: "Eating Well During Pregnancy: A Complete Guide",
    introduction:
      "What you eat during pregnancy directly affects how your baby grows and how you feel. This hub brings together dietitian advice, OB-GYN recommendations, and real experiences to help every mother eat well through every trimester.",
    expertGuidance: [
      {
        title: "Key Nutrients Every Pregnant Mother Needs",
        summary:
          "Folic acid, iron, calcium, DHA, and iodine — why each matters, how much you need, and which foods are the best sources.",
      },
      {
        title: "Foods to Avoid and Why",
        summary:
          "A clear, science-backed list of what to skip during pregnancy: raw fish, deli meats, unpasteurized cheeses, high-mercury fish, and more.",
      },
      {
        title: "Managing Nausea While Still Eating Enough",
        summary:
          "Practical strategies from dietitians for getting adequate nutrition even when severe nausea makes eating feel impossible.",
      },
    ],
    realStories: [
      {
        title: "How I Ate Healthy Despite Constant Nausea",
        summary:
          "A mother shares the foods and tricks that helped her stay nourished through a difficult first trimester.",
        anonymous: true,
      },
      {
        title: "Managing Gestational Diabetes Through Diet",
        summary:
          "One mother's experience learning to balance blood sugar through food choices, and how it changed her relationship with eating.",
      },
    ],
    resources: [
      {
        title: "ACOG — Nutrition During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/nutrition-during-pregnancy",
        type: "Guide",
      },
      {
        title: "March of Dimes — Eating Right During Pregnancy",
        url: "https://www.marchofdimes.org/find-support/topics/pregnancy/eating-right-during-pregnancy",
        type: "Guide",
      },
    ],
  },
};
