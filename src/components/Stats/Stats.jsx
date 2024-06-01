import React from "react";

const Stats = () => {
  // Definir los anchos para cada sección
  const widths = [
    [10, 20], [5, 25], [15, 15], [12, 18],
    [20, 10], [11, 19], [2, 28], [1, 29],
    [18, 12], [14, 16], [9, 21], [13, 17],
    [8, 22], [3, 27], [7, 23]
  ];

  return (
    <article className="flex flex-col items-center bg-white p-8 w-[44em] rounded-md m-10">
      <h2 className="ml-12 text-3xl font-bold mb-4 self-start">Stats</h2>
      {widths.map((widthPair, index) => (
        <section key={index}>
          <div className="flex justify-start items-center">
            <span className="text-2xl font-bold mr-4 w-[1.3em] inline-block text-left">
              {index + 1}
            </span>
            <div className="flex gap-2">
              <span
                className="p-[1px] inline-block text-center bg-zinc-400 rounded-md"
                style={{ width: `${widthPair[0]}em` }}
              >
                {10 + index}
              </span>
              <span
                className="p-[1px] inline-block text-center bg-zinc-200 rounded-md"
                style={{ width: `${widthPair[1]}em` }}
              >
                {10 + index}
              </span>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};

export default Stats;
