"use client"

import { useState } from "react"
import Image from "next/image"
import { Share2, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  "/images/pacote-figurinhas.jpg",
  "/images/album-figurinhas.jpg",
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-card">
      {/* Main Image */}
      <div className="relative w-[300px] h-[300px] mx-auto">
        <Image
          src={images[selectedImage]}
          alt="Figurinhas Copa do Mundo 2026"
          fill
          priority
          className="object-contain p-4"
        />
        
        {/* Share Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 rounded-full bg-card shadow-md"
        >
          <Share2 className="h-5 w-5 text-muted-foreground" />
        </Button>
        
        {/* Favorite Button */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="rounded-full bg-card shadow-md"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-card shadow-md"
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-2 p-4 border-t border-border">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-16 h-16 border-2 rounded ${
              selectedImage === index ? "border-primary" : "border-border"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
