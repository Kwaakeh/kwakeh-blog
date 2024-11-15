import Link from "next/link"

export default function Layout({ children}:{children: React.ReactNode}) {
  return (
    <div className="m-5">
      <h1 className="m-5 font-mono font-bold text-5xl text-blue-500">
        <Link href="/">Kwakeh Blog</Link>
      </h1>
      <div className="mb-5">
        <Link className="text-green-400" href="archives">Archives</Link>
      </div>
      <div>{children}</div>
    </div>
  )
}
