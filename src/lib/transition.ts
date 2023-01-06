
export const fadeOut = (container:HTMLElement,{ duration =400, delay=0 }: { duration: number, delay: number }) => {
	const o = +getComputedStyle(container).opacity;
	return {
		delay: delay ?? 0,
		duration: duration ?? 400,
		easing: (t: number) => t,
		css: (t: number) => `opacity: ${t * o};
                                transform: translateY(${
																	(100 - t * 100) * -1
																}px);
                                position:fixed;
                                `
	};
};

export const fadeIn = (container: HTMLElement, { duration, delay }: { duration: number, delay: number }) => {

	return {
		delay: delay,
		duration: duration,
		easing: (t: number) => t,
		css: (t: number) => `opacity:${(t)};
							transform:translateY(${(50-(t*50))}px);`

	}
}
