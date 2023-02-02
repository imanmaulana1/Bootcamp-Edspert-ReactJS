import BannerComp from "../../components/bannercomp";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { httpService } from "../../utils/service";
import "../../components/bannercomp/banner.css";
import CheckboxComp from "../../components/formcomp/CheckboxComp";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await httpService.get("/product");
    setData(response.data);
    console.log("response", response.data);
  };

  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDescription = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(0, 50) + "...";
    }
  };

  return (
    <>
      <BannerComp />
      <div className="content">
        <Container>
          <div className="content-box">
            <div className="content-form">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="text-primary">Bidang</Form.Label>
                  <CheckboxComp label="Digital Marketing" />
                  <CheckboxComp label="Product Management" />
                  <CheckboxComp label="Data Analyst" />
                  <CheckboxComp label="Front End Developer" />
                  <CheckboxComp label="Back End Developer" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-primary">Jenis Program</Form.Label>
                  <CheckboxComp label="Bootcamp" />
                  <CheckboxComp label="Mini Bootcamp" />
                  <CheckboxComp label="Online Course" />
                </Form.Group>
              </Form>
            </div>
            <div className="card-box">
              {data !== null &&
                data.map((res) => {
                  return (
                    <Card style={{ width: "17rem", marginBottom: "50px", cursor: "pointer" }} key={res.id}>
                      <Card.Img variant="top" src={res.image} onClick={() => goToDetail(res.id)} />
                      <Card.Body onClick={() => goToDetail(res.id)}>
                        <Card.Title>{res.title}</Card.Title>
                        <Card.Text>{handleDescription(res.description)}</Card.Text>
                        <div className="d-flex justify-content-end">
                          <Card.Text className="fs-6 text-mute me-3 text-decoration-line-through">$ {res.price * 5}</Card.Text>
                          <Card.Text className="fs-5 text-danger fw-semibold">$ {res.price}</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Link to={"/checkout"}>
                          <Button variant="success">Beli Course</Button>
                        </Link>
                      </Card.Footer>
                    </Card>
                  );
                })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
