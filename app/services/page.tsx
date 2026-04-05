async function getServices() {
  await new Promise((r) => setTimeout(r, 300))
  return [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile Development' },
    { id: 3, name: 'Cloud Solutions' }
  ]
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  )
}
