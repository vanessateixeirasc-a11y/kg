"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "Excelente",
    comment: "Produto chegou no prazo e em ótima qualidade.",
    author: "IRMA SCHWAMBACK GEIB",
    date: "14/05/2026",
    helpful: 0,
    notHelpful: 0,
  },
  {
    id: 2,
    rating: 5,
    title: "Excelente",
    comment: "",
    author: "Vania Marques Pinto Garcia",
    date: "13/05/2026",
    helpful: 0,
    notHelpful: 0,
  },
  {
    id: 3,
    rating: 4,
    title: "Ótimo",
    comment: "Entrega dentro da previsão",
    author: "Robson Pinheiro thomaz",
    date: "12/05/2026",
    helpful: 0,
    notHelpful: 0,
  },
  {
    id: 4,
    rating: 5,
    title: "Excelente",
    comment: "qualiade dos produtos",
    author: "Luiz Augusto Pessanha",
    date: "12/05/2026",
    helpful: 0,
    notHelpful: 0,
  },
  {
    id: 5,
    rating: 5,
    title: "Excelente",
    comment: "figurinhas separadas corretamente e de forma ágil",
    author: "Ronaldo Ferreira",
    date: "11/05/2026",
    helpful: 0,
    notHelpful: 0,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

export function ProductReviews() {
  return (
    <div className="bg-card px-4 py-4 border-t-8 border-background">
      {/* Header */}
      <div className="ml-auto flex items-center gap-2">
        <Star className="h-5 w-5 text-foreground" />
        <span className="font-bold text-foreground text-lg">Avaliação do produto</span>
      </div>
      
      {/* Rate Product CTA */}
      <div className="mt-4 border border-border rounded-lg p-4 text-center">
        <p className="font-bold text-foreground">Você comprou este produto na Kalunga?</p>
        <p className="text-sm text-muted-foreground mt-1">Compartilhe sua opinião com a gente.</p>
        <Button variant="outline" className="mt-3 border-foreground text-foreground">
          Avaliar o produto
        </Button>
      </div>
      
      {/* Reviews List */}
      <div className="mt-6">
        <h4 className="font-bold text-foreground">Confira as opiniões dos clientes sobre este produto</h4>
        
        <div className="mt-4 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-border rounded-lg p-4">
              <StarRating rating={review.rating} />
              <p className="font-bold text-foreground mt-2">{review.title}</p>
              {review.comment && (
                <p className="text-sm text-foreground mt-1">{review.comment}</p>
              )}
              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="font-medium text-foreground">{review.author}</span>
                <span className="text-muted-foreground">{review.date}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>Esta avaliação foi útil?</span>
                <button className="text-primary hover:underline">Sim {review.helpful}</button>
                <span className="text-muted-foreground">|</span>
                <button className="text-primary hover:underline">Não {review.notHelpful}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
