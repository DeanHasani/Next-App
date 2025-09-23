// app/client-example/page.js
"use client"; // 👈 tells Next.js this runs in the browser

import { useState } from "react";

export default function ClientExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client Component</h2>
      <p>This page runs in the <b>browser</b>.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
