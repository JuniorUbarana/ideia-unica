import Link from 'next/link';

function Sobre() {
  return <div>
    <h1>Hello, world</h1>
    <p>My first test with NextJS</p>
    <Link href='/'>
      <a>Acess Home page</a>
    </Link>
  </div>
};

export default Sobre;