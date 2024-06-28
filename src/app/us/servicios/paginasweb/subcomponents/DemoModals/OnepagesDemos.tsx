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
import PostcraftImage from "@/images/PostcraftsDemo.webp";
import CobaltImage from "@/images/CobaltDemo.webp";

function OnepagesDemos() {
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
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2.5 9H21.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M6.99981 6H7.00879"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9998 6H11.0088"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                <span className="text-[#a482fb]">One ​Pages</span>
              </ModalHeader>
              <ModalBody>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <a
                    href="/examples/onepage"
                    className="w-full h-64 rounded-md hover:shadow-sm border-1 border-neutral-200 p-1.5 cursor-pointer"
                  >
                    <div className="w-full rounded-md">
                      <Image
                        src={PostcraftImage}
                        alt="Postcrafts"
                        width={400}
                        height={400}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs mt-3 font-semibold text-neutral-800">
                        Postcrafts
                      </h3>
                      <p className="text-xs text-neutral-600">
                        Simplified credit cards for students.
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://joincobalt.com/"
                    className="w-full h-64 rounded-md hover:shadow-sm border-1 border-neutral-200 p-1.5 cursor-pointer"
                  >
                    <div className="w-full rounded-md">
                      <Image
                        src={CobaltImage}
                        alt="Cobalt"
                        width={400}
                        height={400}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs mt-3 font-semibold text-neutral-800">
                        Cobalt
                      </h3>
                      <p className="text-xs text-neutral-600">
                        Unleash the power of intuitive finance
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

export default OnepagesDemos;
