"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="pb-24">
      {/* Institutional Links */}
      <div className="px-4 py-6 text-center" style={{ backgroundColor: '#e9ecef' }}>
        <h4 className="font-bold mb-4" style={{ color: '#3c72b4' }}>Institucional</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <Link href="#" className="block hover:text-[#3c72b4]">Sobre a Kalunga</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Nossas Lojas</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Trabalhe Conosco</Link>
        </div>
        
        <h4 className="font-bold mt-6 mb-4" style={{ color: '#3c72b4' }}>Vendas para Empresas</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <Link href="#" className="block hover:text-[#3c72b4]">Contrato Corporativo</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Fale Conosco</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Mapa do Site</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Serviços Kalunga</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Kalunga Copy&Print</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Kalunga Sustentável</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Assessoria de Imprensa</Link>
          <Link href="#" className="block hover:text-[#3c72b4]">Relações com Investidores</Link>
        </div>
        
        {/* Social Links */}
        <h4 className="font-bold mt-6 mb-4" style={{ color: '#3c72b4' }}>Redes Sociais</h4>
        <div className="flex items-center justify-center gap-4 text-gray-700">
          <Link href="#" className="hover:text-[#3c72b4]">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-[#3c72b4]">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-[#3c72b4]">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </Link>
          <Link href="#" className="hover:text-[#3c72b4]">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </Link>
          <Link href="#" className="hover:text-[#3c72b4]">
            <Youtube className="h-6 w-6" />
          </Link>
          <Link href="#" className="hover:text-[#3c72b4]">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        
        {/* WhatsApp */}
        <div className="mt-4 text-gray-700">
          <Link href="#" className="hover:text-[#3c72b4] inline-block">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Certificates */}
      <div className="border-t border-gray-600 px-4 py-4">
        <h4 className="text-primary font-bold text-center mb-3">Certificados e Segurança</h4>
        <div className="flex items-center justify-center gap-4 text-sm">
          <span>Certisign</span>
          <span>Reclame Aqui</span>
          <span>eBit</span>
        </div>
      </div>
      
      {/* Back to Top */}
      <div className="fixed bottom-20 right-4 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-primary text-primary-foreground p-2 rounded shadow-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
