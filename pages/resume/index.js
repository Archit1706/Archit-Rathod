import React, { useEffect, useRef } from "react";

const ResumePage = () => {
    const downloaded = useRef(false);

    useEffect(() => {
        document.title = "Archit Rathod | Resume";

        if (!downloaded.current) {
            downloaded.current = true;

            const fileName = "Archit_Rathod.pdf";
            const fileUrl = "/resume/Archit_Rathod.pdf";

            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, []);


    return (
        <div className="resume-container" style={{ paddingTop: "110px", paddingInline: "1rem" }}>
            <h1 className="py-2 text-gray-700 dark:text-gray-200 text-center font-ubuntu">
                <span className="text-transparent text-center bg-clip-text bg-gradient-to-l from-violet-700 to-pink-600 transition-colors duration-300">
                    My Resume
                </span>{" "}
            </h1>
            <iframe
                src="/resume/Archit_Rathod.pdf"
                title="Resume"
                width="100%"
                height="1000px"
                style={{
                    border: "none",
                    maxWidth: "100%",
                    marginTop: "1rem",
                }}
            />
        </div>
    );
};

export default ResumePage;
