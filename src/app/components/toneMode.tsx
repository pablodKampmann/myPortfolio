import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
interface ToneOptionsProps {
    tone: string;
    handleToneChange: (tone: string) => void;
}

export default function ToneMode({ tone, handleToneChange }: ToneOptionsProps) {
    return (
        <div className="absolute bottom-4 bg-emerald-600 hover:bg-emerald-500 transition duration-150 cursor-pointer p-2 rounded-full left-4">
            {tone === 'dark' ? (
                <MdDarkMode onClick={() => handleToneChange('light')} size={30} className="text-black" />
            ) : (
                <MdOutlineDarkMode onClick={() => handleToneChange('dark')} size={30} className="text-white" />
            )}
        </div>
    );
}