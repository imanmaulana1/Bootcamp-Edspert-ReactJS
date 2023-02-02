import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpService } from "../../utils/service";

const Detail = () => {
  const [data, setData] = useState(null);
  const { Id } = useParams();
  console.log(Id);

  useEffect(() => {
    if (Id !== undefined) {
      const fetchProducts = async () => {
        const response = await httpService.get(`/detail/${Id}`);
        setData(response.data);
        console.log("response", response.data);
      };
      fetchProducts();
    }
  }, [Id]);
  return <div>{data}</div>;
};

export default Detail;
