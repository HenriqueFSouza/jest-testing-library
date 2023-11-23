import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#477594] ">
      <div className="flex justify-between items-center max-w-[900px] mx-auto h-[90px]">
        <div className="logo">
          <h1 className="text-4xl">Next <strong>ToDo</strong></h1>
        </div>
        <nav >
          <ul className="flex align-center gap-4">
            <li>
              <a data-testid='github-link' href="https://github.com/HenriqueFSouza" target="_blank">
                <Image src='/github.png' alt="github-icon" width={50} height={50} />
              </a>
            </li>
            <li>
              <a data-testid='linkedin-link' href="https://www.linkedin.com/in/henrique-francisco-souza" target="_blank" >
                <Image src='/linkedin.png' alt="" width={50} height={50} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}