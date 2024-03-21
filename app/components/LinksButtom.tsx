import Link from "next/link"

const LinksButtom = ({ href, title }: { href: string, title: string }) => {
  return (
    <div className="">
      <button className="bg-white text-black rounded-full outline outline-white hover:bg-transparent hover:text-white duration-200 px-52 py-3">
        <Link
          href={href}
        >
          <div className="h-full w-full flex">
            <h1 className="font-semibold">
              {title}
              
            </h1>
          <a href="" className="flex justify-end">...</a>
          </div>
        </Link>
      </button>
    </div>
  )
}

export default LinksButtom