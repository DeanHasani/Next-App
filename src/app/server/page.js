// app/server-example/page.js
export default function ServerExample() {
  const time = new Date().toISOString(); // runs once, on the server

  return (
    <div>
      <h2>Server Component</h2>
      <p>This page is generated on the <b>server</b>.</p>
      <p>Server time when page was built: {time}</p>
      <p>Refresh the page to see the time update.</p>
    </div>
  );
}
