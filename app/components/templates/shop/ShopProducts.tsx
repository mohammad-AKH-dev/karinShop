"use client";

import { Database } from "@/app/appwrite";
import { dataBaseId } from "@/app/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { Models } from "appwrite";
import React, { useState } from "react";
import ProductBox from "../../modules/ProductBox";
import Pagination from "@mui/material/Pagination";
import ProductsLoading from "../../modules/loaders/ProductsLoading";

function ShopProducts() {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex - itemsPerPage;

  const getProducts = async () => {
    const res = await Database.listDocuments({
      databaseId: dataBaseId,
      collectionId: "products",
    });

    const products: Models.DefaultDocument[] = res.documents;

    return products;
  };
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(endIndex, startIndex);
  return isPending ? (
     <ProductsLoading/>
  ) : (
    <>
      <div className="shop-products grid grid-cols-2 xl:grid-cols-3 my-8 gap-4">
        {data
          ?.concat(data.reverse())
          .slice(endIndex, startIndex)
          ?.map((item) => (
            <ProductBox {...item} />
          ))}
      </div>
      {data?.length && (
        <Pagination
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          count={Math.ceil(data.concat(data).length / itemsPerPage)}
          variant="outlined"
          shape="rounded"
        />
      )}
    </>
  );
}

export default ShopProducts;
