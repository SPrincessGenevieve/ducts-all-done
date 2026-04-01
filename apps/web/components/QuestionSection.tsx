import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import GradientHoverCard from "./ui/GradientHoverCard"

type RadixAccordionDemoProps = {
  multiple?: boolean
  collapsible?: boolean
  keepRendered?: boolean
  showArrow?: boolean
}

const faq = [
  {
    id: 1,
    question: "How often should I have my air ducts cleaned?",
    answer:
      "The EPA recommends air duct cleaning every 3–5 years for average homes. However, if you have pets, allergies, recent construction, or a dusty environment, annual cleaning may be beneficial. We'll inspect your system and give you an honest recommendation.",
  },
  {
    id: 2,
    question: "How long does a duct cleaning appointment take?",
    answer:
      "Most residential air duct cleanings take 2–4 hours depending on the size of your home and the number of vents. We'll give you a time estimate when you book.",
  },
  {
    id: 3,
    question: "Is duct cleaning safe for my family and pets?",
    answer:
      "Yes, completely safe. We use EPA-approved cleaning agents and our team is trained to protect your home and family. You can stay in the house during the cleaning.",
  },
  {
    id: 4,
    question: "Do you offer same-day service?",
    answer:
      "Yes! Same-day and next-day appointments are often available. Call us at 813-923-2906 and we'll do our best to fit you into our schedule.",
  },
  {
    id: 5,
    question: "How much does air duct cleaning cost?",
    answer:
      "Pricing depends on the size of your home and number of vents. We offer free estimates — just call or fill out the form below. Transparent, upfront pricing with no hidden fees.",
  },
  {
    id: 6,
    question: "Are you licensed and insured?",
    answer:
      "Yes. Ducts All Done is fully licensed (License #7196244), insured, IICRC certified, and EPA certified. Our technicians are background-checked and trained to the highest industry standards.",
  },
]

export default function QuestionSection({
  multiple = false,
  collapsible = true,
  keepRendered = false,
  showArrow = true,
}: RadixAccordionDemoProps) {
  return (
    <div className="flex min-h-150 w-full flex-col items-center gap-8 bg-primary-blue-100 pb-20">
      <div className="relative flex h-45 w-full items-center justify-center">
        <p className="text-9xl font-bold text-white">FQA</p>
        <div className="absolute top-14 flex h-8 w-full max-w-200 items-center justify-center bg-primary-blue-100">
          <p className="text-center font-semibold text-white">
            Frequently Asked Question
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-200 flex-col gap-4 p-8">
        {faq.map((item, i) => (
          <Accordion
            collapsible={collapsible}
            type={multiple ? "multiple" : "single"}
          >
            <AccordionItem
              className="w-full text-primary-blue-200"
              value={item.answer}
            >
              <AccordionTrigger className="text-white">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="relative h-full rounded-xl bg-white text-primary-blue-200">
                <div className="absolute z-10 h-full w-full overflow-hidden rounded-2xl">
                  <GradientHoverCard
                    speed={2}
                    colors={[
                      "rgba(34,197,94)",
                      "rgba(0,191,165)",
                      "rgba(0,128,111)",
                      "rgba(0,255,205)",
                      "rgba(34,197,94)",
                      "rgba(0,128,111)",
                    ]}
                    size={150}
                    hoverable={false}
                  >
                    <div className="backdrop-blur-4xl absolute z-20 h-full w-full bg-primary-blue-50/20 p-4">
                      <p className="z-20 bg-transparent text-black">
                        {item.answer}
                      </p>
                    </div>
                  </GradientHoverCard>
                </div>
                <div>
                  <p className="z-20 bg-transparent p-4">{item.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
