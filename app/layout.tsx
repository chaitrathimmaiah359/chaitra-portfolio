import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="flex justify-center gap-6 py-5 border-b text-sm sticky top-0 bg-white z-50">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/education">Education</Link>
          <Link href="/Experience">Experience</Link>
          <Link href="/Skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Tech Blog</Link>
          
        </nav>

        {children}

      </body>
    </html>
  );
}