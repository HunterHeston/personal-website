import ContactForm from "@/components/contactForm";
import H1 from "@/components/h1";
import H2 from "@/components/h2";

export default function Contact() {
  return (
    <>
      <H1>Contact</H1>
      <p className="text-xl mb-4">Lets work together!</p>
      <ContactForm></ContactForm>
    </>
  );
}
