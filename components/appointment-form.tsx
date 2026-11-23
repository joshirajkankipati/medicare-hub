'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Clock3, Phone } from 'lucide-react'

const departments = [
  'Primary care',
  'Cardiology',
  'Orthopedics',
  'Women’s health',
  'Pediatrics',
  'Imaging & diagnostics',
  'Not sure yet',
]

export function AppointmentForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('name') ?? '').trim()
    setSubmittedName(fullName.split(' ')[0] || 'there')
  }

  if (submittedName) {
    return (
      <div className="flex min-h-[430px] flex-col justify-center rounded-[1.75rem] border border-[#dce9e3] bg-white p-7 shadow-[0_24px_70px_-42px_rgba(15,65,56,0.35)] sm:p-10">
        <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#e7f4ed] text-[#116354]">
          <Check aria-hidden="true" className="size-7" />
        </span>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#49766b]">Request preview</p>
        <h3 className="font-editorial text-3xl leading-tight text-[#163b35]">Thanks, {submittedName}.</h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-[#63756f]">
          This sample form doesn&apos;t send or save your information, and no appointment has been booked. Please call our care team to schedule a real visit.
        </p>
        <a href="tel:+15035550148" className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#155f54] px-5 text-sm font-semibold text-white transition hover:bg-[#104d44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155f54]">
          <Phone aria-hidden="true" className="size-4" />
          Call (503) 555-0148
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-[#dce9e3] bg-white p-6 shadow-[0_24px_70px_-42px_rgba(15,65,56,0.35)] sm:p-9">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#49766b]">Let&apos;s get you started</p>
          <h3 className="mt-2 font-editorial text-3xl text-[#163b35]">Request a visit</h3>
        </div>
        <span className="hidden size-12 items-center justify-center rounded-2xl bg-[#eff6f1] text-[#155f54] sm:flex">
          <Clock3 aria-hidden="true" className="size-5" />
        </span>
      </div>

      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[#294840]">
          Full name
          <input name="name" autoComplete="name" required className="min-h-12 rounded-xl border border-[#dce6e1] bg-[#fbfcfa] px-4 text-sm text-[#1d3732] outline-none transition placeholder:text-[#8d9c96] focus:border-[#388775] focus:ring-3 focus:ring-[#388775]/15" placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-[#294840]">
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required className="min-h-12 rounded-xl border border-[#dce6e1] bg-[#fbfcfa] px-4 text-sm text-[#1d3732] outline-none transition placeholder:text-[#8d9c96] focus:border-[#388775] focus:ring-3 focus:ring-[#388775]/15" placeholder="(555) 000-0000" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-[#294840]">
          Department
          <select name="department" defaultValue="" required className="min-h-12 rounded-xl border border-[#dce6e1] bg-[#fbfcfa] px-4 text-sm text-[#1d3732] outline-none transition focus:border-[#388775] focus:ring-3 focus:ring-[#388775]/15">
            <option value="" disabled>Select a department</option>
            {departments.map((department) => <option key={department}>{department}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-[#294840]">
          Preferred date
          <input name="date" type="date" required className="min-h-12 rounded-xl border border-[#dce6e1] bg-[#fbfcfa] px-4 text-sm text-[#1d3732] outline-none transition focus:border-[#388775] focus:ring-3 focus:ring-[#388775]/15" />
        </label>
      </div>

      <p className="mt-5 text-xs leading-5 text-[#71817b]">This is a visual demo. Do not enter real medical or personal information.</p>
      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#155f54] px-6 text-sm font-semibold text-white transition hover:bg-[#104d44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155f54] sm:w-auto">
        Continue request
        <ArrowRight aria-hidden="true" className="size-4" />
      </button>
      <p className="mt-4 flex items-center gap-2 text-xs text-[#71817b]"><Phone aria-hidden="true" className="size-3.5" /> Prefer to call? <a className="font-semibold text-[#155f54] underline underline-offset-4" href="tel:+15035550148">(503) 555-0148</a></p>
    </form>
  )
}
