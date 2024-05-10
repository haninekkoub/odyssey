interface Props {
  backgroundColor: string;
  secondaryColor: string;
  direction: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export default function Corner({
  backgroundColor,
  secondaryColor,
  direction,
}: Props) {
  return (
    <div
      className={`w-[10.5vw] h-[10.5vw] ${backgroundColor} flex absolute`}
      style={{
        display: "flex",
        flexDirection: direction.includes("Right") ? "row-reverse" : "row",
        alignItems: direction.includes("top") ? "flex-start" : "flex-end",
        right: direction.includes("Right") ? "0" : "calc(100% - 10.5vw)",
        top: direction.includes("top") ? "0" : "calc(100% - 10.5vw)",
      }}
    >
      <div className={`w-[3.5vw] h-full ${secondaryColor}  `}></div>
      <div className={`w-[3.5vw] h-2/3 ${secondaryColor} `}></div>
      <div className={`w-[3.5vw] h-1/3 ${secondaryColor} `}></div>
    </div>
  );
}
