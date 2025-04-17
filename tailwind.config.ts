
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(340, 50%, 85%)',
				input: 'hsl(340, 50%, 85%)',
				ring: 'hsl(340, 60%, 70%)',
				background: 'hsl(0, 0%, 100%)',
				foreground: 'hsl(340, 20%, 20%)',
				primary: {
				  DEFAULT: 'hsl(330, 85%, 65%)',
				  foreground: 'hsl(0, 0%, 100%)',
				},
				secondary: {
				  DEFAULT: 'hsl(320, 60%, 72%)',
				  foreground: 'hsl(0, 0%, 100%)',
				},
				destructive: {
				  DEFAULT: 'hsl(0, 85%, 65%)',
				  foreground: 'hsl(0, 0%, 100%)',
				},
				muted: {
				  DEFAULT: 'hsl(340, 30%, 90%)',
				  foreground: 'hsl(340, 20%, 40%)',
				},
				accent: {
				  DEFAULT: 'hsl(340, 75%, 80%)',
				  foreground: 'hsl(0, 0%, 20%)',
				},
				popover: {
				  DEFAULT: 'hsl(340, 40%, 98%)',
				  foreground: 'hsl(340, 20%, 20%)',
				},
				card: {
				  DEFAULT: 'hsl(0, 0%, 100%)',
				  foreground: 'hsl(340, 20%, 20%)',
				},
				sidebar: {
				  DEFAULT: 'hsl(340, 60%, 96%)',
				  foreground: 'hsl(340, 20%, 20%)',
				  primary: 'hsl(330, 80%, 60%)',
				  'primary-foreground': 'hsl(0, 0%, 100%)',
				  accent: 'hsl(340, 80%, 75%)',
				  'accent-foreground': 'hsl(0, 0%, 20%)',
				  border: 'hsl(340, 50%, 85%)',
				  ring: 'hsl(340, 65%, 70%)',
				},
			  },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
