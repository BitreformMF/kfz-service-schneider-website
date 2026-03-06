/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Wrench,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Star,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Clock,
  Car,
  ArrowLeft
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/schneider_logo_white.png"
              alt="Kfz-Service Schneider Logo"
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {["Startseite", "Leistungen", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-slate-300 hover:text-brand-red transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20"
            >
              Termin anfragen
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 py-4 px-4 space-y-4"
        >
          {["Startseite", "Leistungen", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-lg font-semibold text-slate-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="startseite" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/schneider_hero.png"
          alt="Kfz Werkstatt" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            Ihr Vertrauen ist unser Antrieb
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1] max-w-4xl">
            Ihr KFZ-Meisterbetrieb <br />
            <span className="text-brand-red">in Rain</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
            Ob Inspektion, Reparatur oder Unfallinstandsetzung – unsere erfahrenen Kfz-Meister bringen Ihr Fahrzeug schnell und zuverlässig wieder auf die Straße. Vereinbaren Sie jetzt einen Termin und fahren Sie sorgenfrei weiter!
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 justify-center">
            {[
              "Alle Marken",
              "TÜV vor Ort",
              "Moderne Technik",
              "Meisterbetrieb"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/90 text-sm font-medium whitespace-nowrap">
                <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#kontakt" 
              className="bg-brand-red text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-brand-red/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-red/30"
            >
              Jetzt Anfragen
              <ChevronRight size={20} />
            </a>
            <a 
              href="#leistungen" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Unsere Leistungen
            </a>
          </div>
        </motion.div>
      </div>

      {/* TÜV Badge Floating */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <img
          src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/schneider_tuev.png"
          alt="TÜV Siegel"
          className="w-48 h-48 rounded-full shadow-2xl object-contain"
        />
      </motion.div>
    </section>
  );
};


const Services = () => {
  const services = [
    {
      title: "Inspektion & Wartung",
      subtitle: "Regelmäßige Wartung für Sicherheit und Werterhalt",
      image: "https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/service_1.png",
      items: [
        "Herstellergerechte Inspektionen",
        "Ölwechsel & Filterwechsel",
        "Bremsenwartung",
        "Klimaanlagen-Service",
        "Fahrzeugpflege"
      ]
    },
    {
      title: "Reparaturen",
      subtitle: "Professionelle Reparaturen aller Art",
      image: "https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/service_2.png",
      items: [
        "Motor & Getriebe",
        "Bremsen & Fahrwerk",
        "Auspuff & Abgasanlage",
        "Elektronik & Elektrik",
        "Unfallinstandsetzung"
      ]
    },
    {
      title: "HU & AU",
      subtitle: "TÜV-Prüfung direkt vor Ort",
      image: "https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/service_3.png",
      items: [
        "Hauptuntersuchung (TÜV)",
        "Abgasuntersuchung",
        "Mängelbeseitigung",
        "Vor-TÜV-Check",
        "Oldtimer-Gutachten"
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Unsere Leistungen</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Von der Inspektion bis zur Komplettüberholung – wir sind Ihr kompetenter Partner für alle Fahrzeugservices. Mit modernster Technik und jahrelanger Erfahrung.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group bg-slate-900/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-10 flex-grow">
                <h3 className="text-2xl mb-3 text-white group-hover:text-brand-red transition-colors">{service.title}</h3>
                <p className="text-xs font-bold text-brand-red mb-8 uppercase tracking-[0.2em]">{service.subtitle}</p>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 shadow-[0_0_8px_rgba(207,32,37,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 pt-0">
                <a href="#kontakt" className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-brand-red hover:border-brand-red transition-all duration-300 flex items-center justify-center gap-2">
                  Jetzt anfragen
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael S.",
      text: "Nach einem Motorschaden bei meinem Golf war ich ziemlich verzweifelt. Die Jungs hier haben sich richtig Zeit genommen, mir alles genau zu erklären und verschiedene Lösungsmöglichkeiten aufgezeigt. Die Reparatur wurde schneller fertig als gedacht und der Preis war absolut fair – sogar unter dem Kostenvoranschlag! Endlich mal eine Werkstatt, der man vertrauen kann. Bin jetzt Stammkunde!",
      rating: 5
    },
    {
      name: "Andrea K.",
      text: "Ich fahre extra die 20 km von Straubing nach Rain, weil ich hier so gut aufgehoben bin. Als Frau wird man leider in vielen Werkstätten nicht ernst genommen, aber hier ist das ganz anders. Alles wird verständlich erklärt, keine unnötigen Reparaturen aufgeschwatzt und die Preise sind transparent. Besonders toll: Ich wurde rechtzeitig an meinen TÜV-Termin erinnert und konnte sofort einen Termin bekommen. Absolute Empfehlung!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-brand-dark">Das sagen unsere Kunden</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[2.5rem] relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-8 text-lg">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="font-bold text-brand-dark">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-red/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl mb-6">Jetzt Kontakt aufnehmen</h2>
            <p className="text-slate-400 text-lg mb-12">
              Wir sind für Sie da – besuchen Sie uns oder vereinbaren Sie einen Termin.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Adresse</div>
                  <div className="text-xl font-medium">Bergstorf 7, 94369 Rain</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">E-Mail</div>
                  <div className="text-xl font-medium">schneider-kfz-service@t-online.de</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Telefon</div>
                  <div className="text-xl font-medium">+49 9429 9485486</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 text-brand-dark">
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const message = formData.get('message');
                const mailtoLink = `mailto:schneider-kfz-service@t-online.de?subject=Kontaktanfrage von ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ATelefon: ${phone}%0D%0A%0D%0ANachricht:%0D%0A${message}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Ihr Name"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">E-Mail</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="ihre@email.de"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Telefonnummer</label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  placeholder="Ihre Telefonnummer"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Nachricht</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  placeholder="Wie können wir Ihnen helfen?"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-none text-brand-dark"
                ></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  name="privacy-consent" 
                  required 
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-red focus:ring-brand-red shrink-0"
                />
                <label htmlFor="privacy-consent" className="text-sm text-slate-600 leading-relaxed">
                  Ich habe die <Link to="/datenschutz" className="text-brand-red hover:underline font-medium">Datenschutzerklärung</Link> zur Kenntnis genommen und akzeptiere diese. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                </label>
              </div>
              <button type="submit" className="w-full bg-brand-red text-white py-5 rounded-xl text-lg font-bold hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20">
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenCookieSettings }: { onOpenCookieSettings: () => void }) => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/schneider_logo_white.png"
              alt="Kfz-Service Schneider Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-slate-400">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</Link>
            <button onClick={onOpenCookieSettings} className="hover:text-white transition-colors cursor-pointer">Cookie-Einstellungen</button>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Kfz-Service Schneider
          </div>
        </div>
      </div>
    </footer>
  );
};

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <div className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-brand-red font-semibold mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={18} />
              Zurück zur Startseite
            </Link>
            <h1 className="text-4xl md:text-5xl text-white">{title}</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {children}
        </div>
      </div>
      <Footer onOpenCookieSettings={() => {}} />
    </div>
  );
};

const ImpressumPage = () => {
  return (
    <PageLayout title="Impressum">
      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            Kfz-Service Schneider<br />
            Bergstorf 7<br />
            94369 Rain
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">Vertreten durch</h2>
          <p>Manfred Schneider (Geschäftsführer)</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">Kontakt</h2>
          <p>
            Telefon: 09429/9485486<br />
            Telefax: 09429/9485487<br />
            E-Mail: schneider-kfz-service@t-online.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">Umsatzsteuer-ID</h2>
          <p>Steuer-Nr.: 162/269/90392</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">Bankverbindung</h2>
          <p>
            Sparkasse Niederbayern-Mitte<br />
            IBAN: DE14 7425 0000 0000 3329 16<br />
            BIC: BYLADEM1SRG
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

const DatenschutzPage = () => {
  return (
    <PageLayout title="Datenschutzerklärung">
      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-bold mb-1">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3 className="font-bold mb-1 mt-4">Vercel</h3>
          <p>Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (nachfolgend Vercel).</p>
          <p className="mt-2">Vercel ist eine Cloud-Plattform, über die wir unsere Website bereitstellen. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">https://vercel.com/legal/privacy-policy</a>.</p>
          <p className="mt-2">Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>

          <h3 className="font-bold mb-1 mt-4">Domain-Registrierung bei GoDaddy</h3>
          <p>Unsere Domain ist über GoDaddy.com, LLC, 2155 E GoDaddy Way, Tempe, AZ 85284, USA registriert. GoDaddy fungiert als Domain-Registrar und verwaltet die DNS-Einstellungen unserer Domain. Im Rahmen der Domain-Registrierung werden die erforderlichen WHOIS-Daten gemäß den ICANN-Richtlinien gespeichert. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Weitere Informationen finden Sie in der Datenschutzerklärung von GoDaddy: <a href="https://www.godaddy.com/legal/agreements/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">https://www.godaddy.com/legal/agreements/privacy-policy</a>.</p>
          <p className="mt-2">Die Nutzung von GoDaddy erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Registrierung und Verwaltung unserer Domain.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-bold mb-1">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <h3 className="font-bold mt-4 mb-1">Verantwortliche Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-2">
            Kfz-Service Schneider<br />
            Manfred Schneider<br />
            Bergstorf 7<br />
            94369 Rain
          </p>
          <p className="mt-2">
            Telefon: +49 9429 9485486<br />
            E-Mail: schneider-kfz-service@t-online.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">4. Datenerfassung auf dieser Website</h2>
          <h3 className="font-bold mb-1">Server-Log-Dateien</h3>
          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.</p>

          <h3 className="font-bold mt-4 mb-1">Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-dark mb-3">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
        </section>
      </div>
    </PageLayout>
  );
};

const Partner = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl mb-6 text-brand-dark leading-tight">
              Ihr zuverlässiger Partner für Fahrzeugreparaturen und Wartung
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Bei KFZ-Service Schneider stehen wir Ihnen für alle Reparaturen an Ihrem Fahrzeug zur Verfügung. Unsere KFZ-Werkstatt in Rain bietet Ihnen einen umfassenden und kostengünstigen Rundum-Service für Autoreparaturen, TÜV, Unfallinstandsetzungen und Reifenservice.
              </p>
              <p>
                Unser Team berät Sie kompetent und führt Reparaturaufträge zu Ihrer vollsten Zufriedenheit aus. Wir bieten individuelle Beratung und faire Preise. Profitieren Sie von unserem umfangreichen Angebot und unseren kundenfreundlichen Dienstleistungen.
              </p>
            </div>
            <div className="mt-10">
              <a href="#kontakt" className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all">
                Jetzt Termin vereinbaren <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-200 flex items-center justify-center">
               <img 
                src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/kfz-schneider/schneider_team_1.png"
                alt="Unser Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type);
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partner />
      <Services />
      <Testimonials />
      <Contact />
      <Footer onOpenCookieSettings={() => setShowCookieBanner(true)} />

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-slate-600 text-sm leading-relaxed max-w-3xl">
              <p className="font-bold text-brand-dark text-lg mb-2">Wir verwenden Cookies</p>
              Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-brand-red hover:underline font-medium">Datenschutzerklärung</Link>.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button onClick={() => handleCookieConsent('essential')} className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm">
                Nur essenzielle akzeptieren
              </button>
              <button onClick={() => handleCookieConsent('all')} className="px-6 py-3 rounded-xl bg-brand-red text-white font-bold hover:bg-brand-red/90 transition-colors shadow-lg shadow-brand-red/20 text-sm">
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/impressum" element={<ImpressumPage />} />
      <Route path="/datenschutz" element={<DatenschutzPage />} />
    </Routes>
  );
}
