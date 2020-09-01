import Link from 'next/link';

const h1 = {
  fontSize: '68pt',
  fontWeight: `bold`,
  textAlign: `right`,
  letterSpacing: `-8px`,
  color: `#f0f0f0`,
  margin: `-32px 0px`
}

const p = {
  margin: `0px`,
  color: `#666`,
  fontSize: `16pt`
}

const other = () =>
  <div>
    <h1 style={h1}> Next.js</h1>
    <p style={p}>This is other page</p>
    <hr />
    <div>
      <Link href="/">
        <a>Back to Index Page &gt;&gt;</a>
      </Link>
    </div>
  </div>;

export default other;