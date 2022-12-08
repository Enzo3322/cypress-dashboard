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
    { success: results.passes, fail: results.failures },
  ];

  return (
    <div className="chart-container">
      <h1>Cypress Usaflex diário</h1>
      <h3>Suites: {results.suites}</h3>
      <h3>Cenários testados: {results.tests}</h3>
      <h3>Erro: {results.failures} ou {(100 - results.passPercent).toFixed(1)} %</h3>
      <h3>Sucesso: {results.passes} ou {results.passPercent.toFixed(1)} %</h3>
      <h3>Os resultados abaixo correspondem ao periodo de 00:01 até 23:59</h3>

      <BarChart width={600} height={600} data={data1}>
        <Tooltip />
        <Bar dataKey="success" fill="green" />
        <Bar dataKey="fail" fill="red" />
        <YAxis />
      </BarChart>
    </div>
  );
};
