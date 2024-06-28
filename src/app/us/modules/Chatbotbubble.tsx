"use client";
import { Bubble } from "@typebot.io/nextjs"
import { useEffect, useState } from "react";

export default function ChatBotBubble() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }


  return (
    <div className="fixed bottom-0 right-0 z-50">
      <Bubble
        typebot="faq-x0r2qr5"
        previewMessage={{
          autoShowDelay: 1000,
          message:
            "Pregúntame lo que necesites, estoy aquí para ayudarte. 🚀",
        }}
        theme={{
          button: {
            backgroundColor: "#a482fb",
            customIconSrc:
              "https://res.cloudinary.com/dys0jotat/image/upload/v1719242476/StellarStudioLogoMoonChatBotBubble_wc5rvp.png",
          },
          previewMessage: { backgroundColor: "#FFFFFF", textColor: "#272526" },
        }}
      />
    </div>
  )
}
