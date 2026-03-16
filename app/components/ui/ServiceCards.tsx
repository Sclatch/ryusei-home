"use client"

import { useRef, useEffect, useState } from "react";
import { MdMovie, MdDownload } from "react-icons/md"
import { IconType } from "react-icons"

import Image from "next/image"

const stoneFilter = "brightness(0) saturate(100%) invert(9%) sepia(7%) saturate(548%) hue-rotate(314deg) brightness(94%)"

interface Service {
  index?: number
  id: string
  icon: string
  logo: string
  logoAlt: string
  href: string
  buttonLabel: string
  ButtonIcon: IconType
  description: React.ReactNode
}

const services: Service[] = [
  {
    id: "cinezumi",
    icon: "/images/logos/cinezumiicon.png",
    logo: "/images/logos/cinezumifull.png",
    logoAlt: "Cinezumi",
    href: "https://ryusei.dedyn.io/cinema",
    buttonLabel: "Open Cinezumi",
    ButtonIcon: MdMovie,
    description: (
      <>
        A private movie and TV streaming platform using <b>Jellyfin</b>, deployed and managed entirely by me. Accessible from anywhere and shared with close friends and family, it delivers a seamless, ad-free experience with high-bitrate playback for my personal media collection.
      </>
    ),
  },
  {
    id: "ryuusei",
    icon: "/images/logos/ryuuseiicon.png",
    logo: "/images/logos/ryuuseilogo.png",
    logoAlt: "Ryuusei",
    href: "https://github.com/Sclatch/RYUUSEI-Pad",
    buttonLabel: "Get Ryuusei",
    ButtonIcon: MdDownload,
    description: (
      <>
        A custom <b>AutoHotkey</b> macro system designed to streamline my workflow in <b>Clip Studio Paint</b>. Essential tools are mapped to the numpad for instant access that supports multi-key combinations. Built through personal experience and continuous refinement, it cuts time spent navigating menus and transforms everyday shortcuts into a faster experience.
      </>
    ),
  },
]

function ServiceCard({ index = 0, icon, logo, logoAlt, href, buttonLabel, ButtonIcon, description }: Omit<Service, "id">) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden flex flex-col sm:gap-6 gap-4 rounded-2xl bg-stone-200 bg-opacity-50 border border-stone-400 p-8 transition-all duration-[1s] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-60"}`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >

      {/* Background image */}
      <div className="absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 top-0 -translate-y-1/4 right-1/2 translate-x-1/2 sm:translate-x-0 w-80 h-80 opacity-10 z-0 pointer-events-none select-none">
        <Image
          src={icon}
          alt=""
          fill
          sizes="20vw"
          style={{ filter: stoneFilter }}
          className="object-contain"
        />
      </div>

      {/* Top row — logo + button */}
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div className="relative w-48 h-16 pointer-events-none select-none">
          <Image
            src={logo}
            alt={logoAlt}
            fill
            sizes="20vw"
            style={{ filter: stoneFilter }}
            className="object-contain object-left"
          />
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-stone-900 sm:mt-0 mt-4 px-6 py-2.5 text-stone-100 sm:text-base text-sm z-10 transition hover:bg-stone-700 active:scale-95"
        >
          <ButtonIcon className="text-lg" />
          {buttonLabel}
        </a>
      </div>

      <div className="h-px w-full bg-stone-300" />

      {/* Description */}
      <p className="font-neuton sm:text-lg text-base text-stone-500 leading-relaxed max-w-xl">
        {description}
      </p>

    </div>
  )
}

export default function ServiceCards() {
  return (
    <>
      {services.map(({ id, ...service }, index) => (
        <ServiceCard key={id} index={index} {...service} />
      ))}
    </>
  )
}