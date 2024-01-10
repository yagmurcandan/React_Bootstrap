import {
  Linkedin as LinkedinIcon,
  Github as GitHubIcon,
} from "react-bootstrap-icons";

const Contact = () => {
  return (
    <>
      <hr></hr>
      <div id="contact" className="bg-white mt-2">
        <h1 className="text-center  text-black">Contact</h1>
        <div className="px-3 text-center">
          <p className="fs-5  text-black">
            If you have a question, you can contact to us.
          </p>
          <li className="list-group-item none">
            <a
              className="d-inline-flex"
              href="https://www.linkedin.com/in/yagmurhafizoglu/"
              target="blank"
            >
              Linkedin{" "}
              <p className="mx-2 ">
                <LinkedinIcon />
              </p>
            </a>
          </li>
          <li className="list-group-item none ">
            <a
              className="d-inline-flex"
              href="https://github.com/yagmurcandan/"
              target="blank"
            >
              GitHub{" "}
              <p className="mx-2">
                <GitHubIcon />
              </p>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Contact;
