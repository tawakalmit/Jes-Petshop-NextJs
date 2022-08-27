import Head from "next/head"

export default function Jesheader({judul}) {
  return (
    <div>
    <Head>
      <title>{judul}</title>
      <link rel='icon' href='/jes_icon.png' />
    </Head>
    </div>
  )
}
