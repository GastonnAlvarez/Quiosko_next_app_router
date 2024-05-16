import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function searchProducts(searchParams: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchParams,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {
    const products = await searchProducts(searchParams.search)

    return (
        <>
            <Heading>Resultado de la Busqueda:{''}{searchParams.search}</Heading>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                <Link
                    href={'/admin/products/new'}
                    className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
                >Nuevo Producto</Link>
                <ProductSearchForm />
            </div>
            {products.length ? <ProductTable products={products} /> : <p className="text-center text-xl">No hay resultados</p>}
        </>
    )
}
