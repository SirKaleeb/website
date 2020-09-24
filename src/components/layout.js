import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
      © Caleb Hyatt {new Date().getFullYear()} | Built with ♥️ &{` `}<a href="https://www.gatsbyjs.com" target="_">Gatsby</a> | Hosted on <a href="https://www.netlify.com/" target="_">Netlify</a> | Open-source @ <a href="https://github.com/Hubbris/calebhyatt.com" target="_">GitHub</a>
      </footer>
    </div>
  )
}

export default Layout
