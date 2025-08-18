import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = () => {
  // Signature interaction: update CSS vars for glow position
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--x", `${x}%`);
    target.style.setProperty("--y", `${y}%`);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "asg cybersecure",
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    sameAs: [],
    logo: 'https://lovable.dev/opengraph-image-p98pqg.png'
  };

  return (
    <div className="min-h-screen bg-tech-grid bg-glow" onMouseMove={onMouseMove}>
      <SiteHeader />
      <main className="container relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Layout;
