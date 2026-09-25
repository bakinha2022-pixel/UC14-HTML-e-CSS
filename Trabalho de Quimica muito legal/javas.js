const elementos = [

    // PERÍODO 1
    {
        numero: 1,
        simbolo: "H",
        nome: "Hidrogênio",
        massa: "1,008",
        grupo: 1,
        periodo: 1,
        tipo: "nao-metal",
        eletrons: [1],
        estado: "Gasoso"
    },

    {
        numero: 2,
        simbolo: "He",
        nome: "Hélio",
        massa: "4,003",
        grupo: 18,
        periodo: 1,
        tipo: "gas",
        eletrons: [2],
        estado: "Gasoso"
    },

    // PERÍODO 2
    {
        numero: 3,
        simbolo: "Li",
        nome: "Lítio",
        massa: "6,94",
        grupo: 1,
        periodo: 2,
        tipo: "metal",
        eletrons: [2, 1],
        estado: "Sólido"
    },

    {
        numero: 4,
        simbolo: "Be",
        nome: "Berílio",
        massa: "9,012",
        grupo: 2,
        periodo: 2,
        tipo: "metal",
        eletrons: [2, 2],
        estado: "Sólido"
    },

    {
        numero: 5,
        simbolo: "B",
        nome: "Boro",
        massa: "10,81",
        grupo: 13,
        periodo: 2,
        tipo: "nao-metal",
        eletrons: [2, 3],
        estado: "Sólido"
    },

    {
        numero: 6,
        simbolo: "C",
        nome: "Carbono",
        massa: "12,011",
        grupo: 14,
        periodo: 2,
        tipo: "nao-metal",
        eletrons: [2, 4],
        estado: "Sólido"
    },

    {
        numero: 7,
        simbolo: "N",
        nome: "Nitrogênio",
        massa: "14,007",
        grupo: 15,
        periodo: 2,
        tipo: "nao-metal",
        eletrons: [2, 5],
        estado: "Gasoso"
    },

    {
        numero: 8,
        simbolo: "O",
        nome: "Oxigênio",
        massa: "15,999",
        grupo: 16,
        periodo: 2,
        tipo: "nao-metal",
        eletrons: [2, 6],
        estado: "Gasoso"
    },

    {
        numero: 9,
        simbolo: "F",
        nome: "Flúor",
        massa: "18,998",
        grupo: 17,
        periodo: 2,
        tipo: "halogenio",
        eletrons: [2, 7],
        estado: "Gasoso"
    },

    {
        numero: 10,
        simbolo: "Ne",
        nome: "Neônio",
        massa: "20,180",
        grupo: 18,
        periodo: 2,
        tipo: "gas",
        eletrons: [2, 8],
        estado: "Gasoso"
    },

    // PERÍODO 3
    {
        numero: 11,
        simbolo: "Na",
        nome: "Sódio",
        massa: "22,990",
        grupo: 1,
        periodo: 3,
        tipo: "metal",
        eletrons: [2, 8, 1],
        estado: "Sólido"
    },

    {
        numero: 12,
        simbolo: "Mg",
        nome: "Magnésio",
        massa: "24,305",
        grupo: 2,
        periodo: 3,
        tipo: "metal",
        eletrons: [2, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 13,
        simbolo: "Al",
        nome: "Alumínio",
        massa: "26,982",
        grupo: 13,
        periodo: 3,
        tipo: "metal",
        eletrons: [2, 8, 3],
        estado: "Sólido"
    },

    {
        numero: 14,
        simbolo: "Si",
        nome: "Silício",
        massa: "28,085",
        grupo: 14,
        periodo: 3,
        tipo: "nao-metal",
        eletrons: [2, 8, 4],
        estado: "Sólido"
    },

    {
        numero: 15,
        simbolo: "P",
        nome: "Fósforo",
        massa: "30,974",
        grupo: 15,
        periodo: 3,
        tipo: "nao-metal",
        eletrons: [2, 8, 5],
        estado: "Sólido"
    },

    {
        numero: 16,
        simbolo: "S",
        nome: "Enxofre",
        massa: "32,06",
        grupo: 16,
        periodo: 3,
        tipo: "nao-metal",
        eletrons: [2, 8, 6],
        estado: "Sólido"
    },

    {
        numero: 17,
        simbolo: "Cl",
        nome: "Cloro",
        massa: "35,45",
        grupo: 17,
        periodo: 3,
        tipo: "halogenio",
        eletrons: [2, 8, 7],
        estado: "Gasoso"
    },

    {
        numero: 18,
        simbolo: "Ar",
        nome: "Argônio",
        massa: "39,948",
        grupo: 18,
        periodo: 3,
        tipo: "gas",
        eletrons: [2, 8, 8],
        estado: "Gasoso"
    },

    // PERÍODO 4
    {
        numero: 19,
        simbolo: "K",
        nome: "Potássio",
        massa: "39,098",
        grupo: 1,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 8, 1],
        estado: "Sólido"
    },

    {
        numero: 20,
        simbolo: "Ca",
        nome: "Cálcio",
        massa: "40,078",
        grupo: 2,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 21,
        simbolo: "Sc",
        nome: "Escândio",
        massa: "44,956",
        grupo: 3,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 22,
        simbolo: "Ti",
        nome: "Titânio",
        massa: "47,867",
        grupo: 4,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 10, 2],
        estado: "Sólido"
    },

    {
        numero: 23,
        simbolo: "V",
        nome: "Vanádio",
        massa: "50,942",
        grupo: 5,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 11, 2],
        estado: "Sólido"
    },

    {
        numero: 24,
        simbolo: "Cr",
        nome: "Cromo",
        massa: "51,996",
        grupo: 6,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 13, 1],
        estado: "Sólido"
    },

    {
        numero: 25,
        simbolo: "Mn",
        nome: "Manganês",
        massa: "54,938",
        grupo: 7,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 13, 2],
        estado: "Sólido"
    },

    {
        numero: 26,
        simbolo: "Fe",
        nome: "Ferro",
        massa: "55,845",
        grupo: 8,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 14, 2],
        estado: "Sólido"
    },

    {
        numero: 27,
        simbolo: "Co",
        nome: "Cobalto",
        massa: "58,933",
        grupo: 9,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 15, 2],
        estado: "Sólido"
    },

    {
        numero: 28,
        simbolo: "Ni",
        nome: "Níquel",
        massa: "58,693",
        grupo: 10,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 16, 2],
        estado: "Sólido"
    },

    {
        numero: 29,
        simbolo: "Cu",
        nome: "Cobre",
        massa: "63,546",
        grupo: 11,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 18, 1],
        estado: "Sólido"
    },

    {
        numero: 30,
        simbolo: "Zn",
        nome: "Zinco",
        massa: "65,38",
        grupo: 12,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 18, 2],
        estado: "Sólido"
    },

    {
        numero: 31,
        simbolo: "Ga",
        nome: "Gálio",
        massa: "69,723",
        grupo: 13,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 18, 3],
        estado: "Sólido"
    },

    {
        numero: 32,
        simbolo: "Ge",
        nome: "Germânio",
        massa: "72,630",
        grupo: 14,
        periodo: 4,
        tipo: "metal",
        eletrons: [2, 8, 18, 4],
        estado: "Sólido"
    },

    {
        numero: 33,
        simbolo: "As",
        nome: "Arsênio",
        massa: "74,922",
        grupo: 15,
        periodo: 4,
        tipo: "nao-metal",
        eletrons: [2, 8, 18, 5],
        estado: "Sólido"
    },

    {
        numero: 34,
        simbolo: "Se",
        nome: "Selênio",
        massa: "78,971",
        grupo: 16,
        periodo: 4,
        tipo: "nao-metal",
        eletrons: [2, 8, 18, 6],
        estado: "Sólido"
    },

    {
        numero: 35,
        simbolo: "Br",
        nome: "Bromo",
        massa: "79,904",
        grupo: 17,
        periodo: 4,
        tipo: "halogenio",
        eletrons: [2, 8, 18, 7],
        estado: "Líquido"
    },

    {
        numero: 36,
        simbolo: "Kr",
        nome: "Criptônio",
        massa: "83,798",
        grupo: 18,
        periodo: 4,
        tipo: "gas",
        eletrons: [2, 8, 18, 8],
        estado: "Gasoso"
    },

    // PERÍODO 5
    {
        numero: 37,
        simbolo: "Rb",
        nome: "Rubídio",
        massa: "85,468",
        grupo: 1,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 8, 1],
        estado: "Sólido"
    },

    {
        numero: 38,
        simbolo: "Sr",
        nome: "Estrôncio",
        massa: "87,62",
        grupo: 2,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 39,
        simbolo: "Y",
        nome: "Ítrio",
        massa: "88,906",
        grupo: 3,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 40,
        simbolo: "Zr",
        nome: "Zircônio",
        massa: "91,224",
        grupo: 4,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 10, 2],
        estado: "Sólido"
    },

    {
        numero: 41,
        simbolo: "Nb",
        nome: "Nióbio",
        massa: "92,906",
        grupo: 5,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 12, 1],
        estado: "Sólido"
    },

    {
        numero: 42,
        simbolo: "Mo",
        nome: "Molibdênio",
        massa: "95,95",
        grupo: 6,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 13, 1],
        estado: "Sólido"
    },

    {
        numero: 43,
        simbolo: "Tc",
        nome: "Tecnécio",
        massa: "(98)",
        grupo: 7,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 13, 2],
        estado: "Sólido"
    },

    {
        numero: 44,
        simbolo: "Ru",
        nome: "Rutênio",
        massa: "101,07",
        grupo: 8,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 15, 1],
        estado: "Sólido"
    },

    {
        numero: 45,
        simbolo: "Rh",
        nome: "Ródio",
        massa: "102,91",
        grupo: 9,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 16, 1],
        estado: "Sólido"
    },

    {
        numero: 46,
        simbolo: "Pd",
        nome: "Paládio",
        massa: "106,42",
        grupo: 10,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18],
        estado: "Sólido"
    },

    {
        numero: 47,
        simbolo: "Ag",
        nome: "Prata",
        massa: "107,87",
        grupo: 11,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 1],
        estado: "Sólido"
    },

    {
        numero: 48,
        simbolo: "Cd",
        nome: "Cádmio",
        massa: "112,41",
        grupo: 12,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 2],
        estado: "Sólido"
    },

    {
        numero: 49,
        simbolo: "In",
        nome: "Índio",
        massa: "114,82",
        grupo: 13,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 3],
        estado: "Sólido"
    },

    {
        numero: 50,
        simbolo: "Sn",
        nome: "Estanho",
        massa: "118,71",
        grupo: 14,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 4],
        estado: "Sólido"
    },

    {
        numero: 51,
        simbolo: "Sb",
        nome: "Antimônio",
        massa: "121,76",
        grupo: 15,
        periodo: 5,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 5],
        estado: "Sólido"
    },

    {
        numero: 52,
        simbolo: "Te",
        nome: "Telúrio",
        massa: "127,60",
        grupo: 16,
        periodo: 5,
        tipo: "nao-metal",
        eletrons: [2, 8, 18, 18, 6],
        estado: "Sólido"
    },

    {
        numero: 53,
        simbolo: "I",
        nome: "Iodo",
        massa: "126,90",
        grupo: 17,
        periodo: 5,
        tipo: "halogenio",
        eletrons: [2, 8, 18, 18, 7],
        estado: "Sólido"
    },

    {
        numero: 54,
        simbolo: "Xe",
        nome: "Xenônio",
        massa: "131,29",
        grupo: 18,
        periodo: 5,
        tipo: "gas",
        eletrons: [2, 8, 18, 18, 8],
        estado: "Gasoso"
    },

    // PERÍODO 6

    {
        numero: 55,
        simbolo: "Cs",
        nome: "Césio",
        massa: "132,91",
        grupo: 1,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 8, 1],
        estado: "Sólido"
    },

    {
        numero: 56,
        simbolo: "Ba",
        nome: "Bário",
        massa: "137,33",
        grupo: 2,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 18, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 57,
        simbolo: "La",
        nome: "Lantânio",
        massa: "138,91",
        grupo: 3,
        periodo: 6,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 18, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 58,
        simbolo: "Ce",
        nome: "Cério",
        massa: "140,12",
        grupo: 4,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 19, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 59,
        simbolo: "Pr",
        nome: "Praseodímio",
        massa: "140,91",
        grupo: 5,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 21, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 60,
        simbolo: "Nd",
        nome: "Neodímio",
        massa: "144,24",
        grupo: 6,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 22, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 61,
        simbolo: "Pm",
        nome: "Promécio",
        massa: "(145)",
        grupo: 7,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 23, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 62,
        simbolo: "Sm",
        nome: "Samário",
        massa: "150,36",
        grupo: 8,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 24, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 63,
        simbolo: "Eu",
        nome: "Európio",
        massa: "151,96",
        grupo: 9,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 25, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 64,
        simbolo: "Gd",
        nome: "Gadolínio",
        massa: "157,25",
        grupo: 10,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 25, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 65,
        simbolo: "Tb",
        nome: "Térbio",
        massa: "158,93",
        grupo: 11,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 27, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 66,
        simbolo: "Dy",
        nome: "Disprósio",
        massa: "162,50",
        grupo: 12,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 28, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 67,
        simbolo: "Ho",
        nome: "Hólmio",
        massa: "164,93",
        grupo: 13,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 29, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 68,
        simbolo: "Er",
        nome: "Érbio",
        massa: "167,26",
        grupo: 14,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 30, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 69,
        simbolo: "Tm",
        nome: "Túlio",
        massa: "168,93",
        grupo: 15,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 31, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 70,
        simbolo: "Yb",
        nome: "Itérbio",
        massa: "173,05",
        grupo: 16,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 32, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 71,
        simbolo: "Lu",
        nome: "Lutécio",
        massa: "174,97",
        grupo: 17,
        periodo: 8,
        tipo: "lantanideo",
        eletrons: [2, 8, 18, 32, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 72,
        simbolo: "Hf",
        nome: "Háfnio",
        massa: "178,49",
        grupo: 4,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 10, 2],
        estado: "Sólido"
    },

    {
        numero: 73,
        simbolo: "Ta",
        nome: "Tântalo",
        massa: "180,95",
        grupo: 5,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 11, 2],
        estado: "Sólido"
    },

    {
        numero: 74,
        simbolo: "W",
        nome: "Tungstênio",
        massa: "183,84",
        grupo: 6,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 12, 2],
        estado: "Sólido"
    },

    {
        numero: 75,
        simbolo: "Re",
        nome: "Rênio",
        massa: "186,21",
        grupo: 7,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 13, 2],
        estado: "Sólido"
    },

    {
        numero: 76,
        simbolo: "Os",
        nome: "Ósmio",
        massa: "190,23",
        grupo: 8,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 14, 2],
        estado: "Sólido"
    },

    {
        numero: 77,
        simbolo: "Ir",
        nome: "Irídio",
        massa: "192,22",
        grupo: 9,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 15, 2],
        estado: "Sólido"
    },

    {
        numero: 78,
        simbolo: "Pt",
        nome: "Platina",
        massa: "195,08",
        grupo: 10,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 17, 1],
        estado: "Sólido"
    },

    {
        numero: 79,
        simbolo: "Au",
        nome: "Ouro",
        massa: "196,97",
        grupo: 11,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 1],
        estado: "Sólido"
    },

    {
        numero: 80,
        simbolo: "Hg",
        nome: "Mercúrio",
        massa: "200,59",
        grupo: 12,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 2],
        estado: "Líquido"
    },

    {
        numero: 81,
        simbolo: "Tl",
        nome: "Tálio",
        massa: "204,38",
        grupo: 13,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 3],
        estado: "Sólido"
    },

    {
        numero: 82,
        simbolo: "Pb",
        nome: "Chumbo",
        massa: "207,2",
        grupo: 14,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 4],
        estado: "Sólido"
    },

    {
        numero: 83,
        simbolo: "Bi",
        nome: "Bismuto",
        massa: "208,98",
        grupo: 15,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 5],
        estado: "Sólido"
    },

    {
        numero: 84,
        simbolo: "Po",
        nome: "Polônio",
        massa: "(209)",
        grupo: 16,
        periodo: 6,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 6],
        estado: "Sólido"
    },

    {
        numero: 85,
        simbolo: "At",
        nome: "Astato",
        massa: "(210)",
        grupo: 17,
        periodo: 6,
        tipo: "halogenio",
        eletrons: [2, 8, 18, 32, 18, 7],
        estado: "Sólido"
    },

    {
        numero: 86,
        simbolo: "Rn",
        nome: "Radônio",
        massa: "(222)",
        grupo: 18,
        periodo: 6,
        tipo: "gas",
        eletrons: [2, 8, 18, 32, 18, 8],
        estado: "Gasoso"
    },

    // PERÍODO 7

    {
        numero: 87,
        simbolo: "Fr",
        nome: "Frâncio",
        massa: "(223)",
        grupo: 1,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 8, 1],
        estado: "Sólido"
    },

    {
        numero: 88,
        simbolo: "Ra",
        nome: "Rádio",
        massa: "(226)",
        grupo: 2,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 18, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 89,
        simbolo: "Ac",
        nome: "Actínio",
        massa: "(227)",
        grupo: 3,
        periodo: 7,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 18, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 90,
        simbolo: "Th",
        nome: "Tório",
        massa: "232,04",
        grupo: 4,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 18, 10, 2],
        estado: "Sólido"
    },

    {
        numero: 91,
        simbolo: "Pa",
        nome: "Protactínio",
        massa: "231,04",
        grupo: 5,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 20, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 92,
        simbolo: "U",
        nome: "Urânio",
        massa: "238,03",
        grupo: 6,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 21, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 93,
        simbolo: "Np",
        nome: "Netúnio",
        massa: "(237)",
        grupo: 7,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 22, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 94,
        simbolo: "Pu",
        nome: "Plutônio",
        massa: "(244)",
        grupo: 8,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 24, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 95,
        simbolo: "Am",
        nome: "Amerício",
        massa: "(243)",
        grupo: 9,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 25, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 96,
        simbolo: "Cm",
        nome: "Cúrio",
        massa: "(247)",
        grupo: 10,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 25, 9, 2],
        estado: "Sólido"
    },

    {
        numero: 97,
        simbolo: "Bk",
        nome: "Berquélio",
        massa: "(247)",
        grupo: 11,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 27, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 98,
        simbolo: "Cf",
        nome: "Califórnio",
        massa: "(251)",
        grupo: 12,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 28, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 99,
        simbolo: "Es",
        nome: "Einstênio",
        massa: "(252)",
        grupo: 13,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 29, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 100,
        simbolo: "Fm",
        nome: "Férmio",
        massa: "(257)",
        grupo: 14,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 30, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 101,
        simbolo: "Md",
        nome: "Mendelévio",
        massa: "(258)",
        grupo: 15,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 31, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 102,
        simbolo: "No",
        nome: "Nobélio",
        massa: "(259)",
        grupo: 16,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 32, 8, 2],
        estado: "Sólido"
    },

    {
        numero: 103,
        simbolo: "Lr",
        nome: "Laurêncio",
        massa: "(266)",
        grupo: 17,
        periodo: 9,
        tipo: "actinideo",
        eletrons: [2, 8, 18, 32, 32, 8, 3],
        estado: "Sólido"
    },

    {
        numero: 104,
        simbolo: "Rf",
        nome: "Rutherfórdio",
        massa: "(267)",
        grupo: 4,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 10, 2],
        estado: "Sólido"
    },

    {
        numero: 105,
        simbolo: "Db",
        nome: "Dúbnio",
        massa: "(268)",
        grupo: 5,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 11, 2],
        estado: "Sólido"
    },

    {
        numero: 106,
        simbolo: "Sg",
        nome: "Seabórgio",
        massa: "(269)",
        grupo: 6,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 12, 2],
        estado: "Sólido"
    },

    {
        numero: 107,
        simbolo: "Bh",
        nome: "Bóhrio",
        massa: "(270)",
        grupo: 7,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 13, 2],
        estado: "Sólido"
    },

    {
        numero: 108,
        simbolo: "Hs",
        nome: "Hássio",
        massa: "(277)",
        grupo: 8,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 14, 2],
        estado: "Sólido"
    },

    {
        numero: 109,
        simbolo: "Mt",
        nome: "Meitnério",
        massa: "(278)",
        grupo: 9,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 15, 2],
        estado: "Sólido"
    },

    {
        numero: 110,
        simbolo: "Ds",
        nome: "Darmstádtio",
        massa: "(281)",
        grupo: 10,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 16, 2],
        estado: "Sólido"
    },

    {
        numero: 111,
        simbolo: "Rg",
        nome: "Roentgênio",
        massa: "(282)",
        grupo: 11,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 17, 2],
        estado: "Sólido"
    },

    {
        numero: 112,
        simbolo: "Cn",
        nome: "Copernício",
        massa: "(285)",
        grupo: 12,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 18, 2],
        estado: "Sólido"
    },

    {
        numero: 113,
        simbolo: "Nh",
        nome: "Nihônio",
        massa: "(286)",
        grupo: 13,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 18, 3],
        estado: "Sólido"
    },

    {
        numero: 114,
        simbolo: "Fl",
        nome: "Fleróvio",
        massa: "(289)",
        grupo: 14,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 18, 4],
        estado: "Sólido"
    },

    {
        numero: 115,
        simbolo: "Mc",
        nome: "Moscóvio",
        massa: "(290)",
        grupo: 15,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 18, 5],
        estado: "Sólido"
    },

    {
        numero: 116,
        simbolo: "Lv",
        nome: "Livermório",
        massa: "(293)",
        grupo: 16,
        periodo: 7,
        tipo: "metal",
        eletrons: [2, 8, 18, 32, 32, 18, 6],
        estado: "Sólido"
    },

    {
        numero: 117,
        simbolo: "Ts",
        nome: "Tenessino",
        massa: "(294)",
        grupo: 17,
        periodo: 7,
        tipo: "halogenio",
        eletrons: [2, 8, 18, 32, 32, 18, 7],
        estado: "Sólido"
    },

    {
        numero: 118,
        simbolo: "Og",
        nome: "Oganessônio",
        massa: "(294)",
        grupo: 18,
        periodo: 7,
        tipo: "gas",
        eletrons: [2, 8, 18, 32, 32, 18, 8],
        estado: "Gasoso"
    }

];


/* ELEMENTOS DA TABELA */

const tabela = document.getElementById("tabela");
let elementoSelecionado = null;
const imagensPorFamilia = {};

const tipoParaFamilia = {
    metal: "metais",
    "nao-metal": "nao-metais",
    gas: "gases",
    halogenio: "halogenios",
    lantanideo: "lantanideos",
    actinideo: "actinideos"
};

const nomeDaFamilia = {
    metal: "Metais",
    "nao-metal": "Não metais",
    gas: "Gases nobres",
    halogenio: "Halogênios",
    lantanideo: "Lantanídeos",
    actinideo: "Actinídeos"
};

const familiaImagem = document.getElementById("familiaImagem");
const uploadFamiliaImagem = document.getElementById("uploadFamiliaImagem");

uploadFamiliaImagem.addEventListener("change", (event) => {

    const arquivo = event.target.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = () => {
        const familia = familiaImagem.value;
        imagensPorFamilia[familia] = leitor.result;

        if (elementoSelecionado) {
            mostrarElemento(elementoSelecionado, document.querySelector(
                `.elemento[data-numero="${elementoSelecionado.numero}"]`
            ));
        }
    };

    leitor.readAsDataURL(arquivo);

});

function criarTabela() {

    tabela.innerHTML = "";

    elementos.forEach(elemento => {

        const div = document.createElement("div");

        div.className = `elemento ${elemento.tipo}`;
        div.dataset.numero = elemento.numero;

        /*
        gridColumn = grupo
        gridRow = período
        */

        let coluna = elemento.grupo;
        let linha = elemento.periodo;

        /*
        Lantanídeos e actinídeos ficam
        nas linhas inferiores.
        */

        if (elemento.tipo === "lantanideo") {
            linha = 8;
            coluna = elemento.numero - 57;
        }

        if (elemento.tipo === "actinideo") {
            linha = 9;
            coluna = elemento.numero - 89;
        }

        div.style.gridColumn = coluna;
        div.style.gridRow = linha;

        div.setAttribute("tabindex", "0");

        div.setAttribute(
            "aria-label",
            `${elemento.nome}, número atômico ${elemento.numero}`
        );

        div.innerHTML = `
            <span class="numero">${elemento.numero}</span>
            <span class="simbolo">${elemento.simbolo}</span>
            <span class="nome">${elemento.nome}</span>
        `;

        div.addEventListener("click", () => {
            mostrarElemento(elemento, div);
        });

        div.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                mostrarElemento(elemento, div);

            }

        });

        tabela.appendChild(div);

    });

}


/* MOSTRAR INFORMAÇÕES */

function mostrarElemento(elemento, elementoHTML) {

    elementoSelecionado = elemento;

    document.querySelectorAll(".elemento").forEach(el => {
        el.classList.remove("selecionado");
    });

    elementoHTML.classList.add("selecionado");

    const informacoes = document.getElementById("informacoes");
    const familiaDoElemento = tipoParaFamilia[elemento.tipo] || "metais";
    const imagemDaFamilia = imagensPorFamilia[familiaDoElemento];

    informacoes.innerHTML = `

        <div class="info-header">

            <div class="info-simbolo ${elemento.tipo}">

                <strong>${elemento.simbolo}</strong>

                <small>${elemento.numero}</small>

            </div>

            <div>

                <h2>${elemento.nome}</h2>

                <p>
                    Número atômico: ${elemento.numero}
                </p>

            </div>

        </div>

        <div class="info-layout">

            <div class="info-texto">

                <div class="info-grid">

                    <div class="info-card">

                        <h3>🔢 Número atômico</h3>

                        <p>${elemento.numero}</p>

                    </div>


                    <div class="info-card">

                        <h3>⚖️ Massa atômica</h3>

                        <p>${elemento.massa}</p>

                    </div>


                    <div class="info-card">

                        <h3>📊 Período</h3>

                        <p>${elemento.periodo}</p>

                    </div>


                    <div class="info-card">

                        <h3>📌 Grupo</h3>

                        <p>${elemento.grupo}</p>

                    </div>


                    <div class="info-card">

                        <h3>🌡️ Estado</h3>

                        <p>${elemento.estado}</p>

                    </div>


                    <div class="info-card">

                        <h3>⚛️ Elétrons</h3>

                        <p>${elemento.numero}</p>

                    </div>

                </div>


                <div class="eletrons">

                    <h3>🪐 Distribuição dos elétrons</h3>

                    <div class="camadas">

                        ${elemento.eletrons.map(
                            (quantidade, index) =>

                            `<div class="camada">
                                Camada ${index + 1}: ${quantidade}
                            </div>`

                        ).join("")}

                    </div>

                </div>

            </div>

            ${imagemDaFamilia ? `
                <div class="info-imagem">
                    <img src="${imagemDaFamilia}" alt="Imagem da família ${nomeDaFamilia[elemento.tipo] || "selecionada"}">
                </div>
            ` : ""}

        </div>

        <div style="margin-top:20px;">

            <button onclick="falarElemento(${elemento.numero})">

                🔊 Ouvir informações

            </button>

        </div>

    `;

    falarElemento(elemento.numero);
}


/* VOZ */

function falarElemento(numero) {

    const elemento = elementos.find(
        el => el.numero === numero
    );

    if (!elemento) return;

    if (!("speechSynthesis" in window)) {

        alert("Seu navegador não possui suporte para leitura por voz.");

        return;

    }

    speechSynthesis.cancel();

    const texto = `

        Elemento ${elemento.nome}.

        Símbolo ${elemento.simbolo}.

        Número atômico ${elemento.numero}.

        Massa atômica ${elemento.massa}.

        Estado ${elemento.estado}.

        Possui ${elemento.numero} elétrons.

        Distribuição eletrônica:
        ${elemento.eletrons.join(", ")}.

    `;

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "pt-BR";

    voz.rate = 0.85;

    voz.pitch = 1;

    speechSynthesis.speak(voz);

}


/* MODO ESCURO */

const botaoModoEscuro =
    document.getElementById("modoEscuro");


botaoModoEscuro.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        botaoModoEscuro.textContent =
            "☀️ Modo claro";

    } else {

        botaoModoEscuro.textContent =
            "🌙 Modo escuro";

    }

});


/* TAMANHO */

const tamanho =
    document.getElementById("tamanho");


tamanho.addEventListener("change", () => {

    tabela.classList.remove(
        "tamanho-pequeno",
        "tamanho-medio",
        "tamanho-grande"
    );

    tabela.classList.add(
        `tamanho-${tamanho.value}`
    );

});


/* SATURAÇÃO */

const saturacao =
    document.getElementById("saturacao");


saturacao.addEventListener("change", () => {

    tabela.classList.remove(
        "saturacao-baixa",
        "saturacao-media",
        "saturacao-alta"
    );

    tabela.classList.add(
        `saturacao-${saturacao.value}`
    );

});


/* PESQUISA */

const pesquisa =
    document.getElementById("pesquisa");


pesquisa.addEventListener("input", () => {

    const texto =
        pesquisa.value
        .toLowerCase()
        .trim();

    document.querySelectorAll(".elemento")
        .forEach((elementoHTML, index) => {

            const elemento =
                elementos[index];

            const encontrado =

                elemento.nome
                .toLowerCase()
                .includes(texto)

                ||

                elemento.simbolo
                .toLowerCase()
                .includes(texto)

                ||

                elemento.numero
                .toString()
                .includes(texto);

            if (encontrado || texto === "") {

                elementoHTML.classList.remove("oculto");

            } else {

                elementoHTML.classList.add("oculto");

            }

        });

});


/* INICIALIZAÇÃO */

criarTabela();

tabela.classList.add("tamanho-medio");
tabela.classList.add("saturacao-media");

const cor = document.getElementById("cor");

cor.addEventListener("change", () => {
    document.body.classList.remove(
        "cor-padrao",
        "cor-azul",
        "cor-verde",
        "cor-vermelho"
    );

    document.body.classList.add(`cor-${cor.value}`);
});