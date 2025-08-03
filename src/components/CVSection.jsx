import DefulttText from "./DefaultText";
import { FaDownload } from "react-icons/fa";

export default function CVSection() {
  return (
    <section className="text-center mt-20">
      <DefulttText title="My Resume" className="text-[#12F7D6] text-title mb-4" />
      <DefulttText title="Feel free to download my CV and reach out for any opportunities." />

      <a
        href="/Lama-Abdellatif-Yousif-Hussein-Full-Stack.pdf"
        download
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#12F7D6] text-black font-semibold rounded-lg hover:bg-[#0ccabf] transition"
      >
        <FaDownload />
        Download CV
      </a>
    </section>
  );
}
