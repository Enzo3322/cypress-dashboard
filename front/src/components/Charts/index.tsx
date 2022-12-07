import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export interface Stats {
  results: {
    suites: number;
    tests: number;
    passes: number;
    pending: number;
    failures: number;
    start: string;
    end: string;
    duration: number;
    testsRegistered: number;
    passPercent: number;
    pendingPercent: number;
    other: number;
    hasOther: boolean;
    skipped: number;
    hasSkipped: boolean;
  }

}

export const Charts = ({ results }: Stats) => {
  if (!results) return null;


  const data1 = [
    { sname: 'Sucesso', fname: 'Falha', success: results.passes, fail: results.failures },
  ];

  return (
    <>
      <h1>Cypress Usaflex diário</h1>
      <h3>Suites: {results.suites}</h3>
      <h3>Cenaários testados: {results.tests}</h3>
      <h3>Falhou {results.failures} igual a {(100 - results.passPercent).toFixed(1)} %</h3>
      <h3>Passou {results.passes} igual a {results.passPercent.toFixed(1)} %</h3>
      <h3>Os resultados abaixo correspondem ao periodo de 00:01 até 23:59</h3>

      <BarChart width={600} height={600} data={data1}>
        <Tooltip />
        <Bar dataKey="success" fill="green" />
        <Bar dataKey="fail" fill="red" />
        <YAxis />
      </BarChart>
    </>
  );
};
