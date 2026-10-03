import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export type LightboxImage = { src: string; alt: string }

/** Full-screen image viewer built on the native <dialog> element (Esc and focus handling for free). */
export function Lightbox({ image, onClose }: { image: LightboxImage | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto max-h-[92vh] max-w-[min(1100px,94vw)] bg-transparent p-0 backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm"
    >
      {image && (
        <div className="relative">
          <img src={image.src} alt={image.alt} className="max-h-[88vh] w-auto rounded-xl shadow-2xl" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-slate-900/70 text-white hover:bg-slate-900"
          >
            <X className="size-5" />
          </button>
        </div>
      )}
    </dialog>
  )
}
