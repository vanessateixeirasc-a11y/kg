import { Header } from "@/components/header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { BuyTogether } from "@/components/buy-together"
import { PurchaseSection } from "@/components/purchase-section"
import { ProductDescription } from "@/components/product-description"
import { ProductReviews } from "@/components/product-reviews"
import { Footer } from "@/components/footer"
import { StickyBuyBar } from "@/components/sticky-buy-bar"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BreadcrumbNav />
      <ProductGallery />
      <ProductInfo />
      <BuyTogether />
      <PurchaseSection />
      <ProductDescription />
      <ProductReviews />
      <Footer />
      <StickyBuyBar />
    </main>
  )
}
