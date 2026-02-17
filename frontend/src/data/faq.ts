import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿Es seguro ${siteDetails.siteName}?`,
        answer: 'Sí. NeuraHire cifra los datos de los empleados y ofrece controles de acceso por rol para mantener la confidencialidad y el cumplimiento.',
    },
    {
        question: `¿Puedo usar ${siteDetails.siteName} en varios dispositivos?`,
        answer: 'Sí. La plataforma sincroniza la información en tiempo real entre la web y dispositivos móviles.',
    },
    {
        question: '¿Se integra con mi sistema de nómina o HRIS?',
        answer: `En la mayoría de los casos sí. Ofrecemos integraciones estándar y opciones a medida para conectar con los principales HRIS del mercado.`
    },
    {
        question: '¿Necesito formación para usar la plataforma?',
        answer: 'No necesariamente. La interfaz es intuitiva y ofrecemos guías y soporte. Para planes Enterprise ofrecemos formación presencial o remota.',
    },
    {
        question: '¿Qué soporte ofrecen?',
        answer: 'Soporte por email para todos los planes y soporte prioritario/SLA para planes Growth y Enterprise.'
    }
];