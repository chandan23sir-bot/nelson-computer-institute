import "./globals.css";

export const metadata = {
  title: "Nelson Computer Institute",
  description:
    "Skill education, practical computer training and student services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
