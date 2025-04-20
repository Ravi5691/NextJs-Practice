export default async function ProductDetails({ params }: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId;
    return <div>
        Product {productId} Details is here you can see it.
    </div>
}