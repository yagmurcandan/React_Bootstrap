import { Container } from "react-bootstrap";

const Start = () => {
  return (
    <Container id="home" className="py-5">
      <div className="bg-light text-center p-4 p-lg-5 rounded-3">
        <div className="m-4 m-lg-5">
          <h1 className="fw-bold display-5">A warm welcome!</h1>
          <p className="fs-4">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <a
            href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
            target="blank"
            className="btn btn-lg bg-primary text-white"
          >
            Call to action
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Start;
