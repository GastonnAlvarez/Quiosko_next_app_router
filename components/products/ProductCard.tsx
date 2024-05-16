import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductBtn from "./AddProductBtn"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const imagePath = getImagePath(product.image)

    return (
        <div className="border bg-white">
            <Image
                height={400}
                width={400}
                src={imagePath}
                alt="Product IMG"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductBtn product={product} />
            </div>
        </div>
    )
}
