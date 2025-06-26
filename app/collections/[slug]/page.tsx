import { notFound } from "next/navigation"
import FilteredProductList from "@/components/FilteredProductList" // We create this next

export const dynamic = "force-dynamic"

async function getCategoryBySlug(slug: string) {
  const res = await fetch("http://localhost:9000/store/product-categories", {
    headers: {
      "x-publishable-api-key":
        "pk_231443ba8b621f508d3fa9a99db1790783fbf19b3692aa1e0033a97eaa3b4041",
    },
    cache: "no-store",
  })

  const data = await res.json()
  return data.product_categories.find(
    (c: any) => c.handle.toLowerCase() === slug.toLowerCase()
  )
}

async function getProductsByCategoryId(categoryId: string) {
  const res = await fetch(
    `http://localhost:9000/store/products?category_id[]=${categoryId}`,
    {
      headers: {
        "x-publishable-api-key":
          "pk_231443ba8b621f508d3fa9a99db1790783fbf19b3692aa1e0033a97eaa3b4041",
      },
      cache: "no-store",
    }
  )

  const data = await res.json()
  return data.products
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug)
  if (!category) return notFound()

  const products = await getProductsByCategoryId(category.id)

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-6">{category.description}</p>
      <FilteredProductList products={products} />
    </section>
  )
}
