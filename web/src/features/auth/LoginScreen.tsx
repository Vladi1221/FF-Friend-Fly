import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function LoginScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm text-center">
        <h1 className="mb-2 text-2xl font-bold text-text">Splitwaisito</h1>
        <p className="mb-6 text-text-muted">
          Organizá los gastos compartidos de tu grupo.
        </p>
        <Button className="w-full">Continuar con Google</Button>
      </Card>
    </div>
  )
}
