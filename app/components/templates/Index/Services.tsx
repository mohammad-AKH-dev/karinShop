'use client'

import Image from "next/image";
import React, { useState } from "react";

interface serviceType {
    id: number
    title: string
    image: string
}

function Services() {
  const [services, setServices] = useState<serviceType[]>([
    { id: 1, title: "امکان تحویل اکسپرس", image: "/images/svg/express.svg" },
    { id: 2, title: "ضمانت اصل بودن کالا", image: "/images/svg/original.svg" },
    { id: 3, title: "ضمانت بازگشت کالا", image: "/images/svg/garanti.svg" },
    { id: 4, title: "پشتیبانی 24 ساعته", image: "/images/svg/support.svg" },
    { id: 5, title: "امکان پرداخت در محل", image: "/images/svg/payment.svg" },
  ]);
  return (
    <section className="services__section mt-15 xl:mt-20">
      <div className="services__content flex items-center justify-center sm:justify-between flex-wrap gap-x-8 gap-y-6 lg:gap-6">
        {services.map((service) => (
          <div className="service-box flex flex-col items-center gap-y-1 cursor-pointer" key={service.id}>
            <Image
              className="service-box__image w-[56px] h-[56px]"
              width={1500}
              height={1500}
              src={service.image}
              alt={service.title}
            />
            <span className="service-box__title text-sm text-gray-500 dark:text-gray-300">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
