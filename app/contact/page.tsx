import { ContactClient } from "@/components/contact/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our ERP experts to discuss your challenges.",
};

export default function ContactPage() {
  return <ContactClient />;
}
