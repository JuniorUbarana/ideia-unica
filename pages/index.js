import Link from 'next/link';

function Home() {
  return <div>
    <h1>Hello, world</h1>
    <Link href='/sobre'>
      <p>My first test with NextJS</p>
      <a>Acess About page</a>
    </Link>
  </div>
};

export default Home;