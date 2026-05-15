"use client"

import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function StickyBuyBar() {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-3 z-50 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xl font-bold" style={{ color: "#3c72b4" }}>
          R$ 7,00
        </p>

        <Button
          onClick={() => router.push("/carrinho?quantidade=1")}
          className="flex-1 bg-[#3c72b4] hover:bg-[#335f96] text-white font-bold py-6 gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Comprar
        </Button>
      </div>
    </div>
  )
}