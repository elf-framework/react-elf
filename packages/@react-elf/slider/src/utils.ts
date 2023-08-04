import { makeCssVariablePrefixMap } from "@react-elf/shared";

export interface SliderHandle {
  getValue(): number;
  setValue(value: number): void;
}

export const cssProperties = makeCssVariablePrefixMap("--elf--slider", {
  backgroundColor: true,
  backgroundImage: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true,
});

export function initValue(v) {
  return v;
}

export function calculateRoundValue(
  min: number,
  max: number,
  step: number,
  value: number
) {
  if (value === 0) return value;

  if (max < value) return max;
  if (min > value) return min;

  if (step % 1 !== 0) {
    // unit 계산
    const total = max - min;
    const count = total / step;

    const realValueCount = Math.floor(count * ((value - min) / total));

    const precison = 1 / step;
    const result = Math.round(realValueCount * step * precison);
    const minResult = min * precison;

    return (result + minResult) / precison;
  }

  return value - (value % step);
}

export function calculateValue({
  min = 0,
  max = 100,
  step,
  left,
  width,
  currentX,
}) {
  const localX = Math.min(Math.max(currentX, left), left + width);
  const currentValue = calculateRoundValue(
    min,
    max,
    step,
    ((localX - left) / width) * (max - min) + min
  );
  const value = Math.max(min, Math.min(max, currentValue));

  return value;
}
