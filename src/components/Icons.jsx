import {Row,Container} from "react-bootstrap";
import {Collection as CollectionIcon, CloudDownload as CloudDownloadIcon, CardHeading as CardHeadingIcon, Bootstrap as BootstrapIcon, Code as CodeIcon, PatchCheck as PatchCheckIcon} from "react-bootstrap-icons";
import Icon from "./Icon";

const Icons= () => {
    const icons = [
        {
            icon:<CollectionIcon/>,
            title:"Fresh new layout",
            content:"With Bootstrap 5, we've created a fresh new layout for this template!",
        },
        {
            icon:<CloudDownloadIcon/>,
            title:"Free to download",
            content:"As always, Start Bootstrap has a powerful collection of free templates.",
        },
        {
            icon:<CardHeadingIcon/>,
            title:"Jumbotron hero header",
            content:"The heroic part of this template is the jumbotron hero header!",
        },
        {
            icon:<BootstrapIcon/>,
            title:"Feature boxes",
            content:"We've created some custom feature boxes using Bootstrap icons!",
        },
        {
            icon:<CodeIcon/>,
            title:"Simple clean code",
            content:"We keep our dependencies up to date and squash bugs as they come!",
        },
        {
            icon:<PatchCheckIcon/>,
            title:"A name you trust",
            content:"Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
        },
    ];
    

    return (
        <Container>
            <Row className="row-gap-4">{icons.map((icon)=>{
        return  <Icon key={icon.title} {...icon} />;
    })}</Row>
        </Container>
    )
};

export default Icons;