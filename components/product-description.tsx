"use client"

import { useState } from "react"
import { List, ChevronDown, ChevronUp } from "lucide-react"

export function ProductDescription() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="bg-card px-4 py-4 border-t-8 border-background">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full"
      >
        <List className="h-5 w-5 text-foreground" />
        <span className="font-bold text-foreground text-lg">Descrição</span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-foreground ml-auto" />
        ) : (
          <ChevronDown className="h-5 w-5 text-foreground ml-auto" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-bold text-foreground">Características do Produto</h4>
            <p className="mt-2 text-sm text-foreground leading-relaxed">
              Prepare-se para a maior celebração do futebol mundial com as{" "}
              <strong>Figurinhas da Copa 2026</strong>!
              Com 7 unidades em cada pacote, você terá a oportunidade perfeita de iniciar ou completar seu álbum, 
              enquanto se une a amigos, familiares e outros fãs nessa emocionante jornada. 
              Cada figurinha traz a emoção e a história dos jogadores, dos times e da competição, 
              tornando cada momento de coletar e colar ainda mais especial.
            </p>
            <p className="mt-4 text-sm text-foreground leading-relaxed">
              Com a Panini, a qualidade e a durabilidade estão garantidas. 
              As figurinhas são produzidas com um acabamento brilhante que não só destaca as imagens, 
              mas também as conserva por muito mais tempo. 
              Ao colecionar essas preciosidades, você não estará apenas reunindo imagens, 
              mas criando memórias que poderão ser revisadas e relembradas por gerações. 
              Faça parte da história da Copa do Mundo 2026!
            </p>
            <p className="mt-4 text-sm text-foreground leading-relaxed">
              Seja você um colecionador ávido ou um torcedor apaixonado, 
              estas figurinhas são um item indispensável para a sua coleção. 
              Personalize seu álbum com os craques que fazem história e compartilhe a alegria do futebol com quem você ama. 
              Cada pacotinho é uma nova chance de adicionar seus jogadores favoritos e reviver momentos inesquecíveis das copas passadas!
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-primary">Especificações</h4>
            <ul className="mt-2 space-y-1 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Figurinhas da Copa 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Marca: Panini</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Quantidade: 7 figurinhas por pacote</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Acabamento: Brilhante, resistente e durável</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
