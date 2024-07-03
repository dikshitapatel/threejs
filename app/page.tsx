"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import type { NextPage } from "next";
import Portfolio from "@/pages/portfolio";
import Image from "next/image";
import  imbueLogo from "../public/imbue-logo.png";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex row pl-10 py-10 absolute left-0 top-0 ">
        <p className="mr-5 text-xl font-serif text-black text-center">
          <a
            href="https://github.com/jainam0037"
            className="text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p className="ml-5 text-xl font-serif text-black text-center">
          <a
            href="https://www.linkedin.com/in/jainamshah0037/"
            className="text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <section className=" mx-auto px-4 pt-8">
        <h1 className="text-4xl font-serif font-bold text-black text-center text-accent-color mb-6">
          Hello, Imbue!
        </h1>
        <p className="text-lg font-serif text-black text-center">
        Empowering AI to Think, Code, and Elevate Human Potential
                </p>
      </section>
      <div className="text-black">
        <div className="p-4 w-5/6">
          <Portfolio />
        </div>
        <div className=" fixed right-0 top-0 h-full">
          <section className="flex justify-end items-center px-12">
            {}
            <Image
              src={imbueLogo}
              alt="Imbue Logo"
              width={140}
              height={100}
              layout="fixed"
            />
          </section>
          {}
          <Scene />
        </div>
      </div>
    </>
  );
};

export default Home;
