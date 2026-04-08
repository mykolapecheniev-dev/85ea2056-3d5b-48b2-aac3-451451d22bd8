"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
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
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Flowers",          id: "products"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Liza Flowers"
      button={{
        text: "Book Now",        href: "#contact"
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Floral Artistry by Liza"
      description="Crafting unique memories through the language of flowers. From delicate hand-tied bouquets to bespoke botanical installations for your special moments."
      buttons={[
        {
          text: "View Collection",          href: "#products"},
        {
          text: "Book Consultation",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/young-woman-drinking-coffee-1774371711067-7933f7fb.png"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-cute-cheerful-africanamerican-girl-showing-thumbsup-support-like-agree-with-y_1258-138554.jpg",          alt: "Customer Review"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-florist-with-tablet_23-2148377306.jpg",          alt: "Customer Review"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-afro-haircut-holding-bouquet-white-flowers_273609-21997.jpg",          alt: "Customer Review"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-florist-typing-something-tablet_23-2148377280.jpg",          alt: "Customer Review"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-bride-groom-posing-together_23-2150312074.jpg",          alt: "Customer Review"},
      ]}
      avatarText="Loved by 500+ happy clients"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Rooted in Passion"
      description="At Flowers Studio Liza, we believe every petal tells a story. Our team of passionate floral designers carefully selects each bloom, bringing nature's most beautiful and fleeting wonders into your daily life and celebrations."
      imageSrc="http://img.b2bpic.net/free-photo/man-holding-bouquet-white-roses-pink-daisies_114579-2147.jpg"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Botanical Bliss",          price: "$85",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-bouquet-pink-white-color-alstroemeria-flowers-with-pink-ribbon-white-background-with-copy-space_141793-7982.jpg"},
        {
          id: "2",          name: "Tulip Serenity",          price: "$65",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-design-captures-colorful-botanical-beauty-nature-generative-ai_188544-9576.jpg"},
        {
          id: "3",          name: "Royal Rose Grace",          price: "$120",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-rose-still-life_23-2151913761.jpg"},
        {
          id: "4",          name: "Rustic Wildflower",          price: "$75",          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-beautiful-small-flower-bouquet-wooden-surface_181624-38039.jpg"},
        {
          id: "5",          name: "Orchid Elegance",          price: "$150",          imageSrc: "http://img.b2bpic.net/free-photo/tulips-with-gift-boxes-paper_23-2148094119.jpg"},
        {
          id: "6",          name: "Golden Sun Bouquet",          price: "$95",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sunflowers-frame-with-copy-space_23-2150250814.jpg"},
      ]}
      title="Our Signature Arrangements"
      description="Discover our seasonally inspired floral creations, each hand-crafted with care to ensure the freshest and most vibrant display."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "Julia P.",          role: "Wedding Client",          company: "Recent Event",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-cheerful-africanamerican-girl-showing-thumbsup-support-like-agree-with-y_1258-138554.jpg"},
        {
          id: "2",          name: "Marcus R.",          role: "Gift Sender",          company: "Anniversary",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-florist-with-tablet_23-2148377306.jpg"},
        {
          id: "3",          name: "Sophie K.",          role: "Interior Designer",          company: "Hotel Lobby",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-afro-haircut-holding-bouquet-white-flowers_273609-21997.jpg"},
        {
          id: "4",          name: "Elena M.",          role: "Birthday Host",          company: "Private Event",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-florist-typing-something-tablet_23-2148377280.jpg"},
        {
          id: "5",          name: "David L.",          role: "Corporate Client",          company: "Office Decor",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-bride-groom-posing-together_23-2150312074.jpg"},
      ]}
      title="Whispers of Joy"
      description="Loved by those who celebrate life's most precious and floral moments."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      title="Let’s Create Something Beautiful"
      description="Interested in custom arrangements for your event or studio needs? Get in touch today."
      tag="Get in Touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigate",          items: [
            {
              label: "Studio",              href: "#about"},
            {
              label: "Collection",              href: "#products"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
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
