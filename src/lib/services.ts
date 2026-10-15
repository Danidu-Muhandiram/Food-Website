export type ServiceId = "vet-care" | "grooming" | "pharmacy" | "nutrition" | "boarding"

export type CarePackage = {
    name: string
    price: number
    period: string
    description: string
    features: string[]
    popular?: boolean
}

export type ServiceDefinition = {
    id: ServiceId
    title: string
    heroLead: string
    heroAccent: string
    eyebrow: string
    summary: string
    overviewTitle: string
    overview: string
    benefits: string[]
    preparation: string[]
    packages: CarePackage[]
    notesLabel: string
    notesPlaceholder: string
    inquiryTitle: string
    concerns?: string[]
    faqs: { q: string; a: string }[]
}

export const CARE_SERVICES: Record<ServiceId, ServiceDefinition> = {
    "vet-care": {
        id: "vet-care",
        title: "Veterinary Care",
        heroAccent: "for every life stage.",
        eyebrow: "Health & wellbeing",
        heroLead: "Thoughtful care,",
        summary: "From their first checkup to their senior years, explore support for a care routine that fits your pet.",
        overviewTitle: "A calmer start to better care.",
        overview: "Tell us about your pet, their routine, and what you would like to discuss. Explore the options below, then get in touch to ask about a visit.",
        benefits: [
            "Routine checkups and vaccinations",
            "Care options for young, adult, and senior pets",
            "Time to discuss your questions"
        ],
        preparation: [
            "Bring any existing health and vaccination records.",
            "Note current medicines and anything you want to discuss.",
            "Ask the team which appointment suits your pet."
        ],
        notesLabel: "What would you like to discuss?",
        notesPlaceholder: "Share the reason for your visit and any helpful background.",
        inquiryTitle: "Ask about a vet visit",
        faqs: [
            {
                q: "How do I arrange a visit?",
                a: "Choose an option below and prepare an email inquiry with your preferred date. Send it from your email app. The team will need to confirm availability and the appointment details."
            },
            {
                q: "What should I bring?",
                a: "Have your pet's health records, vaccination history, and current medication list ready. Ask the team if they need anything else before your visit."
            },
            {
                q: "Can I ask about a package before choosing?",
                a: "Yes. Select \"Help me choose\" in the inquiry form and tell us a little about your pet and what you are looking for."
            }
        ],
        packages: [
            {
                name: "Puppy & Kitten Wellness",
                price: 49,
                period: "per checkup",
                description: "Essential early-stage checkups, core vaccinations, and developmental tracking.",
                features: [
                    "Comprehensive physical exam",
                    "Core puppy/kitten vaccines",
                    "Weight & growth tracking",
                    "Dietary & lifestyle advice",
                    "Digital health passport"
                ]
            },
            {
                name: "Adult Annual Care",
                price: 99,
                period: "per year",
                description: "Comprehensive annual health check, vaccine boosters, and diagnostic reviews.",
                features: [
                    "Annual physical checkup",
                    "Vaccination boosters",
                    "Basic blood panel & urinalysis",
                    "Dental health assessment",
                    "24/7 direct chat support"
                ],
                popular: true
            },
            {
                name: "Senior Diagnostic Care",
                price: 149,
                period: "per year",
                description: "Specialized geriatric screenings, joint evaluations, and chronic disease testing.",
                features: [
                    "Geriatric physical exam",
                    "Comprehensive blood chemistry",
                    "Joint & arthritis screening",
                    "Cardiovascular health check",
                    "Priority appointment scheduling"
                ]
            }
        ]
    },
    grooming: {
        id: "grooming",
        title: "Grooming & Spa",
        heroAccent: "a happier pet.",
        eyebrow: "Fresh & comfortable",
        heroLead: "A little pampering,",
        summary: "From a simple bath to a fresh new trim, find a grooming option that suits their coat and comfort.",
        overviewTitle: "Fresh coats. Happy companions.",
        overview: "Explore baths, brushing, and styling in one place. Tell us about your pet's coat, preferences, and sensitivities so you can discuss the right session before arranging a visit.",
        benefits: [
            "Bath, brush, and styling options",
            "Coat and nail care in one visit",
            "Space to share preferences and sensitivities"
        ],
        preparation: [
            "Share your pet's size, breed, and coat condition.",
            "Mention any sensitivities or handling preferences.",
            "Bring a reference photo if you have a style in mind."
        ],
        notesLabel: "Coat, style, or comfort notes",
        notesPlaceholder: "Tell us about their breed, size, coat, and preferred style.",
        inquiryTitle: "Plan a grooming visit",
        faqs: [
            {
                q: "Which grooming option should I choose?",
                a: "Bath & Brush covers everyday cleaning and coat care. Full Style adds a haircut, and Luxury Spa includes extra finishing treatments. If you are unsure, select \"Help me choose\" and describe your pet's coat."
            },
            {
                q: "How long will a session take?",
                a: "Timing depends on the selected service, your pet's size, and coat condition. Include those details in your inquiry so the team can discuss an expected duration."
            },
            {
                q: "Can I mention sensitive skin or nervous behavior?",
                a: "Yes. Add any sensitivities, past grooming experiences, or comfort preferences to your inquiry. Discuss suitable products and handling with the team before the visit."
            }
        ],
        packages: [
            {
                name: "Bath & Brush",
                price: 29,
                period: "per session",
                description: "Essential cleaning, deodorizing bath, blow dry, and full coat brushing.",
                features: [
                    "Premium shampoo & conditioning",
                    "Full blow dry & brushout",
                    "Ear cleaning & ear wiping",
                    "Nail trimming",
                    "Scented finishing spray"
                ]
            },
            {
                name: "Full Style Grooming",
                price: 59,
                period: "per session",
                description: "Custom breed haircutting, full styled trim, sanitary cleaning, and standard bath.",
                features: [
                    "Everything in Bath & Brush",
                    "Breed-specific haircut or shave",
                    "Sanitary trim & paw pads",
                    "Nail grinding (smooth finish)",
                    "Gland expression (optional)"
                ],
                popular: true
            },
            {
                name: "Luxury Spa Experience",
                price: 89,
                period: "per session",
                description: "All-inclusive pampering with skin treatments, teeth cleaning, and premium oils.",
                features: [
                    "Everything in Full Style",
                    "Oatmeal/hypoallergenic wash",
                    "Blueberry facial scrub",
                    "Teeth brushing & fresh gel",
                    "De-shedding deep treatment",
                    "Paw balm application"
                ]
            }
        ]
    },
    pharmacy: {
        id: "pharmacy",
        title: "Pet Pharmacy",
        heroAccent: "their everyday care.",
        eyebrow: "Everyday essentials",
        heroLead: "A little support for",
        summary: "Explore medication and supplement options, and ask the team about the next step for your pet.",
        overviewTitle: "Make their care routine simpler.",
        overview: "Compare the available options and tell us what you are looking for. For prescription inquiries, share your veterinary clinic's details so you can discuss what is needed before an order is arranged.",
        benefits: [
            "Preventative and supplement options",
            "Prescription inquiries in one place",
            "Help choosing the next step"
        ],
        preparation: [
            "Have the product or medication name ready.",
            "Include your veterinary clinic's details if relevant.",
            "Ask about availability, prescription requirements, and delivery."
        ],
        notesLabel: "Product or medication inquiry",
        notesPlaceholder: "Tell us which product you are asking about and what you would like to know.",
        inquiryTitle: "Ask the pharmacy team",
        faqs: [
            {
                q: "Can I order a prescription through this form?",
                a: "This form prepares an email inquiry, rather than placing an order. Ask the team about prescription requirements, availability, and the information they need before an order can be arranged."
            },
            {
                q: "How do I ask about an existing medication?",
                a: "Include the medication name and your veterinary clinic's details in your inquiry. The team can explain the next steps for checking availability and any prescription requirements."
            },
            {
                q: "Where can I confirm delivery and recurring plans?",
                a: "Ask the team to confirm delivery options, costs, refill arrangements, and any cancellation terms before agreeing to a plan."
            }
        ],
        packages: [
            {
                name: "Flea & Tick Defense",
                price: 19,
                period: "per month",
                description: "Monthly topical or chewable treatments protecting against fleas, ticks, and heartworms.",
                features: [
                    "Premium branded chewables",
                    "Topical applications",
                    "Automatic monthly dispatch",
                    "Dosage adjustment support",
                    "Free shipping included"
                ]
            },
            {
                name: "Standard Health Shield",
                price: 39,
                period: "per month",
                description: "Comprehensive daily vitamins, digestive enzymes, and essential immune boosters.",
                features: [
                    "Daily multivitamin chews",
                    "Probiotics for digestion",
                    "Omega-3 joint supplements",
                    "Coat shines & oils pack",
                    "10% off custom orders"
                ],
                popular: true
            },
            {
                name: "Custom Prescription Rx",
                price: 59,
                period: "starting at",
                description: "Direct fulfillment of prescription medications coordinated with your vet.",
                features: [
                    "FDA-approved medications",
                    "Direct coordination with vet",
                    "Compounded medication flavors",
                    "Express home delivery",
                    "Refill reminder texts"
                ]
            }
        ]
    },
    nutrition: {
        id: "nutrition",
        title: "Diet & Nutrition",
        heroAccent: "happier mealtimes.",
        eyebrow: "Feeding & wellbeing",
        heroLead: "A little guidance,",
        summary: "Explore feeding consultations and meal-planning support around your pet's everyday needs.",
        overviewTitle: "Find a plan that fits your pet.",
        overview: "Start with their current food, preferences, and the questions you have. Compare consultation options, then ask the team about the support that fits your pet and their routine.",
        benefits: [
            "One-to-one consultation options",
            "Portion and meal-planning discussions",
            "Follow-up support options"
        ],
        preparation: [
            "Make a note of their current food and portions.",
            "Include any preferences or concerns you want to discuss.",
            "Have relevant veterinary records ready if requested."
        ],
        notesLabel: "Current food and feeding routine",
        notesPlaceholder: "Share what they eat, their usual portions, and your goals or questions.",
        inquiryTitle: "Ask about nutrition support",
        concerns: [
            "General meal planning",
            "Weight management",
            "Food sensitivities",
            "Coat & skin questions",
            "Diet transition"
        ],
        faqs: [
            {
                q: "What can I discuss in a consultation?",
                a: "You can ask about everyday feeding routines, portions, food preferences, and the support included in each package. Include your main questions in the inquiry so the team can help you choose."
            },
            {
                q: "Do packages include pet food?",
                a: "The listed options describe consultation and planning support. Ask the team to confirm whether food, supplements, or any additional products are included before choosing a package."
            },
            {
                q: "What if my pet already has a prescribed diet?",
                a: "Mention this in your inquiry and share any relevant guidance from your veterinarian. Discuss the scope of the consultation with the team before making changes to your pet's routine."
            }
        ],
        packages: [
            {
                name: "Initial Consultation",
                price: 45,
                period: "per session",
                description: "One-on-one nutrition analysis, weight analysis, and initial recommendations.",
                features: [
                    "60-minute nutritionist video consult",
                    "Weight & body mass index score",
                    "Dietary allergen checks",
                    "Initial recipe suggestions",
                    "Follow-up email summary"
                ]
            },
            {
                name: "3-Month Diet Plan",
                price: 119,
                period: "3-month track",
                description: "Structured dietary shifts, weight monitoring, and monthly plan updates.",
                features: [
                    "Everything in Initial Consult",
                    "Monthly progress assessments",
                    "Custom calorie & portion chart",
                    "Flea/allergy symptom logging",
                    "Text updates with nutritionist"
                ],
                popular: true
            },
            {
                name: "All-Inclusive Raw Guide",
                price: 249,
                period: "full transition",
                description: "Complete raw food transition supervision, supplement list, and health tests.",
                features: [
                    "Everything in 3-Month Plan",
                    "Safe raw-food conversion steps",
                    "Vitamin & mineral analysis",
                    "Partner discount on pet foods",
                    "Priority booking for emergencies"
                ]
            }
        ]
    },
    boarding: {
        id: "boarding",
        title: "Daycare & Boarding",
        heroAccent: "away from home.",
        eyebrow: "Stay & play",
        heroLead: "Their happy place,",
        summary: "Daytime company or an overnight stay, with space to share the little routines that make them feel at home.",
        overviewTitle: "A stay that starts with their routine.",
        overview: "Compare daytime care and overnight options, then tell us about your pet and your preferred dates. Share their food, comfort items, and daily habits when discussing the stay with the team.",
        benefits: [
            "Daytime and overnight options",
            "Space to share feeding and care routines",
            "A choice of stay packages"
        ],
        preparation: [
            "Ask about vaccination and check-in requirements.",
            "Prepare their food and any familiar comfort items.",
            "Share feeding routines, care needs, and collection plans."
        ],
        notesLabel: "Daily routines and care notes",
        notesPlaceholder: "Tell us about feeding, comfort items, and anything helpful for their stay.",
        inquiryTitle: "Ask about a stay",
        faqs: [
            {
                q: "What is the difference between daycare and boarding?",
                a: "Daycare Play is listed per day for daytime care. Standard Cabin and Luxury Suite are listed per night for overnight stays. Ask the team about drop-off and collection times."
            },
            {
                q: "Can I bring their usual food or blanket?",
                a: "Include these preferences in your inquiry. Confirm what to pack, how to label food, and which comfort items are suitable with the team before arrival."
            },
            {
                q: "Is a stay confirmed when I submit the form?",
                a: "No. The form opens an email draft for you to send. The team needs to confirm availability, requirements, the final price, and your reservation separately."
            }
        ],
        packages: [
            {
                name: "Daycare Play",
                price: 20,
                period: "per day",
                description: "Full-day supervision, social games, obstacle play, and nap cycles.",
                features: [
                    "Supervised group socialization",
                    "Indoor & outdoor play arenas",
                    "Climbing blocks & toys",
                    "Dedicated nap cycles",
                    "Live playcam checks"
                ]
            },
            {
                name: "Standard Cabin",
                price: 45,
                period: "per night",
                description: "Safe private cabin lodging, daily feeding schedules, and playtimes.",
                features: [
                    "Private climate-controlled cabin",
                    "2 outdoor play sessions daily",
                    "Individual feeding routines",
                    "Cozy bedding & soft blankets",
                    "Daily health check report"
                ],
                popular: true
            },
            {
                name: "Luxury Suite",
                price: 75,
                period: "per night",
                description: "All-inclusive private room boarding, webcam tracking, grooming bath, and treats.",
                features: [
                    "Private themed luxury suite",
                    "4 premium play sessions daily",
                    "Live 24/7 web-camera access",
                    "Complimentary bath before check-out",
                    "Bedtime story & gourmet treats"
                ]
            }
        ]
    }
}
