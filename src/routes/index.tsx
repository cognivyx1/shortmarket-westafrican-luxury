import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import heroImg from "@/assets/one40vue-hero.jpg";
import africanFoodImg from "@/assets/one40vue-african-food.jpg";
import ambienceImg from "@/assets/one40vue-ambience.jpg";
import storyImg from "@/assets/one40vue-story.jpg";
import logo from "@/assets/one40-logo.png";
import { categories } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONE40 VUE | West African Restaurant & Bar Cape Town" },
      {
        name: "description",
        content:
          "Experience refined West African cuisine at 108 Shortmarket Street, Cape Town. Authentic flavors, elegant setting, and premium hospitality.",
      },
      { name: "keywords", content: "West African restaurant Cape Town, West African cuisine Cape Town, Shortmarket Street restaurant, Cape Town City Centre dining, African restaurant in Cape Town, ONE40vue" },
      { property: "og:title", content: "ONE40vue — West African Cuisine & Bar in Cape Town" },
      { property: "og:description", content: "Authentic West African cuisine and refined cocktails at 108 Shortmarket Street, Cape Town." },
      { property: "og:type", content: "restaurant" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://one40vue.co.za/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Menu", "#menu"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(18,18,18,0.85)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] border-b border-gold/40"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ transitionDuration: "300ms" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-lg tracking-wide-luxe text-cream md:text-xl">
          <span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-gold">vue</span>
        </a>

        <nav className="hidden gap-10 text-[11px] uppercase tracking-luxe text-cream/85 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="transition hover:text-cream">{l}</a>
          ))}
        </nav>

        <a
          href="tel:+27665096997"
          className="hidden rounded-full border border-cream/30 px-5 py-2 text-[11px] uppercase tracking-luxe text-cream transition hover:bg-cream hover:text-espresso md:inline-block"
        >
          Reserve
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream/10 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-cream/15 bg-espresso/85 backdrop-blur-md px-6 py-6">
          <nav className="flex flex-col gap-5 text-[11px] uppercase tracking-luxe text-cream/90">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="hover:text-gold">
                {l}
              </a>
            ))}
            <a
              href="tel:+27665096997"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full border border-cream/30 px-5 py-2 text-cream hover:bg-cream hover:text-espresso"
            >
              Reserve
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="ONE40vue restaurant interior with arched niches and clay pottery, Cape Town"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-[50%_35%] md:object-right"
      />
      <div className="absolute inset-0 bg-gradient-hero-overlay" />
      {/* Radial dark tint centered behind text for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.2)_100%)] md:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_50%,rgba(0,0,0,0.15)_100%)]" />
      {/* cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(20,12,6,0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-24 pt-20 md:justify-end md:pb-28 md:pt-32 md:px-10">
        <p className="fade-in mb-8 md:mb-6 text-[14px] md:text-base lg:text-[17px] uppercase [letter-spacing:0.4em] md:tracking-luxe text-cream/90 text-center md:text-left leading-relaxed">
          108 Shortmarket Street · Cape Town
        </p>

        <div className="flex flex-1 flex-col justify-end md:contents">

        <img
          src={logo}
          alt="ONE40vue"
          className="fade-in-up w-full max-w-[100%] sm:max-w-xl md:max-w-2xl lg:max-w-[44rem] select-none"
          draggable={false}
        />

        <p className="fade-in-up delay-300 mt-6 max-w-xl font-serif text-[1.65rem] italic text-cream/95 leading-snug md:text-[1.7rem] lg:text-[2rem] text-center md:text-left mx-auto md:mx-0">
          Where the Horizon Meets the Heritage.
        </p>
        <p className="fade-in-up delay-500 mt-3 max-w-md md:max-w-lg text-[19px] leading-[1.65] md:text-[17px] lg:text-[19px] md:leading-relaxed text-cream/85 text-center md:text-left mx-auto md:mx-0">
          West African Restaurant and Roof Top Bar
        </p>

        <div className="fade-in-up delay-700 mt-7 flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-6 md:gap-3.5">
          <a
            href="tel:+27665096997"
            className="group inline-flex h-12 md:h-14 items-center gap-3 rounded-full bg-cream px-8 md:px-10 text-[13px] md:text-[13px] uppercase tracking-luxe text-espresso transition-all duration-300 hover:bg-gold hover:text-cream md:hover:scale-105 md:hover:shadow-[0_10px_40px_-10px_rgba(212,175,99,0.6)]"
          >
            Reserve a Table
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#menu"
            className="inline-flex h-12 md:h-14 items-center gap-3 rounded-full border border-cream/30 px-8 md:px-10 text-[13px] md:text-[13px] uppercase tracking-luxe text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 md:hover:scale-105"
          >
            View Menu
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-cream/40 backdrop-blur-sm py-16 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
        <div className="relative order-2 md:order-1">
          <img
            src={storyImg}
            alt="Hand-thrown clay pottery in a candle-lit arched niche at ONE40vue, Cape Town"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-gold/30 blur-3xl md:block" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-[11px] uppercase tracking-luxe text-clay">Our Story</p>
          <div className="mt-2 h-px w-12 bg-clay/40" />
          <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl">
            A West African table,<br />
            <span className="italic text-clay">quietly set in Cape Town.</span>
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:space-y-6 md:text-lg">
            <p>
              Ascend to a space where the soul of West Africa reaches for the clouds. Perched above the city bustle, <strong className="font-semibold">ONE40</strong> "View" offers a sensory journey that begins with a panoramic mountain backdrop and ends with the bold, sun-kissed flavors of the coast.
            </p>
            <p>
              As the sun dips behind the peaks, painting the sky in hues of amber and violet, enjoy an atmosphere that is as elevated as the <strong className="font-semibold">"vue"</strong>. From the smoky depth of our Jollof to the botanical brightness of our signature cocktails, every moment here is a celebration of the heights—in culture, in flavor, and in perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <section id="menu" className="relative bg-sand/40 backdrop-blur-sm py-20 md:py-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-luxe text-clay">The Menu</p>
        <h2 className="mt-2 font-serif text-5xl leading-[1.05] text-espresso md:text-6xl lg:text-7xl">
          The Anatomy of <span className="italic">Desire</span>
        </h2>
        <p className="mt-3 max-w-xl text-base leading-[1.8] text-muted-foreground md:mt-4 md:text-lg">
          A quiet exploration of smoke, spice, heat and heritage — composed through the flavours of West Africa.
        </p>

        <div className="mt-8 md:mt-12">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="full-menu"
            className="group inline-flex items-center gap-3 rounded-full bg-espresso px-9 py-4 text-[11px] uppercase tracking-luxe text-cream transition-all duration-500 hover:bg-clay hover:shadow-elegant"
          >
            {open ? "Hide Menu" : "View Menu"}
            <span
              className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`}
              aria-hidden
            >
              ↓
            </span>
          </button>
        </div>

        {/* Inline reveal */}
        <div
          id="full-menu"
          className={`grid transition-[grid-template-rows,opacity] duration-700 ease-out ${
            open ? "grid-rows-[1fr] opacity-100 mt-20" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-20 md:space-y-28">
              {categories.map((cat, ci) => (
                <section
                  key={cat.title}
                  className="animate-fade-in"
                  style={{ animationDelay: open ? `${ci * 80}ms` : "0ms", animationFillMode: "both" }}
                >
                  <h3 className="font-serif text-3xl italic text-espresso md:text-4xl">
                    {cat.title}
                  </h3>

                  <ul className="mt-10 space-y-9 md:space-y-11">
                    {cat.items.map((item) => (
                      <li key={item.name} className="group">
                        <div className="flex items-baseline gap-4">
                          <h4 className="font-serif text-lg text-espresso transition group-hover:text-clay md:text-xl">
                            {item.name}
                          </h4>
                          <span className="mt-2 flex-1 border-b border-dotted border-espresso/20" />
                          <span className="font-serif text-base tabular-nums text-clay md:text-lg">
                            R&nbsp;{item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                            {item.desc}
                          </p>
                        )}
                        {item.sub && (
                          <ul className="mt-4 space-y-2 pl-5">
                            {item.sub.map((s) => (
                              <li
                                key={s.name}
                                className="flex items-baseline gap-3 text-sm text-muted-foreground"
                              >
                                <span>{s.name}</span>
                                <span className="mt-1.5 flex-1 border-b border-dotted border-espresso/15" />
                                <span className="font-serif tabular-nums text-clay">
                                  R&nbsp;{s.price}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <p className="pt-8 text-center text-[10px] uppercase tracking-luxe text-muted-foreground/70">
                108 Shortmarket Street · Cape Town · All prices in ZAR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-cream/40 backdrop-blur-sm py-16 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-24 md:px-10">
        <div className="relative">
          <img
            src={africanFoodImg}
            alt="Plated West African cuisine — jollof rice with grilled suya and plantains at ONE40vue"
            width={1280}
            height={1600}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-xl object-cover shadow-elegant"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-luxe text-clay">The Experience</p>
          <h2 className="mt-2 font-serif text-4xl leading-tight text-espresso md:text-6xl">
            Warmth, in <span className="italic">every detail.</span>
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
            Hand-thrown clay pottery rests in arched niches. Linen, wood and low light. The bar
            hums quietly with hibiscus spritzes and aged spirits. Whether you arrive for a
            tasting menu or a single cocktail, the room holds you the same way.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-10 text-sm">
            {[
              ["Cuisine", "West African"],
              ["Setting", "Restaurant & Roof Top Bar"],
              ["Hours", "Monday – Sunday\n10:00 AM – 01:00 AM"],
              ["Dress", "Smart Casual"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-luxe text-clay">{k}</dt>
                <dd className="mt-2 whitespace-pre-line font-serif text-xl text-espresso">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso py-20 text-cream md:py-40">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${ambienceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 bg-espresso/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-luxe text-gold">Reservations</p>
        <h2 className="mt-2 font-serif text-5xl leading-[1.05] md:text-7xl">
          Join us at <span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-gold">vue</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cream/75">
          For bookings, private dining and events, please reach out. We look forward to
          welcoming you on Shortmarket Street.
        </p>

        <div className="mx-auto mt-16 grid max-w-3xl gap-10 text-left sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold">Visit</p>
            <p className="mt-3 font-serif text-lg leading-snug">
              108 Shortmarket Street<br />Cape Town City Centre<br />8001
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold">Contact</p>
            <p className="mt-3 font-serif text-lg leading-snug">
              <a href="tel:+27665096997" className="underline-offset-4 hover:underline">
                +27 66 509 6997
              </a><br />
              <a href="mailto:info@one40vue.co.za" className="underline-offset-4 hover:underline">
                info@one40vue.co.za
              </a>
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold">Follow</p>
            <p className="mt-3 font-serif text-lg leading-snug">
              <a href="https://www.instagram.com/one40vue/" target="_blank" rel="noopener noreferrer" className="block hover:text-gold">Instagram</a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+27665096997"
            className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[11px] uppercase tracking-luxe text-espresso transition hover:bg-gold hover:text-cream"
          >
            Reserve a Table
          </a>
          <a
            href="tel:+27665096997"
            className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-8 py-4 text-[11px] uppercase tracking-luxe text-cream transition hover:border-cream"
          >
            Call the Restaurant
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cream/40 backdrop-blur-sm py-4 md:py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-center md:flex-row md:gap-4 md:px-10 md:text-left">
        <div className="font-serif text-sm tracking-wide-luxe text-espresso md:text-base">
          <span>ONE</span><span className="text-[1.4em] leading-none">40</span><span className="italic text-clay">vue</span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground/80">
          108 Shortmarket Street · Cape Town
        </p>
        <p className="text-[10px] uppercase tracking-luxe text-muted-foreground/70">
          © {new Date().getFullYear()} ONE40vue
        </p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      {/* Cinematic interior background */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ambienceImg})` }}
      />
      <div aria-hidden className="fixed inset-0 -z-10 bg-cream/88" />
      <main className="relative">
        <Nav />
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
