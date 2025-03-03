import React, { type FC } from "react";
import type { IconType } from "react-icons";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as BsIcons from "react-icons/bs";
// import * as FiIcons from "react-icons/fi";
// import * as Io5Icons from "react-icons/io5";
// import * as RiIcons from "react-icons/ri";
// import * as TbIcons from "react-icons/tb";
// import * as TfiIcons from "react-icons/tfi";

type IconMap = Record<string, IconType>;

interface IDynamicIcon extends React.SVGProps<SVGSVGElement> {
  icon: string;
  className?: string;
}

const iconLibraries: { [key: string]: IconMap } = {
  fa: FaIcons,
  fa6: Fa6Icons,
};

const DynamicIcon: FC<IDynamicIcon> = ({ icon, ...props }) => {
  // First try to find the icon in the specified library
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (Icon) {
    return <Icon {...props} />;
  }

  // If not found, try to find it in any library
  for (const libraryKey in iconLibraries) {
    if (iconLibraries[libraryKey][icon]) {
      return iconLibraries[libraryKey][icon]({ ...props });
    }
  }

  // If still not found, return the not found message
  return <span className="text-sm">Icon not found</span>;
};

const getIconLibrary = (icon: string): IconMap | undefined => {
  // Check if the icon name starts with a library prefix (e.g., "Fa" or "Fa6")
  if (icon.startsWith("Fa6")) {
    return iconLibraries.fa6;
  } else if (icon.startsWith("Fa")) {
    return iconLibraries.fa;
  }

  // Default to fa library for backward compatibility
  return iconLibraries.fa;
};

export default DynamicIcon;
