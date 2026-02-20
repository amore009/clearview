"use client";

import React from "react";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  href: string;
  bgColor: string;
  hoverColor: string;
  textColor?: string;
  textColorChange?: boolean;
  hoverTextColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  href,
  bgColor,
  hoverColor,
  textColor = "#ffffff",
  textColorChange = false,
  hoverTextColor = "#ffffff",
}) => {
  return (
    <Link href={href} className="btn-wrapper">
      <span
        className={`btn ${textColorChange ? "text-change" : ""}`}
        style={
          {
            background: bgColor,
            border: `1px solid ${bgColor}`,
            color: textColor,
            "--hover-text-color": hoverTextColor,
          } as React.CSSProperties
        }
      >
        <span className="btn-text whitespace-nowrap text-sm">{text}</span>

        <span
          className="hover-bkg"
          style={{ background: hoverColor }}
        />
      </span>
    </Link>
  );
};

export default AnimatedButton;
