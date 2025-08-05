import { FaUpload, FaLeaf, FaInfoCircle } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 flex flex-col items-center text-center">
    <div className="bg-lime-400 rounded-full p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function FeatureCards() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaUpload className="text-gray-800 text-2xl" />}
          title="Upload Image"
          description="Take a photo or upload an existing image of a plant you want to identify."
        />
        <FeatureCard
          icon={<FaLeaf className="text-gray-800 text-2xl" />}
          title="AI Analysis"
          description="Our advanced AI analyzes the image to identify the plant species."
        />
        <FeatureCard
          icon={<FaInfoCircle className="text-gray-800 text-2xl" />}
          title="Get Information"
          description="Receive detailed information about the plant, including its name, scientific name, and characteristics."
        />
      </div>
    </div>
  );
}