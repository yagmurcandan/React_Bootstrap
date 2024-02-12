import {
  Linkedin as LinkedinIcon,
  Github as GitHubIcon,
} from "react-bootstrap-icons";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-light py-4 ">
        <h1 className="text-center  text-black pb-2 text-uppercase">Contact</h1>
        <div className="px-3 text-center">
          <p className="fs-5  text-black-50">
            If you have a question, you can contact to us.
          </p>
          <div className="">
            <a
              className="d-inline-flex text-decoration-none"
              href="https://www.linkedin.com/in/yagmurhafizoglu/"
              target="blank"
            >
              Linkedin{" "}
              <p className="mx-2 ">
                <LinkedinIcon />
              </p>
            </a>
            <a
              className=" ms-2 d-inline-flex text-decoration-none"
              href="https://github.com/yagmurcandan/"
              target="blank"
            >
              GitHub{" "}
              <p className="mx-2">
                <GitHubIcon />
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
