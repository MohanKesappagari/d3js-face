export default function FaceContainer({
  width,
  height,
  centerX,
  centerY,
  children,
}) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  );
}
