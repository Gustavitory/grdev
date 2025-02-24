import { api } from "@/lib/api"

export async function getFavTools() {
  try {
    const resp = await api("/por_fav_tools")
    console.log(resp)
    return resp.data.map((item) => ({
      ...item,
      icon: item.icon
        ? "https://directus-production-7043.up.railway.app/assets/" + item.icon
        : null,
    }))
  } catch (error) {
    return [
      {
        title: "Cursor",
        description: "AI Code Editor",
        url: "https://cursor.sh/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378194/cdnlogo.com_cursor_wo8bdf.svg",
      },
      {
        title: "Bolt",
        description: "AI App generator",
        url: "https://bolt.new/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378776/idLCk4jSTb_logos_skhh6e.png",
      },
      {
        title: "Postman",
        description: "API Testing",
        url: "https://www.postman.com/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378196/postman-icon_vjwsem.png",
        theme: "ligth",
      },
      {
        title: "GraphQL",
        description: "API",
        url: "https://graphql.org/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378196/graphql_so9izg.png",
      },
      {
        title: "TablePlus",
        description: "SQL Client",
        url: "https://tableplus.com/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378198/tableplus_ypq4g7.png",
      },
      {
        title: "Stripe",
        description: "Payments",
        url: "https://stripe.com/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378196/stripe_f63s6g.jpg",
      },
      // {
      //   title: "gsap",
      //   url: "https://gsap.com/",
      // },
      // {
      //   url: "https://mintlify.com/",
      // },
      {
        title: "Heroku",
        description: "Backend Deployment",
        url: "https://railway.app",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378198/id3l7WrkNm_1740377912821_zsrzhc.png",
      },

      {
        title: "Open AI",
        description: "AI development environment",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378195/Icon_xbgckz.jpg",
      },
      {
        title: "Figma",
        description: "Design",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378194/Icon_a4wgfi.png",
      },
      {
        title: "Vercel",
        description: "Frontend Deployment",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378194/Icon_1_ftmn16.jpg",
      },

      {
        title: "N8N",
        description: "Automatization",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378192/idJRnUJqPb_lr9zbv.png",
      },
      {
        title: "Shadcn",
        description: "UI Components",
        url: "https://ui.shadcn.com/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378497/shadcn_eqmrgy.png",
      },
      {
        title: "Spline",
        description: "3D implementation",
        url: "https://spline.design",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378191/iduZdUAWl0_1740378058990_fvyicy.jpg",
      },
      {
        title: "Stripe",
        description: "Payments",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378196/stripe_f63s6g.jpg",
      },
      {
        title: "Medusa",
        description: "Open Source E-Commerce",
        url: "https://medusajs.com/",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378191/id2xBFxSTz_logos_jfbink.jpg",
      },
      {
        title: "Framer Motion",
        description: "Animations",
        icon: "https://res.cloudinary.com/dggxtloo1/image/upload/v1740378191/idY53BRceU_1740378097786_jyznqq.jpg",
      },
      {
        title: "Resend",
        description: "Send Emails",
        icon: "https://asset.brandfetch.io/id0BqaqET6/idwjc1TygR.jpeg",
      },
    ]
  }
}
