async function getAbout() {
  await new Promise((r) => setTimeout(r, 300))
  return {
    company: 'Tech Corp',
    mission: 'We build scalable applications.'
  }
}

export default async function AboutPage() {
  const data = await getAbout()

  return (
    <div>
      <h1>About Us</h1>
      <p><b>Company:</b> {data.company}</p>
      <p><b>Mission:</b> {data.mission}</p>
    </div>
  )
}