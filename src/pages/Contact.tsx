import Seo from "@/components/layout/Seo";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <Seo
        title="Contact | asg cybersecure"
        description="Contact our AI and cybersecurity experts for a tailored consultation."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <section className="py-16 max-w-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-muted-foreground">Tell us about your goals and challenges. We'll respond within 1 business day.</p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div>
            <label className="text-sm" htmlFor="name">Name</label>
            <Input id="name" name="name" required placeholder="Jane Doe" className="mt-1" />
          </div>
          <div>
            <label className="text-sm" htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="mt-1" />
          </div>
          <div>
            <label className="text-sm" htmlFor="message">Message</label>
            <Textarea id="message" name="message" required placeholder="How can we help?" className="mt-1" />
          </div>
          <Button type="submit" variant="hero" disabled={loading}>{loading ? 'Sending…' : 'Send message'}</Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
