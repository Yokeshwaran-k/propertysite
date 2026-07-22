import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function ConveyancingSection() {
  return (
   <section className="w-full bg-[#4f5054] px-4 pt-10 md:px-16 md:pt-12">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Image */}
        <div className="relative h-[300px] w-full overflow-hidden md:h-[540px]">
          <Image
            src="/images/solicitor.jpg"
            alt="Request a conveyancing quotation"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
 
        {/* Content */}
        <div className="px-2 text-white md:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold uppercase leading-tight tracking-wide md:text-4xl">
            Do you Need <br /> Conveyancing?
          </h2>
 
          <p className="mb-6 max-w-md text-base leading-relaxed text-gray-200">
            For details of Sovereign House Conveyancing please contact your
            local branch:
          </p>
 
          <h3 className="mb-2 text-lg font-bold">Victoria Park Office</h3>
          <p className="mb-6 text-base leading-relaxed text-gray-200">
            213 Victoria Park Road, Victoria Park, Hackney,
            <br />
            London, E9 7HD
          </p>
 
          <div className="space-y-2 text-base">
            <a
              href="tel:02089855800"
              className="flex items-center gap-2 text-[#c9a227] hover:text-[#b8931f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.999"
                height="18"
                viewBox="0 0 17.999 18"
                className="h-[16px] w-[16px]"
              >
                <g transform="translate(-1748.418 -4021.725)">
                  <path
                    d="M1765.973,4035.067l-2.866-2.866a1.521,1.521,0,0,0-2.15,0l-1.075,1.075a.509.509,0,0,1-.687.03,31.119,31.119,0,0,1-4.36-4.359.512.512,0,0,1,.03-.687l1.075-1.075a1.521,1.521,0,0,0,0-2.149l-2.866-2.866a1.52,1.52,0,0,0-2.149,0l-1.478,1.478a3.586,3.586,0,0,0-.583,4.251,26.991,26.991,0,0,0,2.2,3.349,31.839,31.839,0,0,0,5.826,5.827,27.115,27.115,0,0,0,3.35,2.2,3.6,3.6,0,0,0,1.738.447,3.549,3.549,0,0,0,2.513-1.03l1.477-1.478A1.521,1.521,0,0,0,1765.973,4035.067Zm-.716,1.432-1.478,1.479a2.536,2.536,0,0,1-3.045.413,25.965,25.965,0,0,1-3.223-2.121,30.736,30.736,0,0,1-5.638-5.638,26.038,26.038,0,0,1-2.121-3.224,2.536,2.536,0,0,1,.412-3.045l1.478-1.477a.506.506,0,0,1,.717,0l2.866,2.866a.506.506,0,0,1,0,.717l-1.075,1.075a1.52,1.52,0,0,0-.1,2.043c.662.811,1.382,1.605,2.139,2.364a31.52,31.52,0,0,0,2.364,2.14,1.521,1.521,0,0,0,2.043-.1l1.075-1.075a.518.518,0,0,1,.717,0l2.866,2.865A.507.507,0,0,1,1765.256,4036.5Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
              020 8985 5800
            </a>
 
            <a
              href="mailto:sales@sovereign-house.com"
              className="flex items-center gap-2 text-[#c9a227] hover:text-[#b8931f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.566"
                height="14.396"
                viewBox="0 0 20.566 14.396"
                className="h-[13px] w-[19px]"
              >
                <g transform="translate(-1633.185 -4027.572)">
                  <path
                    d="M1652.723,4027.572h-18.509a1.029,1.029,0,0,0-1.029,1.028v12.34a1.029,1.029,0,0,0,1.029,1.028h18.509a1.03,1.03,0,0,0,1.029-1.028V4028.6A1.03,1.03,0,0,0,1652.723,4027.572Zm-1.4,1.028-7.855,4.548-7.855-4.548Zm-17.109,12.34v-11.962l9.255,5.357,9.255-5.357v11.962Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
              sales@sovereign-house.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}