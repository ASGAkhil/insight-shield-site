import Seo from "@/components/layout/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About | AI & CyberSecure Solutions"
        description="Learn about our mission to unify AI innovation with world-class cybersecurity."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <section className="py-16 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-muted-foreground">
          We are a team of AI researchers and security engineers dedicated to protecting modern businesses. Our approach blends
          machine learning, zero-trust design, and hands-on expertise to defend against evolving threats.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Our Values</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Security by Design</li>
          <li>Transparent Outcomes</li>
          <li>Continuous Improvement</li>
        </ul>
      </section>
    </>
  );
};

export default About;
