type GoogleMapEmbedProps = {
  className?: string
  src: string
  title: string
}

export function GoogleMapEmbed({ className, src, title }: GoogleMapEmbedProps) {
  return (
    <iframe
      className={className}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
      title={title}
    />
  )
}
