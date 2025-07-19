export default function Footer() {
  return (
    <footer className="mt-20 text-white/60 border-t border-white/20 py-10 text-sm text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} Sungmin Lee. All rights reserved.
      </p>
      <p className="space-x-4">
        <a
          href="https://github.com/sungminlee417"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sungmin-lee-288801214/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>
        <a href="mailto:sungminlee417@gmail.com" className="hover:text-white">
          Email
        </a>
      </p>
    </footer>
  );
}
