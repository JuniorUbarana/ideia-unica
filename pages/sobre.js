import Link from 'next/link';

function Sobre() {
  return <div>
    <h1>Hello, world</h1>
    <Link href='/'>
      <p>The About page with NextJS</p>
      <a>Acess Home page</a>
    </Link>
  </div>
};

export default Sobre;