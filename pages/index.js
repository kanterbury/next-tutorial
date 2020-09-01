import Link from 'next/link';
import style from '../static/style';
import Counter from '../components/Counter';
import fetch from 'isomorphic-unfetch';

index.getInitialProps = async ({ req, query }) => {
  const protocol = req ?
    `${req.headers['x-forwarded-proto']}:` :
    location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/users`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
}

function index ({users,userNum}){ 
<div>
  {style}
  <h1> Next.js</h1>
  <p>Welcome to next.js!</p>
  <p>これはビルトインCSSによるスタイルです。</p>
  <hr />
  <div>
    <Link href="/other">
      <a>Go to Other Page &gt;&gt;</a>
    </Link>
  </div>
  <hr />
  <Counter />
  <hr />
  <ul>
    {users.map(u => (
      <li key={u.id}>
        <span>{u.name}</span>
      </li>
    ))}
  </ul>
</div>
}
export default index;