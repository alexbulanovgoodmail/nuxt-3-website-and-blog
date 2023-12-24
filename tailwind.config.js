module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			colors: {
				red: {
					50: '#FFF5F5',
					100: '#FFEBEB',
					200: '#FFD6D6',
					300: '#FFB8B8',
					400: '#FF8E8E',
					500: '#FF6464',
					600: '#FF4F4F',
					700: '#FF3B3B',
					800: '#FF2626',
					900: '#FF0D0D',
					950: '#9C0606'
				}
			},
			fontFamily: {
				serif: ['serif'],
				sans: [
					'Roboto',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			},
			fontSize: {},
			spacing: {
				px: '1px',
				0: '0',
				1: '0.25rem', // 4px
				2: '0.5rem', // 8px
				3: '0.75rem', // 12px
				4: '1rem', // 16px
				5: '1.25rem', // 20px
				6: '1.5rem', // 24px
				7: '1.75rem', // 28px
				8: '2rem', // 32px
				9: '2.25rem', // 36px
				10: '2.5rem', // 40px
				11: '2.75rem', // 44px
				12: '3rem', // 48px
				13: '3.25rem', // 52px
				14: '3.5rem', // 56px
				15: '3.75rem', // 60px
				16: '4rem', // 64px
				17: '4.25rem', // 68px
				18: '4.5rem', // 72px
				19: '4.75rem', // 76px
				20: '5rem', // 80px
				21: '5.25rem', // 84px
				22: '5.5rem', // 88px
				23: '5.75rem', // 92px
				24: '6rem', // 96px
				25: '6.25rem', // 100px
				26: '6.5rem', // 104px
				27: '6.75rem', // 108px
				28: '7rem', // 112px
				29: '7.25rem', // 116px
				30: '7.5rem', // 120px
				31: '7.75rem', // 124px
				32: '8rem', // 128px
				33: '8.25rem', // 132px
				34: '8.5rem', // 136px
				35: '8.75rem', // 140px
				36: '9rem', // 144px
				37: '9.25rem', // 148px
				38: '9.5rem', // 152px
				39: '9.75rem', // 156px
				40: '10rem', // 160px
				41: '10.25rem', // 164px
				42: '10.5rem', // 168px
				43: '10.75rem', // 172px
				44: '11rem', // 176px
				45: '11.25rem', // 180px
				46: '11.5rem', // 184px
				47: '11.75rem', // 188px
				48: '12rem', // 192px
				49: '12.25rem', // 196px
				50: '12.5rem', // 200px
				51: '12.75rem', // 204px
				52: '13rem', // 208px
				53: '13.25rem', // 212px
				54: '13.5rem', // 216px
				55: '13.75rem', // 220px
				56: '14rem', // 224px
				57: '14.25rem', // 228px
				58: '14.5rem', // 232px
				59: '14.75rem', // 236px
				60: '15rem', // 240px
				61: '15.25rem', // 244px
				62: '15.5rem', // 248px
				63: '15.75rem', // 252px
				64: '16rem', // 256px
				65: '16.25rem', // 260px
				66: '16.5rem', // 264px
				67: '16.75rem', // 268px
				68: '17rem', // 272px
				69: '17.25rem', // 276px
				70: '17.5rem', // 280px
				71: '17.75rem', // 284px
				72: '18rem', // 288px
				73: '18.25rem', // 292px
				74: '18.5rem', // 296px
				75: '18.75rem', // 300px
				76: '19rem', // 304px
				77: '19.25rem', // 308px
				78: '19.5rem', // 312px
				79: '19.75rem', // 316px
				80: '20rem', // 320px
				81: '20.25rem', // 324px
				82: '20.5rem', // 328px
				83: '20.75rem', // 332px
				84: '21rem', // 336px
				85: '21.25rem', // 340px
				86: '21.5rem', // 344px
				87: '21.75rem', // 348px
				88: '22rem', // 352px
				89: '22.25rem', // 356px
				90: '22.5rem', // 360px
				91: '22.75rem', // 364px
				92: '23rem', // 368px
				93: '23.25rem', // 372px
				94: '23.5rem', // 376px
				95: '23.75rem', // 380px
				96: '24rem', // 384px
				97: '24.25rem', // 388px
				98: '24.5rem', // 392px
				99: '24.75rem', // 396px
				100: '25rem', // 400px
				120: '30rem', // 480px
				125: '31.25rem', // 500px
				130: '32.5rem', // 520px
				135: '33.75rem', // 540px
				136: '34rem', // 544px
				138: '34.5rem', // 552px
				150: '37.5rem', // 600px
				176: '44rem', // 704px
				192: '48rem', // 768px
				360: '90rem', // 1440px
				480: '120rem' // 1920px
			},
			boxShadow: {},
			screens: {
				xs: '576px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1920px'
			},
			container: {
				// center: true,
				// padding: { DEFAULT: '1rem' }
			},
			zIndex: {
				5: '5',
				10: '10',
				20: '20',
				30: '30',
				40: '40',
				50: '50',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100'
			},
			borderWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px'
			}
		}
	}
}
