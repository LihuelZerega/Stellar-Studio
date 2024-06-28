import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Features() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="space-y-4">
            <strong className="mb-4 text-[32px] leading-[44px] text-neutral-800">
              Personalized and High Performance Service.
            </strong>
            <p className="mb-0 text-neutral-600 md:max-w-4xl">
              We offer tailor-made solutions that perfectly adapt to the needs
              of your business, ensuring maximum security and performance. From
              web design and development to protection advanced and
              high-performance storage, our services guarantee an exceptional
              experience for you and your users.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">
              Custom design and development
            </strong>
            <p className="mt-2 text-neutral-500">
              We create custom websites that adapt to your needs specific to
              your business. Whether it is an informative website, a online
              store or a web application, we design and develop customized
              solutions that reflect your brand and your goals.
            </p>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">
              Security and performance
            </strong>
            <p className="mt-2 text-neutral-500">
              We keep your website safe with security features advanced
              features, such as DDoS protection and malware scanning. Besides,
              we guarantee high performance so your site loads quickly and
              deliver an exceptional experience to your visitors.
            </p>
          </motion.div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">
              High-performance NVMe storage
            </strong>
            <p className="mt-2 text-neutral-500">
              We use NVMe (Non-Volatile Memory) solid state drives Express) high
              performance to store your data and files. This ensures fast
              loading times and a smooth experience. agile user.
            </p>
          </motion.div>

          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">Unlimited bandwidth</strong>
            <p className="mt-2 text-neutral-500">
              We offer unlimited bandwidth so your website can handle any amount
              of traffic without worrying about the data restrictions. This is
              essential for spiked websites of traffic or a lot of multimedia
              content.
            </p>
          </motion.div>

          <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">DDoS Protection</strong>
            <p className="mt-2 text-neutral-500">
              Our server infrastructure has DDoS protection standard for
              detecting and mitigating distributed attacks denial of service.
              This ensures that your website remains online and accessible even
              in high traffic situations malicious.
            </p>
          </motion.div>

          <motion.div
            ref={ref6}
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-6 lg:mt-10"
          >
            <strong className="text-neutral-800">
              Web Application Firewall
            </strong>
            <p className="mt-2 text-neutral-500">
              We implement a web application firewall (WAF) that monitors and
              filters incoming web traffic. This helps block threats such as SQL
              injections, brute force attacks, and other attempts to exploit
              security vulnerabilities on your site.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Features;
