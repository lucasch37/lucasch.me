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
import aws from "@/assets/images/portfolio/aws.png";

const InternshipFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Internship</FileTitle>
                    <FileCaption>2025</FileCaption>
                </FileHeader>
                <FileText>{loremIpsum}</FileText>
            </FileInfo>
            <FileImage>
                <img src={aws} alt="AWS Logo" className="h-2/5" />
            </FileImage>
        </FileContent>
    );
};

export default InternshipFile;
