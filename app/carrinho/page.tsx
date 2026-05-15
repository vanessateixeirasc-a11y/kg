"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import {
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CarrinhoPage() {
  const searchParams = useSearchParams()
  const initialQuantity = Number(searchParams.get("quantidade") || 1)

  const [quantity, setQuantity] = useState(initialQuantity)
  const [cep, setCep] = useState("")
  const [pix, setPix] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const unitPrice = 700
  const total = unitPrice * quantity

  async function finalizarCompra() {
    setLoading(true)
    setPix(null)

    try {
      const res = await fetch("/api/pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
          quantity,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Erro ao gerar PIX")
        return
      }

      setPix(data)
    } catch {
      alert("Erro ao conectar com a API PIX")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#111]">
      
      {/* HEADER */}
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
      </header>

      {/* CONTEÚDO */}
      <section className="px-5 pt-8 pb-4">

        <h1 className="text-[22px] font-medium mb-2">
          Meu Carrinho
        </h1>

        <div className="border-t border-gray-300 mb-8" />

        {/* Produto */}
        <div className="flex gap-5">
          <div className="w-[88px] flex justify-center">
            <img
  src="/pacote-figurinhas.jpg"
  alt="Produto"
  className="w-[72px] h-[72px] object-contain"
/>
          </div>

          <div className="flex-1">
            <p className="text-[13px] leading-5 font-semibold">
              Figurinhas Copa do Mundo da FIFA 2026™, Panini - EN 7 UN
            </p>
          </div>
        </div>

        {/* Quantidade */}
        <div className="mt-7 flex items-start justify-between">
          <div className="flex items-start gap-2">

            <div className="flex border border-[#d9d9d9] rounded-sm overflow-hidden h-[36px] bg-white">
  
  <input
    type="number"
    min={1}
    value={quantity}
    onChange={(e) =>
      setQuantity(
        Math.max(1, Number(e.target.value))
      )
    }
    className="w-[56px] text-center text-[15px] outline-none bg-white"
  />

  <div className="flex flex-col border-l border-[#d9d9d9]">

    <button
      onClick={() => setQuantity(quantity + 1)}
      className="w-[18px] h-[18px] text-[8px] text-black hover:bg-[#f5f5f5] border-b border-[#d9d9d9] leading-none"
    >
      ▲
    </button>

    <button
      onClick={() =>
        setQuantity(Math.max(1, quantity - 1))
      }
      className="w-[18px] h-[18px] text-[8px] text-black hover:bg-[#f5f5f5] leading-none"
    >
      ▼
    </button>

  </div>
</div>

            <button className="text-xs underline text-gray-600 mt-2">
              remover
            </button>
          </div>

          <div className="text-right">
            <p className="text-xs mb-5">
              Unitário: R$ {(unitPrice / 100)
                .toFixed(2)
                .replace(".", ",")}
            </p>

            <p className="text-lg font-bold text-[#2f66b3]">
              R$ {(total / 100)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          </div>
        </div>

        {/* CEP */}
        <div className="mt-4 border border-gray-200 bg-[#f7f8fa] p-4">

          <p className="text-sm mb-2">
            Digite o seu CEP para calcular o valor do frete:
          </p>

          <div className="flex">

            <Input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite seu CEP"
              className="rounded-r-none h-[38px] text-center"
            />

            <Button className="rounded-l-none bg-[#eef0f3] hover:bg-[#e1e3e6] text-black h-[38px] px-3 text-xs">
              Calcular Frete
            </Button>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm underline text-gray-600">
          <Link href="/">
            Continuar Comprando
          </Link>

          <button>
            Limpar Carrinho
          </button>
        </div>

        {/* Resumo */}
        <div className="mt-10 bg-[#f6f7f9] rounded-md p-4">

          <h2 className="text-xl font-bold mb-3">
            Resumo do Pedido
          </h2>

          <div className="flex justify-between text-base mb-4">
            <span>SubTotal</span>

            <span>
              R$ {(total / 100)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>

          <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold text-[#2f66b3]">
            <span>Total</span>

            <span>
              R$ {(total / 100)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>

          <Button
            onClick={finalizarCompra}
            disabled={loading}
            className="w-full mt-4 bg-[#3c72b4] hover:bg-[#335f96] text-white font-bold text-xl h-[46px]"
          >
            {loading
              ? "Gerando PIX..."
              : "Finalizar compra"}
          </Button>
        </div>

        {/* PIX */}
        {pix?.copyPaste && (
          <div className="mt-5 border rounded-lg p-4 flex flex-col items-center gap-3">

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                pix.copyPaste
              )}`}
              alt="QR Code PIX"
              className="w-[220px] h-[220px]"
            />

            <p className="text-sm font-semibold text-center">
              Escaneie o QR Code ou copie o código PIX
            </p>

            <textarea
              readOnly
              value={pix.copyPaste}
              className="w-full h-24 text-xs border rounded-md p-2 resize-none"
            />

            <Button
              onClick={() =>
                navigator.clipboard.writeText(
                  pix.copyPaste
                )
              }
              className="w-full bg-[#3c72b4] hover:bg-[#335f96] text-white"
            >
              Copiar código PIX
            </Button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="mt-8 bg-[#e9ecef] text-center text-gray-700 px-4 py-6">

        <h4 className="font-bold mb-3 text-[#3c72b4] text-xl">
          Institucional
        </h4>

        <div className="space-y-4 text-lg">
          <p>Sobre a Kalunga</p>
          <p>Lojas Kalunga</p>
          <p>Trabalhe Conosco</p>

          <p className="font-bold">
            Vendas para Empresas
          </p>

          <p>Contrato Corporativo Kalunga</p>
          <p>Fale Conosco</p>
          <p>Mapa do Site</p>
          <p>Serviços Kalunga</p>
          <p>Kalunga Copy&amp;Print</p>
          <p>Kalunga Sustentável</p>
          <p>Assessoria de Imprensa</p>
          <p>Relações com Investidores</p>
        </div>

        <h4 className="font-bold mt-8 mb-4 text-[#3c72b4] text-xl">
          Redes Sociais
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-5 text-gray-600">
          <Instagram className="h-6 w-6" />
          <Facebook className="h-6 w-6" />
          <Youtube className="h-7 w-7" />
          <Linkedin className="h-6 w-6" />
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6">
          <h4 className="font-bold text-[#3c72b4] text-xl">
            Certificados e Segurança
          </h4>

          <p className="mt-2 text-lg">
            Certisign Reclame Aqui eBit
          </p>
        </div>
      </footer>
    </main>
  )
}