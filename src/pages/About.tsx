import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";

const About = () => {
  return (
    <Layout>
      <Seo
        title="About | AI & CyberSecure Solutions"
        description="Learn about our mission to deliver secure, intelligent systems using AI and best-in-class cybersecurity."
      />
      <section className="container py-16">
        <h1 className="text-4xl font-bold">About AI & CyberSecure Solutions</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          We are a team of AI engineers and security specialists dedicated to building resilient, intelligent systems. Our approach blends research-driven AI with enterprise-grade cybersecurity to deliver measurable outcomes.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Help organizations innovate responsibly with secure, scalable AI.</p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="font-semibold">Values</h3>
            <p className="mt-2 text-sm text-muted-foreground">Security by design, transparency, and long-term partnerships.</p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="font-semibold">Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">End-to-end delivery from strategy and architecture to production.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
