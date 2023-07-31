import Info from './Info'
import Interactive from './Interactive'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Info />
      <Interactive />
    </main>
  )
}
