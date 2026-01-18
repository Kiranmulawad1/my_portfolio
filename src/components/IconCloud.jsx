import React, { useEffect, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const useIcons = (slugs) => {
    const [icons, setIcons] = useState(null);
    useEffect(() => {
        fetchSimpleIcons({ slugs }).then(setIcons);
    }, [slugs]);

    if (icons) {
        return Object.values(icons.simpleIcons).map((icon) =>
            renderSimpleIcon({
                icon,
                size: 42,
                aProps: {
                    onClick: (e) => e.preventDefault(),
                },
            })
        );
    }

    return <a>Loading...</a>;
};

const slugs = [
    "javascript",
    "typescript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const IconCloud = () => {
    const icons = useIcons(slugs);

    return (
        <div className="flex items-center justify-center p-4">
            <Cloud
                options={{
                    clickToFront: 500,
                    depth: 1,
                    imageScale: 2,
                    initial: [0.1, -0.1],
                    outlineColour: "#0000",
                    reverse: true,
                    tooltip: "native",
                    tooltipDelay: 0,
                    wheelZoom: false,
                }}
            >
                {icons}
            </Cloud>
        </div>
    );
};

export default IconCloud;
