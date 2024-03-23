import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <h1 className="text-center text-9xl">Hello TechScholars</h1>
    </>
  );
}
