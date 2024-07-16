import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full md:h-[800px] flex items-center justify-center">
      <div className=" flex flex-col gap-5 p-16 bg-slate-950 text-white rounded-md items-center">
        <div>
          <img className=" rounded-full hover:animate-spin duration-150" src="https://media.licdn.com/dms/image/C4E03AQGwULu_GaeJXQ/profile-displayphoto-shrink_200_200/0/1638116571939?e=2147483647&v=beta&t=iIDr0K-ZT0PM5v1WuWgm40qzRKQ8i8ns7WSm-aSl4og" alt="saksham" />
        </div>
        <div className=" text-4xl font-bold hover:animate-bounce duration-150">Saksham Pasricha</div>
      </div>
    </main>
  );
}
