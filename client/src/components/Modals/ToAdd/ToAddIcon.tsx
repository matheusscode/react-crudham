import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ToAddIconProps {
  icon: IconType;
  size?: string;
  color?: string;
}

export default function ToAddIcon({ icon, color, size }: ToAddIconProps) {
  return <Icon color={color} fontSize={size} as={icon} />;
}
