import Link from "next/link"

const LinksButtom = ({ href, title }: { href: string, title: string }) => {
  return (
    <button className="bg-blue-500 px-52 py-3 rounded-full hover:bg-white hover:text-black shadow-lg shadow-sky-600 hover:shadow-white duration-200">
      <Link
        href={href}
        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <h1 className="font-semibold">
          {title}
        </h1>
      </Link>
    </button>
  )
}

export default LinksButtom