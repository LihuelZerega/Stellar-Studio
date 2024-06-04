import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LoadingPage from "@/ui/LoadingPage";

export default function AlertSuccess() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <>
          <div className="fixed flex items-center justify-center inset-0 z-10 w-screen overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center w-[512px] h-[244px] bg-white rounded-lg">
                <LoadingPage />
              </div>
            ) : (
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 flex items-center justify-center">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#a482fb] sm:mx-0 sm:h-12 sm:w-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            d="M8 12.5L10.5 15L16 9"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-white px-4 pb-4 pt-2 sm:pb-4">
                      <div className="flex tems-center">
                        <div className="mt-3 text-left sm:mt-0 sm:text-center">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            ¡Recibimos tu pedido!
                          </Dialog.Title>
                          <div className="mt-2 px-4">
                            <p className="text-sm text-gray-500">
                              Pronto nuestro equipo se pondrá en contacto para
                              ampliar detalles sobre tu pedido. Muchas gracias!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-[#a482fb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a482fb]/90 sm:ml-3 sm:w-auto"
                        onClick={() => window.history.back()}
                      >
                        Volver al inicio
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            )}
          </div>
        </>
      </Dialog>
    </Transition.Root>
  );
}
