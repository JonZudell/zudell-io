import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-lg text-center mt-4">
          <a
            className="space-y-16 text-3xl font-semibold text-pink-400"
            href="/"
          >
            zudell.io
          </a>
          <p className="mt-2 tracking-tight text-gray-200">
            Software/Music Blog
          </p>
        </div>
        <div className="mt-16 text-gray-200 mx-2">
          {children}
        </div>
      </body>
    </html>
  );
}
