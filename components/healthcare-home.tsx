import Image from 'next/image'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Baby,
  Bone,
  Brain,
  CalendarDays,
  Clock3,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ScanHeart,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from 'lucide-react'
import { AppointmentForm } from '@/components/appointment-form'

const departments = [
  { name: 'Heart & vascular', detail: 'Expert heart care, from prevention to recovery.', icon: HeartPulse, tint: 'bg-[#edf5ef]' },
  { name: 'Brain & spine', detail: 'Thoughtful care for your nervous system.', icon: Brain, tint: 'bg-[#f2f1eb]' },
  { name: 'Bone & joint', detail: 'Get back to the movement you love.', icon: Bone, tint: 'bg-[#eef2f5]' },
  { name: 'Women’s health', detail: 'Personalized care through every life stage.', icon: HeartHandshake, tint: 'bg-[#f6efed]' },
  { name: 'Family & children', detail: 'A healthier start for every generation.', icon: Baby, tint: 'bg-[#f0f4e9]' },
  { name: 'Imaging & labs', detail: 'Clear answers with advanced diagnostics.', icon: Microscope, tint: 'bg-[#edf2f3]' },
]

const doctors = [
  {
    name: 'Dr. Maya Chen',
    role: 'Cardiology',
    detail: 'Heart health · Preventive care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=720&q=85',
    alt: 'Portrait of a physician in a white coat',
  },
  {
    name: 'Dr. James Okafor',
    role: 'Family medicine',
    detail: 'Primary care · Men’s health',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=720&q=85',
    alt: 'Portrait of a smiling physician',
  },
  {
    name: 'Dr. Elena Rivera',
    role: 'Pediatrics',
    detail: 'Children’s health · Newborn care',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=720&q=85',
    alt: 'Portrait of a pediatric physician',
  },
]

const healthGuides = [
  { category: 'Everyday wellness', title: 'A small guide to a healthier heart', read: '6 min read', color: 'bg-[#e9f0e9]', icon: HeartPulse },
  { category: 'Family health', title: 'Helping little ones feel at home at the doctor', read: '4 min read', color: 'bg-[#f3eee5]', icon: Baby },
  { category: 'Your care', title: 'What to expect at your first primary care visit', read: '5 min read', color: 'bg-[#e9eff0]', icon: Stethoscope },
]

function BrandMark() {
  return (
    <a href="#home" aria-label="Cedar Grove Medical Center home" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155f54]">
      <span className="flex size-10 items-center justify-center rounded-[14px] bg-[#155f54] text-white"><HeartPulse aria-hidden="true" className="size-5" /></span>
      <span className="flex flex-col leading-none">
        <span className="font-editorial text-[19px] font-semibold tracking-tight text-[#173a34]">Cedar Grove</span>
        <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#688078]">Medical Center</span>
      </span>
    </a>
  )
}

function SiteHeader() {
  return (
    <>
      <div className="hidden bg-[#123e37] text-white sm:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2.5 text-[11px] font-medium tracking-wide lg:px-8">
          <p className="flex items-center gap-2 text-white/85"><MapPin aria-hidden="true" className="size-3.5" /> A neighbor in your corner, Portland, Oregon</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="transition hover:text-[#c8dfcf]">Visitor information</a>
            <a href="tel:+15035550148" className="inline-flex items-center gap-2"><Phone aria-hidden="true" className="size-3.5" />(503) 555-0148</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-[#e8eee9] bg-[#fbfcfa]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-5 px-5 lg:px-8">
          <BrandMark />
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-[13px] font-medium text-[#52675f] lg:flex">
            <a className="transition hover:text-[#155f54]" href="#departments">Departments</a>
            <a className="transition hover:text-[#155f54]" href="#doctors">Find a doctor</a>
            <a className="transition hover:text-[#155f54]" href="#services">Services</a>
            <a className="transition hover:text-[#155f54]" href="#health-library">Health library</a>
            <a className="transition hover:text-[#155f54]" href="#contact">About us</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+15035550148" aria-label="Call Cedar Grove Medical Center" className="flex size-10 items-center justify-center rounded-full border border-[#dce7df] text-[#155f54] transition hover:bg-[#edf5ef] sm:hidden"><Phone aria-hidden="true" className="size-4" /></a>
            <a href="#appointment" className="hidden min-h-11 items-center gap-2 rounded-full bg-[#155f54] px-5 text-[13px] font-semibold text-white transition hover:bg-[#104d44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155f54] sm:inline-flex">
              Request a visit <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <details className="group relative lg:hidden">
              <summary aria-label="Open navigation menu" className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#dce7df] text-[#155f54] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155f54]"><Menu aria-hidden="true" className="size-4" /></summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 flex w-56 flex-col gap-1 rounded-2xl border border-[#e2ebe5] bg-white p-2 shadow-xl">
                {['Departments', 'Find a doctor', 'Services', 'Health library', 'About us'].map((item, index) => <a key={item} href={['#departments', '#doctors', '#services', '#health-library', '#contact'][index]} className="rounded-xl px-4 py-3 text-sm text-[#38564c] hover:bg-[#eff5f0]">{item}</a>)}
                <a href="#appointment" className="mt-1 rounded-xl bg-[#155f54] px-4 py-3 text-sm font-semibold text-white">Request a visit</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  )
}

function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-[#f5f8f4]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.93fr_1.07fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-white/80 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-[#37695b]">
            <span className="size-1.5 rounded-full bg-[#4d9b78]" /> YOUR COMMUNITY HOSPITAL SINCE 1987
          </div>
          <h1 className="max-w-[620px] font-editorial text-[clamp(3.15rem,6.2vw,5.4rem)] leading-[0.99] tracking-[-0.055em] text-[#183c35]">
            Here for every <span className="text-[#55836e]">chapter</span> of your health.
          </h1>
          <p className="mt-6 max-w-[500px] text-base leading-7 text-[#61746d] sm:text-[17px] sm:leading-8">
            Expert care, thoughtful people, and a place that feels a little closer to home. We’re here to help you feel your best at every age.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#appointment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#155f54] px-6 text-sm font-semibold text-white transition hover:bg-[#104d44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155f54]">
              Request an appointment <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a href="#departments" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cbdcd2] bg-white/70 px-6 text-sm font-semibold text-[#2c574d] transition hover:bg-white">
              Explore care <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#dce6df] pt-6 text-xs font-medium text-[#587069]">
            <span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-[#43826c]" /> Care built around you</span>
            <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4 text-[#43826c]" /> Emergency care, 24/7</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
          <div className="absolute -right-8 -top-9 size-40 rounded-full bg-[#e0ece2] blur-2xl sm:size-56" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dce8df] shadow-[0_30px_75px_-44px_rgba(24,60,53,0.48)]">
            <div className="relative aspect-[1.12/1] sm:aspect-[1.18/1]">
              <Image src="/images/care-team-hero.png" alt="A Cedar Grove physician talking with a patient in a sunlit hospital room" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183c35]/25 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e5f1e9] text-[#155f54]"><HeartHandshake aria-hidden="true" className="size-5" /></span>
                <div><p className="text-sm font-semibold text-[#23483e]">Care that listens first</p><p className="mt-1 text-xs text-[#71817b]">Your health, your way forward</p></div>
              </div>
              <a href="#doctors" aria-label="Meet our care team" className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#dbe6df] text-[#155f54] transition hover:bg-[#edf5ef]"><ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </div>
          </div>
          <div className="absolute -left-4 top-[18%] hidden items-center gap-3 rounded-2xl border border-[#e2ebe3] bg-white p-3.5 shadow-[0_12px_32px_-16px_rgba(24,60,53,0.25)] sm:flex lg:-left-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#f4f4e9] text-[#8c8d4f]"><CalendarDays aria-hidden="true" className="size-5" /></span>
            <div><p className="text-xs font-semibold text-[#29483f]">Here when you need us</p><p className="mt-1 text-[10px] text-[#7e8b84]">Same-day care available</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WelcomeStrip() {
  return (
    <section aria-label="Hospital highlights" className="border-y border-[#e6ede7] bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-0 px-5 py-5 sm:grid-cols-3 sm:px-8 sm:py-0">
        {[
          { title: 'One connected care team', description: 'Support from first visit to follow-up', icon: HeartHandshake },
          { title: 'Close to home', description: 'Rooted in the Portland community', icon: MapPin },
          { title: 'Here around the clock', description: 'Emergency services day and night', icon: Clock3 },
        ].map(({ title, description, icon: Icon }, index) => (
          <div key={title} className={`flex items-center gap-3.5 py-4 sm:py-5 ${index > 0 ? 'sm:border-l sm:border-[#e7ede8] sm:pl-7 lg:pl-10' : ''}`}>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eff5ef] text-[#4b806b]"><Icon aria-hidden="true" className="size-[18px]" /></span>
            <div><p className="text-[13px] font-semibold text-[#294840]">{title}</p><p className="mt-1 text-xs text-[#75847d]">{description}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description, href, linkText }: { eyebrow: string; title: string; description: string; href?: string; linkText?: string }) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
      <div className="max-w-[630px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#5a806f]">{eyebrow}</p>
        <h2 className="mt-3 font-editorial text-4xl leading-[1.08] tracking-[-0.035em] text-[#183c35] sm:text-[2.8rem]">{title}</h2>
        <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#6e7f78] sm:text-[15px]">{description}</p>
      </div>
      {href && linkText && <a href={href} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#155f54] transition hover:gap-3">{linkText}<ArrowRight aria-hidden="true" className="size-4" /></a>}
    </div>
  )
}

function DepartmentsSection() {
  return (
    <section id="departments" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading eyebrow="Find the right care" title="A whole lot of care, all in one place." description="From everyday health to specialized treatment, find a team ready to meet you where you are." href="#services" linkText="See all services" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, detail, icon: Icon, tint }) => (
            <a key={name} href="#appointment" className="group flex min-h-[145px] items-start gap-4 rounded-2xl border border-[#e6ece7] bg-[#fcfdfb] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#cbded1] hover:shadow-[0_14px_38px_-28px_rgba(20,74,61,0.3)] sm:p-6">
              <span className={`flex size-12 shrink-0 items-center justify-center rounded-[15px] ${tint} text-[#376d5d]`}><Icon aria-hidden="true" className="size-5" /></span>
              <span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2 text-[15px] font-semibold text-[#25453c]">{name}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[#789287] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span><span className="mt-2 block text-[13px] leading-5 text-[#718078]">{detail}</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorsSection() {
  return (
    <section id="doctors" className="scroll-mt-24 bg-[#f4f7f3] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading eyebrow="Meet your care team" title="Good care starts with good people." description="A few of the dedicated clinicians who make Cedar Grove feel like a community. Browse by specialty or request a visit." href="#appointment" linkText="Find your doctor" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="group overflow-hidden rounded-[1.5rem] border border-[#e4ebe5] bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-34px_rgba(18,64,53,0.4)]">
              <div className="relative aspect-[1.35/1] overflow-hidden bg-[#e8eee8]">
                <Image src={doctor.image} alt={doctor.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" unoptimized className="object-cover object-center transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#446c5c] backdrop-blur">Accepting visits</span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#628170]">{doctor.role}</p>
                <h3 className="mt-2 font-editorial text-[25px] tracking-tight text-[#1c4038]">{doctor.name}</h3>
                <p className="mt-2 text-xs text-[#7a8982]">{doctor.detail}</p>
                <a href="#appointment" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#155f54]">Request a visit <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-1" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-[#87938d]">Clinician profiles shown are illustrative sample content.</p>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#5a806f]">Care, connected</p>
            <h2 className="mt-3 font-editorial text-4xl leading-[1.08] tracking-[-0.035em] text-[#183c35] sm:text-[2.8rem]">More ways to feel better, under one roof.</h2>
            <p className="mt-4 max-w-[490px] text-sm leading-6 text-[#6e7f78] sm:text-[15px]">From preventive checkups to advanced treatments, our care teams work together around what matters to you.</p>
            <a href="#appointment" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#155f54] px-5 text-sm font-semibold text-white transition hover:bg-[#104d44]">Talk with our team <ArrowRight aria-hidden="true" className="size-4" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: 'Same-day care', text: 'Convenient care when the unexpected can’t wait.', icon: Clock3 },
              { title: 'Advanced imaging', text: 'Helpful answers with thoughtful, modern diagnostics.', icon: ScanHeart },
              { title: 'Surgical services', text: 'Experienced teams with a personal approach to recovery.', icon: Syringe },
              { title: 'Rehabilitation', text: 'Physical and occupational therapy at your pace.', icon: Activity },
            ].map(({ title, text, icon: Icon }, index) => (
              <article key={title} className={`rounded-2xl border border-[#e6ece7] p-5 sm:p-6 ${index === 0 ? 'bg-[#f1f6f1]' : 'bg-[#fcfdfb]'}`}>
                <span className="flex size-10 items-center justify-center rounded-xl bg-white text-[#4d806b] shadow-sm"><Icon aria-hidden="true" className="size-[18px]" /></span>
                <h3 className="mt-5 text-[15px] font-semibold text-[#294840]">{title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#75847d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AppointmentSection() {
  return (
    <section id="appointment" className="scroll-mt-20 bg-[#eff5f0] py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="pt-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#5a806f]">Your next step</p>
          <h2 className="mt-3 max-w-[500px] font-editorial text-4xl leading-[1.08] tracking-[-0.035em] text-[#183c35] sm:text-[2.8rem]">Let’s find a time that works for you.</h2>
          <p className="mt-4 max-w-[460px] text-sm leading-6 text-[#6e7f78] sm:text-[15px]">Tell us a little about what you’re looking for. Our team is here to help you find the right next step.</p>
          <div className="mt-8 space-y-4">
            <a href="tel:+15035550148" className="flex items-center gap-3 text-sm font-semibold text-[#27584c]"><span className="flex size-10 items-center justify-center rounded-full bg-white text-[#347562]"><Phone aria-hidden="true" className="size-4" /></span> (503) 555-0148</a>
            <div className="flex items-center gap-3 text-sm text-[#63776e]"><span className="flex size-10 items-center justify-center rounded-full bg-white text-[#347562]"><Clock3 aria-hidden="true" className="size-4" /></span> Scheduling team: Mon–Fri, 8 am–5 pm</div>
          </div>
          <div className="mt-8 flex max-w-[440px] gap-3 rounded-2xl border border-[#dce8df] bg-white/60 p-4">
            <span className="mt-0.5 text-[#54816e]"><ShieldCheck aria-hidden="true" className="size-4" /></span>
            <p className="text-xs leading-5 text-[#6b7d74]">For your privacy, this sample form doesn’t transmit or store any information. Please call the number above to schedule a real appointment.</p>
          </div>
        </div>
        <AppointmentForm />
      </div>
    </section>
  )
}

function HealthLibrarySection() {
  return (
    <section id="health-library" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading eyebrow="A little more know-how" title="Good health starts with good information." description="Practical, clinician-informed reads to help you take care of yourself and the people you love." href="#contact" linkText="Visit our health library" />
        <div className="grid gap-4 lg:grid-cols-3">
          {healthGuides.map(({ category, title, read, color, icon: Icon }) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-[#e6ece7] bg-white transition hover:border-[#d3e2d7] hover:shadow-[0_18px_40px_-30px_rgba(20,74,61,0.35)]">
              <div className={`relative flex h-36 items-center justify-center ${color}`}>
                <div className="absolute -right-4 -top-8 size-32 rounded-full border border-white/60" />
                <span className="flex size-16 items-center justify-center rounded-[22px] bg-white/80 text-[#4b806b] shadow-sm"><Icon aria-hidden="true" className="size-7" /></span>
                <span className="absolute bottom-3 left-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#527265]">{category}</span>
              </div>
              <div className="p-5">
                <h3 className="max-w-[310px] font-editorial text-[21px] leading-snug text-[#294840]">{title}</h3>
                <div className="mt-5 flex items-center justify-between text-xs text-[#839088]"><span>{read}</span><a href="#appointment" aria-label={`Learn more: ${title}`} className="flex size-8 items-center justify-center rounded-full border border-[#e2ebe5] text-[#467562] transition group-hover:bg-[#eff5f0]"><ArrowUpRight aria-hidden="true" className="size-4" /></a></div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-[#87938d]">Health articles are sample content and aren’t a substitute for medical advice.</p>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="bg-[#153f38] text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
        <div className="flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f2c9a3]"><Hospital aria-hidden="true" className="size-5" /></span>
          <div><p className="font-editorial text-2xl">Need emergency care?</p><p className="mt-1.5 text-sm text-white/70">If you may be experiencing a medical emergency, call 911 now.</p></div>
        </div>
        <a href="tel:911" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f7eee3] px-6 text-sm font-bold text-[#173f37] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Call 911 <Phone aria-hidden="true" className="size-4" /></a>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#f6f8f5]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-8 lg:py-16">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-[280px] text-sm leading-6 text-[#738179]">A community hospital with a simple belief: care is better when it feels personal.</p>
        </div>
        <div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#587267]">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-[#718078]"><a className="hover:text-[#155f54]" href="#departments">Departments</a><a className="hover:text-[#155f54]" href="#doctors">Our doctors</a><a className="hover:text-[#155f54]" href="#services">Medical services</a><a className="hover:text-[#155f54]" href="#health-library">Health library</a></div></div>
        <div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#587267]">Visit us</h3><address className="mt-4 not-italic text-sm leading-6 text-[#718078]">420 Cedar Grove Lane<br />Portland, OR 97204<br /><a className="mt-2 inline-flex items-center gap-2 font-semibold text-[#155f54]" href="https://maps.google.com/?q=420+Cedar+Grove+Lane+Portland+OR+97204" target="_blank" rel="noreferrer">Get directions <ArrowUpRight aria-hidden="true" className="size-3.5" /></a></address></div>
        <div><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#587267]">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm text-[#718078]"><a className="inline-flex items-center gap-2 hover:text-[#155f54]" href="tel:+15035550148"><Phone aria-hidden="true" className="size-4" />(503) 555-0148</a><p className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4" /> Main desk: 7 am–7 pm</p><a className="inline-flex items-center gap-2 font-semibold text-[#a04d3f]" href="tel:911"><Phone aria-hidden="true" className="size-4" /> Emergency: 911</a></div></div>
      </div>
      <div className="border-t border-[#e4ebe5]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-5 text-[11px] leading-5 text-[#87938d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Cedar Grove Medical Center. Sample hospital information, clinicians, and contact details for this website demo.</p>
          <p>Information on this site is not medical advice. In an emergency, call 911.</p>
        </div>
      </div>
    </footer>
  )
}

export function HealthcareHome() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-[#183c35]">
        <HeroSection />
        <WelcomeStrip />
        <DepartmentsSection />
        <DoctorsSection />
        <ServicesSection />
        <AppointmentSection />
        <HealthLibrarySection />
        <EmergencySection />
      </main>
      <SiteFooter />
    </>
  )
}
