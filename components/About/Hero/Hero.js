import Content from "./Items/Content"

function Hero() {
  return (
    <main
      className="bg-white dark:bg-Charcoal"
      style={{ minHeight: "calc(100vh - 112px)" }}
      id="hero"
    >
      <Content />
    </main>
  )
}

export default Hero
