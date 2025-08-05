"use client";

import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PlantInfo from "./components/PlantInfo";
import FeatureCards from "./components/FeatureCards";

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-start p-8">
      <h1 className="text-5xl font-bold text-white mb-4">Plant Cure</h1>
      <p className="text-xl text-white mb-8 text-center max-w-2xl">
        Discover the wonders of nature! Upload an image or take a photo of a
        plant, and let our AI identify it for you.
      </p>
      <ImageUpload
        setPlantInfo={setPlantInfo}
        setUploadedImage={setUploadedImage}
      />

      {!uploadedImage && <FeatureCards />}

      {uploadedImage && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
          <img
            src={uploadedImage}
            alt="Uploaded or captured plant"
            className="max-w-md mx-auto rounded-lg"
          />
        </div>
      )}
      {plantInfo && <PlantInfo plantInfo={plantInfo} />}
    </div>
  );
}
