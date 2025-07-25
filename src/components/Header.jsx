import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/blog', label: 'Blog' },
    { path: '/videos', label: 'Videos' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Header