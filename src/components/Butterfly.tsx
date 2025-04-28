import React from "react";

interface ButterflyProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Butterfly: React.FC<ButterflyProps> = ({ 
  className = "", 
  size = "md", 
  color = "#9b87f5" 
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  return (
    <div className={`relative inline-block ${sizeMap[size]} animate-butterfly-float ${className}`}>
      <div 
        className="butterfly-wing absolute left-0 top-0 origin-center transform rotate-0"
        style={{ 
          backgroundColor: color,
          width: "50%", 
          height: "100%" 
        }}
      />
      <div 
        className="butterfly-wing absolute right-0 top-0 origin-center transform scale-x-[-1]"
        style={{ 
          backgroundColor: color,
          width: "50%", 
          height: "100%" 
        }}
      />
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10%] h-[60%] rounded-full"
        style={{ backgroundColor: "#333" }}
      />
    </div>
  );
};

export default Butterfly;
