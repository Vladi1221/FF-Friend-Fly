interface AvatarProps {
  name: string
  photoUrl?: string
  size?: number
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function Avatar({ name, photoUrl, size = 40 }: AvatarProps) {
  const style = { width: size, height: size }

  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        style={style}
        className="rounded-full object-cover"
      />
    )
  }

  return (
    <div
      style={style}
      className="flex items-center justify-center rounded-full bg-secondary-light font-semibold text-secondary-dark"
    >
      {initials(name)}
    </div>
  )
}
