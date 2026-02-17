import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Complementa a tu equipo de RRHH con automatización, IA y analítica.",
    quickLinks: [
        {
            text: "Características",
            url: "#features"
        },
        {
            text: "Precios",
            url: "#pricing"
        },
        {
            text: "Testimonios",
            url: "#testimonials"
        }
    ],
    email: 'hola@neura-hire.com',
    telephone: '+34 600 000 000',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}