import React from "react";

export default function SPiletas({ h2, p }) {
  return (
    <div className="px-[var(--padding-x)] py-[var(--padding-y)] bg-zinc-800 text-[var(--text-color-light)] flex flex-col gap-8">
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
}
