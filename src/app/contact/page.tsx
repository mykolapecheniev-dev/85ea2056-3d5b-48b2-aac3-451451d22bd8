"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Flowers", id: "products" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Liza Flowers"
            button={{ text: "Book Now", href: "/contact" }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            text="Flowers Studio Liza Contact: +309012312543 | 123 Botanical Ave, Athens"
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Navigate",                items: [
                  { label: "Studio", href: "/#about" },
                  { label: "Collection", href: "/#products" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Legal",                items: [
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                ],
              },
            ]}
            logoText="Liza Flowers"
            copyrightText="© 2025 Liza Flowers Studio"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
