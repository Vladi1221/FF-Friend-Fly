import { Avatar } from '../../components/Avatar'

export function PerfilScreen() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold text-text">Perfil</h1>
      <div className="flex items-center gap-3">
        <Avatar name="Usuario" />
        <span className="text-text">Usuario</span>
      </div>
    </div>
  )
}
