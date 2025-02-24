"use client"
/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CardTopTools from "./SectionBento/TopTools"
import LinkedIn from "../Icons/brands/Linkedin"
import Whatsapp from "../Icons/brands/Whatsapp"
export default function SectionBento() {
  return (
    <section
      id="main"
      className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0"
    >
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://docs.google.com/document/d/1Jcs_D8QEuQgEcaOj4czl8XG5WzehJYt_VDPXFT7BrJw/view"
        className="group relative col-span-2 h-96 w-full cursor-pointer overflow-hidden rounded-3xl border-4 border-red-500"
      >
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[0px_-200px] transition-transform ease-out group-hover:scale-110 group-hover:blur-sm"
          src={
            "https://res.cloudinary.com/dggxtloo1/image/upload/v1740381303/Screenshot_2025-02-24_at_03.14.56_ywotlc.png"
          }
          width={700}
          height={900}
        />
        <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between bg-black/30 transition-all group-hover:bg-black/50 ">
          <div className="w-fit rounded-br-xl bg-red-500 px-4 py-2">
            <p className="text-xs font-bold text-gray-300 ">NOW AVALIABLE</p>
          </div>

          <div className="">
            <div className="bg-gradient-to-t from-red-500 to-transparent p-4 font-bold">
              <p className="text-md text-gray-300">RESUME</p>
              <p className="text-3xl ">View or Download Resume in PDF</p>
              <p className="text-sm ">{"It's free, so take a look."}</p>
            </div>
            <div className="flex items-center justify-between gap-3  bg-red-500 p-2 pb-3">
              <div className="flex items-center gap-3 p-2">
                <Image
                  className="h-12 w-12"
                  src={"/images/GDrive-logo.png"}
                  width={150}
                  height={150}
                  alt=""
                />
                <div className="w-full overflow-hidden">
                  <p className="font-bold">PDF Resume </p>
                  <p
                    className="truncate text-sm"
                    title="Google Drive External Link"
                  >
                    Google Drive External Link
                  </p>
                </div>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2  text-sm font-semibold">
                Visit
              </div>
            </div>
          </div>

          <Image
            alt=""
            className="absolute -right-[270px] -top-[80px] h-full w-full max-w-[300px]  rotate-45 object-cover opacity-0 transition-all duration-300 ease-out group-hover:right-0 group-hover:rotate-0 group-hover:opacity-100"
            src={"/images/home/me.webp"}
            width={700}
            height={900}
          />
        </div>
      </a>
      <Link
        href={"/#stack"}
        className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl bg-[#23293C]  md:h-full lg:h-auto "
      >
        <div
          className="p-4 font-bold"
          style={{
            zIndex: 14,
            position: "absolute",
            background: "linear-gradient(180deg, #23293c, transparent)",
            width: "100%",
          }}
        >
          <p className="text-md text-white/75">TECHNOLOGIES</p>
          <p className="text-3xl ">Tools and Frameworks</p>
        </div>
        <Image
          alt=""
          className="absolute -bottom-8 -right-8 w-full  -rotate-12 scale-125 transition-transform ease-out group-hover:scale-150"
          src={"/images/IconsTech.png"}
          width={800}
          height={800}
        />
      </Link>
      <div className=" grid w-full cursor-pointer grid-cols-1 gap-4 lg:col-span-3 lg:grid-cols-2">
        <div className=" grid grid-cols-1 gap-3">
          <button
            onClick={() => alert("Coming soon")}
            className="group relative flex items-center justify-center overflow-hidden rounded-3xl border px-6 py-12 text-center"
          >
            1M$ Ideas
          </button>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl bg-white px-4 py-5 text-slate-500/40 shadow-lg">
            <a
              title="Github"
              href="https://github.com/gustavitory"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                width="22px"
                height="22px"
                version="1.1"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <title>Github</title>
                <g>
                  <path
                    clipRule="evenodd"
                    d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </a>

            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/gustavofullstack/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedIn width={22} height={22} />
            </a>

            <a
              title="Whatsapp"
              href="https://wa.me/584243467694"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Whatsapp width={22} height={22} className="fill-current" />
            </a>
          </div>
          <CardTopTools />
        </div>
        <div className="">
          <Link
            href={"/#info"}
            className="group relative flex h-full items-center justify-center overflow-hidden rounded-3xl border-2 border-white bg-slate-800 text-center"
          >
            <Image
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform ease-out group-hover:scale-110 group-hover:blur-sm"
              src={
                "https://res.cloudinary.com/dggxtloo1/image/upload/v1740374309/WhatsApp_Image_2025-02-24_at_01.18.00_vbk2gx.jpg"
              }
              width={700}
              height={900}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="font-bold">About Me</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
