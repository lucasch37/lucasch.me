import react from "@/assets/images/portfolio/react.png";
import { loremIpsum } from "@/components/portfolio/cabinet-layout";
import { FileContent, FileHeader, FileImage, FileInfo, FileText, FileTitle } from "../file-content";

const SkillsFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>Skills</FileTitle>
                </FileHeader>
                <FileText>{loremIpsum}</FileText>
            </FileInfo>
            <FileImage>
                <img src={react} alt="React Logo" className="h-2/3" />
            </FileImage>
        </FileContent>
    );
};

export default SkillsFile;
