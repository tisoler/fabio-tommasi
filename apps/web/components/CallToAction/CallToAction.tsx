import { Button } from "components/Button/Button"
import { Input } from "components/Input/Input"
import { Label } from "components/Label/Label"
import { Textarea } from "components/Textarea/Textarea"

export function CallToAction() {
  return (
    <div className="border-y border-black">
      <div className="max-w-container-md mx-auto my-0 w-full px-4 py-16 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hacenos tus consultas también por email.</p>
          </div>
          <div>
            <form className="ml-0 flex max-w-md flex-col gap-4 md:ml-auto">
              <Label>
                <span className="sr-only">Nombre</span>
                <Input placeholder="Nombre" />
              </Label>
              <Label>
                <span className="sr-only">Email</span>
                <Input placeholder="Email" type="email" />
              </Label>
              <Label>
                <span className="sr-only">Mensaje</span>
                <Textarea placeholder="Mensaje" style={{ backgroundColor: '#f5f5f5' }} />
              </Label>
              <Button size="lg" className="w-fit bg-black text-center text-white">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
