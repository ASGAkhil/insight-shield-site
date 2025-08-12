import React, { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any> | null;
}

function ensureMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensurePropertyMeta(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function ensureCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

const Seo: React.FC<SeoProps> = ({ title, description, canonicalPath, jsonLd }) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      ensureMeta("description", description);
      ensurePropertyMeta("og:description", description);
      ensureMeta("twitter:description", description);
    }
    ensurePropertyMeta("og:title", title);
    ensureMeta("twitter:card", "summary_large_image");

    const canonicalUrl = new URL(canonicalPath ?? window.location.pathname, window.location.origin).toString();
    ensureCanonical(canonicalUrl);

    // JSON-LD structured data
    let ldScript = document.getElementById("json-ld-script") as HTMLScriptElement | null;
    if (jsonLd) {
      if (!ldScript) {
        ldScript = document.createElement("script");
        ldScript.type = "application/ld+json";
        ldScript.id = "json-ld-script";
        document.head.appendChild(ldScript);
      }
      ldScript.text = JSON.stringify(jsonLd);
    } else if (ldScript) {
      ldScript.remove();
    }
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};

export default Seo;
