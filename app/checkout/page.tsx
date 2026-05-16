"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const quantidade = Number(searchParams.get("quantidade") || 1)
  const [entregaSelecionada, setEntregaSelecionada] = useState(false)

  const produto = 700 * quantidade
  const frete = 708
  const total = produto + frete

  const [loading, setLoading] = useState(false)
  const [pix, setPix] = useState<any>(null)

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [municipio, setMunicipio] = useState("")
  const [uf, setUf] = useState("")
  const [buscandoCep, setBuscandoCep] = useState(false)

  async function buscarCep(valor: string) {
    const cepLimpo = valor.replace(/\D/g, "")
    setCep(valor)

    if (cepLimpo.length !== 8) return

    setBuscandoCep(true)

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const data = await res.json()

      if (data.erro) {
        alert("CEP não encontrado")
        return
      }

      setLogradouro(data.logradouro || "")
      setBairro(data.bairro || "")
      setMunicipio(data.localidade || "")
      setUf(data.uf || "")
    } catch {
      alert("Erro ao buscar CEP")
    } finally {
      setBuscandoCep(false)
    }
  }

  async function gerarPix() {
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
          quantity: quantidade,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Erro ao gerar PIX")
        return
      }

      setPix(data)
    } catch {
      alert("Erro ao gerar PIX")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-black py-3 flex justify-center">
        <img src="/logo.jpg" alt="Logo" className="h-10 object-contain" />
      </header>

      <div className="bg-white py-3 text-center font-semibold text-[18px]">
        Passo 2 de 2: Entrega e Pagamento
      </div>

      

      <div className="max-w-md mx-auto p-2">
        {/* DADOS PESSOAIS */}
<div className="bg-white border rounded-md p-4 mb-4">

  <h2 className="text-[22px] font-bold text-[#333]">
  Dados Pessoais
</h2>

  <div className="border-b my-4" />

  <div className="space-y-4">

    <div>
      <label className="text-sm">
        E-mail
      </label>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        className="w-full border rounded-md h-11 px-3 mt-1"
      />
    </div>

    <div>
      <label className="text-sm">
        CPF
      </label>

      <input
        placeholder="000.000.000-00"
        className="w-full border rounded-md h-11 px-3 mt-1"
      />
    </div>

    <div>
      <label className="text-sm">
        Data de nascimento
      </label>

      <input
        type="date"
        className="w-full border rounded-md h-11 px-3 mt-1"
      />
    </div>

  </div>
</div>
        <div className="bg-white border rounded-md p-4">
          <h2 className="text-[22px] font-bold text-[#333]">Novo endereço</h2>

          <div className="border-b my-4" />

          <div className="space-y-4">
            <div>
              <label className="text-sm">Identificação</label>
              <input
                className="w-full border rounded-md h-11 px-3 mt-1"
                placeholder="Ex: Casa, Trabalho"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm">Celular</label>
                <input
                  className="w-full border rounded-md h-11 px-3 mt-1"
                  placeholder="(99) 99999-9999"
                />
              </div>

              <div>
                <label className="text-sm">Telefone</label>
                <input
                  className="w-full border rounded-md h-11 px-3 mt-1"
                  placeholder="(99) 99999-9999"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">CEP</label>
              <input
                value={cep || ""}
                onChange={(e) => buscarCep(e.target.value)}
                className="w-full border rounded-md h-11 px-3 mt-1"
                placeholder="Digite seu CEP"
              />

              {buscandoCep && (
                <p className="text-xs text-gray-500 mt-1">
                  Buscando endereço...
                </p>
              )}

              <button className="text-gray-500 underline text-sm mt-2">
                Não sei meu CEP
              </button>
            </div>

            <div>
              <label className="text-sm">Logradouro</label>
              <input
                value={logradouro || ""}
                onChange={(e) => setLogradouro(e.target.value)}
                className="w-full border rounded-md h-11 px-3 mt-1"
              />
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
              <div>
                <label className="text-sm">Número</label>
                <input className="w-full border rounded-md h-11 px-3 mt-1" />
              </div>

              <label className="flex items-center gap-2 mb-3 text-sm">
                <input type="checkbox" />
                S/N
              </label>
            </div>

            <div>
              <label className="text-sm">Complemento</label>
              <input
                className="w-full border rounded-md h-11 px-3 mt-1"
                placeholder="Ex: Bloco 3 Apto 5"
              />
            </div>

            <div>
              <label className="text-sm">Bairro</label>
              <input
                value={bairro || ""}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full border rounded-md h-11 px-3 mt-1"
              />
            </div>

            <div className="grid grid-cols-[1fr_70px] gap-3">
              <div>
                <label className="text-sm">Município</label>
                <input
                  value={municipio || ""}
                  onChange={(e) => setMunicipio(e.target.value)}
                  className="w-full border rounded-md h-11 px-3 mt-1"
                />
              </div>

              <div>
                <label className="text-sm">UF</label>
                <input
                  value={uf || ""}
                  onChange={(e) => setUf(e.target.value)}
                  className="w-full border rounded-md h-11 px-3 mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div
  onClick={() => setEntregaSelecionada(!entregaSelecionada)}
  className={`mt-4 border rounded-md p-4 flex items-center justify-between cursor-pointer transition-all ${
    entregaSelecionada
      ? "bg-[#eef3fb] border-[#9fb7df]"
      : "bg-white border-gray-300"
  }`}
>
  <div className="flex items-center gap-3">

    <div
      className={`w-4 h-4 rounded-full border-4 ${
        entregaSelecionada
          ? "border-[#5979b9]"
          : "border-gray-300"
      }`}
    />

    <div>
      <p className="font-bold">
        Receba em até
      </p>

      <p className="text-sm">
        4 dias úteis
      </p>
    </div>
  </div>

  <p
    className={`font-bold ${
      entregaSelecionada
        ? "text-[#5979b9]"
        : "text-gray-700"
    }`}
  >
    R$ 5,00
  </p>
</div>

        <div className="bg-white border rounded-md p-4 mt-4">
          <h2 className="font-bold text-[22px] mb-4">
            Escolha a forma de pagamento
          </h2>

          <div className="border rounded-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
  src="/pix.png"
  alt="PIX"
  className="w-6 h-6 object-contain"
/>
                <span className="font-bold text-[20px]">PIX</span>
              </div>

              <span>⌃</span>
            </div>

            <p className="text-[23px] font-bold text-[#5979b9] mt-5">
              R$ {(total / 100).toFixed(2).replace(".", ",")}
              <span className="text-[20px]"> à vista</span>
            </p>

            <button
              onClick={gerarPix}
              disabled={loading}
              className="w-full h-[52px] bg-[#5979b9] hover:bg-[#4f6cac] text-white rounded-md font-bold text-[22px] mt-5"
            >
              {loading ? "Gerando PIX..." : "Gerar QR Code do PIX"}
            </button>

            {pix?.copyPaste && (
              <div className="mt-5 flex flex-col items-center gap-4">
                <img
  src={
    pix.qrCodeImage ||
    `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
      pix.copyPaste
    )}`
  }
  alt="QR Code"
  className="w-[250px] h-[250px]"
/>

                <textarea
                  readOnly
                  value={pix.copyPaste}
                  className="w-full h-28 border rounded-md p-3 text-xs"
                />

                <button
                  onClick={() => navigator.clipboard.writeText(pix.copyPaste)}
                  className="w-full h-[48px] bg-[#5979b9] text-white rounded-md font-bold"
                >
                  Copiar código PIX
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border rounded-md p-4 mt-4 mb-10">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[24px] text-[#23457c]">Produtos</h2>
            <span>⌃</span>
          </div>

          <div className="mt-5 border-t pt-5">
            <p className="font-bold text-gray-400 text-sm mb-5">PRODUTO</p>

            <div className="flex gap-4">
              <img
                src="/pacote-figurinhas.jpg"
                alt="Produto"
                className="w-[70px] h-[90px] object-contain"
              />

              <div>
                <p className="font-semibold leading-5">
                  Figurinhas Copa do Mundo da FIFA 2026™, Panini - EN 7 UN
                </p>

                <div className="mt-4 text-sm">
                  <p>
                    Qtde: <b>{quantidade}</b>
                  </p>

                  <p className="mt-1">
                    Valor unitário: <b>R$ 7,00</b>
                  </p>

                  <p className="text-[18px] font-bold mt-1">
                    R$ {(produto / 100).toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-6 pt-4 text-sm text-center text-gray-600 leading-6">
            Os preços, promoções, condições de pagamento, frete e estoque são
            válidos apenas para compras pelo site.
          </div>
        </div>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}