import React from "react";

const ReviewPage = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Review product {params.productId} review {params.reviewId}
    </div>
  );
};

export default ReviewPage;
