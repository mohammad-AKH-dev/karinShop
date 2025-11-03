import Image from "next/image";
import React from "react";

function Campagins() {
  return (
    <section className="special-campagins__section mt-20">
      <div className="special-campagins__content grid grid-cols-1 gap-y-6 md:grid-cols-2 gap-x-6">
        <div className="special-campagin-1 rounded-xl overflow-hidden">
          <Image
            width={2000}
            height={2000}
            className="rounded-xl transition-all hover:scale-110"
            src={"/images/campagins/campagin-2.webp"}
            alt="campagin-1"
          />
        </div>
        <div className="special-campagin-2 rounded-xl overflow-hidden">
          <Image
            width={2000}
            height={2000}
            className="rounded-xl transition-all hover:scale-110"
            src={"/images/campagins/campagin-1.webp"}
            alt="campagin-2"
          />
        </div>
      </div>
    </section>
  );
}

export default Campagins;
