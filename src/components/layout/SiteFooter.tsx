const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {year} AI & CyberSecure Solutions. All rights reserved.</p>
        <ul className="flex gap-4 text-sm text-muted-foreground">
          <li><a href="/about" className="hover:text-primary">About</a></li>
          <li><a href="/services" className="hover:text-primary">Services</a></li>
          <li><a href="/blog" className="hover:text-primary">Blog</a></li>
          <li><a href="/contact" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
