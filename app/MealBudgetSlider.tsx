"use client";

import { useMemo, useState } from "react";

const levels = [
  {
    max: 69,
    label: "Kanin + maliit na ulam",
    note:
      "Sapat para makaraos, pero halos walang puwang para sa dagdag na sabaw, gulay, o inumin."
  },
  {
    max: 99,
    label: "Regular karinderya meal",
    note:
      "Mas malapit sa kasalukuyang halaga ng student meal sa paligid ng campus."
  },
  {
    max: 129,
    label: "Meal + maliit na snack",
    note:
      "May kaunting allowance para sa tubig, tinapay, o dagdag-kanin kung kailangan."
  },
  {
    max: 150,
    label: "Mas kumpletong pagkain",
    note:
      "Mas may luwag, pero mabilis pa ring nauubos kung may pamasahe at school expenses."
  }
];

export function MealBudgetSlider() {
  const [budget, setBudget] = useState(80);

  const result = useMemo(
    () => levels.find((level) => budget <= level.max) ?? levels[levels.length - 1],
    [budget]
  );

  const difference = budget - 60;

  return (
    <section className="budget-interactive" aria-label="Meal budget slider">
      <div>
        <p className="interactive-kicker">Interactive</p>
        <h3>Kung ito ang baon mo, anong kaya nitong meal?</h3>
        <p>
          I-adjust ang daily food budget para makita kung paano kumikipot ang
          choices ng estudyante habang tumataas ang presyo ng pagkain.
        </p>
      </div>

      <label htmlFor="meal-budget">Daily meal budget: PHP {budget}</label>
      <input
        id="meal-budget"
        max="150"
        min="50"
        onChange={(event) => setBudget(Number(event.target.value))}
        step="5"
        type="range"
        value={budget}
      />

      <div className="budget-meter" aria-hidden="true">
        <span>PHP 50</span>
        <span>PHP 80</span>
        <span>PHP 150</span>
      </div>

      <div className="budget-result">
        <strong>{result.label}</strong>
        <p>{result.note}</p>
        <small>
          Compared with a PHP 60 meal budget, this is{" "}
          {difference >= 0 ? `PHP ${difference} higher` : `PHP ${Math.abs(difference)} lower`}.
        </small>
      </div>
    </section>
  );
}
