import Image from "next/image"
import Link from "next/link"

const getColorOfStatus = {
  building: "bg-amber-500 text-amber-800",
  live: "bg-green-500 text-green-800",
  dead: "bg-red-500 text-red-800",
  "open source": "bg-gray-500 text-gray-800",
  proposal: "bg-blue-500 text-blue-800",
  mvp: "border bg-white/10",
}

export default function SectionListOfProjects({ posts }) {
  return (
    <section
      id="products"
      className="mx-auto -mt-32 grid max-w-5xl grid-cols-1 gap-4 px-8 sm:grid-cols-2 lg:grid-cols-2 lg:px-0"
    >
      <div className="col-span-full mx-auto mb-8 mt-32 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <p className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Projects and Products
        </p>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          List of all the featured products or side projects I have
        </p>
      </div>
      {posts?.length ? (
        <>
          {posts.map((post, index) => (
            <Link
              key={"post-" + index}
              href={post.url || "#"}
              target="_blank"
              className={
                "group relative col-span-1 cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-transparent transition-all hover:border-gray-400/20"
              }
            >
              <article
                key={post._id}
                className={
                  " relative col-span-1 flex h-full cursor-pointer flex-col items-center gap-2 space-y-2 transition-all group-hover:hover:scale-95 "
                }
              >
                <div className="absolute left-4 top-6  hidden gap-1 group-hover:flex">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className=" aspect-video max-w-lg overflow-hidden rounded-3xl border bg-muted group-hover:rounded-2xl ">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={720}
                      height={405}
                      priority={index <= 1}
                    />
                  )}
                </div>
                <div className="inset-x-0 bottom-0 flex w-full  flex-1 flex-col  bg-gradient-to-t to-transparent pb-5 ">
                  <h2 className="text-lg font-extrabold text-white md:text-xl">
                    {post.title}
                  </h2>
                  <h3 className=" mb-2 text-justify text-sm text-white/50 md:text-base">
                    {post.description}
                  </h3>

                  {post.name && (
                    <p className="absolute right-5 top-5  flex flex-1 items-end justify-end gap-2 truncate ">
                      {post.status &&
                        post.status.map((chip, index) => {
                          return (
                            <span
                              key={
                                "status-" + chip + "-" + post._id + "-" + index
                              }
                              className={
                                " max-w-fit truncate rounded-full px-3 py-1 text-sm font-bold uppercase " +
                                (getColorOfStatus[chip] || "")
                              }
                            >
                              {chip}
                            </span>
                          )
                        })}
                    </p>
                  )}
                  {/* {post.date && (
                <p className="text-sm ">
                  {formatDate(post.date)}
                </p>
              )} */}
                </div>
              </article>
            </Link>
          ))}
        </>
      ) : (
        <p>No posts published.</p>
      )}
    </section>
  )
}
