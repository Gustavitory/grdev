import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { allPosts } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"
import { LaptopIcon, LinkIcon, MapPinIcon } from "lucide-react"
import { Barlow } from "next/font/google"
import {
  AWSIcon,
  CiscoIcon,
  GoogleIcon,
  HackerRankIcon,
  HarvardIcon,
  LinkedinIcon,
} from "@/components/Icons/IconsBusiness"

import SectionFrameworksNStak from "@/components/Home/SectionFrameworksNStack"
import SectionListOfProjects from "@/components/Home/SectionListOfProjects"
import SectionOpenSource from "@/components/Home/SectionOpenSource"
import SectionBento from "@/components/Home/SectionBento"
import SectionInspiration from "@/components/Home/SectionInspiration"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import FlagEC from "@/components/Icons/flags/ec"
import FlagES from "@/components/Icons/flags/es"
import RewardBase from "@/components/ui/reward"
import { Signature } from "@/components/signature"
import { ScrollToTopButton } from "@/components/SrollTopButton"
import { cn } from "@/lib/utils"

import Header from "@/components/Home/Header"
import { getFavTools } from "@/services/posts"
import FlagVE from "@/components/Icons/flags/ve"

// If loading a variable font, you don't need to specify the font weight
const barlow = Barlow({ subsets: ["latin"], weight: ["600"] })

interface Tool {
  title?: string
  description?: string
  url?: string
  icon?: string
}

export default async function IndexPage() {
  let favTools: Tool[] = await getFavTools()

  const posts = allPosts
    .filter((post) => post.published && post.highlight)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div>
      <ScrollToTopButton />

      <Header />

      <SectionBento />
      <div
        id="projects-placeholder"
        className="relative mx-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-0"
      >
        <div className="absolute bottom-0 left-0 right-0 z-10 h-24 w-full bg-gradient-to-t from-[hsl(244,31%,10%)] to-transparent"></div>
        <div className="col-span-2 h-24 w-full rounded-3xl border-2 border-dashed border-white/10"></div>
        <div className="col-span-2 h-24 w-full rounded-3xl border-2 border-dashed border-white/10"></div>
      </div>
      <SectionListOfProjects posts={posts} />

      <section
        id="info"
        className="relative z-40 flex flex-col items-center justify-center space-y-6 px-4 pb-8 pt-6 text-center md:pt-10 lg:pt-32"
      >
        <div className="relative mb-10 flex w-full max-w-3xl items-center gap-4 overflow-hidden rounded-xl bg-white/5 px-8 py-6">
          <section className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={
                "https://res.cloudinary.com/dggxtloo1/image/upload/v1740365840/WhatsApp_Image_2025-02-23_at_22.56.25_2_h6f0i7.jpg"
              }
              alt="Gustavo G. Riera"
              className="absolute inset-0 h-12 w-full rounded-full bg-white object-cover md:h-[80px] md:w-[80px]"
              width={96}
              height={96}
            />
          </section>
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center gap-2">
              <p className="font-bold md:text-xl">Gustavo G. Riera</p>
              <div className="flex w-fit gap-1 rounded-full bg-white p-1">
                <FlagVE width={16} />

                {/* <FlagUS /> */}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <LaptopIcon size={16} />
                Software Developer
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon size={16} />
                Everywhere
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/30">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                Avaliable
              </div>
            </div>
          </div>
          <Image
            src={"/images/travel.png"}
            alt="Richard B. Vinueza"
            className="insert-y-0 absolute right-0"
            width={240}
            height={96}
          />
        </div>

        <h3
          className={
            barlow.className +
            " font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          }
        >
          {'"Team work makes the dream work"'}
          {/* SOFTWARE ENGINEER */}
        </h3>
        <h4>Who am I?</h4>
        <h4 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Software Developer with more than 4 years of experience.
          <br />I began tinkering with{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="cursor-pointer rounded-sm bg-[#FF512F] px-1 font-bold text-amber-900">
                Mobile
              </span>
            </HoverCardTrigger>
            <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
              <ul className="text-left text-sm">
                <li>Flutter/Dart</li>
                <li>React Native</li>
              </ul>
            </HoverCardContent>
          </HoverCard>{" "}
          stuff when I was starting my career. Some time later I decided to
          pivot my focus to{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="cursor-pointer rounded-sm border  bg-blue-800 px-1 font-bold ">
                Web
              </span>
            </HoverCardTrigger>
            <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
              <ul className="text-left text-sm">
                <li>React/NextJS</li>
                <li>Angular</li>
                <li>HTML/CSS/JS/TS</li>
                <li>NodeJS/API Rest/Graphql</li>
                <li>PostgreSQL/MongoDB/MySql</li>
              </ul>
            </HoverCardContent>
          </HoverCard>{" "}
          Development, .
          <br /> <br />
          Passionate about traveling and naturally curious. Currently, I am
          focused on becoming a great leader and continuing to share.
        </h4>
      </section>

      <section
        id="tools"
        className="flex min-h-[100vh] items-center p-8 md:p-32 "
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          {favTools?.map((item, index) => {
            return (
              <div
                key={"ite-" + index}
                className={
                  "flex w-72 items-center justify-between gap-4 rounded-lg bg-slate-800  p-4 lg:w-min " +
                  (!item.title ? "opacity-30" : "")
                }
              >
                <div className="flex items-center gap-4">
                  <div
                    className={
                      "flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-900 "
                    }
                  >
                    <img src={item.icon} />
                  </div>
                  <div className="grid max-w-[132px] flex-1">
                    <p className="font-bold">{item.title}</p>
                    <label
                      title={item.description}
                      className="truncate text-white/50"
                    >
                      {item.description}
                    </label>
                  </div>
                </div>
                <div>
                  {item.url && (
                    <Link href={item.url} target="_blank">
                      <LinkIcon className="text-white/70" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <SectionFrameworksNStak />

      <SectionInspiration />
      {/* <SectionOpenSource /> */}
    </div>
  )
}
