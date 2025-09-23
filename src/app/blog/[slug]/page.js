// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return (
    <div>
      <h2>Blog Post: {params.slug}</h2>
      <p>This is a dynamic blog post. The slug is <b>{params.slug}</b>.</p>
    </div>
  );
}
