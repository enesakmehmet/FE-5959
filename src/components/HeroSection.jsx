import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const HeroSection = () => { 
return (
<div className="py-5">
  <Container className="px-lg-5">
    <div className="bg-light rounded-3 text-center p-4 p-lg-5">
        <div className="m-5 m-lg-5">
            <h1 className="display-5 fw-bold">A warm welcome!</h1>
            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <Button className="btn-lg" variant="primary">Call to action</Button>
        </div>
    </div>
  </Container>
</div>


)
};
export default HeroSection;