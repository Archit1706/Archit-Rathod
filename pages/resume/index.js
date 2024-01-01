import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        document.title = "Archit Rathod | Resume";
        const handleDownload = () => {
            const fileName = "Archit_Rathod.pdf";
            const fileUrl = "/resume/Archit_Rathod.pdf";

            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.location.href = "/";
        };
        handleDownload();
    }, []);
    return <div className="App">App</div>;
};

export default App;
