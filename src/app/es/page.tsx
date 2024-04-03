import React from "react";
import HeroSectionEs from "@/components/HeroSections/HeroSectionEs";
import BenefitsEs from "@/components/Benefits/BenefitsEs";
import WorkProcessEs from "@/components/WorksProcess/WorkProcessEs";
import InfiniteMovingCards from "@/components/MovingCards/InfiniteMovingCards";
import TestimonialEs from "@/components/Testimonials/TestimonialEs";
import FaqEs from "@/components/Faqs/FaqEs";
import FooterEs from "@/components/Footers/FooterEs";
import StatsEs from "@/components/Stats/StatsEs";

// const testimonials = [
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/1_tcatsr.png",
//     alt: "Image 1",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/3_bgk3yn.png",
//     alt: "Image 2",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160933/Stellar%20Studio/2_k0llqe.png",
//     alt: "Image 3",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 4",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160939/Stellar%20Studio/6_pr1pjk.png",
//     alt: "Image 5",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160934/Stellar%20Studio/5_hmf5wt.png",
//     alt: "Image 6",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160938/Stellar%20Studio/8_ixgmvi.png",
//     alt: "Image 7",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dszjgdktf/image/upload/v1712160935/Stellar%20Studio/7_ba7hhd.png",
//     alt: "Image 8",
//   },
// ];

function Page() {
  return (
    <div className="bg-[#272526]">
      <HeroSectionEs />
      <StatsEs />
      <BenefitsEs />
      <WorkProcessEs />
      {/* <InfiniteMovingCards testimonials={testimonials} /> */}
      <TestimonialEs />
      <FaqEs />
      <FooterEs />
    </div>
  );
}

export default Page;
