import { Equals, HandPeace, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [hasOpen, setHasOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 flex h-15 w-full justify-center border-b border-zinc-400 px-4 backdrop-blur-xs">
      <nav className="flex w-full max-w-[87.5rem] items-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1">
            <HandPeace size={26} weight="thin" />
            <span className="font-medium">Pablo Rafael</span>
          </div>

          <ul className="font-inter flex gap-8 max-lg:hidden">
            <li>
              <NavLink className="text-sm" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-sm" to="/project">
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm"
                target="_blank"
                to="https://github.com/PabloRafael-coder"
              >
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm"
                target="_blank"
                to="https://www.linkedin.com/in/pablo-rafael-1372a2279/"
              >
                Linkedin
              </NavLink>
            </li>
            <li>
              <NavLink
                className="rounded-xl bg-zinc-900 p-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800"
                to="/contact"
              >
                Fale comigo!
              </NavLink>
            </li>
          </ul>

          <button
            className="cursor-pointer lg:hidden"
            onClick={() => setHasOpen((state) => !state)}
          >
            {hasOpen ? (
              <X size={25} weight="thin" />
            ) : (
              <Equals size={25} weight="thin" />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
