import Seo from "@/components/layout/Seo";
import { Shield, Cpu, Lock, Cloud, ScanFace, KeyRound } from "lucide-react";

const services = [
  { icon: Shield, title: "Threat Detection & Response", desc: "ML-driven anomaly detection, SOC automation, and response orchestration." },
  { icon: Cpu, title: "AI Consulting & ML Integration", desc: "From data strategy to custom models embedded in your products." },
  { icon: Lock, title: "Zero-Trust Architecture", desc: "Identity-first design, micro-segmentation, and least privilege access." },
  { icon: Cloud, title: "Cloud Security", desc: "Multi-cloud posture management, hardening, and compliance." },
  { icon: ScanFace, title: "Penetration Testing", desc: "Proactive testing to uncover vulnerabilities before attackers do." },
  { icon: KeyRound, title: "Identity & Access Management", desc: "Robust IAM, SSO, and secrets management across your stack." },
];

const Services = () => {
  return (
    <>
      <Seo
        title="Services | AI & CyberSecure Solutions"
        description="AI technologies and cybersecurity services: detection & response, IAM, cloud security, and more."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <section className="py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Services</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Pragmatic, measurable outcomes tailored to your risk profile and roadmap.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="surface-card p-6 hover-scale">
              <Icon className="text-[hsl(var(--brand))]" />
              <h3 className="mt-4 font-semibold text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
