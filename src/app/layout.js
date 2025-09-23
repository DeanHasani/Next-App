// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "lightgray", padding: "10px" }}>
          <h1>My Website</h1>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/blog">Blog</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children} {/* this is where the page content shows up */}
        </main>

        <footer style={{ background: "lightgray", padding: "10px", marginTop: "20px" }}>
          <p>© 2025 My Website</p>
        </footer>
      </body>
    </html>
  );
}
