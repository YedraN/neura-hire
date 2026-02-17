import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'María García',
        role: 'Responsable de Talento',
        message: `${siteDetails.siteName} nos permitió reducir el tiempo de contratación en un 40% gracias a sus flujos automatizados.`,
        avatar: '',
    },
    {
        name: 'Carlos Pérez',
        role: 'Director de RRHH',
        message: `La analítica de NeuraHire nos ayuda a identificar riesgos de rotación y a priorizar acciones desde el primer mes.`,
        avatar: '',
    },
    {
        name: 'Ana López',
        role: 'Talent Partner',
        message: `Integrar NeuraHire con nuestro HRIS fue sencillo y la adopción del equipo fue inmediata.`,
        avatar: '',
    },
];