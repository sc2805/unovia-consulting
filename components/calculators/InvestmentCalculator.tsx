"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type CalculatorMode = "SIP" | "LUMPSUM";

export default function InvestmentCalculator() {
  const [mode, setMode] = useState<CalculatorMode>("SIP");
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [lumpsumInvestment, setLumpsumInvestment] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);

  const calculateResults = () => {
    if (mode === "SIP") {
      const p = monthlyInvestment;
      const r = expectedReturn / 12 / 100;
      const n = timePeriod * 12;
      const invested = p * n;
      const totalValue = Math.round(p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r)));
      const wealthGained = totalValue - invested;
      return { invested, wealthGained, totalValue };
    } else {
      const p = lumpsumInvestment;
      const r = expectedReturn / 100;
      const n = timePeriod;
      const invested = p;
      const totalValue = Math.round(p * Math.pow(1 + r, n));
      const wealthGained = totalValue - invested;
      return { invested, wealthGained, totalValue };
    }
  };

  const results = useMemo(calculateResults, [
    mode,
    monthlyInvestment,
    lumpsumInvestment,
    expectedReturn,
    timePeriod,
  ]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const chartData = [
    { name: "Invested Amount", value: results.invested, color: "#1e293b" }, // navy-800
    { name: "Est. Returns", value: results.wealthGained, color: "#d4af37" }, // gold-500
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-5xl mx-auto flex flex-col lg:flex-row">
      {/* Left side: Controls */}
      <div className="p-8 lg:p-10 flex-1 border-b lg:border-b-0 lg:border-r border-gray-100">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">
          Investment Calculator
        </h2>

        {/* Tabs */}
        <div className="flex p-1 bg-gray-100 rounded-lg mb-8">
          <button
            onClick={() => setMode("SIP")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
              mode === "SIP"
                ? "bg-white text-navy-800 shadow-sm"
                : "text-gray-500 hover:text-navy-700"
            }`}
          >
            SIP
          </button>
          <button
            onClick={() => setMode("LUMPSUM")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
              mode === "LUMPSUM"
                ? "bg-white text-navy-800 shadow-sm"
                : "text-gray-500 hover:text-navy-700"
            }`}
          >
            Lumpsum
          </button>
        </div>

        <div className="space-y-8">
          {/* Investment Amount */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-semibold text-gray-700">
                {mode === "SIP" ? "Monthly Investment" : "Total Investment"}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <input
                  type="number"
                  value={mode === "SIP" ? monthlyInvestment : lumpsumInvestment}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (mode === "SIP") setMonthlyInvestment(val);
                    else setLumpsumInvestment(val);
                  }}
                  className="w-32 pl-7 pr-3 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
              </div>
            </div>
            <input
              type="range"
              min={mode === "SIP" ? 500 : 10000}
              max={mode === "SIP" ? 1000000 : 100000000}
              step={mode === "SIP" ? 500 : 10000}
              value={mode === "SIP" ? monthlyInvestment : lumpsumInvestment}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (mode === "SIP") setMonthlyInvestment(val);
                else setLumpsumInvestment(val);
              }}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Expected Return Rate (p.a)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">%</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={0.5}
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Time Period
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-24 pr-8 py-1.5 text-right font-semibold text-navy-800 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Yr</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              step={1}
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
          </div>
        </div>
      </div>

      {/* Right side: Results Visualization */}
      <div className="p-8 lg:p-10 w-full lg:w-96 flex flex-col bg-gray-50/50">
        <h3 className="text-lg font-bold text-navy-800 mb-6 text-center">
          Projected Wealth
        </h3>
        
        {/* Chart */}
        <div className="h-48 w-full relative mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-\${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: any) => formatCurrency(Number(value))}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Total Value</span>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4 flex-1 flex flex-col justify-end">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-navy-800" />
              <span className="text-sm text-gray-600">Invested Amount</span>
            </div>
            <span className="font-semibold text-navy-800">{formatCurrency(results.invested)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold-500" />
              <span className="text-sm text-gray-600">Est. Returns</span>
            </div>
            <span className="font-semibold text-navy-800">{formatCurrency(results.wealthGained)}</span>
          </div>

          <div className="pt-4 mt-2 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-navy-800">Total Value</span>
              <span className="text-xl font-bold text-gold-600">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
