import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Cpu, Lock, Cloud, KeySquare, Network } from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "Security Assessments", desc: "Penetration testing, red teaming, and risk assessments." },
  { icon: Cpu, title: "AI Solutions", desc: "Custom LLMs, MLOps, and inference optimization." },
  { icon: Lock, title: "Zero Trust Architecture", desc: "Identity-centric security across endpoints and cloud." },
  { icon: Cloud, title: "Cloud Hardening", desc: "Secure configurations for AWS, Azure, and GCP." },
  { icon: KeySquare, title: "Identity & Access", desc: "SSO, MFA, and privileged access management." },
  { icon: Network, title: "SIEM & Monitoring", desc: "Threat detection, logging, and incident response." },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Services | AI & CyberSecure Solutions"
        description="Explore our AI engineering and cybersecurity services designed to secure and accelerate your business."
      />
      <section className="container py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">From AI strategy to zero-trust security, we deliver practical outcomes with measurable impact.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Icon className="text-primary" /> {title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
