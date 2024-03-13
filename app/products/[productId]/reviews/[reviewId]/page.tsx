import React from "react";
import { notFound } from "next/navigation";
import { count } from "console";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewPage = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }
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
