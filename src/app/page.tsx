import { projects } from "@/lib/const";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const viewProjects = projects.map((item) => (
    <Link href={item.href} key={item.href} target="_blank">
      <div className="w-full border lg:[&_img]:hover:scale-105">
        <figure className="relative w-full h-[400px] overflow-hidden">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover duration-500"
          />
        </figure>
        <div className="text-center">
          <h3>{item.title}</h3>
        </div>
      </div>
    </Link>
  ));

  return (
    <main>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-20">
          {viewProjects}
        </div>
      </section>
    </main>
  );
}
