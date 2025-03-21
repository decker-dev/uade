// Define the subject ID as a union type of all possible IDs
export type SubjectId =
  | "fundamentosInformatica"
  | "programacion1"
  | "teoriaSistemas"
  | "pensamientoCritico"
  | "matematicaDiscreta"
  | "arquitecturaComputadoras"
  | "sistemasInformacion1"
  | "sistemasRepresentacion"
  | "fundamentosQuimica"
  | "elementosAlgebra"
  | "programacion2"
  | "paradigmasObjetos"
  | "ingenieriaDatos1"
  | "sistemasOperativos"
  | "sistemasInformacion2"
  | "calculo1"
  | "fundamentosTelecomunicaciones"
  | "algebra"
  | "fisica1"
  | "programacion3"
  | "teoriaComputacion"
  | "procesoDesarrolloSoftware"
  | "aplicacionesInteractivas"
  | "ingenieriaDatos2"
  | "seminarioIntegracion"
  | "probabilidadEstadistica"
  | "ingenieriaSoftware"
  | "calculo2"
  | "teleinformaticaRedes"
  | "examenIngles"
  | "fisica2"
  | "desarrolloAplicaciones1"
  | "desarrolloAplicaciones2"
  | "cienciaDatos"
  | "evaluacionProyectos"
  | "estadisticaAvanzada"
  | "inteligenciaArtificial"
  | "direccionProyectos"
  | "modeladoSimulacion"
  | "seguridadInformacion"
  | "tecnologiaMedioambiente"
  | "practicaProfesional"
  | "optativa1"
  | "tecnologiasTecnologicas"
  | "negociosTecnologicos"
  | "tecnologiaInnovacion"
  | "optativa2"
  | "optativa3"
  | "derechoInformatico"
  | "arquitecturaAplicaciones"
  | "calidadSoftware"
  | "proyectoFinal"
  | "seminarioPFI"
  | "tallerPFI";

// Define the Subject interface
interface Subject {
  id: SubjectId;
  name: string;
  year: number;
  semester: number;
  prerequisites: SubjectId[];
}

// Define the SubjectData interface
interface SubjectData {
  subjects: Subject[];
}

export const subjectData: SubjectData = {
  subjects: [
    // First Year
    {
      id: "fundamentosInformatica",
      name: "Fundamentos de Informática",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "programacion1",
      name: "Programación I",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "teoriaSistemas",
      name: "Teoría de Sistemas",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "pensamientoCritico",
      name: "Pensamiento Crítico y Comunicación",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "matematicaDiscreta",
      name: "Matemática Discreta",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "arquitecturaComputadoras",
      name: "Arquitectura de Computadoras",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "sistemasInformacion1",
      name: "Sistemas de Información I",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "sistemasRepresentacion",
      name: "Sistemas de Representación",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "fundamentosQuimica",
      name: "Fundamentos de Química",
      year: 1,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "elementosAlgebra",
      name: "Elementos de Álgebra y Geometría",
      year: 1,
      semester: 1,
      prerequisites: [],
    },

    // Second Year
    {
      id: "programacion2",
      name: "Programación II",
      year: 2,
      semester: 1,
      prerequisites: ["programacion1"],
    },
    {
      id: "paradigmasObjetos",
      name: "Paradigma Orientado a Objetos",
      year: 2,
      semester: 1,
      prerequisites: ["programacion1"],
    },
    {
      id: "ingenieriaDatos1",
      name: "Ingeniería de Datos I",
      year: 2,
      semester: 1,
      prerequisites: ["matematicaDiscreta"],
    },
    {
      id: "sistemasOperativos",
      name: "Sistemas Operativos",
      year: 2,
      semester: 1,
      prerequisites: ["arquitecturaComputadoras"],
    },
    {
      id: "sistemasInformacion2",
      name: "Sistemas de Información II",
      year: 2,
      semester: 1,
      prerequisites: ["sistemasInformacion1"],
    },
    {
      id: "calculo1",
      name: "Cálculo I",
      year: 2,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "fundamentosTelecomunicaciones",
      name: "Fundamentos de Telecomunicaciones",
      year: 2,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "algebra",
      name: "Álgebra",
      year: 2,
      semester: 1,
      prerequisites: ["elementosAlgebra"],
    },
    {
      id: "fisica1",
      name: "Física I",
      year: 2,
      semester: 1,
      prerequisites: ["algebra"],
    },

    {
      id: "programacion3",
      name: "Programación III",
      year: 2,
      semester: 1,
      prerequisites: ["programacion2"],
    },
    // Third Year
    {
      id: "teoriaComputacion",
      name: "Teoría de la Computación",
      year: 3,
      semester: 1,
      prerequisites: ["programacion3", "matematicaDiscreta"],
    },
    {
      id: "procesoDesarrolloSoftware",
      name: "Proceso de Desarrollo de Software",
      year: 3,
      semester: 1,
      prerequisites: ["paradigmasObjetos"],
    },
    {
      id: "aplicacionesInteractivas",
      name: "Aplicaciones Interactivas",
      year: 3,
      semester: 1,
      prerequisites: ["paradigmasObjetos"],
    },
    {
      id: "ingenieriaDatos2",
      name: "Ingeniería de Datos II",
      year: 3,
      semester: 1,
      prerequisites: ["ingenieriaDatos1"],
    },
    {
      id: "seminarioIntegracion",
      name: "Seminario de Integración Profesional",
      year: 3,
      semester: 1,
      prerequisites: ["ingenieriaDatos1"],
    },
    {
      id: "probabilidadEstadistica",
      name: "Probabilidad y Estadística",
      year: 3,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "ingenieriaSoftware",
      name: "Ingeniería de Software",
      year: 3,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "calculo2",
      name: "Cálculo II",
      year: 3,
      semester: 1,
      prerequisites: ["calculo1"],
    },
    {
      id: "teleinformaticaRedes",
      name: "Teleinformática y Redes",
      year: 3,
      semester: 1,
      prerequisites: ["fundamentosTelecomunicaciones"],
    },
    {
      id: "examenIngles",
      name: "Examen de Inglés",
      year: 3,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "fisica2",
      name: "Física II",
      year: 3,
      semester: 1,
      prerequisites: ["fisica1"],
    },

    // Fourth Year
    {
      id: "desarrolloAplicaciones1",
      name: "Desarrollo de Aplicaciones I",
      year: 4,
      semester: 1,
      prerequisites: ["procesoDesarrolloSoftware"],
    },
    {
      id: "desarrolloAplicaciones2",
      name: "Desarrollo de Aplicaciones II",
      year: 4,
      semester: 1,
      prerequisites: ["procesoDesarrolloSoftware", "aplicacionesInteractivas"],
    },
    {
      id: "cienciaDatos",
      name: "Ciencia de Datos",
      year: 4,
      semester: 1,
      prerequisites: ["ingenieriaDatos2", "probabilidadEstadistica"],
    },
    {
      id: "evaluacionProyectos",
      name: "Evaluación de Proyectos Informáticos",
      year: 4,
      semester: 1,
      prerequisites: ["probabilidadEstadistica"],
    },
    {
      id: "inteligenciaArtificial",
      name: "Inteligencia Artificial",
      year: 4,
      semester: 1,
      prerequisites: ["estadisticaAvanzada"],
    },
    {
      id: "direccionProyectos",
      name: "Dirección de Proyectos Informáticos",
      year: 4,
      semester: 1,
      prerequisites: ["sistemasInformacion2"],
    },
    {
      id: "modeladoSimulacion",
      name: "Modelado y Simulación",
      year: 4,
      semester: 1,
      prerequisites: ["calculo2"],
    },
    {
      id: "seguridadInformacion",
      name: "Seguridad e Integridad de la Información",
      year: 4,
      semester: 1,
      prerequisites: ["teleinformaticaRedes"],
    },
    {
      id: "tecnologiaMedioambiente",
      name: "Tecnología y Medioambiente",
      year: 4,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "practicaProfesional",
      name: "Práctica Profesional Supervisada",
      year: 4,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "optativa1",
      name: "Optativa 1",
      year: 4,
      semester: 1,
      prerequisites: [],
    },

    // Fifth Year
    {
      id: "optativa2",
      name: "Optativa 2",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "arquitecturaAplicaciones",
      name: "Arquitectura de Aplicaciones",
      year: 5,
      semester: 1,
      prerequisites: ["sistemasInformacion2"],
    },
    {
      id: "tecnologiasTecnologicas",
      name: "Tecnologías Tecnológicas",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "negociosTecnologicos",
      name: "Negocios Tecnológicos",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "tecnologiaInnovacion",
      name: "Tecnología e Innovación",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "optativa3",
      name: "Optativa 3",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "derechoInformatico",
      name: "Derecho Informático",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "calidadSoftware",
      name: "Calidad de Software",
      year: 5,
      semester: 1,
      prerequisites: ["ingenieriaSoftware"],
    },
    {
      id: "proyectoFinal",
      name: "Proyecto Final de Ingeniería",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "seminarioPFI",
      name: "Seminario de PFI",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
    {
      id: "tallerPFI",
      name: "Taller de PFI",
      year: 5,
      semester: 1,
      prerequisites: [],
    },
  ],
};
