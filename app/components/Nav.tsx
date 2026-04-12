import Link from 'next/link'
import { NavClient } from './NavClient'

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' }
]

export function Nav() {
  return (
    <nav style={{ display: 'flex', gap: 20, padding: 20, borderBottom: '1px solid #ccc' }}>
      {menus.map((m) => (
        <NavClient key={m.href} href={m.href}>
          <Link href={m.href} prefetch={true}>
            {m.name}
          </Link>
        </NavClient>
      ))}
    </nav>
  )
}