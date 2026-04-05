import Link from 'next/link'

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' }
]

export function Nav() {
  return (
    <nav style={{ display: 'flex', gap: 20, padding: 20, borderBottom: '1px solid #ccc' }}>
      {menus.map((m) => (
        <Link
          key={m.href}
          href={m.href}
          prefetch={true}
          style={{ color: 'black' }}
        >
          {m.name}
        </Link>
      ))}
    </nav>
  )
}