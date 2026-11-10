export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-bar mono">
        <span>© {new Date().getFullYear()} Sharique Ansari</span>
        <a href="#home" className="back-top">↑ back to top</a>
      </div>
    </footer>
  )
}
