import Link from 'next/link';

function Home() {
  return <div>
    <h1>Hello, world</h1>
    <p>My first test with NextJS</p>
    <Link href='/sobre'>
      <a>Acess About page</a>
    </Link>
  </div>
};

export default Home;