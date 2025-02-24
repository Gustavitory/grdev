import HeaderImage from "@/components/Home/HeaderImage"
import AnimatedTitle from "@/components/Home/AnimatedTitle"
import AnimatedDescription from "@/components/Home/AnimatedDescription"
import ScrollDownIndicator from "../ScrollDownIndicator"

export default function Header() {
  return (
    <>
      <section
        id="header"
        className="custom-cursor  flex h-[100dvh] w-full flex-col items-center justify-center gap-4 overflow-hidden text-center"
      >
        <div className="w-full max-w-5xl">
          <div className="relative z-20 flex w-full flex-col items-center justify-center gap-4">
            <AnimatedTitle />
            <AnimatedDescription />
            <ScrollDownIndicator />
          </div>
        </div>
        <HeaderImage />
      </section>

      <div className="fixed inset-x-2 top-2 z-[999] mx-auto flex justify-between">
        <div></div>
        <div className="flex gap-2">
          {/* <div className="rounded-xl bg-white p-2 shadow-lg">
            <a
              title="Github"
              href="https://github.com/richardnarvaez"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                height="24px"
                width="24px"
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
          </div> */}
        </div>
      </div>
    </>
  )
}
