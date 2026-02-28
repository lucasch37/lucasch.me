import { loremIpsum } from "@/components/portfolio/cabinet-layout";
import {
    FileCaption,
    FileContent,
    FileHeader,
    FileImage,
    FileInfo,
    FileText,
    FileTitle,
} from "../file-content";
import lab from "@/assets/images/portfolio/lab.jpg";

const ResearchFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Research</FileTitle>
                    <FileCaption>2026</FileCaption>
                </FileHeader>
                <FileText>{loremIpsum}</FileText>
            </FileInfo>
            <FileImage>
                <img src={lab} alt="Research Lab" className="h-full object-cover" />
            </FileImage>
        </FileContent>
    );
};

export default ResearchFile;
