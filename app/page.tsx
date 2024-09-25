import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";

export default function Home() {
  return (
    <>
    <h1>My first home page</h1>
    <Header/>
    <About/>
    </>
  )
}