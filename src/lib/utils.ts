import { clsx, type ClassValue } from "clsx";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageData(event: ChangeEvent<HTMLInputElement>) {
  //   Array.from(event.target.files!).forEach((image) => {
  //     dataTransfer.items.add(image);
  //   });

  const file = event.target.files![0];
  const display = URL.createObjectURL(file);

  return { file, displayUrl: display };
}

export function convertIDR(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}
