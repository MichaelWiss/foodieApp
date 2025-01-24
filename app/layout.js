import './globals.css'

export const metadata = {
  title: 'Foodie App',
  description: 'Your first Foodie app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
