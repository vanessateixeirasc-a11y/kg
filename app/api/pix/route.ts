import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const amount = body.amount || 700

    const response = await fetch(
      "https://bqckqgmorberurjolzmq.supabase.co/functions/v1/api-create-invoice",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.BLACKNOSE_API_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount / 100,
          currency: "BRL",
          title: "Figurinhas Copa 2026",
          description: "Compra realizada no site",
        }),
      }
    )

    const data = await response.json()

    console.log("Resposta BlackNosePay:", data)

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error || "Erro ao gerar PIX",
          details: data,
        },
        { status: response.status }
      )
    }

    const copyPaste =
  data?.pix?.copy_paste ||
  data?.pix?.qr_code ||
  data.copyPaste ||
  data.pix_code ||
  data.pixCode ||
  data.qrcode ||
  data.qrCode ||
  data.payload ||
  data.pix_payload ||
  data.emv ||
  data.brcode ||
  data.brcodepix ||
  data?.payment?.pix_code ||
  data?.payment?.qrcode ||
  data?.payment?.payload ||
  null

const qrCodeImage =
  data?.pix?.qr_code_image || null

    return NextResponse.json({
  invoiceId: data.invoice_id,
  shortCode: data.short_code,
  copyPaste,
  qrCodeImage,
  expiresAt: data?.pix?.expires_at || null,
  status: data.status,
  response: data,
})
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erro interno",
        details: String(error),
      },
      { status: 500 }
    )
  }
}