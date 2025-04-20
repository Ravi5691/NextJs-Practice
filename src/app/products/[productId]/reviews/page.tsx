export default async function Reviews({ params }: { params: Promise<{ productId: string }>}) {
    const productId = (await params).productId;
    return <div>
        Review of product {productId} following:
        <ol>
            <li>Review 1</li>
            <li> Review 2</li>
            <li> Review 3</li>
        </ol>
    </div>
}