// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "black", padding: "20px", color: "white"}}>
          <h1>My Website</h1>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/blog">Blog</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer style={{ background: "green", padding: "10px", marginTop: "50px" }}>
          <p>©copyright 2025 NEXT APP</p>
        </footer>
      </body>
    </html>
  );
}
