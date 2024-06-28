import React from "react";

function OurObjetive() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100 relative">
      <div className="absolute inset-0">
        <img
          className="object-cover object-right w-full h-full lg:object-center opacity-10 sm:opacity-10"
          src="https://res.cloudinary.com/dszjgdktf/image/upload/v1713356263/CtaBackground4_jercbc.png"
          alt="Cta Background 4"
        />
      </div>
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800 border-b-2 border-[#a482fb]">
              Our objetive
            </strong>
            <p className="mb-0 text-neutral-600">
              Be recognized as leaders in the technology industry, providing
              innovative and personalized solutions that transform the way
              companies interact with their online clients.
            </p>
            <p className="mb-0 text-neutral-600">
              We strive to be pioneers in the adoption of technologies emerging
              and for anticipating the future needs of our clients. We envision
              a future where Stellar Studio is synonymous with excellence in web
              design, development of digital applications and strategies. We
              want to be the first option for businesses looking to expand their
              online presence and increase your impact in the digital world. We
              see each other as a partner strategic for our clients, providing
              them with the tools and the knowledge necessary to achieve success
              in an environment increasingly competitive.
            </p>
            <p className="mb-0 text-neutral-600">
              Additionally, we aim to create an inclusive work environment and
              collaborative where our team can grow professionally and develop
              your full potential. We want to be recognized as employers of
              choice, attracting and retaining the best talents in the
              technology industry.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurObjetive;
