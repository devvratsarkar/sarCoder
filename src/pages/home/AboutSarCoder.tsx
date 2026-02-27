import { RobotCharacter } from "../../components/ui/Aura";

export default function AboutSarCoder() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div></div>
        <div className="h-screen">
          <iframe
            title="Full-Screen 3D Spline Background Embed - Preview"
            srcDoc={RobotCharacter()}
            className="w-full h-full border-0"
            sandbox="allow-scripts"
          />
        </div>
      </section>
    </>
  )
}
