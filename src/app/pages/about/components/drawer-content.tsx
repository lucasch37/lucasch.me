type FileContent = {
    tabLocation: 0 | 1 | 2;
    divider?: boolean;
};

const drawerContent: FileContent[] = [
    { tabLocation: 0, divider: false },
    { tabLocation: 1, divider: false },
    { tabLocation: 2, divider: false },
    { tabLocation: 0, divider: true },
    { tabLocation: 1, divider: false },
    { tabLocation: 2, divider: false },
    { tabLocation: 1, divider: false },
    { tabLocation: 2, divider: false },
    { tabLocation: 0, divider: false },
    { tabLocation: 2, divider: false },
    { tabLocation: 1, divider: false },
    { tabLocation: 2, divider: true },
    { tabLocation: 0, divider: false },
    { tabLocation: 1, divider: false },
    { tabLocation: 2, divider: false },
];

export default drawerContent;
