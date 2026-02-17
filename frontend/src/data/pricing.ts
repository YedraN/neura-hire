import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Core',
        price: 49,
        features: [
            'Publicación de vacantes',
            'Hasta 10 usuarios',
            'Onboarding básico',
            'Soporte por email',
        ],
    },
    {
        name: 'Growth',
        price: 199,
        features: [
            'Automatización de procesos',
            'Hasta 50 usuarios',
            'Integraciones HRIS y nómina',
            'Soporte prioritario',
            'Analítica avanzada',
        ],
    },
    {
        name: 'Enterprise',
        price: 'A medida',
        features: [
            'Usuarios ilimitados',
            'Integraciones a medida',
            'SLA y soporte 24/7',
            'Implementación y formación',
            'Reportes y seguridad avanzada',
        ],
    },
]