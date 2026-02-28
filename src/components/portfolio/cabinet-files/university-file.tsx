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
import uw from "@/assets/images/portfolio/uw.jpg";

const UniversityFile = () => {
    return (
        <FileContent>
            <FileInfo>
                <FileHeader>
                    <FileTitle>University</FileTitle>
                    <FileCaption>2026-present</FileCaption>
                </FileHeader>
                <FileText>{loremIpsum}</FileText>
            </FileInfo>
            <FileImage>
                <img src={uw} alt="UW Campus" className="h-full object-cover" />
            </FileImage>
        </FileContent>
    );
};

export default UniversityFile;
