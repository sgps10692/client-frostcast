import './globals.css';


export const metadata = {
  title: 'Fros-Cast',
  description: 'Proyecto De Investigacion FrostCast',
}

function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
