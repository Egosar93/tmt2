import autoAnimate from '@formkit/auto-animate';
import { Component, For, JSXElement, onMount } from 'solid-js';

export const ScrollArea: Component<{
	children: JSXElement[];
	scroll?: boolean;
}> = (props) => {
	let ref: HTMLDivElement;
	onMount(() => {
		if (ref) {
			autoAnimate(ref);
		}
	});
	return (
		<div class="h-80 overflow-scroll text-left bg-gray-50" ref={ref!}>
			<For each={props.children}>
				{(line) => (
					<Line scroll={props.scroll} containerRef={ref}>
						{line}
					</Line>
				)}
			</For>
		</div>
	);
};

const Line: Component<{
	children: JSXElement;
	scroll?: boolean;
	containerRef?: HTMLDivElement;
}> = (props) => {
	onMount(() => {
		if (props.containerRef) {
			props.containerRef.scrollTop = props.containerRef.scrollHeight;
		}
	});
	return <div>{props.children}</div>;
};
