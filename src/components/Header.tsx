import { client } from "@/sanity/lib/client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Shadcn sidebar
import Link from "next/link";
import { navLinks } from "@/data/data";

export default async function Header() {

  const Names = await client.fetch(`*[_type == "nameSettings"][0]{
    myname
  }`) ;
  
  return (
    <div>
    <header
      className=
        " h-[50px] md:h-[100px] lg:h-[125px] max-w-[1440px] mx-auto  dark:bg-[#090D1F] flex justify-between items-center px-6  dark:text-white bg-white text-black"
    >
      {/* Left Section */}
      <div className="text-base md:text-lg lg:text-xl font-bold">{Names.myname}</div>

      {/* Right Section */}
      <nav className="hidden sm:flex items-center space-x-8 sm:pr-[2.25rem]">
        <ul className="flex items-center space-x-8">
          {navLinks.map((item) => (
            <li key={item.id} className="relative cursor-pointer  hover:underline decoration-2 dark:decoration-white decoration-black underline-offset-[6px] transition-all duration-300 ">
              <Link
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </nav>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <div className="ml-4 cursor-pointer text-xl font-semibold">
              ☰
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#090D1F] text-white">
            <ul className="space-y-4 mt-6">
              {navLinks.map((item) => (
                <li key={item.id} className="text-lg">
                  <Link
                    href={item.href}
                    className="cursor-pointer hover:underline decoration-white underline-offset-[6px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    </div>
  );
}
