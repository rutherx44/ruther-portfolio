import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import resume from "../assets/ruther-dio-resume.pdf";
import { Button } from "./Button";

const ResumeLimit = () => {
  const MAX_DOWNLOADS = 1;
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("resumeDownloadCount");
    if (storedCount) {
      setDownloadCount(Number(storedCount));
    }
  }, []);

  const handleDownload = (e) => {
    if (downloadCount >= 1) {
      e.preventDefault();
      toast.error("You’ve already downloaded the resume!", {
        id: "Limit",
      });
      return;
    }

    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem("resumeDownloadCount", newCount);
    toast.success("Resume Downloaded!");
  };

  return (
    <a href={resume} download onClick={handleDownload}>
      <Button disabled={downloadCount >= 1}>
        {downloadCount >= MAX_DOWNLOADS ? "Limit Reached" : "Download Resume"}
      </Button>
    </a>
  );
};

export default ResumeLimit;
