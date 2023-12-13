import React, { useEffect, useState } from "react";

type PreviewEvidenceCardProps = {
  files: File[];
};

const PreviewEvidenceCard = ({ files }: PreviewEvidenceCardProps) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    const promises = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            resolve(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((previews) => {
        setImagePreviews(previews);
      })
      .catch((error) => {
        console.error("Error reading file previews:", error);
      });
  }, [files]);

  return (
    <>
      <label>Preview Files:</label>
      <div className="my-1 min-h-[300px] w-full rounded-md border-2 border-gray-400 px-2 py-2 text-base text-gray-600">
        {imagePreviews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            className="mx-auto mb-2 max-h-[100px]"
          />
        ))}
      </div>
    </>
  );
};

export default PreviewEvidenceCard;
