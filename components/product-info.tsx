import { Star } from "lucide-react"
import Link from "next/link"

export function ProductInfo() {
  return (
    <div className="bg-card px-4 py-4">
      <h1 className="text-xl font-bold text-foreground leading-tight">
        Figurinhas Copa do Mundo da FIFA 2026™, Panini - EN 7 UN
      </h1>
      
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Código: 543005</span>
        <Link href="#" className="text-sm text-primary hover:underline">
          Mais produtos Panini
        </Link>
      </div>
      
      <div className="mt-2 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-4 w-4 text-muted-foreground" />
        ))}
        <span className="text-sm text-muted-foreground ml-1">(0)</span>
      </div>
    </div>
  )
}
