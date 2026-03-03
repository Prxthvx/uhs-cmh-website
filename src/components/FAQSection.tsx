import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How often should I schedule prenatal visits?",
    a: "Your care provider will recommend a visit schedule based on your individual needs. Typically, visits are monthly in early pregnancy and increase in frequency as your due date approaches.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring your insurance card, photo ID, a list of current medications, and any relevant medical records from previous providers.",
  },
  {
    q: "When should I contact the clinic between visits?",
    a: "Contact us if you experience unusual symptoms such as severe headaches, vision changes, significant swelling, or reduced fetal movement. Our team is available for guidance.",
  },
  {
    q: "Are virtual consultations available?",
    a: "Yes. Telehealth appointments are available for follow-up visits and non-emergency consultations. Ask our front desk for scheduling options.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-lg px-5 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
