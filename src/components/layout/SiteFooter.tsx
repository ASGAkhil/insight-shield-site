import { Github, Twitter, Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">asg cybersecure</h3>
          <p className="text-sm text-muted-foreground mt-2">Cutting-edge AI and robust cybersecurity to secure your future.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="/about" className="hover:text-foreground">About</a></li>
            <li><a href="/services" className="hover:text-foreground">Services</a></li>
            <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
            <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Follow</h4>
          <div className="flex gap-3 text-muted-foreground">
            <a aria-label="Github" href="#" className="hover:text-foreground"><Github /></a>
            <a aria-label="Twitter" href="#" className="hover:text-foreground"><Twitter /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} asg cybersecure. All rights reserved.</div>
    </footer>
  );
};

export default SiteFooter;
