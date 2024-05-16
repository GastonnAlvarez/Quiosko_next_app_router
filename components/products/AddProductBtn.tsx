"use client"
import { useStore } from "@/src/store"
import { Product } from "@prisma/client"

type AddProductBtnProps = {
    product: Product
}
export default function AddProductBtn({ product }: AddProductBtnProps) {
    const addToOder = useStore((state) => state.addToOrder)

    return (
        <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={() => addToOder(product)}
        >Agregar</button>
    )
}
