export const theme = {
  color: {
    green: "#03FFA5;",
    white: "#ffffff",
    black: "#000000",
    pink: "#EE0E7D",
    gray: "#F2F2F2",
    darker_gray: "#F2F2F2",
  },
  font: {
    primary: "Barlow,sans-serif"
  }
};

export function rem(size: number) {
  return `${size / 16}rem`;
}

export function flexCenter(justifyContent:string, alignItems:string) {
  return `
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}

export function containerCenter(size:number) {
  return `
  max-width: ${size}px;
	margin: 0 auto;

	@media screen and(max-width: 1366px) {
		margin: 0 5%;
	}
  `;
}
