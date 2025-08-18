import Seo from "@/components/layout/Seo";
import { Link } from "react-router-dom";

const posts = [
  { slug: "ai-threat-detection-2025", title: "AI Threat Detection in 2025", excerpt: "How transformer-based models elevate SOC operations.", date: "Jul 10, 2025" },
  { slug: "zero-trust-playbook", title: "The Zero-Trust Playbook", excerpt: "A practical guide to identity-first security.", date: "Jun 28, 2025" },
  { slug: "hardening-cloud-ml", title: "Hardening Cloud ML Workloads", excerpt: "Security best practices for MLOps in the cloud.", date: "Jun 12, 2025" },
];

const Blog = () => {
  return (
    <>
      <Seo
        title="Blog | asg cybersecure"
        description="Insights on AI, cybersecurity, zero-trust, and cloud security."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <section className="py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Blog</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="surface-card p-6">
              <p className="text-xs text-muted-foreground">{p.date}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="#" className="story-link mt-4 inline-block text-sm">Read more →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
