import Image from "next/image"

export default function HeaderImage() {
  return (
    <div className="animate-fade-in opacity-0">
      <div className="absolute inset-x-0 top-0 z-10 h-[50vh] w-full bg-gradient-to-b from-[hsl(244,31%,10%)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-[50vh] w-full bg-gradient-to-t from-[hsl(244,31%,10%)] to-transparent" />

      <Image
        src="https://res.cloudinary.com/dggxtloo1/image/upload/v1740365840/WhatsApp_Image_2025-02-23_at_22.56.25_zswidr.jpg"
        width={720}
        height={720}
        placeholder="blur"
        blurDataURL="/images/home/bg-header-blur.jpg"
        alt="Background - Gustavo G. Riera Profile"
        className="absolute inset-0 h-[100dvh] w-full object-cover object-bottom opacity-25 transition-all duration-1000"
        priority
      />
    </div>
  )
}
