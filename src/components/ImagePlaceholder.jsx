import React from 'react'

const ImagePlaceholder = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  className = "aspect-video", 
  gradient = "from-primary-500 to-secondary-500",
  iconSize = "w-16 h-16"
}) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl shadow-lg flex items-center justify-center ${className}`}>
      <div className="text-center text-white p-6">
        {Icon && <Icon className={`${iconSize} mx-auto mb-4`} />}
        {title && <p className="text-lg font-semibold mb-2">{title}</p>}
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
      </div>
    </div>
  )
}

export default ImagePlaceholder