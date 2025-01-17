const currencies = [
  {
		name: "Emirati Dirham",
		iso: {
			code: "AED",
			number: "784"
		},
		units: {
			major: {
				name: "dirham",
				symbol: ".د.ب"
			},
			minor: {
				name: "fils",
				symbol: "فلس",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5.د.ب",
				"10.د.ب",
				"20.د.ب",
				"50.د.ب",
				"100.د.ب",
				"200.د.ب",
				"500.د.ب"
			],
			rare: [
				"1000.د.ب"
			]
		},
		coins: {
			frequent: [
				"50فلس",
				"1.د.ب"
			],
			rare: [
				"25فلس"
			]
		}
	},
	{
		name: "Afghan Afghani",
		iso: {
			code: "AFN",
			number: "004"
		},
		units: {
			major: {
				name: "afghani",
				symbol: "؋"
			},
			minor: {
				name: "Pul",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1؋",
				"2؋",
				"5؋",
				"10؋",
				"20؋",
				"50؋",
				"100؋",
				"500؋",
				"1000؋"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1؋",
				"2؋",
				"5؋"
			],
			rare: []
		}
	},
	{
		name: "Albanian lek",
		iso: {
			code: "ALL",
			number: "008"
		},
		units: {
			major: {
				name: "lek",
				symbol: "lek"
			},
			minor: {
				name: "Qindarkë",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Lek200",
				"Lek500",
				"Lek1000",
				"Lek2000",
				"Lek5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Lek1",
				"Lek5",
				"Lek10",
				"Lek20",
				"Lek50",
				"Lek100"
			],
			rare: []
		}
	},
	{
		name: "Armenian dram",
		iso: {
			code: "AMD",
			number: "051"
		},
		units: {
			major: {
				name: "dram",
				symbol: ""
			},
			minor: {
				name: "luma",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"500",
				"1000",
				"5000",
				"10000",
				"20000",
				"50000",
				"100000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10",
				"20",
				"50",
				"100",
				"200",
				"500"
			],
			rare: []
		}
	},
	{
		name: "Dutch Guilder",
		iso: {
			code: "ANG",
			number: "532"
		},
		units: {
			major: {
				name: "guilder",
				symbol: "ƒ"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"ƒ10",
				"ƒ25",
				"ƒ50",
				"ƒ100"
			],
			rare: [
				"ƒ5",
				"ƒ250"
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"ƒ1",
				"ƒ2½",
				"ƒ5"
			],
			rare: []
		}
	},
	{
		name: "Angolan Kwanza",
		iso: {
			code: "AOA",
			number: "982"
		},
		units: {
			major: {
				name: "Kwanza",
				symbol: "Kz"
			},
			minor: {
				name: "cêntimos",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Kz10",
				"Kz50",
				"Kz100",
				"Kz200",
				"Kz500",
				"Kz1000",
				"Kz2000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Kz1",
				"Kz2",
				"Kz5",
				"10",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Argentine peso",
		iso: {
			code: "ARS",
			number: "032"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5¢",
				"10¢",
				"25¢",
				"50¢",
				"$1",
				"$2"
			],
			rare: []
		}
	},
	{
		name: "Australian Dollar",
		iso: {
			code: "AUD",
			number: "036"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5$",
				"10$",
				"20$",
				"50$",
				"100$"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1$",
				"2$",
				"5c",
				"10c",
				"20c",
				"50c"
			],
			rare: []
		}
	},
	{
		name: "Arubin florin",
		iso: {
			code: "AWG",
			number: "533"
		},
		units: {
			major: {
				name: "florin",
				symbol: "ƒ"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"ƒl0",
				"ƒ25",
				"ƒ50",
				"ƒ100",
				"ƒ500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"25",
				"50",
				"ƒ1",
				"ƒ2½",
				"ƒ5"
			],
			rare: []
		}
	},
	{
		name: "Azerbaijani manat",
		iso: {
			code: "AZN",
			number: "944"
		},
		units: {
			major: {
				name: "manat",
				symbol: "ман"
			},
			minor: {
				name: "Qepik",
				symbol: "qr",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"ман1",
				"ман5",
				"ман10",
				"ман20",
				"ман50",
				"ман100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"qr1",
				"qr3",
				"qr5",
				"qr10",
				"qr20",
				"qr50"
			],
			rare: []
		}
	},
	{
		name: "Bosnian Convertible Marka",
		iso: {
			code: "BAM",
			number: "977"
		},
		units: {
			major: {
				name: "convertible marks",
				symbol: "KM"
			},
			minor: {
				name: "fening",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"KM10",
				"KM20",
				"KM50",
				"KM100",
				"KM200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"KM1",
				"KM2",
				"KM5"
			],
			rare: []
		}
	},
  {
		name: "Barbadian dollar",
		iso: {
			code: "BBD",
			number: "052"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25"
			],
			rare: []
		}
	},
	{
		name: "Bangladeshi Taka",
		iso: {
			code: "BDT",
			number: "050"
		},
		units: {
			major: {
				name: "Taka",
				symbol: "Tk"
			},
			minor: {
				name: "Poisha",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Tk2",
				"Tk5",
				"Tk10",
				"Tk20",
				"Tk50",
				"Tk100",
				"Tk500",
				"Tk1000"
			],
			rare: [
				"Tk1"
			]
		},
		coins: {
			frequent: [
				"Tk1",
				"Tk2",
				"Tk5"
			],
			rare: [
				"1",
				"5",
				"10",
				"25",
				"50"
			]
		}
	},
	{
		name: "Bulgarian lev",
		iso: {
			code: "BGN",
			number: "975"
		},
		units: {
			major: {
				name: "lev",
				symbol: "лв"
			},
			minor: {
				name: "stotinki",
				symbol: "стотинки",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"лв2",
				"лв5",
				"лв10",
				"лв20",
				"лв50",
				"лв100"
			],
			rare: [
				"лв1"
			]
		},
		coins: {
			frequent: [
				"стотинки1",
				"стотинки2",
				"стотинки5",
				"стотинки10",
				"стотинки20",
				"стотинки50"
			],
			rare: []
		}
	},
	{
		name: "Bahraini Dinar",
		iso: {
			code: "BHD",
			number: "048"
		},
		units: {
			major: {
				name: "dinar",
				symbol: ".د.ب or BD"
			},
			minor: {
				name: "fils",
				symbol: "",
				majorValue: 0.001
			}
		},
		banknotes: {
			frequent: [
				"1.د.ب",
				"5.د.ب",
				"10.د.ب",
				"50.د.ب",
				"100.د.ب",
				"500.د.ب"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"25",
				"50",
				"100",
				"500"
			],
			rare: []
		}
	},
	{
		name: "Burundian Franc",
		iso: {
			code: "BIF",
			number: "108"
		},
		units: {
			major: {
				name: "franc",
				symbol: ""
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"10",
				"20",
				"50",
				"100",
				"500",
				"1000",
				"2000",
				"5000",
				"10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5"
			],
			rare: []
		}
	},
	{
		name: "Bermudian dollar",
		iso: {
			code: "BMD",
			number: "060"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1¢",
				"5¢",
				"10¢",
				"25¢",
				"$1"
			],
			rare: [
				"50¢",
				"$5"
			]
		}
	},
	{
		name: "Bruneian Dollar",
		iso: {
			code: "BND",
			number: "096"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$5",
				"$10"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"20",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Bolivian Boliviano",
		iso: {
			code: "BOB",
			number: "068"
		},
		units: {
			major: {
				name: "boliviano",
				symbol: "$b"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$b10",
				"$b20",
				"$b50",
				"$b100",
				"$b200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10",
				"20",
				"50",
				"$b1",
				"$b2",
				"$b5"
			],
			rare: []
		}
	},
	{
		name: "Brazilian real",
		iso: {
			code: "BRL",
			number: "986"
		},
		units: {
			major: {
				name: "real",
				symbol: "R$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"R$2",
				"R$5",
				"R$10",
				"R$20",
				"R$50",
				"R$100"
			],
			rare: [
				"R$1"
			]
		},
		coins: {
			frequent: [
				"5",
				"10",
				"25",
				"50",
				"R$1"
			],
			rare: [
				"1"
			]
		}
	},
	{
		name: "Bahamian dollar",
		iso: {
			code: "BSD",
			number: "044"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "B$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: [
				"$1/2",
				"$3"
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25"
			],
			rare: [
				"15",
				"50",
				"$1",
				"$2",
				"$5"
			]
		}
	},
	{
		name: "Bhutanese Ngultrum",
		iso: {
			code: "BTN",
			number: "064"
		},
		units: {
			major: {
				name: "Ngultrum",
				symbol: "Nu."
			},
			minor: {
				name: "Chhertum",
				symbol: "Ch.",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1",
				"5",
				"10",
				"20",
				"50",
				"100",
				"500",
				"1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"20",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Botswana Pula",
		iso: {
			code: "BWP",
			number: "072"
		},
		units: {
			major: {
				name: "Pula",
				symbol: "P"
			},
			minor: {
				name: "Thebe",
				symbol: "t",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"P10",
				"P20",
				"P50",
				"P100",
				"P200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"P1",
				"P2",
				"P5",
				"5t",
				"10t",
				"25t",
				"50t"
			],
			rare: []
		}
	},
	{
		name: "Belarusian ruble",
		iso: {
			code: "BYN",
			number: "933"
		},
		units: {
			major: {
				name: "ruble",
				symbol: "р"
			},
			minor: {
				name: "kapeyka",
				symbol: "к",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"100",
				"200",
				"500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"k1",
				"k2",
				"k5",
				"k10",
				"k20",
				"k50",
				"1",
				"2"
			],
			rare: []
		}
	},
	{
		name: "Belize dollar",
		iso: {
			code: "BZD",
			number: "084"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "BZ$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"BZ$2",
				"BZ$5",
				"BZ$10",
				"BZ$20",
				"BZ$50",
				"BZ$100"
			],
			rare: [
				""
			]
		},
		coins: {
			frequent: [
				"1 cents",
				"5 cents",
				"10 cents",
				"25 cents",
				"50 cents",
				"BZ$1",
				"BZ$2"
			],
			rare: []
		}
	},
	{
		name: "Canadian Dollar",
		iso: {
			code: "CAD",
			number: "124"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5$",
				"10$",
				"20$",
				"50$",
				"100$"
			],
			rare: [
				"1$",
				"2$",
				"500$",
				"1000$"
			]
		},
		coins: {
			frequent: [
				"1$",
				"2$",
				"5¢",
				"10¢",
				"25¢"
			],
			rare: [
				"1¢",
				"50¢"
			]
		}
	},
	{
		name: "Swiss Franc",
		iso: {
			code: "CHF",
			number: "756"
		},
		units: {
			major: {
				name: "franc",
				symbol: "CHF"
			},
			minor: {
				name: "rappen",
				symbol: "Rp.",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"CHF10",
				"CHF20",
				"CHF50",
				"CHF100",
				"CHF200",
				"CHF1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5Rp.",
				"10Rp.",
				"20Rp.",
				"50Rp.",
				"CHF1",
				"CHF2",
				"CHF5"
			],
			rare: []
		}
	},
	{
		name: "Chilean Peso",
		iso: {
			code: "CLP",
			number: "152"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1000",
				"$2000",
				"$5000",
				"$10000",
				"$20000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$50",
				"$100",
				"$500"
			],
			rare: []
		}
	},
	{
		name: "Yuan or chinese renminbi",
		iso: {
			code: "CNY",
			number: "156"
		},
		units: {
			major: {
				name: "yuan",
				symbol: "¥"
			},
			minor: {
				name: "fēn",
				symbol: "分",
				majorValue: 0.01
			},
			minor2: {
				name: "jiǎo",
				symbol: "角",
				majorValue: 0.1
			}
		},
		banknotes: {
			frequent: [
				"¥1",
				"¥5",
				"¥10",
				"¥20",
				"¥50",
				"¥100"
			],
			rare: [
				"分1",
				"分2",
				"分5",
				"角1",
				"角2",
				"角5",
				"¥2"
			]
		},
		coins: {
			frequent: [
				"分1",
				"分2",
				"分5",
				"角1",
				"角5",
				"¥1"
			],
			rare: []
		}
	},
	{
		name: "Colombian peso",
		iso: {
			code: "COP",
			number: "170"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1000",
				"$2000",
				"$5000",
				"$10000",
				"$20000",
				"$50000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$5",
				"$10",
				"$20",
				"$50",
				"$100",
				"$200",
				"$500",
				"$1000"
			],
			rare: []
		}
	},
	{
		name: "Costa Rican colón",
		iso: {
			code: "CRC",
			number: "188"
		},
		units: {
			major: {
				name: "colón",
				symbol: "₡"
			},
			minor: {
				name: "céntimo",
				symbol: "₡",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₡1000",
				"₡2000",
				"₡5000",
				"₡10000",
				"₡20000",
				"₡50000"
			],
			rare: [
				""
			]
		},
		coins: {
			frequent: [
				"₡1",
				"₡5",
				"₡10",
				"₡20",
				"₡50",
				"₡100",
				"₡500"
			],
			rare: []
		}
	},
	{
		name: "Cuban convertible peso",
		iso: {
			code: "CUC",
			number: "931"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$3",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1¢",
				"5¢",
				"10¢",
				"25¢",
				"50¢",
				"$1"
			],
			rare: [
				"$5"
			]
		}
	},
	{
		name: "Cuban peso",
		iso: {
			code: "CUP",
			number: "192"
		},
		units: {
			major: {
				name: "peso",
				symbol: "₱"
			},
			minor: {
				name: "centavo",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$3",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"¢1",
				"¢2",
				"¢5",
				"¢20",
				"$1",
				"$3"
			],
			rare: []
		}
	},
	{
		name: "Cape Verdean Escudo",
		iso: {
			code: "CVE",
			number: "132"
		},
		units: {
			major: {
				name: "escudo",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$200",
				"$500",
				"$1000",
				"$2000",
				"$2500",
				"$5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		}
	},
	{
		name: "Czech koruna",
		iso: {
			code: "CZK",
			number: "200"
		},
		units: {
			major: {
				name: "koruna",
				symbol: "Kč"
			},
			minor: {
				name: "haléř",
				symbol: "h",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"100Kč",
				"200Kč",
				"500Kč",
				"1000Kč",
				"2000Kč",
				"5000Kč"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1Kč",
				"2Kč",
				"5Kč",
				"10Kč",
				"50Kč"
			],
			rare: []
		}
	},
	{
		name: "Djiboutian Franc",
		iso: {
			code: "DJF",
			number: "262"
		},
		units: {
			major: {
				name: "franc",
				symbol: "fdj"
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1000fdj",
				"2000fdj",
				"5000fdj",
				"10000fdj"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1fdj",
				"2fdj",
				"5fdj",
				"10fdj",
				"20fdj",
				"50fdj",
				"100fdj",
				"250fdj",
				"500fdj"
			],
			rare: []
		}
	},
	{
		name: "Danish krone",
		iso: {
			code: "DKK",
			number: "208"
		},
		units: {
			major: {
				name: "kroner",
				symbol: "kr"
			},
			minor: {
				name: "kroner",
				symbol: "øre",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"kr50",
				"kr100",
				"kr200",
				"kr500",
				"kr1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"50øre",
				"kr1",
				"kr2",
				"kr5",
				"kr10",
				"kr20"
			],
			rare: []
		}
	},
	{
		name: "Dominican peso",
		iso: {
			code: "DOP",
			number: "214"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$20",
				"$50",
				"$100",
				"$200",
				"$500",
				"$1000",
				"$2000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$25"
			],
			rare: []
		}
	},
	{
		name: "Algerian Dinar",
		iso: {
			code: "DZD",
			number: "012"
		},
		units: {
			major: {
				name: "dinar",
				symbol: "جد"
			},
			minor: {
				name: "Santeem",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"200",
				"500",
				"1000"
			],
			rare: [
				"100",
				"2000"
			]
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50"
			],
			rare: [
				"1",
				"2",
				"100"
			]
		}
	},
	{
		name: "Egyptian Pound",
		iso: {
			code: "EGP",
			number: "818"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£ "
			},
			minor: {
				name: "piastre",
				symbol: "Pt",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Pt5",
				"Pt10",
				"Pt25",
				"Pt50",
				"£1",
				"£5",
				"£10",
				"£20",
				"£50",
				"£100",
				"£200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Pt1",
				"Pt5",
				"Pt10",
				"Pt20",
				"Pt25",
				"Pt50",
				"£1"
			],
			rare: []
		}
	},
	{
		name: "Eritrean nakfa",
		iso: {
			code: "ERN",
			number: "232"
		},
		units: {
			major: {
				name: "nafka",
				symbol: "ናቕፋ"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1ናቕፋ",
				"5ናቕፋ",
				"10ናቕፋ",
				"20ናቕፋ",
				"50ናቕፋ",
				"100ናቕፋ"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"1ናቕፋ"
			],
			rare: []
		}
	},
	{
		name: "Ethiopian Birr",
		iso: {
			code: "ETB",
			number: "230"
		},
		units: {
			major: {
				name: "Birr",
				symbol: "Br"
			},
			minor: {
				name: "santim",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Br1",
				"Br5",
				"Br10",
				"Br50",
				"Br100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"Br1"
			],
			rare: []
		}
	},
	{
		name: "Euro",
		iso: {
			code: "EUR",
			number: "978"
		},
		units: {
			major: {
				name: "euro",
				symbol: "€"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"€5",
				"€10",
				"€20",
				"€50",
				"€100"
			],
			rare: [
				"€200",
				"€500"
			]
		},
		coins: {
			frequent: [
				"€1",
				"€2",
				"5c",
				"10c",
				"20c",
				"50c"
			],
			rare: [
				"1c",
				"2c"
			]
		}
	},
	{
		name: "Fijian dollar",
		iso: {
			code: "FJD",
			number: "242"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5¢",
				"10¢",
				"20¢",
				"50¢",
				"$1",
				"$2"
			],
			rare: []
		}
	},
	{
		name: "Falkland Island Pound",
		iso: {
			code: "FKP",
			number: "238"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£"
			},
			minor: {
				name: "penny",
				symbol: "p",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"£5",
				"£10",
				"£20",
				"£50"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1p",
				"2p",
				"5p",
				"10p",
				"20p",
				"50p",
				"£1",
				"£2"
			],
			rare: []
		}
	},
	{
		name: "British Pound",
		iso: {
			code: "GBP",
			number: "826"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£"
			},
			minor: {
				name: "penny",
				symbol: "p",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"£5",
				"£10",
				"£20",
				"£50"
			],
			rare: [
				"£100"
			]
		},
		coins: {
			frequent: [
				"£1",
				"£2",
				"1p",
				"2p",
				"5p",
				"10p",
				"20p",
				"50p"
			],
			rare: []
		}
	},
	{
		name: "Georgian lari",
		iso: {
			code: "GEL",
			number: "981"
		},
		units: {
			major: {
				name: "lari",
				symbol: "ლ"
			},
			minor: {
				name: "tetri",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"ლ5",
				"ლ10",
				"ლ20",
				"ლ50"
			],
			rare: [
				"ლ1",
				"ლ2",
				"ლ100",
				"ლ200"
			]
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50",
				"ლ1",
				"ლ2"
			],
			rare: []
		}
	},
	{
		name: "Ghanaian Cedi",
		iso: {
			code: "GHS",
			number: "936"
		},
		units: {
			major: {
				name: "Cedi",
				symbol: "GH¢"
			},
			minor: {
				name: "Pesewa",
				symbol: "Gp",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"GH¢5",
				"GH¢10",
				"GH¢20",
				"GH¢50"
			],
			rare: []
		},
		coins: {
			frequent: [
				"GH¢1",
				"1Gp",
				"5Gp",
				"10Gp",
				"20Gp",
				"50Gp"
			],
			rare: []
		}
	},
	{
		name: "Gibraltar pound",
		iso: {
			code: "GIP",
			number: "292"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£"
			},
			minor: {
				name: "penny",
				symbol: "p",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"£5",
				"£10",
				"£20",
				"£50",
				"£100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1p",
				"2p",
				"5p",
				"10p",
				"20p",
				"50p",
				"£1",
				"£2",
				"£5"
			],
			rare: []
		}
	},
	{
		name: "Gambian dalasi",
		iso: {
			code: "GMD",
			number: "270"
		},
		units: {
			major: {
				name: "dalasi",
				symbol: ""
			},
			minor: {
				name: "butut",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5 dalasis",
				"10 dalasis",
				"25 dalasis",
				"50 dalasis",
				"100 dalasis"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1 bututs",
				"5 bututs",
				"10 bututs",
				"25 bututs",
				"50 bututs",
				"1 dalasi"
			],
			rare: []
		}
	},
	{
		name: "Guinean Franc",
		iso: {
			code: "GNF",
			number: "324"
		},
		units: {
			major: {
				name: "franc",
				symbol: ""
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"100",
				"500",
				"1000",
				"5000",
				"10000"
			],
			rare: [
				"25",
				"50"
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Guatemalan Quetzal",
		iso: {
			code: "GTQ",
			number: "320"
		},
		units: {
			major: {
				name: "quetzales",
				symbol: "Q"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"50",
				"Q1",
				"Q5",
				"Q10",
				"Q20",
				"Q50",
				"Q100",
				"Q200"
			],
			rare: [
				""
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"Q1"
			],
			rare: []
		}
	},
	{
		name: "Guyanese dollar",
		iso: {
			code: "GYD",
			number: "328"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$20",
				"$100",
				"$500",
				"$1000",
				"$5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"$5",
				"$10"
			],
			rare: []
		}
	},
	{
		name: "Hong Kong dollar",
		iso: {
			code: "HKD",
			number: "344"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "HK$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"HK$10",
				"HK$20",
				"HK$50",
				"HK$100",
				"HK$500",
				"HK$1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10¢",
				"20¢",
				"50¢",
				"HK$1",
				"HK$2",
				"HK$5",
				"HK$10"
			],
			rare: []
		}
	},
	{
		name: "Honduran lempira",
		iso: {
			code: "HNL",
			number: "340"
		},
		units: {
			major: {
				name: "lempira",
				symbol: "L"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"L1",
				"L2",
				"L5",
				"L10",
				"L20",
				"L50",
				"L100",
				"L500"
			],
			rare: [
				""
			]
		},
		coins: {
			frequent: [
				"5¢",
				"10¢",
				"20¢",
				"50¢"
			],
			rare: []
		}
	},
	{
		name: "Croatian kuna",
		iso: {
			code: "HRK",
			number: "191"
		},
		units: {
			major: {
				name: "kuna",
				symbol: "kn"
			},
			minor: {
				name: "lipa",
				symbol: "lp",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"kn5",
				"kn10",
				"kn20",
				"kn50",
				"kn100",
				"kn200"
			],
			rare: [
				"kn500",
				"kn1000"
			]
		},
		coins: {
			frequent: [
				"lp5",
				"lp10",
				"lp20",
				"lp50",
				"kn1",
				"kn2",
				"kn4"
			],
			rare: [
				"lp1",
				"lp2",
				"kn25"
			]
		}
	},
	{
		name: "Haitian gourde",
		iso: {
			code: "HTG",
			number: "332"
		},
		units: {
			major: {
				name: "gourde",
				symbol: "G"
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"G10",
				"G25",
				"G50",
				"G100",
				"G250",
				"G500"
			],
			rare: [
				"G1",
				"G2",
				"G5",
				"G1000"
			]
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"G1",
				"G5"
			],
			rare: []
		}
	},
	{
		name: "Hungarian forint",
		iso: {
			code: "HUF",
			number: "348"
		},
		units: {
			major: {
				name: "forint",
				symbol: "Ft"
			},
			minor: {
				name: "fillér",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Ft500",
				"Ft1000",
				"Ft2000",
				"Ft5000",
				"Ft10000",
				"Ft20000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Ft5",
				"Ft10",
				"Ft20",
				"Ft50",
				"Ft100",
				"Ft200"
			],
			rare: []
		}
	},
	{
		name: "Indonesian Rupiah",
		iso: {
			code: "IDR",
			number: "360"
		},
		units: {
			major: {
				name: "Rupiah",
				symbol: "Rp"
			},
			minor: {
				name: "Sen",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Rp1000",
				"Rp2000",
				"Rp5000",
				"Rp10000",
				"Rp20000",
				"Rp50000",
				"Rp100000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Rp100",
				"Rp200",
				"Rp500"
			],
			rare: [
				"Rp50",
				"Rp1000"
			]
		}
	},
	{
		name: "Israeli Shekel",
		iso: {
			code: "ILS",
			number: "376"
		},
		units: {
			major: {
				name: "Shekel",
				symbol: "₪"
			},
			minor: {
				name: "Agorat",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"20₪",
				"50₪",
				"100₪",
				"200₪"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10",
				"0.5₪",
				"2₪",
				"5₪",
				"10₪"
			],
			rare: []
		}
	},
	{
		name: "Indian Rupee",
		iso: {
			code: "INR",
			number: "356"
		},
		units: {
			major: {
				name: "Rupee",
				symbol: "₹"
			},
			minor: {
				name: "paisa",
				symbol: "p",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"100",
				"500",
				"1000"
			],
			rare: [
				"1",
				"2"
			]
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"100",
				"1000"
			],
			rare: [
				"p50",
				"10"
			]
		}
	},
	{
		name: "Iraqi Dinar",
		iso: {
			code: "IQD",
			number: "368"
		},
		units: {
			major: {
				name: "dinar",
				symbol: "ع.د"
			},
			minor: {
				name: "fils",
				symbol: "",
				majorValue: 0.001
			}
		},
		banknotes: {
			frequent: [
				"50ع.د",
				"100ع.د",
				"250ع.د",
				"500ع.د",
				"1000ع.د",
				"5000ع.د",
				"10000ع.د",
				"25000ع.د"
			],
			rare: []
		},
		coins: {
			frequent: [
				"25ع.د",
				"50ع.د",
				"100ع.د"
			],
			rare: []
		}
	},
	{
		name: "Iranian Rial",
		iso: {
			code: "IRR",
			number: "364"
		},
		units: {
			major: {
				name: "rial",
				symbol: ""
			},
			minor: {
				name: "dinar",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"100",
				"200",
				"500",
				"1000",
				"2000",
				"5000",
				"10000",
				"20000",
				"50000",
				"100000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"50",
				"100",
				"250",
				"500",
				"1000"
			],
			rare: []
		}
	},
	{
		name: "Icelandic Krona",
		iso: {
			code: "ISK",
			number: "352"
		},
		units: {
			major: {
				name: "krona",
				symbol: "kr"
			},
			minor: {
				name: "eyrir",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"kr500",
				"kr1000",
				"kr2000",
				"kr5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"kr1",
				"kr5",
				"kr10",
				"kr100"
			],
			rare: []
		}
	},
	{
		name: "Jamaican dollar",
		iso: {
			code: "JMD",
			number: "388"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "J$"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$50",
				"$100",
				"$500",
				"$1000"
			],
			rare: [
				"$1",
				"$2",
				"$5",
				"$10",
				"$20",
				"$5000"
			]
		},
		coins: {
			frequent: [
				"25c",
				"$1",
				"$5",
				"$10",
				"$20"
			],
			rare: [
				"1c",
				"5c",
				"10c",
				"50c"
			]
		}
	},
	{
		name: "Jordanian Dinar",
		iso: {
			code: "JOD",
			number: "400"
		},
		units: {
			major: {
				name: "Dinar",
				symbol: ""
			},
			minor: {
				name: "qirsh ou piastre",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1 dinar",
				"5 dinar",
				"10 dinar",
				"20 dinar",
				"50 dinar"
			],
			rare: []
		},
		coins: {
			frequent: [
				"0.5 qirsh",
				"1 qirsh",
				"2.5 piastres",
				"5 piastres",
				"10 piastres",
				"0.25 dinar",
				"0.5 dinar",
				"1 dinar"
			],
			rare: []
		}
	},
	{
		name: "Japanese yen",
		iso: {
			code: "JPY",
			number: "392"
		},
		units: {
			major: {
				name: "yen",
				symbol: "¥"
			},
			minor: {
				name: "sen",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"¥1000",
				"¥2000",
				"¥5000",
				"¥10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"¥1",
				"¥5",
				"¥10",
				"¥50",
				"¥100",
				"¥500"
			],
			rare: []
		}
	},
	{
		name: "Kenyan Shilling",
		iso: {
			code: "KES",
			number: "404"
		},
		units: {
			major: {
				name: "Shilling",
				symbol: "KSh"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"KSh50",
				"KSh100",
				"KSh200",
				"KSh500",
				"KSh1000"
			],
			rare: [
				"KSh10",
				"KSh20"
			]
		},
		coins: {
			frequent: [
				"KSh1",
				"KSh5",
				"KSh10",
				"KSh20"
			],
			rare: [
				"c50",
				"c40"
			]
		}
	},
	{
		name: "Kyrgyzstani som",
		iso: {
			code: "KGS",
			number: "417"
		},
		units: {
			major: {
				name: "som",
				symbol: "лв"
			},
			minor: {
				name: "tyiyn",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"лв20",
				"лв50",
				"лв100",
				"лв200",
				"лв500",
				"лв1000",
				"лв5000"
			],
			rare: [
				"1tyiyn",
				"10tyiyn",
				"50tyiyn",
				"лв1",
				"лв5",
				"лв10"
			]
		},
		coins: {
			frequent: [
				"лв1",
				"лв3",
				"лв5",
				"лв10"
			],
			rare: [
				"1tyiyn",
				"10tyiyn",
				"50tyiyn"
			]
		}
	},
	{
		name: "Cambodian Riel",
		iso: {
			code: "KHR",
			number: "116"
		},
		units: {
			major: {
				name: "riel",
				symbol: "៛"
			},
			minor: {
				name: "kak",
				symbol: "",
				majorValue: 0.1
			}
		},
		banknotes: {
			frequent: [
				"៛50",
				"៛100",
				"៛200",
				"៛500",
				"៛1000",
				"៛2000",
				"៛5000",
				"៛10000",
				"៛20000",
				"៛50000",
				"៛100000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"៛50",
				"៛100",
				"៛200",
				"៛500"
			],
			rare: []
		}
	},
	{
		name: "Comoran Franc",
		iso: {
			code: "KMF",
			number: "174"
		},
		units: {
			major: {
				name: "franc",
				symbol: ""
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1",
				"2",
				"5",
				"10"
			],
			rare: []
		},
		coins: {
			frequent: [
				"25",
				"50",
				"100"
			],
			rare: []
		}
	},
	{
		name: "North Korean won",
		iso: {
			code: "KPW",
			number: "408"
		},
		units: {
			major: {
				name: "won",
				symbol: "₩"
			},
			minor: {
				name: "chon",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₩5",
				"₩10",
				"₩50",
				"₩100",
				"₩200",
				"₩500",
				"₩1000",
				"₩2000",
				"₩5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"50",
				"₩1"
			],
			rare: []
		}
	},
	{
		name: "South Korean won",
		iso: {
			code: "KRW",
			number: "410"
		},
		units: {
			major: {
				name: "won",
				symbol: "₩"
			},
			minor: {
				name: "jeon",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₩1000",
				"₩5000",
				"₩10000",
				"₩50000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"₩1",
				"₩5",
				"₩10",
				"₩50",
				"₩100",
				"₩500"
			],
			rare: []
		}
	},
	{
		name: "Kuwaiti Dinar",
		iso: {
			code: "KWD",
			number: "414"
		},
		units: {
			major: {
				name: "dinar",
				symbol: "ك"
			},
			minor: {
				name: "fils",
				symbol: "",
				majorValue: 0.001
			}
		},
		banknotes: {
			frequent: [
				"250",
				"500",
				"1ك",
				"5ك",
				"10ك",
				"20ك"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"100"
			],
			rare: []
		}
	},
	{
		name: "Caymanian Dollar",
		iso: {
			code: "KYD",
			number: "136"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$25",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1¢",
				"5¢",
				"10¢",
				"25¢"
			],
			rare: []
		}
	},
	{
		name: "Kazakhstani tenge",
		iso: {
			code: "KZT",
			number: "398"
		},
		units: {
			major: {
				name: "tenge",
				symbol: "₸"
			},
			minor: {
				name: "tïın",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"200",
				"500",
				"1000",
				"2000",
				"5000",
				"10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50",
				"100"
			],
			rare: []
		}
	},
	{
		name: "Lao or Laotian Kip",
		iso: {
			code: "LAK",
			number: "418"
		},
		units: {
			major: {
				name: "Kip",
				symbol: "₭"
			},
			minor: {
				name: "Att",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₭500",
				"₭1000",
				"₭2000",
				"₭5000",
				"₭10000",
				"₭20000",
				"₭50000",
				"₭100000"
			],
			rare: [
				"₭1",
				"₭5",
				"₭10",
				"₭20",
				"₭50",
				"₭100"
			]
		},
		coins: {
			frequent: [],
			rare: [
				"10",
				"20",
				"50"
			]
		}
	},
	{
		name: "Lebanese Pound",
		iso: {
			code: "LBP",
			number: "422"
		},
		units: {
			major: {
				name: "pound",
				symbol: "ل.ل"
			},
			minor: {
				name: "piastre",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1000ل.ل",
				"5000ل.ل",
				"10000ل.ل",
				"20000ل.ل",
				"50000ل.ل",
				"100000ل.ل"
			],
			rare: []
		},
		coins: {
			frequent: [
				"250ل.ل",
				"500ل.ل"
			],
			rare: [
				"500ل.ل",
				"100ل.ل"
			]
		}
	},
	{
		name: "Sri Lankan Rupee",
		iso: {
			code: "LKR",
			number: "144"
		},
		units: {
			major: {
				name: "Rupee",
				symbol: "Rs"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"RS10",
				"RS20",
				"Rs50",
				"Rs100",
				"Rs500",
				"Rs1000",
				"Rs2000",
				"Rs5000"
			],
			rare: [
				"Rs200"
			]
		},
		coins: {
			frequent: [
				"Rs1",
				"Rs2",
				"Rs5",
				"Rs10"
			],
			rare: [
				"25",
				"50"
			]
		}
	},
	{
		name: "Liberian Dollar",
		iso: {
			code: "LRD",
			number: "430"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"¢5",
				"¢10",
				"¢25",
				"¢50"
			],
			rare: []
		}
	},
	{
		name: "Lesotho loti",
		iso: {
			code: "LSL",
			number: "426"
		},
		units: {
			major: {
				name: "loti (maloti)",
				symbol: "L or M"
			},
			minor: {
				name: "sente (lisente)",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"M10",
				"M20",
				"M50",
				"M100",
				"M200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50",
				"L1",
				"M2",
				"M5"
			],
			rare: []
		}
	},
	{
		name: "Lithuanian litas",
		iso: {
			code: "LTL",
			number: "440"
		},
		units: {
			major: {
				name: "litas",
				symbol: "Lt"
			},
			minor: {
				name: "centas",
				symbol: "ct",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"LT10",
				"Lt20",
				"Lt50",
				"Lt100",
				"Lt200",
				"Lt500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"ct1",
				"ct2",
				"ct5",
				"ct10",
				"ct20",
				"ct50",
				"Lt1",
				"Lt2",
				"Lt5"
			],
			rare: []
		}
	},
	{
		name: "Libyan Dinar",
		iso: {
			code: "LYD",
			number: "434"
		},
		units: {
			major: {
				name: "dinar",
				symbol: " د.ل"
			},
			minor: {
				name: "dirham",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1 dinar",
				"5 dinars",
				"10 dinars",
				"20 dinars",
				"50 dinars"
			],
			rare: []
		},
		coins: {
			frequent: [
				"0.25 dinar",
				"0.5 dinar",
				"50 dirhams",
				"100 dirhams"
			],
			rare: []
		}
	},
	{
		name: "Moroccan Dirham",
		iso: {
			code: "MAD",
			number: "504"
		},
		units: {
			major: {
				name: "dirham",
				symbol: "م.د."
			},
			minor: {
				name: "santim",
				symbol: "santimat",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"20 dirhams",
				"50 dirhams",
				"100 dirhams",
				"200 dirhams"
			],
			rare: []
		},
		coins: {
			frequent: [
				"0.5 dirhams",
				"1 dirhams",
				"2 dirhams",
				"5 dirhams",
				"10 dirhams",
				"1 santimat",
				"5 santimat",
				"10 santimat",
				"20 santimat",
				"50 santimat"
			],
			rare: [
				"5 santimat"
			]
		}
	},
	{
		name: "Moldovan Leu",
		iso: {
			code: "MDL",
			number: "498"
		},
		units: {
			major: {
				name: "Leu",
				symbol: "L"
			},
			minor: {
				name: "Ban",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1",
				"5",
				"10",
				"20",
				"50",
				"100",
				"200",
				"500",
				"1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Malagasy Ariary",
		iso: {
			code: "MGA",
			number: "969"
		},
		units: {
			major: {
				name: "Ariary",
				symbol: "Ar"
			},
			minor: {
				name: "Iraimbilanja",
				symbol: "",
				majorValue: 0.2
			}
		},
		banknotes: {
			frequent: [
				"Ar100",
				"Ar200",
				"Ar500",
				"Ar1000",
				"Ar2000",
				"Ar5000",
				"Ar10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Ar1",
				"Ar2",
				"Ar4",
				"Ar5",
				"Ar10",
				"Ar20",
				"Ar50",
				"1",
				"25"
			],
			rare: []
		}
	},
	{
		name: "Macedonian Denar",
		iso: {
			code: "MKD",
			number: "807"
		},
		units: {
			major: {
				name: "denar",
				symbol: "ден"
			},
			minor: {
				name: "deni",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"ден10",
				"ден50",
				"ден100",
				"ден200",
				"ден500",
				"ден1000",
				"ден2000"
			],
			rare: [
				"ден5000"
			]
		},
		coins: {
			frequent: [
				"50",
				"ден1",
				"ден2",
				"ден5",
				"ден10",
				"ден50"
			],
			rare: []
		}
	},
	{
		name: "Burmese Kyat",
		iso: {
			code: "MMK",
			number: "104"
		},
		units: {
			major: {
				name: "Kyat",
				symbol: "K"
			},
			minor: {
				name: "Pya",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"50",
				"K1",
				"K5",
				"K10",
				"K20",
				"K50",
				"K100",
				"K200",
				"K500",
				"K1000",
				"K5000",
				"K10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"K1",
				"K5",
				"K10",
				"K50",
				"K100"
			],
			rare: []
		}
	},
	{
		name: "Mongolian Tughrik",
		iso: {
			code: "MNT",
			number: "496"
		},
		units: {
			major: {
				name: "Tughrik",
				symbol: "₮"
			},
			minor: {
				name: "Möngö",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₮10",
				"₮20",
				"₮100",
				"₮500",
				"₮1000",
				"₮5000",
				"₮10000",
				"₮20000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"₮20",
				"₮50",
				"₮100",
				"₮200",
				"₮500"
			],
			rare: []
		}
	},
	{
		name: "Macau Pataca",
		iso: {
			code: "MOP",
			number: "446"
		},
		units: {
			major: {
				name: "pataca",
				symbol: "MOP$"
			},
			minor: {
				name: "ho",
				symbol: "毫",
				majorValue: 0.1
			}
		},
		banknotes: {
			frequent: [
				"MOP$10",
				"MOP$20",
				"MOP$100",
				"MOP$500",
				"MOP$1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"毫10",
				"毫20",
				"毫50",
				"MOP$1",
				"MOP$2",
				"MOP$5",
				"MOP$10"
			],
			rare: []
		}
	},
	{
		name: "Mauritanian Ouguiya",
		iso: {
			code: "MRO",
			number: "478"
		},
		units: {
			major: {
				name: "Ouguiya",
				symbol: "UM"
			},
			minor: {
				name: "khoums",
				symbol: "",
				majorValue: 0.2
			}
		},
		banknotes: {
			frequent: [
				"100",
				"200",
				"500",
				"1000",
				"2000",
				"5000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50"
			],
			rare: [
				"1 khoums",
				"1 ouguiya"
			]
		}
	},
	{
		name: "Mauritian rupee",
		iso: {
			code: "MUR",
			number: "480"
		},
		units: {
			major: {
				name: "rupee",
				symbol: "Rs"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Rs25",
				"Rs50",
				"Rs100",
				"Rs200",
				"Rs500",
				"Rs1000",
				"RS2000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Rs1",
				"Rs5",
				"Rs10",
				"Rs20"
			],
			rare: []
		}
	},
	{
		name: "Maldivian Rufiyaa",
		iso: {
			code: "MVR",
			number: "462"
		},
		units: {
			major: {
				name: "Rufiyaa",
				symbol: "rf"
			},
			minor: {
				name: "laari",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"100",
				"500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Malawian Kwacha",
		iso: {
			code: "MWK",
			number: "454"
		},
		units: {
			major: {
				name: "Kwacha",
				symbol: "MK"
			},
			minor: {
				name: "Tambala",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"MK5",
				"MK10",
				"MK20",
				"MK50",
				"MK100",
				"MK200",
				"MK500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"MK1",
				"MK5",
				"MK10",
				"MK15",
				"MK20",
				"MK40",
				"MK50",
				"MK75",
				"MK100",
				"1",
				"2",
				"5",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Mexico Peso",
		iso: {
			code: "MXN",
			number: "484"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "centavo",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$20",
				"$50",
				"$100",
				"$200",
				"$500"
			],
			rare: [
				"$1000"
			]
		},
		coins: {
			frequent: [
				"50¢",
				"$1",
				"$2",
				"$5",
				"$10"
			],
			rare: [
				"5¢",
				"10¢",
				"20¢",
				"$20",
				"$50",
				"$100"
			]
		}
	},
	{
		name: "Malaysian Ringgit",
		iso: {
			code: "MYR",
			number: "458"
		},
		units: {
			major: {
				name: "Ringgit",
				symbol: "RM"
			},
			minor: {
				name: "Sen",
				symbol: "Sen",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"RM1",
				"RM5",
				"RM10",
				"RM50",
				"RM100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"sen5",
				"sen10",
				"sen20",
				"sen50"
			],
			rare: []
		}
	},
	{
		name: "Mozambican Metical",
		iso: {
			code: "MZN",
			number: "943"
		},
		units: {
			major: {
				name: "metical",
				symbol: "MT"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"MT20",
				"MT50",
				"MT100",
				"MT200",
				"MT500",
				"MT1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"MT1",
				"MT2",
				"MT5",
				"MT10",
				"5",
				"10",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Namibian Dollar",
		iso: {
			code: "NAD",
			number: "516"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$10",
				"$20",
				"$50",
				"$100",
				"$200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$1",
				"$5",
				"c5",
				"c10",
				"c50"
			],
			rare: []
		}
	},
	{
		name: "Nigerian Naira",
		iso: {
			code: "NGN",
			number: "566"
		},
		units: {
			major: {
				name: "Naira",
				symbol: "₦"
			},
			minor: {
				name: "Kobo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₦5",
				"₦10",
				"₦20",
				"₦50",
				"₦100",
				"₦200",
				"₦500",
				"₦1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"₦1",
				"₦2",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Nicaraguan córdoba",
		iso: {
			code: "NIO",
			number: "558"
		},
		units: {
			major: {
				name: "córdoba",
				symbol: "C$"
			},
			minor: {
				name: "centavo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"C$10",
				"C$20",
				"C$50",
				"C$100",
				"C$200",
				"C$500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"25",
				"50",
				"C$1",
				"C$5",
				"C$10"
			],
			rare: []
		}
	},
	{
		name: "Norwegian krone",
		iso: {
			code: "NOK",
			number: "578"
		},
		units: {
			major: {
				name: "Krone",
				symbol: "kr"
			},
			minor: {
				name: "øre",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"kr50",
				"kr100",
				"kr200",
				"kr500",
				"kr1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"kr1",
				"kr5",
				"kr10",
				"kr20"
			],
			rare: []
		}
	},
	{
		name: "Nepalese Rupee",
		iso: {
			code: "NPR",
			number: "524"
		},
		units: {
			major: {
				name: "Rupee",
				symbol: "Rs"
			},
			minor: {
				name: "Paisa",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Rs5",
				"RS10",
				"Rs25",
				"Rs50",
				"Rs100",
				"Rs500",
				"Rs1000"
			],
			rare: [
				"Rs1",
				"Rs2"
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50",
				"Rs1",
				"Rs2",
				"Rs5",
				"Rs10"
			],
			rare: []
		}
	},
	{
		name: "New Zealand Dollar",
		iso: {
			code: "NZD",
			number: "554"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10c",
				"20c",
				"50c",
				"$1",
				"$2"
			],
			rare: []
		}
	},
	{
		name: "Omani Rial",
		iso: {
			code: "OMR",
			number: "512"
		},
		units: {
			major: {
				name: "rial",
				symbol: "ع.ر."
			},
			minor: {
				name: "baisa",
				symbol: "bz",
				majorValue: 0.001
			}
		},
		banknotes: {
			frequent: [
				"bz100",
				"bz200",
				"bz500",
				"1ع.ر.",
				"5ع.ر.",
				"10ع.ر.",
				"20ع.ر.",
				"50ع.ر."
			],
			rare: []
		},
		coins: {
			frequent: [
				"bz5",
				"bz10",
				"bz25",
				"bz50"
			],
			rare: []
		}
	},
	{
		name: "Balboa panamérn",
		iso: {
			code: "PAB",
			number: "590"
		},
		units: {
			major: {
				name: "balboa",
				symbol: "B/"
			},
			minor: {
				name: "Centésimo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: [
				"2$"
			]
		},
		coins: {
			frequent: [
				"1",
				"5",
				"1⁄10",
				"1⁄4",
				"1⁄2",
				"1B/",
				"2B/"
			],
			rare: []
		}
	},
	{
		name: "Peruvian nuevo sol",
		iso: {
			code: "PEN",
			number: "604"
		},
		units: {
			major: {
				name: "nuevo sol",
				symbol: "S/"
			},
			minor: {
				name: "céntimo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"S/10",
				"S/20",
				"S/50",
				"S/100"
			],
			rare: [
				"S/200"
			]
		},
		coins: {
			frequent: [
				"10",
				"20",
				"50",
				"S/1",
				"S/2",
				"S/5"
			],
			rare: [
				"1",
				"5"
			]
		}
	},
	{
		name: "Papua New Guinean Kina",
		iso: {
			code: "PGK",
			number: "598"
		},
		units: {
			major: {
				name: "Kina",
				symbol: "K"
			},
			minor: {
				name: "Toea",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"K2",
				"K5",
				"K10",
				"K20",
				"K50",
				"K100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"20",
				"50",
				"K1"
			],
			rare: []
		}
	},
	{
		name: "Philippine Peso",
		iso: {
			code: "PHP",
			number: "608"
		},
		units: {
			major: {
				name: "Peso",
				symbol: "₱"
			},
			minor: {
				name: "Sentimo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₱20",
				"₱50",
				"₱100",
				"₱200",
				"₱500",
				"₱1000"
			],
			rare: [
				"₱5",
				"₱10"
			]
		},
		coins: {
			frequent: [
				"25",
				"₱1",
				"₱5",
				"₱10"
			],
			rare: [
				"1",
				"2",
				"5",
				"10"
			]
		}
	},
	{
		name: "Pakistani Rupee",
		iso: {
			code: "PKR",
			number: "586"
		},
		units: {
			major: {
				name: "Rupee",
				symbol: "Rs"
			},
			minor: {
				name: "Paisa",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"RS10",
				"Rs50",
				"Rs100",
				"Rs500",
				"Rs1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Rs1",
				"Rs2",
				"Rs5"
			],
			rare: []
		}
	},
	{
		name: "Polish złoty",
		iso: {
			code: "PLN",
			number: "985"
		},
		units: {
			major: {
				name: "złoty",
				symbol: "zł"
			},
			minor: {
				name: "Grosz",
				symbol: "gr",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"zł10",
				"zł20",
				"zł50",
				"zł100",
				"zł200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1gr",
				"2gr",
				"5gr",
				"10gr",
				"20gr",
				"50gr",
				"zł1",
				"zł2",
				"zł5"
			],
			rare: []
		}
	},
	{
		name: "Paraguayan guarani",
		iso: {
			code: "PYG",
			number: "600"
		},
		units: {
			major: {
				name: "guarani",
				symbol: "₲"
			},
			minor: {
				name: "céntimo",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₲1000",
				"₲2000",
				"₲5000",
				"₲10000",
				"₲20000",
				"₲50000",
				"₲100000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"₲50",
				"₲100",
				"₲500",
				"₲1000"
			],
			rare: []
		}
	},
	{
		name: "Qatari Riyal",
		iso: {
			code: "QAR",
			number: "634"
		},
		units: {
			major: {
				name: "riyal",
				symbol: "ق.ر "
			},
			minor: {
				name: "dirham",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1ق.ر",
				"5ق.ر",
				"10ق.ر",
				"50ق.ر",
				"100ق.ر",
				"500ق.ر"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Romanian leu",
		iso: {
			code: "RON",
			number: "946"
		},
		units: {
			major: {
				name: "leu",
				symbol: "lei"
			},
			minor: {
				name: "bani",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"lei1",
				"lei5",
				"lei10",
				"lei50",
				"lei100"
			],
			rare: [
				"lei200",
				"lei500"
			]
		},
		coins: {
			frequent: [
				"10",
				"50"
			],
			rare: [
				"1",
				"5"
			]
		}
	},
	{
		name: "Serbian Dinar",
		iso: {
			code: "RSD",
			number: "941"
		},
		units: {
			major: {
				name: "dinar",
				symbol: "РСД"
			},
			minor: {
				name: "para",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"РСД10",
				"РСД20",
				"РСД50",
				"РСД100",
				"РСД200",
				"РСД500",
				"РСД1000"
			],
			rare: [
				"РСД2000",
				"РСД5000"
			]
		},
		coins: {
			frequent: [
				"РСД1",
				"РСД2",
				"РСД5",
				"РСД10",
				"РСД20"
			],
			rare: []
		}
	},
	{
		name: "Russian Rouble",
		iso: {
			code: "RUB",
			number: "643"
		},
		units: {
			major: {
				name: "rouble",
				symbol: "₽"
			},
			minor: {
				name: "kopeyka",
				symbol: "к",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"50",
				"100",
				"500",
				"1000",
				"5000"
			],
			rare: [
				"10",
				"5"
			]
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10"
			],
			rare: [
				"k1",
				"k5",
				"k10",
				"k50"
			]
		}
	},
	{
		name: "Rwandan franc",
		iso: {
			code: "RWF",
			number: "646"
		},
		units: {
			major: {
				name: "franc",
				symbol: "FRw, RF, R₣"
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"500R₣",
				"1000R₣",
				"2000R₣",
				"5000R₣"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1R₣",
				"2R₣",
				"5R₣",
				"10R₣",
				"20R₣",
				"50R₣",
				"100R₣"
			],
			rare: []
		}
	},
	{
		name: "Saudi Arabian Riyal",
		iso: {
			code: "SAR",
			number: "682"
		},
		units: {
			major: {
				name: "riyal",
				symbol: "ر.س"
			},
			minor: {
				name: "Halala",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1ر.س",
				"5ر.س",
				"10ر.س",
				"20ر.س",
				"50ر.س",
				"100ر.س",
				"500ر.س"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5",
				"10",
				"25",
				"50",
				"100"
			],
			rare: []
		}
	},
	{
		name: "Solomon Islander Dollar",
		iso: {
			code: "SBD",
			number: "090"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "SI$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"SI$5",
				"SI$10",
				"SI$20",
				"SI$50",
				"SI$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10",
				"20",
				"50",
				"SI$1",
				"SI$2"
			],
			rare: []
		}
	},
	{
		name: "Seychellois Rupee",
		iso: {
			code: "SCR",
			number: "690"
		},
		units: {
			major: {
				name: "rupee",
				symbol: "Rs"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Rs50",
				"Rs100",
				"Rs500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Rs1",
				"Rs5",
				"1",
				"5",
				"10",
				"25"
			],
			rare: []
		}
	},
	{
		name: "Sudanese Pound",
		iso: {
			code: "SDG",
			number: "736"
		},
		units: {
			major: {
				name: "pound",
				symbol: ""
			},
			minor: {
				name: "piastres",
				symbol: ".‏س.ج",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1.‏س.ج",
				"5.‏س.ج",
				"10.‏س.ج",
				"20.‏س.ج",
				"50.‏س.ج",
				"1"
			],
			rare: []
		}
	},
	{
		name: "Swedish krona",
		iso: {
			code: "SEK",
			number: "752"
		},
		units: {
			major: {
				name: "krona",
				symbol: "kr"
			},
			minor: {
				name: "ören",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"kr20",
				"kr50",
				"kr100",
				"kr500"
			],
			rare: [
				"kr1000"
			]
		},
		coins: {
			frequent: [
				"kr1",
				"kr5",
				"kr10"
			],
			rare: []
		}
	},
	{
		name: "Singapore Dollar",
		iso: {
			code: "SGD",
			number: "702"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "S¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$50"
			],
			rare: [
				"$1",
				"$20",
				"$25",
				"$100",
				"$500",
				"$1000",
				"$10000"
			]
		},
		coins: {
			frequent: [
				"S¢5",
				"S¢10",
				"S¢20",
				"S¢50",
				"$1"
			],
			rare: [
				"S¢1"
			]
		}
	},
	{
		name: "Sierra Leonean Leone",
		iso: {
			code: "SLL",
			number: "694"
		},
		units: {
			major: {
				name: "Leone",
				symbol: "Le"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Le1000",
				"Le2000",
				"Le5000",
				"Le10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Le10",
				"Le50",
				"Le100",
				"Le500"
			],
			rare: []
		}
	},
	{
		name: "Somali Shilling",
		iso: {
			code: "SOS",
			number: "706"
		},
		units: {
			major: {
				name: "shilling",
				symbol: "S"
			},
			minor: {
				name: "senti",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"S5",
				"S10",
				"S20",
				"S50",
				"S100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"S1",
				"S5",
				"S10",
				"S20",
				"S50",
				"S100",
				"1",
				"5",
				"10",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Surinamese dollar",
		iso: {
			code: "SRD",
			number: "968"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$2½",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"25",
				"100",
				"250"
			],
			rare: []
		}
	},
	{
		name: "South Sudanese pound",
		iso: {
			code: "SSP",
			number: "728"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£"
			},
			minor: {
				name: "piaster",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"25",
				"£1",
				"£5",
				"£10",
				"£25",
				"£50",
				"£100"
			],
			rare: []
		},
		coins: {
			frequent: [],
			rare: []
		}
	},
	{
		name: "Syrian Pound",
		iso: {
			code: "SYP",
			number: "760"
		},
		units: {
			major: {
				name: "pound",
				symbol: "£"
			},
			minor: {
				name: "piastre",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"£5",
				"£10",
				"£25",
				"£50",
				"£100",
				"£200",
				"£500",
				"£1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"£1",
				"£2",
				"£5",
				"£10",
				"£25"
			],
			rare: []
		}
	},
	{
		name: "Swazi Lilangeni",
		iso: {
			code: "SZL",
			number: "748"
		},
		units: {
			major: {
				name: "Lilangeni or emalangeni",
				symbol: "L or E"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"E10",
				"E20",
				"E50",
				"E100",
				"E200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"L1",
				"E2",
				"E5",
				"1",
				"2",
				"5",
				"10",
				"20",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Thai Baht",
		iso: {
			code: "THB",
			number: "764"
		},
		units: {
			major: {
				name: "baht",
				symbol: "฿"
			},
			minor: {
				name: "satang",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"฿20",
				"฿50",
				"฿100",
				"฿500",
				"฿1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"25",
				"50",
				"฿",
				"฿2",
				"฿5",
				"฿10"
			],
			rare: [
				"1",
				"5",
				"10"
			]
		}
	},
	{
		name: "Tajikistani somoni",
		iso: {
			code: "TJS",
			number: "762"
		},
		units: {
			major: {
				name: "somoni",
				symbol: ""
			},
			minor: {
				name: "diram",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"1diram",
				"5diram",
				"20diram",
				"50diram",
				"1somoni",
				"3somoni",
				"5somoni",
				"10somoni",
				"20somoni",
				"50somoni",
				"100somoni",
				"200somoni",
				"500somoni"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5diram",
				"10diram",
				"20diram",
				"25diram",
				"50diram",
				"1somoni",
				"3somoni",
				"5somoni"
			],
			rare: []
		}
	},
	{
		name: "Turkmenistan manat",
		iso: {
			code: "TMT",
			number: "795"
		},
		units: {
			major: {
				name: "manat",
				symbol: "T"
			},
			minor: {
				name: "tenge",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"T1",
				"T5",
				"T10",
				"T20",
				"T50",
				"T100",
				"T500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50",
				"T1",
				"T2"
			],
			rare: []
		}
	},
	{
		name: "Tunisian Dinar",
		iso: {
			code: "TND",
			number: "788"
		},
		units: {
			major: {
				name: "dinar",
				symbol: ""
			},
			minor: {
				name: "milim or millime",
				symbol: "ت.د",
				majorValue: 0.001
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"20",
				"50"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10ت.د",
				"20ت.د",
				"50ت.د",
				"100ت.د",
				"200ت.د",
				"0.5",
				"1",
				"2",
				"5"
			],
			rare: []
		}
	},
	{
		name: "Tongan Pa'anga",
		iso: {
			code: "TOP",
			number: "776"
		},
		units: {
			major: {
				name: "hau",
				symbol: "T$"
			},
			minor: {
				name: "seniti",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"T$1",
				"T$2",
				"T$5",
				"T$10",
				"T$20",
				"T$50",
				"T$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5¢",
				"10¢",
				"20¢",
				"50¢"
			],
			rare: [
				"1¢",
				"2¢"
			]
		}
	},
	{
		name: "Turkish Lira",
		iso: {
			code: "TRY",
			number: "949"
		},
		units: {
			major: {
				name: "lira",
				symbol: "₺"
			},
			minor: {
				name: "kuruş",
				symbol: "Kr",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"5",
				"10",
				"20",
				"50"
			],
			rare: [
				"100",
				"200"
			]
		},
		coins: {
			frequent: [
				"5Kr",
				"10Kr",
				"25Kr",
				"50Kr",
				"1"
			],
			rare: [
				"1Kr"
			]
		}
	},
	{
		name: "Trinidadian dollar",
		iso: {
			code: "TTD",
			number: "780"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "TT$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"TT$1",
				"TT$5",
				"TT$10",
				"TT$20",
				"TT$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "Taiwan New Dollar",
		iso: {
			code: "TWD",
			number: "901"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "NT$"
			},
			minor: {
				name: "jiao",
				symbol: "角",
				majorValue: 0.1
			}
		},
		banknotes: {
			frequent: [
				"NT$100",
				"NT$500",
				"NT$1000"
			],
			rare: [
				"NT$200",
				"NT$2000"
			]
		},
		coins: {
			frequent: [
				"NT$1",
				"NT$5",
				"NT$10",
				"NT$50"
			],
			rare: [
				"NT$20"
			]
		}
	},
	{
		name: "Tanzanian Shilling",
		iso: {
			code: "TZS",
			number: "834"
		},
		units: {
			major: {
				name: "Shilling",
				symbol: "Sh"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"500",
				"1000",
				"2000",
				"5000",
				"10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"50",
				"100",
				"200"
			],
			rare: []
		}
	},
	{
		name: "Ukrainian Hryvnia",
		iso: {
			code: "UAH",
			number: "980"
		},
		units: {
			major: {
				name: "Hryvnia",
				symbol: "₴"
			},
			minor: {
				name: "Kopiyka",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"₴1",
				"₴2",
				"₴5",
				"₴10",
				"₴20",
				"₴50",
				"₴100",
				"₴200",
				"₴500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"25",
				"50",
				"₴1"
			],
			rare: []
		}
	},
	{
		name: "Ugandan Shilling",
		iso: {
			code: "UGX",
			number: "800"
		},
		units: {
			major: {
				name: "Shilling",
				symbol: "USh"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"USh2",
				"USh5",
				"USh10",
				"USh20",
				"USh50",
				"USh100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"USh1",
				"USh2",
				"5",
				"10",
				"25",
				"50"
			],
			rare: []
		}
	},
	{
		name: "US Dollar",
		iso: {
			code: "USD",
			number: "840"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "$"
			},
			minor: {
				name: "cent",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$1",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: [
				"2$"
			]
		},
		coins: {
			frequent: [
				"1¢",
				"5¢",
				"10¢",
				"25¢"
			],
			rare: [
				"$1",
				"50¢"
			]
		}
	},
	{
		name: "Uruguayan peso",
		iso: {
			code: "UYU",
			number: "858"
		},
		units: {
			major: {
				name: "peso",
				symbol: "$U"
			},
			minor: {
				name: "centésimo",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$U20",
				"$U50",
				"$U100",
				"$U200",
				"$U500",
				"$U1000",
				"$U2000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"$U1",
				"$U2",
				"$U5",
				"$U10",
				"$U50"
			],
			rare: []
		}
	},
	{
		name: "Uzbekistani som",
		iso: {
			code: "UZS",
			number: "860"
		},
		units: {
			major: {
				name: "som",
				symbol: "лв"
			},
			minor: {
				name: "Tiyin",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"лв1",
				"лв3",
				"лв5",
				"лв10",
				"лв25",
				"лв50",
				"лв100",
				"лв200",
				"лв500"
			],
			rare: []
		},
		coins: {
			frequent: [
				"лв1",
				"лв5",
				"лв10",
				"лв25",
				"лв50",
				"лв100"
			],
			rare: []
		}
	},
	{
		name: "Venezuelan bolivar",
		iso: {
			code: "VEF",
			number: "937"
		},
		units: {
			major: {
				name: "bolívares fuertes",
				symbol: "Bs"
			},
			minor: {
				name: "céntimo",
				symbol: "¢",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Bs.2",
				"Bs.5",
				"Bs.10",
				"Bs.20",
				"Bs.50",
				"Bs.100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"Bs.1",
				"10¢",
				"25¢",
				"50¢"
			],
			rare: []
		}
	},
	{
		name: "Vietnamese Dong",
		iso: {
			code: "VND",
			number: "704"
		},
		units: {
			major: {
				name: "dong",
				symbol: "₫"
			},
			minor: {
				name: "xu",
				symbol: "",
				majorValue: 0.01
			},
			minor2: {
				name: "Hào",
				symbol: "",
				majorValue: 0.1
			}
		},
		banknotes: {
			frequent: [
				"₫100",
				"₫200",
				"₫500",
				"₫1000",
				"₫2000",
				"₫5000",
				"₫10000",
				"₫20000",
				"₫50000",
				"₫100000",
				"₫200000",
				"₫500000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"₫200",
				"₫500",
				"₫1000",
				"₫2000",
				"₫5000"
			],
			rare: []
		}
	},
	{
		name: "Ni-Vanuatu Vatu",
		iso: {
			code: "VUV",
			number: "548"
		},
		units: {
			major: {
				name: "vatu",
				symbol: "VT"
			},
			minor: {
				name: "",
				symbol: "",
				majorValue: ""
			}
		},
		banknotes: {
			frequent: [
				"100VT",
				"200VT",
				"500VT",
				"1000VT",
				"2000VT",
				"5000VT",
				"10000VT"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1VT",
				"2VT",
				"5VT",
				"10VT",
				"20VT",
				"50VT",
				"100VT"
			],
			rare: []
		}
	},
	{
		name: "Samoan Tālā",
		iso: {
			code: "WST",
			number: "882"
		},
		units: {
			major: {
				name: "tālā",
				symbol: "$"
			},
			minor: {
				name: "sene",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"$2",
				"$5",
				"$10",
				"$20",
				"$50",
				"$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"10",
				"20",
				"50",
				"$1",
				"$2"
			],
			rare: []
		}
	},
	{
		name: "East Caribbean dollar",
		iso: {
			code: "XCD",
			number: "951"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "EC$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"EC$5",
				"EC$10",
				"EC$20",
				"EC$50",
				"EC$100"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"25",
				"EC$1",
				"EC$2"
			],
			rare: []
		}
	},
	{
		name: "CFA Franc",
		iso: {
			code: "XOF",
			number: "952"
		},
		units: {
			major: {
				name: "franc",
				symbol: ""
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"500",
				"1000",
				"2000",
				"5000",
				"10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"25",
				"100",
				"500"
			],
			rare: []
		}
	},
	{
		name: "CFP Franc",
		iso: {
			code: "XPF",
			number: "953"
		},
		units: {
			major: {
				name: "franc",
				symbol: ""
			},
			minor: {
				name: "centime",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"500",
				"1000",
				"5000",
				"10000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"2",
				"5",
				"10",
				"20",
				"50",
				"100"
			],
			rare: [
				"$1",
				"50¢"
			]
		}
	},
	{
		name: "Yemeni Rial",
		iso: {
			code: "YER",
			number: "886"
		},
		units: {
			major: {
				name: "rial",
				symbol: ""
			},
			minor: {
				name: "fils",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"50",
				"100",
				"200",
				"250",
				"500",
				"1000"
			],
			rare: []
		},
		coins: {
			frequent: [
				"1",
				"5",
				"10",
				"20"
			],
			rare: []
		}
	},
	{
		name: "South African Rand",
		iso: {
			code: "ZAR",
			number: "710"
		},
		units: {
			major: {
				name: "Rand",
				symbol: "R"
			},
			minor: {
				name: "cent",
				symbol: "c",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"R10",
				"R20",
				"R50",
				"R100",
				"R200"
			],
			rare: []
		},
		coins: {
			frequent: [
				"R1",
				"R2",
				"R5",
				"5c",
				"10c",
				"20c"
			],
			rare: []
		}
	},
	{
		name: "Zambian Kwacha",
		iso: {
			code: "ZMW",
			number: "967"
		},
		units: {
			major: {
				name: "Kwacha",
				symbol: "ZMK"
			},
			minor: {
				name: "ngwee",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"2 kwacha",
				"5 kwacha",
				"10 kwacha",
				"20 kwacha",
				"50 kwacha",
				"100 kwacha"
			],
			rare: []
		},
		coins: {
			frequent: [
				"5 ngwee",
				"10 ngwee",
				"50 ngwee",
				"1 kwacha"
			],
			rare: []
		}
	},
	{
		name: "Zimbabwean Dollar",
		iso: {
			code: "ZWD",
			number: "932"
		},
		units: {
			major: {
				name: "dollar",
				symbol: "Z$"
			},
			minor: {
				name: "cent",
				symbol: "",
				majorValue: 0.01
			}
		},
		banknotes: {
			frequent: [
				"Z$1",
				"Z$5",
				"Z$10",
				"Z$20",
				"Z$50",
				"Z$100",
				"Z$500"
			],
			rare: []
		},
		coins: {
			frequent: [],
			rare: []
		}
	}
]

export default currencies;