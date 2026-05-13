"use client";

import { type CSSProperties, useMemo, useState } from "react";

const levels = [
  {
    max: 69,
    label: "Kanin + maliit na ulam"
  },
  {
    max: 99,
    label: "Regular karinderya meal"
  },
  {
    max: 129,
    label: "Meal + maliit na snack"
  },
  {
    max: 150,
    label: "Mas kumpletong pagkain"
  }
];

export function MealBudgetSlider() {
  const [budget, setBudget] = useState(80);
  const fill = ((budget - 50) / 100) * 100;

  const result = useMemo(
    () => levels.find((level) => budget <= level.max) ?? levels[levels.length - 1],
    [budget]
  );

  return (
    <section className="budget-interactive" aria-label="Meal budget slider">
      <h3>Hanggang saan abot ang budget mo?</h3>
      <label htmlFor="meal-budget">Meal budget: PHP {budget}</label>
      <input
        id="meal-budget"
        max="150"
        min="50"
        onChange={(event) => setBudget(Number(event.target.value))}
        step="5"
        style={{ "--fill": `${fill}%` } as CSSProperties}
        type="range"
        value={budget}
      />

      <div className="budget-meter" aria-hidden="true">
        <span>PHP 50</span>
        <span>PHP 100</span>
        <span>PHP 150</span>
      </div>

      <div className="budget-result">
        <strong>{result.label}</strong>
      </div>
    </section>
  );
}
