import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface EditIconProps {
  icon: IconType;
  size?: string;
  color?: string;
}

export default function EditIcon({ icon, color, size }: EditIconProps) {
  return <Icon color={color} fontSize={size} as={icon} />;
}
