import { Button } from "@/components/ui/button";
import { ShieldCheck, BrainCircuit, Lock, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/layout/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="Home | AI & CyberSecure Solutions"
        description="AI technologies and cybersecurity services: threat detection, ML integration, and cloud security."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1 text-xs text-muted-foreground">
            <BrainCircuit className="size-4" /> AI + Cybersecurity Experts
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-bold tracking-tight animate-enter">
            Secure your future with intelligent defenses
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We build resilient systems using advanced AI to detect, prevent, and respond to cyber threats.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/contact"><Button variant="hero" size="lg" className="px-6">Get a Consultation <ArrowRight className="ml-1" /></Button></Link>
            <Link to="/services"><Button variant="outline" size="lg">Explore Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Threat Detection', desc: 'Real-time anomaly detection powered by ML.' },
            { icon: Lock, title: 'Zero-Trust Security', desc: 'Identity-first architectures and hardening.' },
            { icon: LineChart, title: 'Actionable Insights', desc: 'Continuous monitoring with clear reporting.' },
          ].map(({ icon: Icon, title, desc }) => (
            <article key={title} className="surface-card p-6 hover-scale">
              <Icon className="text-[hsl(var(--brand))]" />
              <h3 className="mt-4 font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">AI that adapts to evolving threats</h2>
            <p className="mt-4 text-muted-foreground">From predictive analytics to automated response, our solutions reduce risk and accelerate recovery.</p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="secondary"><Link to="/about">Why us</Link></Button>
              <Button asChild variant="link"><Link to="/blog">Read the blog</Link></Button>
            </div>
          </div>
          <div className="surface-card p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-border/60 p-4 bg-background/40">
                <p className="text-muted-foreground">Average MTTR</p>
                <p className="mt-1 text-2xl font-semibold">-38%</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4 bg-background/40">
                <p className="text-muted-foreground">Detection Accuracy</p>
                <p className="mt-1 text-2xl font-semibold">99.2%</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4 bg-background/40">
                <p className="text-muted-foreground">Deploy Time</p>
                <p className="mt-1 text-2xl font-semibold">Days, not months</p>
              </div>
              <div className="rounded-lg border border-border/60 p-4 bg-background/40">
                <p className="text-muted-foreground">Coverage</p>
                <p className="mt-1 text-2xl font-semibold">Cloud to Edge</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
