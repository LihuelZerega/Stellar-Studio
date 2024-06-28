import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import ReturnQueenImage from "@/images/ReturnQueenDemo.webp";
import OoshotImage from "@/images/OoshotDemo.webp";

function LandingpagesDemos() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <h3
        className="flex flex-row space-x-2 items-center justify-center text-center mx-auto text-lg mt-4 text-neutral-600 hover:text-neutral-700 hover:font-semibold cursor-pointer w-fit"
        onClick={onOpen}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            color="#a482fb"
            fill="none"
          >
            <path
              d="M16 2H12C9.17157 2 7.75736 2 6.87868 2.94627C6 3.89254 6 5.41554 6 8.46154V9.53846C6 12.5845 6 14.1075 6.87868 15.0537C7.75736 16 9.17157 16 12 16H16C18.8284 16 20.2426 16 21.1213 15.0537C22 14.1075 22 12.5845 22 9.53846V8.46154C22 5.41554 22 3.89254 21.1213 2.94627C20.2426 2 18.8284 2 16 2Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M18 16.6082C17.9879 18.9537 17.8914 20.2239 17.123 21.0525C16.2442 22 14.8298 22 12.0011 22H8.00065C5.17192 22 3.75755 22 2.87878 21.0525C2 20.1049 2 18.5799 2 15.5298V14.4515C2 11.4014 2 9.87638 2.87878 8.92885C3.52015 8.2373 4.44682 8.05047 6.00043 8"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </span>
        <span className="text-sm">See demo</span>
      </h3>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="center"
        className="mx-3 sm:mx-0"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-1 text-neutral-800 border-b-1 border border-neutral-200">
                Demonstrations -{" "}
                <span className="text-[#a482fb]">Landing Pages</span>
              </ModalHeader>
              <ModalBody>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <a
                    href="https://returnqueen.com/"
                    className="w-full h-64 rounded-md hover:shadow-sm border-1 border-neutral-200 p-1.5 cursor-pointer"
                  >
                    <div className="w-full rounded-md">
                      <Image
                        src={ReturnQueenImage}
                        alt="ReturnQueen"
                        width={400}
                        height={400}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs mt-3 font-semibold text-neutral-800">
                        ReturnQueen
                      </h3>
                      <p className="text-xs text-neutral-600">
                        Returns collected at your door
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.ooshot.com/"
                    className="w-full h-64 rounded-md hover:shadow-sm border-1 border-neutral-200 p-1.5 cursor-pointer"
                  >
                    <div className="w-full rounded-md">
                      <Image
                        src={OoshotImage}
                        alt="Ooshot"
                        width={400}
                        height={400}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs mt-3 font-semibold text-neutral-800">
                        Ooshot
                      </h3>
                      <p className="text-xs text-neutral-600">
                        First production and creation group since 2015.
                      </p>
                    </div>
                  </a>
                </section>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default LandingpagesDemos;
