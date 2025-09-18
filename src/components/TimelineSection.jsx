import React from "react";

/** === Input Data (ordered) === */
  const timelineData = [
  { year: "2015", description: "Abner launches. Office and assembly line begin operations." },
  { year: "2016", description: "Play Series and high-CRI LEDs introduced for retail lighting." },
  { year: "2017", description: "Debut of DMX RGB lighting at Fluid Bar Exchange, a Berlin Fest nominee." },
  { year: "2018", description: "First use of Bridgelux Dim-to-Warm (97CRI) at Ruia House. Expansion to Ahmedabad." },
  { year: "2019", description: "HDFC Bank HQ and RGB lighting in Nasik executed. Footprint expands to Pune and Hyderabad." },
  { year: "2020", description: "Studio opens. Launched 97CRI tunable white and anti-glare downlights. Executed jewellery showrooms." },
  { year: "2021", description: "500+ projects; 1M sq. ft. lit. Marble Italia (30K sq. ft.) with scallop-less wall washing." },
  { year: "2022", description: "100+ Bluestone stores. New Bhiwandi facility. High-CRI jewellery lighting launched." },
  { year: "2023", description: "Released Play-100; adopted 5S; launched slim linear & 5mm magnetic lighting." },
  { year: "2024", description: "Hit 1000+ projects. Expanded One Series. Debuted Concrete Lights & in-house ERP." },
  { year: "2025", description: "Stone Series Gen 2, enhanced ERP, new Concrete Light innovations." }
];

/** === Helpers === */
const chunk3 = (arr) => {
  const out = [];
  for (let i = 0; i < arr.length; i += 3) out.push(arr.slice(i, i + 3));
  return out;
};

// Column centers across the row: col 0,1,2 => 16.666…, 50%, 83.333…
const colCenterPct = (col) => ((col * 2 + 1) / 6) * 100;

/** === Desktop Row ===
 * Renders a row of up to 3 cards with a horizontal connector between their mid-edge dots.
 * Optionally renders a vertical connector at the row start/end to link with adjacent rows.
 */
const DesktopRow = ({
  items,            // array of up to 3 data objects (may include null placeholders)
  reversed,         // alternate direction for snake
  connectUpAt,      // column index (0|1|2) to draw a short vertical line from above
  connectDownAt,    // column index (0|1|2) to draw a short vertical line to below
  rowIdx            // row index for hardcoded positioning
}) => {
  // Determine which columns are filled
  const filledCols = items
    .map((item, i) => (item ? i : -1))
    .filter((i) => i !== -1);

  // Horizontal connector: from first filled center to last filled center
  const hasSpan = filledCols.length > 1;
  const startCol = filledCols[0];
  const endCol = filledCols[filledCols.length - 1];

  return (
    <div className="relative">
      {/* Horizontal connector across midpoints of filled columns */}
      {hasSpan && (
        <div
          className="absolute top-1/2 h-0.5 bg-slate-600"
          style={{
            left: `${colCenterPct(startCol)}%`,
            width: `${colCenterPct(endCol) - colCenterPct(startCol)}%`
          }}
        />
      )}

      {/* Vertical elbow connectors (pixel-aligned) */}
      {connectUpAt !== undefined && (
        <div
          className="pointer-events-none absolute -top-[16px] w-0.5 bg-slate-600"
          style={{ left: `${colCenterPct(connectUpAt)}%`, height: "16px" }}
        />
      )}
      {connectDownAt !== undefined && (
        <div
          className="pointer-events-none absolute -bottom-[16px] w-0.5 bg-slate-600"
          style={{ left: `${colCenterPct(connectDownAt)}%`, height: "16px" }}
        />
      )}

      {/* Row cards */}
      <div className={`grid grid-cols-3 gap-6 items-stretch ${reversed ? "[direction:rtl]" : ""}`}>
        {items.map((item, i) => {
          if (!item) return <div key={i} className="h-0" />;
          
          return (
            <div key={i} className="[direction:ltr] relative group">
              <div className="relative bg-white border border-slate-200 rounded-lg shadow-sm p-4 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 hover:scale-105">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">{item.year}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const rows = chunk3(timelineData);

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">CHRONOSCAPE</h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">A brief history of Abner</p>
        </div>

        {/* Mobile: simple vertical timeline */}
        <div className="md:hidden">
          <div className="space-y-4">
            {timelineData.map((it, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 hover:scale-105">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">{it.year}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{it.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-per-row snake with vertical elbows */}
        <div className="hidden md:block space-y-8">
          {rows.map((rowItems, rowIdx) => {
            // Pad to exactly 3 slots for consistent connector positions
            const padded = [...rowItems];
            while (padded.length < 3) padded.push(null);

            // Special handling for last row (right-align the 2 items)
            const isLastRow = rowIdx === rows.length - 1;
            const reversed = isLastRow ? false : (rowIdx % 2 === 1);

            // For last row with 2 items, left-align them (fixes 2024/2025 swap on desktop/iPad)
            const finalItems = isLastRow && rowItems.length === 2 
              ? [...rowItems, null] // Put null at end to left-align
              : padded;

            // Hardcoded vertical connections for snake pattern
            // Row 0 (2015-2017): connect down from 2017 (col 2)
            // Row 1 (2020-2018): connect up to 2018 (col 2), connect down from 2018 (col 0) 
            // Row 2 (2021-2023): connect up to 2021 (col 0), connect down from 2023 (col 2)
            // Row 3 (2024-2025): connect up to 2024 (col 2), no connect down (last row)
            const connectUpAt = rowIdx > 0 ? (rowIdx === 1 ? 2 : rowIdx === 2 ? 0 : 2) : undefined;
            const connectDownAt = rowIdx < rows.length - 1 ? (rowIdx === 0 ? 2 : rowIdx === 1 ? 0 : 2) : undefined;

            return (
              <DesktopRow
                key={rowIdx}
                items={finalItems}
                reversed={reversed}
                connectUpAt={connectUpAt}
                connectDownAt={connectDownAt}
                rowIdx={rowIdx}
              />
            );
          })}
        </div>

        <div className="h-2" />
      </div>
    </section>
  );
};

export default TimelineSection;