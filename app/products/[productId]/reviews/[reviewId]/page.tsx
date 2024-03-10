import React from "react";
import { notFound } from "next/navigation";

const ReviewPage = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review product {params.productId} review {params.reviewId}
    </div>
  );
};

export default ReviewPage;
