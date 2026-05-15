"use client"

import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingCart,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black text-white text-xs">

        <div className="bg-black px-3 pt-3 pb-2">
          <div className="flex items-center justify-between gap-3">

            {/* Menu */}
            <div className="text-white text-3xl leading-none">
              ☰
            </div>

            {/* Logo */}
<div className="flex-1 flex justify-start ml-0">
  <img
    src="/logo.jpg"
    alt="Logo"
    className="h-[46px] object-contain"
  />
<div className="ml-auto flex items-center gap-4 mt-2">

  {/* Usuário */}
  <button className="text-white">
    <svg
      className="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"/>
    </svg>
  </button>

  {/* Favoritos */}
  <button className="text-white">
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  </button>

  {/* Carrinho */}
  <button className="relative text-white">
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 4H5L4 6v2h2l3.6 7.59-1.35 2.45A1 1 0 009 20h12v-2H10.42a.25.25 0 01-.22-.37L11.1 16h7.45a1 1 0 00.92-.61L23 7H7.42l-.94-2z"/>
    </svg>

    <span className="absolute -top-2 -right-2 bg-[#ff9900] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
      1
    </span>
  </button>
</div>
            </div>
          </div>

          {/* Busca */}
          <div className="mt-3 flex">
            <input
              placeholder="Digite aqui o que você procura"
              className="flex-1 h-[36px] rounded-l-md px-3 text-sm text-black bg-white outline-none"
            />

            <button className="w-[46px] h-[36px] rounded-r-md bg-[#ff8400] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu inferior */}
        <div className="flex items-center h-[28px] px-1 overflow-hidden whitespace-nowrap">
          <span className="px-2 border-r border-white/40">
            Nossas Lojas
          </span>

          <span className="px-2 border-r border-white/40">
            Busca de Cartuchos
          </span>

          <span className="px-2 text-[#ff9900] font-bold border-r border-white/40">
            Pedidos e Trocas
          </span>

          <span className="px-2">
            Atendimento
          </span>
        </div>

        {/* Endereço */}
        <div className="h-[30px] flex items-center justify-center gap-1 text-[12px] border-t border-white/10">
          <MapPin className="h-5 w-5" />

          <span>Selecione o</span>

          <u>Endereço de entrega</u>
        </div>

       {/* Category Navigation */}
<div
  className="px-4 py-[10px] flex items-center justify-between"
  style={{ backgroundColor: "#6f787e" }}
>
  <span className="text-primary-foreground font-semibold text-[15px]">
  Artes & Pintura
</span>

  <svg
    className="h-5 w-5 text-primary-foreground"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>

{/* Breadcrumb */}
<div className="bg-white px-4 py-2 text-[12px] flex items-center gap-1 overflow-x-auto whitespace-nowrap">

  <div className="flex items-center gap-1">
  
  <svg
    className="h-3.5 w-3.5 text-black"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>

  <span className="text-gray-400">{">"}</span>
</div>

  <Link href="#" className="text-gray-700 hover:text-accent">
    Artes & Pintura
  </Link>

  <span className="text-gray-400">{">"}</span>

  <Link href="#" className="text-gray-700 hover:text-accent">
    Álbuns de Figurinhas
  </Link>

  <span className="text-gray-400">{">"}</span>

  <Link href="#" className="text-[#4c78c9] font-medium">
    Álbum de Figurinha
  </Link>
</div>

      </header>
  )
}