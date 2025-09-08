import Image from "next/image";

export default function notFound() {
    return (
      <section className="flexStart mt-20 flex-col h-screen">
        <Image className="my-4" src={"/Ops.svg"} alt="404" width={150} height={150}/>
        <h1 className="text-7xl semibold">404</h1>
        <p className="text-3xl">PAGE NOT FOUND</p>
      </section>
    );
  }
  