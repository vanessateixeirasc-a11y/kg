"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Package, Store, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PurchaseSection() {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [cep, setCep] = useState("")

  const price = 700
  const total = price * quantity

  function irParaCarrinho() {
    router.push(`/carrinho?quantidade=${quantity}`)
  }

  return (
    <div className="bg-card px-4 py-4 border-t border-border">
      <p className="text-3xl font-bold" style={{ color: "#3c72b4" }}>
        R$ {(total / 100).toFixed(2).replace(".", ",")}
      </p>

      <div className="mt-4 border border-border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Package className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">
            Calcular frete e prazo de entrega
          </span>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="flex-1"
          />

          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50"
            style={{ color: "#3c72b4", borderColor: "#3c72b4" }}
          >
            Calcular
          </Button>
        </div>
      </div>

      <Button variant="outline" className="w-full mt-3 justify-start gap-2 border-border">
        <Store className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-foreground">Consultar estoque em loja</span>
      </Button>

      <div className="mt-4">
        <p className="text-sm font-medium text-foreground text-center mb-2">
          Quantidade
        </p>

        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="rounded-none border-r border-border"
          >
            <Minus className="h-4 w-4" />
          </Button>

          <span className="flex-1 text-center font-medium">{quantity}</span>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="rounded-none border-l border-border"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button
        onClick={irParaCarrinho}
        className="w-full mt-4 bg-[#3c72b4] hover:bg-[#335f96] text-white font-bold py-6 text-lg"
      >
        Comprar
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-2">
        *Após aprovação do pagamento. Exclusivo PIX, Cartão de Crédito e Faturado
      </p>
    </div>
  )
}