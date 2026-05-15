"use client"

import { useState } from "react"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"

export function BuyTogether() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="bg-card px-4 py-4 border-t border-border">
      <h3 className="font-bold text-foreground mb-3">Compre junto</h3>
      
      <div className="flex items-start gap-3">
        <Checkbox 
          id="album"
          checked={isChecked}
          onCheckedChange={(checked) => setIsChecked(checked === true)}
          className="mt-1"
        />
        <div className="relative w-14 h-14 flex-shrink-0">
          <Image
            src="/images/album-figurinhas.jpg"
            alt="Álbum de figurinhas"
            fill
            className="object-contain"
          />
        </div>
        <label htmlFor="album" className="flex-1 cursor-pointer">
          <p className="text-sm text-foreground leading-tight">
            Álbum de figurinha Copa 2026 brochura Panini PT 1 UN
          </p>
          <p className="text-sm text-accent font-medium mt-1">+ R$ 24,90</p>
        </label>
      </div>
    </div>
  )
}
