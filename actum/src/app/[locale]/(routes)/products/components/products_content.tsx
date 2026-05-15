import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";
import { getAspectRatio } from "@/lib/utils";

export default async function ProductsContent() {
    const products = await getAllProducts();

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
            {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <li className="flex flex-col gap-4">
                        <div>[ {product.sort_by} ]</div>
                        <p>{product.name}</p>
                        {product.pics?.[0] && product.pics[0] !== "null" ? (
                            <div className={`relative w-full ${getAspectRatio(product.id)} overflow-hidden`}>
                                <Image src={product.pics[0]} alt={product.name} fill className="object-cover" />
                            </div>
                        ) : product.editorial_text ? (
                            <p>{product.editorial_text}</p>
                        ) : null}
                    </li>
                </Link>
            ))}
        </ul>
    );
}