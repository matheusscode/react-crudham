import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FilterIconProps {
  icon: IconType;
  size?: string;
  color?: string;
}

export default function FilterIcon({ icon, color, size }: FilterIconProps) {
  return <Icon color={color} fontSize={size} as={icon} />;
}
