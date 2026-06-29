export type theme_mode = 'light' | 'dark';

function get_initial_mode(): theme_mode {
	if (typeof window === 'undefined') return 'light';
	const stored = localStorage.getItem('color-theme');
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let mode = $state<theme_mode>(get_initial_mode());

export function use_theme() {
	function initialize(): void {
		if (typeof window === 'undefined') return;
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}

	function toggle(): void {
		if (typeof window === 'undefined') return;
		const stored = localStorage.getItem('color-theme');
		if (stored) {
			if (stored === 'light') {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('color-theme', 'dark');
				mode = 'dark';
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
				localStorage.setItem('color-theme', 'light');
				mode = 'light';
			}
		} else {
			if (document.documentElement.getAttribute('data-theme') === 'dark') {
				document.documentElement.setAttribute('data-theme', 'light');
				localStorage.setItem('color-theme', 'light');
				mode = 'light';
			} else {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('color-theme', 'dark');
				mode = 'dark';
			}
		}
	}

	return {
		get mode() { return mode; },
		initialize,
		toggle,
	};
}
