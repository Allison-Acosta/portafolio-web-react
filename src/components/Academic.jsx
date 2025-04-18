import React from "react";

const academicData = [
  {
    date: "Oct 2024 - Actual",
    institution: "Grupo Aspasia - Adalid",
    detail: "Boot Camp: Especialización en desarrollo de aplicaciones Front-End. Curso: IA para la productividad.",
  },
  {
    date: "Sep 2017",
    institution: "Pontificia Universidad Católica de Chile",
    detail: "Obtención de título profesional: Ingeniería Civil con diploma de especialidad Estructural.",
  },
  {
    date: "May 2016 – Jul 2016",
    institution: "Universidad Adolfo Ibáñez, Santiago de Chile",
    detail: "Curso: Visual Programming + BIM.",
  },
  {
    date: "2010 - 2016",
    institution: "Pontificia Universidad Católica de Chile, Santiago de Chile",
    detail: "Alumna regular de Ingeniería Civil.",
  },
  {
    date: "Sep 2015 – Ene 2016",
    institution: "Politecnico di Milano, Milán, Italia",
    detail: "Alumna de intercambio, 'Ingegneria edile-Architettura'.",
  },
  {
    date: "2006 - 2009",
    institution: "Liceo Carmela Carvajal de Prat, Santiago de Chile",
    detail: "Alumna de enseñanza media.",
  },
];

const Academic = () => {
  return (
    <section id="academic" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Formación Académica</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
        </div>

        <div className="space-y-8">
          {academicData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-secondary">{item.institution}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-gray-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;