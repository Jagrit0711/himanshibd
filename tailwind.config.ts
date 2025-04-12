
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				himanshi: {
					black: '#000000',
					pink: '#D946EF',
					blue: '#33C3F0',
					yellow: '#FEC6A1',
				},
			},
			fontFamily: {
				'vt323': ['"VT323"', 'monospace'],
				'press-start': ['"Press Start 2P"', 'cursive'],
				'pixelify': ['"Pixelify Sans"', 'sans-serif'],
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
				'glitch': {
					'0%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-5px, 5px)'
					},
					'40%': {
						transform: 'translate(-5px, -5px)'
					},
					'60%': {
						transform: 'translate(5px, 5px)'
					},
					'80%': {
						transform: 'translate(5px, -5px)'
					},
					'100%': {
						transform: 'translate(0)'
					}
				},
				'flicker': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.2'
					}
				},
				'blink': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					}
				},
				'flip': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateY(180deg)'
					}
				},
				'flip-back': {
					'0%': {
						transform: 'rotateY(180deg)'
					},
					'100%': {
						transform: 'rotateY(0deg)'
					}
				},
				'bounce-mild': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shake': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'10%, 30%, 50%, 70%, 90%': {
						transform: 'translateX(-5px)'
					},
					'20%, 40%, 60%, 80%': {
						transform: 'translateX(5px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'rotate-center': {
					'0%': {
						transform: 'rotate(0)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'confetti': {
					'0%': {
						transform: 'translateY(0) rotate(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(720deg)',
						opacity: '0'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'flicker': 'flicker 0.5s ease-in-out infinite',
				'blink': 'blink 1s step-start infinite',
				'flip': 'flip 0.6s ease-in-out forwards',
				'flip-back': 'flip-back 0.6s ease-in-out forwards',
				'bounce-mild': 'bounce-mild 2s ease-in-out infinite',
				'shake': 'shake 0.5s ease-in-out',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'rotate-center': 'rotate-center 8s linear infinite',
				'confetti': 'confetti 3s ease-in-out forwards',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
