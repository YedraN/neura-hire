import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Automatización de procesos de RRHH",
        description: "Reduce tareas manuales: reclutamiento, entrevistas y onboarding automatizados para que tu equipo se enfoque en lo estratégico.",
        bullets: [
            {
                title: "Publicación multicanal",
                description: "Publica vacantes en múltiples portales con un solo clic y recibe candidatos centralizados.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Flujos de aprobación",
                description: "Crea procesos de selección y onboarding con pasos automatizados y recordatorios.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Integraciones HRIS",
                description: "Conecta con sistemas de nómina y gestión de empleados para sincronización automática.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: ""
    },
    {
        title: "Decisiones inteligentes de talento",
        description: "Analítica y scoring impulsados por IA para identificar candidatos y empleados con mayor potencial y riesgo de rotación.",
        bullets: [
            {
                title: "Score de candidatos",
                description: "Ranking automático según fit cultural, habilidades y experiencia.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Análisis de rotación",
                description: "Alertas tempranas basadas en métricas de engagement y desempeño.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Informes personalizables",
                description: "Dashboards con insights para RRHH y dirección.",
                icon: <FiBarChart2 size={26} />
            }
        ],
        imageSrc: ""
    },
    {
        title: "Seguridad y cumplimiento",
        description: "Protección de datos de empleados y cumplimiento normativo para empresas de todos los tamaños.",
        bullets: [
            {
                title: "Encriptación y controles",
                description: "Acceso y almacenamiento seguros para los datos sensibles.",
                icon: <FiLock size={26} />
            },
            {
                title: "Permisos por rol",
                description: "Control granular sobre quién puede ver y editar información.",
                icon: <FiUser size={26} />
            },
            {
                title: "Auditoría y registros",
                description: "Historial de cambios y eventos para auditorías internas.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: ""
    },
]