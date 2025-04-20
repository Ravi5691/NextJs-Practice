"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2]; // Extract productId from the URL
    const reviewId = pathname.split("/")[4]; // Extract reviewId from the URL
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <h2>Review {reviewId} not found for product {productId}</h2>
        </div>
    );
}