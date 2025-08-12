import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Building a Zero-Trust Posture", excerpt: "Key pillars to secure modern enterprises.", date: "2025-08-01" },
  { id: 2, title: "LLM Security Essentials", excerpt: "Protecting AI systems from prompt injection and data leaks.", date: "2025-07-12" },
  { id: 3, title: "Cloud Threat Detection 101", excerpt: "From logs to insights using modern SIEM.", date: "2025-06-30" },
];

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="Blog | AI & CyberSecure Solutions"
        description="Insights on AI engineering, threat detection, zero trust, and secure architectures."
      />
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="h-full">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                <Link to="#" className="mt-2 inline-block text-primary underline-offset-4 hover:underline">Read more</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
