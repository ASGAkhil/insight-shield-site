import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

const Contact = () => {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! We'll get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <Layout>
      <Seo
        title="Contact | AI & CyberSecure Solutions"
        description="Contact us to discuss AI engineering and cybersecurity needs for your organization."
      />
      <section className="container py-16 max-w-2xl">
        <h1 className="text-4xl font-bold">Contact</h1>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can we help?" required rows={5} />
          </div>
          <Button type="submit">Send message</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
