async function getHomeData() {
  // mock API delay
  await new Promise((r) => setTimeout(r, 300))
  return {
    title: 'Welcome to Our Website',
    description: 'This is the home page with some mock data.'
  }
}

export default async function HomePage() {
  const data = await getHomeData()

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}