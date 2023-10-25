import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-red-200"> hello world</div>
      <Link href={"/pricing"}>Visit store</Link>
    </>
  );
}
