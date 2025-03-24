// https://popper.js.org/docs/v2/tutorial/
import React, { ReactNode, useRef } from "react";
import Tippy from "@tippyjs/react";
import "./tippy.css";

export type TTooltip = {
  content?: string;
  children?: ReactNode;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  on?: "mouseenter" | "focus" | "click" | "manual";
  maxWidth?: string;
  arrow?: boolean;
  animation?: "fade" | "scale";
  targetSelector?: string; // تحديد عنصر معين داخل الأب لعرض التلميح عليه
  type?: "success" | "error" | "warning" | "info"; // إضافة تأثيرات الحالة
  show?: boolean;
};

export const Ty: React.FC<TTooltip> = ({
  content,
  children,
  className,
  placement = "top",
  on = "mouseenter",
  maxWidth = "250px",
  arrow = true,
  animation = "fade",
  targetSelector,
  type,
  show = false
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getTargetElement = () => {
    if (wrapperRef.current && targetSelector) {
      return wrapperRef.current.querySelector(targetSelector) as HTMLElement;
    }
    return wrapperRef.current;
  };

  // تحديد كلاس بناءً على الحالة
  const typeClass = type ? `tooltip-${type}` : "";

  // التأكد من أن children هو عنصر React صالح
  const validChildren = React.isValidElement(children) ? children : <span>{children}</span>;

  if (!show) return validChildren;
  return (
    <div ref={wrapperRef}>
      <Tippy
        content={<span className={typeClass}>{content}</span>}
        placement={placement}
        animation={animation}
        arrow={arrow}
        maxWidth={maxWidth}
        trigger={on}
        getReferenceClientRect={() => getTargetElement()?.getBoundingClientRect() || new DOMRect()}
        popperOptions={{
          modifiers: [
            { name: "preventOverflow", options: { boundary: "window" } },
            { name: "flip", options: { fallbackPlacements: ["top", "bottom", "left", "right"] } },
          ],
        }}
        className={typeClass + (className ? ` ${className}` : '')}
        // {...(className ? { className } : {})} // إصلاح تمرير className
      >
        {validChildren}
      </Tippy>
    </div>
  );
};

export default Ty;