"use client";
import { useState } from "react";

interface FaqItem { q: string; a: string }

export default function FaqSection({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState(0);
  const half = Math.ceil(items.length / 2);

  const toggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? -1 : idx));

  const renderCol = (col: FaqItem[], offset: number) => (
    <div>
      <div className="faq-list">
        {col.map((item, i) => {
          const idx = offset + i;
          return (
            <div key={idx} className={`faq-item${openIdx === idx ? " faq-item--open" : ""}`}>
              <div className="faq-question" onClick={() => toggle(idx)}>
                {item.q}
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">{item.a}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="faq-cols">
      {renderCol(items.slice(0, half), 0)}
      {renderCol(items.slice(half), half)}
    </div>
  );
}
