import Link from "next/link"

const LinksButtom = ({ href, title }: { href: string, title: string }) => {
  <button className="bg-blue-300">
    <Link
      href={href}
      className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label={`Link to ${title}`}
    >
      Learn more &rarr;
    </Link>
  </button>
}

export default LinksButtom