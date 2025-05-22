// https://popper.js.org/docs/v2/tutorial/
import React from "react";
import { ReactNode, useRef } from "@/utils/alias";
import Tippy from "@tippyjs/react";
import "./tippy.scss";

// نوع الخصائص التي يمكن تمريرها للمكون
export type TTooltip = {
  content?: string; // نص التلميح
  children?: ReactNode; // العنصر الذي سيتم إرفاق التلميح به
  className?: string; // كلاس مخصص للتلميح
  placement?: "top" | "bottom" | "left" | "right"; // موضع التلميح
  on?: "mouseenter" | "focus" | "click" | "manual"; // طريقة تشغيل التلميح
  maxWidth?: string; // الحد الأقصى لعرض التلميح
  arrow?: boolean; // هل يظهر السهم
  animation?: "fade" | "scale"; // نوع الأنميشن
  targetSelector?: string; // لاختيار عنصر معين داخل children لربط التلميح به
  type?: "success" | "error" | "warning" | "info"; // نوع التلميح (لون/نمط)
  show?: boolean; // هل يتم عرض التلميح
};

// المكون الرئيسي
export const Ty: React.FC<TTooltip> = ({
  content,
  children,
  className,
  placement = "top",
  on = "mouseenter",
  maxWidth = "16rem",
  arrow = true,
  animation = "fade",
  targetSelector,
  type,
  show = true
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // للحصول على العنصر الهدف الذي سيتم إظهار التلميح عليه
  const getTargetElement = () => {
    if (wrapperRef.current && targetSelector) {
      const el = wrapperRef.current.querySelector(targetSelector);
      if (el instanceof HTMLElement) return el;
    }
    return wrapperRef.current;
  };

  // كلاس نوع التلميح (نجاح، خطأ... إلخ)
  const typeClass = type ? `tooltip-${type}` : "";

  // التأكد أن children عبارة عن عنصر React صالح
  const validChildren = React.isValidElement(children) ? children : <span>{children}</span>;

  // في حالة show = false لا يتم إظهار التلميح، فقط عرض العنصر كما هو
  if (!show) return <div ref={wrapperRef}>{validChildren}</div>;

  return (
    <div ref={wrapperRef}>
      <Tippy
        content={<span className={typeClass}>{content}</span>}
        placement={placement}
        animation={animation}
        arrow={arrow}
        maxWidth={maxWidth}
        trigger={on}
        getReferenceClientRect={() =>
          getTargetElement()?.getBoundingClientRect() || new DOMRect()
        }
        popperOptions={{
          modifiers: [
            { name: "preventOverflow", options: { boundary: "window" } },
            {
              name: "flip",
              options: { fallbackPlacements: ["top", "bottom", "left", "right"] },
            },
          ],
        }}
        className={`${typeClass}${className ? ` ${className}` : ""}`}
      >
        {validChildren}
      </Tippy>
    </div>
  );
};

export default Ty;
