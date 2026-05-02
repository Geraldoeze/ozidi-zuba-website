import { Metadata } from "next";
import Contact from "./contact-data";

export const metadata: Metadata = {
  title: "Contact Ozidi Zuba in Kubwa | WhatsApp Messaging - Abuja Motor Parts",
  description:
    "Contact Ozidi Zuba in Kubwa for motor spare parts inquiries. Reach us via WhatsApp, phone, or visit our store in Kubwa, Abuja.",
  keywords: "contact Ozidi Zuba, WhatsApp motor spare parts, Abuja contact",
  alternates: {
    canonical: "https://zubainkubwa.com/contact",
  },
};

export default function Page() {
  return <Contact />;
}
