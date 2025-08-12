import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Cpu, Lock, Network } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="AI & CyberSecure Solutions | Home"
        description="Modern AI technologies and cybersecurity services to protect and accelerate your business."
      />
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
              AI & CyberSecure Solutions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose animate-fade-in">
              We blend cutting-edge artificial intelligence with robust cybersecurity to help you build, scale, and secure mission-critical systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-fade-in">
              <Button asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-6 bg-card animate-scale-in">
                <Shield className="text-primary" />
                <h3 className="mt-3 font-semibold">Threat Defense</h3>
                <p className="text-sm text-muted-foreground">Adaptive security built on AI.</p>
              </div>
              <div className="rounded-lg border p-6 bg-card animate-scale-in [animation-delay:100ms]">
                <Cpu className="text-primary" />
                <h3 className="mt-3 font-semibold">AI Engineering</h3>
                <p className="text-sm text-muted-foreground">From prototypes to production.</p>
              </div>
              <div className="rounded-lg border p-6 bg-card animate-scale-in [animation-delay:200ms]">
                <Lock className="text-primary" />
                <h3 className="mt-3 font-semibold">Zero Trust</h3>
                <p className="text-sm text-muted-foreground">Identity-first protection.</p>
              </div>
              <div className="rounded-lg border p-6 bg-card animate-scale-in [animation-delay:300ms]">
                <Network className="text-primary" />
                <h3 className="mt-3 font-semibold">Cloud Security</h3>
                <p className="text-sm text-muted-foreground">Secure multi-cloud posture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
