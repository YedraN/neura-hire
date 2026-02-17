import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Procesos de RRHH automatizados ejecutados mensualmente."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Satisfacción media de clientes (NPS) en nuestras implementaciones."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Integraciones con HRIS y herramientas de nómina compatibles globalmente."
    }
];