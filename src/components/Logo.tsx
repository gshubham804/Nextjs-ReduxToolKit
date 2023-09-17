import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"}>
        <p className=" text-3xl font-bold hover:text-orange-500
        cursor-pointer duration-200">NextjsRedux</p>
    </Link>
  )
}

export default Logo