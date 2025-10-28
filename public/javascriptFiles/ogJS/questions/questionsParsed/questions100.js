const questions100 = [
    {
        "question": "O que causa as fases da Lua?",
        "options": [
            "Sombra da Terra",
            "Nuvens bloqueiam",
            "Posição da Lua em relação à Terra e Sol",
            "Lua mudando de forma"
        ],
        "answer": 2,
        "fact": "As fases acontecem devido à posição da Lua em relação à Terra e ao Sol."
    },
    {
        "question": "Por que os planetas mais distantes do Sol têm órbitas mais longas?",
        "options": [
            "Porque eles têm mais massa",
            "Porque a gravidade do Sol é mais fraca em maiores distâncias",
            "Porque eles estão mais afastados do Sol",
            "Porque suas luas influenciam em suas órbitas"
        ],
        "answer": 1,
        "fact": "A gravidade do Sol diminui com a distância, o que faz com que os planetas mais distantes tenham órbitas mais longas."
    },
    {
        "question": "Quanto tempo leva a Lua para dar uma volta completa em torno da Terra?",
        "options": [
            "7 dias",
            "14 dias",
            "27 dias",
            "365 dias"
        ],
        "answer": 2,
        "fact": "A Lua leva cerca de 27 dias para orbitar a Terra."
    },
    {
        "question": "Qual planeta tem um dia mais longo que o ano?",
        "options": [
            "Vênus",
            "Mercúrio",
            "Marte",
            "Terra"
        ],
        "answer": 0,
        "fact": "Vênus leva mais tempo para girar em torno do seu eixo do que para orbitar o Sol."
    },
    {
        "question": "O que é uma constelação?",
        "options": [
            "Um grupo de planetas",
            "Um agrupamento de estrelas formando figuras",
            "Um tipo de galáxia",
            "Um cometa"
        ],
        "answer": 1,
        "fact": "Constelações são padrões de estrelas no céu que formam figuras imaginárias."
    },
    {
        "question": "Qual é o nome da nossa galáxia?",
        "options": [
            "Andrômeda",
            "Via Láctea",
            "Sombrero",
            "Triângulo"
        ],
        "answer": 1,
        "fact": "Vivemos na galáxia Via Láctea."
    },
    {
        "question": "Qual tipo de galáxia é a Via Láctea?",
        "options": [
            "Elíptica",
            "Espiral",
            "Irregular",
            "Lenticuar"
        ],
        "answer": 1,
        "fact": "A Via Láctea é uma galáxia espiral."
    },
    {
        "question": "Qual planeta está mais distante do Sol?",
        "options": [
            "Urano",
            "Netuno",
            "Plutão",
            "Saturno"
        ],
        "answer": 1,
        "fact": "Netuno tem os ventos mais rápidos e uma órbita longa."
    },
    {
        "question": "Qual é a causa das estações do ano na Terra?",
        "options": [
            "Rotação da Terra",
            "Inclinação do eixo da Terra",
            "Distância do Sol",
            "Atividade solar"
        ],
        "answer": 1,
        "fact": "As estações ocorrem pela inclinação do eixo da Terra em relação ao plano da órbita."
    },
    {
        "question": "O que é uma estrela cadente?",
        "options": [
            "Estrela rápida",
            "Meteoro em combustão",
            "Cometa",
            "Planeta em movimento"
        ],
        "answer": 1,
        "fact": "É um meteoro queimando na atmosfera terrestre."
    },
    {
        "question": "O que é um eclipse lunar?",
        "options": [
            "Quando a Terra fica entre o Sol e a Lua",
            "Quando a Lua fica entre o Sol e a Terra",
            "Quando a Lua desaparece no céu",
            "Quando o Sol é coberto pela Terra"
        ],
        "answer": 0,
        "fact": "O eclipse lunar ocorre quando a Terra bloqueia a luz do Sol da Lua."
    },
    {
        "question": "Qual é a principal causa da radiação cósmica de fundo?",
        "options": [
            "Explosões de supernovas",
            "Radiação residual do Big Bang",
            "Radiação das estrelas",
            "Radiação do Sol"
        ],
        "answer": 1,
        "fact": "A radiação cósmica de fundo é a radiação remanescente do Big Bang, que preenche o universo."
    },
    {
        "question": "Qual planeta tem maior número de anéis visíveis?",
        "options": [
            "Júpiter",
            "Saturno",
            "Urano",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Saturno possui o sistema de anéis mais visível e impressionante do sistema solar, composto por bilhões de partículas de gelo e rocha."
    },
    {
        "question": "Qual é a principal diferença entre uma estrela de sequência principal e uma gigante vermelha?",
        "options": [
            "A sequência principal é mais quente",
            "A gigante vermelha tem maior massa",
            "A sequência principal está no começo da vida de uma estrela",
            "A gigante vermelha é uma estrela em estágio final"
        ],
        "answer": 3,
        "fact": "As gigantes vermelhas são estrelas que já esgotaram seu combustível nuclear e não têm mais fusão acontecendo em seu núcleo."
    },
    {
        "question": "Qual é o fenômeno responsável pela formação de uma estrela?",
        "options": [
            "Explosão de uma supernova",
            "Colapso de uma nebulosa",
            "Acúmulo de planetas em uma região",
            "Fusão de átomos de hélio"
        ],
        "answer": 1,
        "fact": "As estrelas se formam quando uma nebulosa colapsa devido à gravidade, iniciando reações de fusão nuclear."
    },
    {
        "question": "Qual planeta tem uma grande tempestade chamada Grande Mancha Azul?",
        "options": [
            "Júpiter",
            "Netuno",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "Netuno tem a Grande Mancha Azul, uma tempestade gigante."
    },
    {
        "question": "Quem foi o primeiro homem a pisar na Lua?",
        "options": [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins"
        ],
        "answer": 1,
        "fact": "Neil Armstrong foi o primeiro homem a pisar na Lua em 1969."
    },
    {
        "question": "Qual planeta é conhecido por seus ventos fortes e tempestades constantes?",
        "options": [
            "Júpiter",
            "Netuno",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "Netuno tem ventos que podem atingir mais de 2.000 km/h."
    },
    {
        "question": "O que é a 'zona habitável' de uma estrela?",
        "options": [
            "A região onde a estrela se forma",
            "A região onde há possibilidade de vida como a Terra",
            "A região onde as estrelas estão em equilíbrio",
            "A região mais quente ao redor da estrela"
        ],
        "answer": 1,
        "fact": "A zona habitável é a área ao redor de uma estrela onde as condições podem ser adequadas para a água líquida existir, um requisito para a vida."
    },
    {
        "question": "Qual é o planeta mais quente?",
        "options": [
            "Mercúrio",
            "Vênus",
            "Terra",
            "Marte"
        ],
        "answer": 1,
        "fact": "Vênus é mais quente que Mercúrio devido à sua atmosfera densa."
    },
    {
        "question": "O que caracteriza uma estrela anã branca?",
        "options": [
            "Grande massa e baixa temperatura",
            "Baixa massa e alta temperatura",
            "Alta massa e alta temperatura",
            "Baixa massa e baixa temperatura"
        ],
        "answer": 3,
        "fact": "As anãs brancas são estrelas que já esgotaram seu combustível nuclear e não têm mais fusão acontecendo em seu núcleo."
    },
    {
        "question": "O que é um cometa?",
        "options": [
            "Um pedaço de rocha e gelo que orbita o Sol",
            "Um tipo de estrela",
            "Um satélite artificial",
            "Um planeta anão"
        ],
        "answer": 0,
        "fact": "Cometas são corpos celestes compostos por gelo, poeira e rochas."
    },
    {
        "question": "O que mantém os planetas em órbita?",
        "options": [
            "Magnetismo",
            "Gravidade",
            "Vento solar",
            "Inércia"
        ],
        "answer": 1,
        "fact": "A gravidade mantém os planetas em órbita ao redor do Sol."
    },
    {
        "question": "Qual planeta é conhecido por seus ventos fortes e tempestades constantes?",
        "options": [
            "Júpiter",
            "Netuno",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "Netuno tem ventos que podem atingir mais de 2.000 km/h."
    },
    {
        "question": "Qual planeta tem uma atmosfera principalmente composta por dióxido de carbono?",
        "options": [
            "Terra",
            "Marte",
            "Vênus",
            "Mercúrio"
        ],
        "answer": 1,
        "fact": "A atmosfera de Marte é muito rarefeita, mas ainda assim é composta por cerca de 95% de dióxido de carbono."
    },
    {
        "question": "Como podemos determinar a distância das estrelas usando a paralaxe?",
        "options": [
            "Observando as estrelas de diferentes pontos na Terra",
            "Observando o brilho das estrelas",
            "Medindo a diferença de posição das estrelas em diferentes épocas do ano",
            "Analisando o espectro de luz das estrelas"
        ],
        "answer": 2,
        "fact": "A paralaxe usa a mudança aparente na posição de uma estrela quando vista de pontos opostos da órbita da Terra."
    },
    {
        "question": "Qual destes corpos celestes é uma estrela?",
        "options": [
            "Sirius",
            "Lua",
            "Vênus",
            "Cometa"
        ],
        "answer": 0,
        "fact": "Sirius é a estrela mais brilhante no céu noturno."
    },
    {
        "question": "Qual é o planeta mais quente?",
        "options": [
            "Mercúrio",
            "Vênus",
            "Terra",
            "Marte"
        ],
        "answer": 1,
        "fact": "Vênus é mais quente que Mercúrio devido à sua atmosfera densa."
    },
    {
        "question": "Qual planeta tem mais luas?",
        "options": [
            "Júpiter",
            "Saturno",
            "Urano",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Saturno possui atualmente o maior número de luas conhecidas do sistema solar, com mais de 270 identificadas, superando Júpiter."
    },
    {
        "question": "Como se chama o movimento da Terra ao redor do Sol?",
        "options": [
            "Rotação",
            "Translação",
            "Revolução",
            "Orbitação"
        ],
        "answer": 1,
        "fact": "O movimento de translação é a órbita da Terra em torno do Sol."
    },
    {
        "question": "Qual é conhecido como a Estrela Vespertina?",
        "options": [
            "Mercúrio",
            "Vênus",
            "Marte",
            "Júpiter"
        ],
        "answer": 1,
        "fact": "Vênus brilha próximo ao nascer e pôr do sol, por isso é chamada Estrela Vespertina."
    },
    {
        "question": "O que são as manchas solares?",
        "options": [
            "Evidência de fusão nuclear",
            "Área do Sol mais fria",
            "Áreas mais quentes no Sol",
            "Regiões do Sol com tempestades magnéticas"
        ],
        "answer": 1,
        "fact": "As manchas solares são regiões no Sol com temperaturas mais baixas, mas ainda extremamente quentes."
    },
    {
        "question": "O que causa as fases da Lua?",
        "options": [
            "Sombra da Terra",
            "Nuvens bloqueiam",
            "Posição da Lua em relação à Terra e Sol",
            "Lua mudando de forma"
        ],
        "answer": 2,
        "fact": "As fases acontecem devido à posição da Lua em relação à Terra e ao Sol."
    },
    {
        "question": "O que é um ano-luz?",
        "options": [
            "Tempo que a luz leva para chegar ao Sol",
            "Velocidade da luz",
            "Distância percorrida pela luz em um ano",
            "Duração de um ano em Vênus"
        ],
        "answer": 2,
        "fact": "Um ano-luz é uma medida de distância, equivalente a cerca de 9,46 trilhões de km."
    },
    {
        "question": "Qual destas estrelas é mais próxima da Terra?",
        "options": [
            "Sirius",
            "Sol",
            "Alpha Centauri",
            "Betelgeuse"
        ],
        "answer": 1,
        "fact": "O Sol é a estrela mais próxima da Terra."
    },
    {
        "question": "Qual é a principal fonte de energia para a Terra?",
        "options": [
            "Sol",
            "Lua",
            "Estrelas",
            "Vento"
        ],
        "answer": 0,
        "fact": "O Sol é a principal fonte de energia para a Terra."
    },
    {
        "question": "Qual destes corpos celestes é um satélite natural da Terra?",
        "options": [
            "Lua",
            "Sol",
            "Marte",
            "Cometa"
        ],
        "answer": 0,
        "fact": "A Lua é o único satélite natural da Terra."
    },
    {
        "question": "Qual é o maior planeta do sistema solar?",
        "options": [
            "Terra",
            "Saturno",
            "Júpiter",
            "Netuno"
        ],
        "answer": 2,
        "fact": "Júpiter é tão grande que todos os outros planetas caberiam dentro dele!"
    },
    {
        "question": "Qual planeta tem mais luas?",
        "options": [
            "Júpiter",
            "Saturno",
            "Urano",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Saturno possui atualmente o maior número de luas conhecidas do sistema solar, com mais de 270 identificadas, superando Júpiter."
    },
    {
        "question": "Qual destes planetas é um planeta anão?",
        "options": [
            "Plutão",
            "Netuno",
            "Saturno",
            "Vênus"
        ],
        "answer": 0,
        "fact": "Plutão foi reclassificado como planeta anão em 2006."
    },
    {
        "question": "Quantos anos tem o nosso sistema solar?",
        "options": [
            "4,6 milhões",
            "46 milhões",
            "460 milhões",
            "4,6 bilhões"
        ],
        "answer": 3,
        "fact": "Nosso sistema solar tem cerca de 4,6 bilhões de anos."
    },
    {
        "question": "O que é uma estrela cadente?",
        "options": [
            "Estrela rápida",
            "Meteoro em combustão",
            "Cometa",
            "Planeta em movimento"
        ],
        "answer": 1,
        "fact": "É um meteoro queimando na atmosfera terrestre."
    },
    {
        "question": "Qual é o papel dos cometas no sistema solar?",
        "options": [
            "Criar anéis ao redor dos planetas",
            "Gerar energia para os planetas",
            "Transporte de água e compostos orgânicos",
            "Formação de planetas"
        ],
        "answer": 2,
        "fact": "Os cometas transportam água e compostos orgânicos que podem ter sido essenciais para a vida na Terra."
    },
    {
        "question": "O que é um buraco negro?",
        "options": [
            "Uma estrela gigante",
            "Um ponto de gravidade intensa",
            "Um planeta escuro",
            "Uma galáxia"
        ],
        "answer": 1,
        "fact": "Um buraco negro é uma região do espaço com gravidade tão forte que nada escapa."
    },
    {
        "question": "Qual é o principal componente da atmosfera de Marte?",
        "options": [
            "Oxigênio",
            "Nitrogênio",
            "Dióxido de carbono",
            "Hidrogênio"
        ],
        "answer": 2,
        "fact": "A atmosfera de Marte é composta principalmente por dióxido de carbono."
    },
    {
        "question": "Qual planeta é conhecido como o 'planeta anão' com uma órbita excêntrica?",
        "options": [
            "Plutão",
            "Eris",
            "Ceres",
            "Haumea"
        ],
        "answer": 0,
        "fact": "Plutão tem uma órbita mais alongada comparada a planetas maiores."
    },
    {
        "question": "Qual planeta tem anéis?",
        "options": [
            "Urano",
            "Netuno",
            "Saturno",
            "Júpiter"
        ],
        "answer": 2,
        "fact": "Os anéis de Saturno se estendem por mais de 120.000 km e são feitos de gelo e rocha!"
    },
    {
        "question": "O que mantém os planetas em órbita?",
        "options": [
            "Magnetismo",
            "Gravidade",
            "Vento solar",
            "Inércia"
        ],
        "answer": 1,
        "fact": "A gravidade mantém os planetas em órbita ao redor do Sol."
    },
    {
        "question": "Quem foi o primeiro homem a pisar na Lua?",
        "options": [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins"
        ],
        "answer": 1,
        "fact": "Neil Armstrong foi o primeiro homem a pisar na Lua em 1969."
    },
    {
        "question": "O que causa as marés na Terra?",
        "options": [
            "Rotação da Terra",
            "Gravidade da Lua",
            "Vento solar",
            "Atividade vulcânica"
        ],
        "answer": 1,
        "fact": "A gravidade da Lua puxa as águas do mar, causando as marés."
    },
    {
        "question": "Qual fenômeno ocorre quando a Lua fica entre a Terra e o Sol?",
        "options": [
            "Eclipse solar",
            "Eclipse lunar",
            "Fases da Lua",
            "Aurora"
        ],
        "answer": 0,
        "fact": "O eclipse solar ocorre quando a Lua bloqueia a luz do Sol."
    },
    {
        "question": "Qual planeta tem uma grande tempestade chamada Grande Mancha Azul?",
        "options": [
            "Júpiter",
            "Netuno",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "Netuno tem a Grande Mancha Azul, uma tempestade gigante."
    },
    {
        "question": "Qual é conhecido como a Estrela Vespertina?",
        "options": [
            "Mercúrio",
            "Vênus",
            "Marte",
            "Júpiter"
        ],
        "answer": 1,
        "fact": "Vênus brilha próximo ao nascer e pôr do sol, por isso é chamada Estrela Vespertina."
    },
    {
        "question": "Qual planeta tem anéis?",
        "options": [
            "Urano",
            "Netuno",
            "Saturno",
            "Júpiter"
        ],
        "answer": 2,
        "fact": "Os anéis de Saturno se estendem por mais de 120.000 km e são feitos de gelo e rocha!"
    },
    {
        "question": "Qual planeta está mais próximo do Sol?",
        "options": [
            "Vênus",
            "Mercúrio",
            "Terra",
            "Marte"
        ],
        "answer": 1,
        "fact": "Mercúrio orbita o Sol a cada 88 dias terrestres!"
    },
    {
        "question": "Qual planeta gira de lado?",
        "options": [
            "Vênus",
            "Urano",
            "Marte",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Urano gira em um ângulo de 98 graus."
    },
    {
        "question": "Qual planeta tem a Grande Mancha Vermelha?",
        "options": [
            "Marte",
            "Júpiter",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "A Grande Mancha Vermelha de Júpiter é uma enorme tempestade."
    },
    {
        "question": "O que é um asteroide?",
        "options": [
            "Pequeno corpo rochoso que orbita o Sol",
            "Estrela cadente",
            "Cometa",
            "Planeta anão"
        ],
        "answer": 0,
        "fact": "Asteroides são corpos rochosos menores que planetas, orbitando o Sol."
    },
    {
        "question": "Como as estrelas produzem energia?",
        "options": [
            "Através da fusão nuclear no seu núcleo",
            "Por meio da decomposição de elementos químicos",
            "Através da gravidade",
            "Por meio da radiação de partículas subatômicas"
        ],
        "answer": 0,
        "fact": "As estrelas geram energia através da fusão nuclear, onde átomos de hidrogênio se fundem para formar hélio."
    },
    {
        "question": "Como o buraco negro supermassivo no centro da Via Láctea afeta a galáxia?",
        "options": [
            "Ele cria novas estrelas",
            "Ele puxa matéria em direção a ele, criando um disco de acreção",
            "Ele impede a formação de estrelas",
            "Ele age como um portal para outro universo"
        ],
        "answer": 1,
        "fact": "Buracos negros supermassivos atraem matéria, o que forma discos de acreção e pode gerar radiação intensa."
    },
    {
        "question": "Qual destes corpos celestes é um satélite natural da Terra?",
        "options": [
            "Lua",
            "Sol",
            "Marte",
            "Cometa"
        ],
        "answer": 0,
        "fact": "A Lua é o único satélite natural da Terra."
    },
    {
        "question": "Qual planeta gira de lado?",
        "options": [
            "Vênus",
            "Urano",
            "Marte",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Urano gira em um ângulo de 98 graus."
    },
    {
        "question": "Qual fenômeno ocorre quando a Lua fica entre a Terra e o Sol?",
        "options": [
            "Eclipse solar",
            "Eclipse lunar",
            "Fases da Lua",
            "Aurora"
        ],
        "answer": 0,
        "fact": "O eclipse solar ocorre quando a Lua bloqueia a luz do Sol."
    },
    {
        "question": "Por que ocorre o dia e a noite na Terra?",
        "options": [
            "Por causa da órbita da Terra",
            "Por causa da rotação da Terra",
            "Por causa da inclinação da Terra",
            "Por causa da Lua"
        ],
        "answer": 1,
        "fact": "O dia e a noite ocorrem devido à rotação da Terra sobre seu eixo."
    },
    {
        "question": "Qual planeta está mais distante do Sol?",
        "options": [
            "Urano",
            "Netuno",
            "Plutão",
            "Saturno"
        ],
        "answer": 1,
        "fact": "Netuno tem os ventos mais rápidos e uma órbita longa."
    },
    {
        "question": "Qual planeta está mais próximo do Sol?",
        "options": [
            "Vênus",
            "Mercúrio",
            "Terra",
            "Marte"
        ],
        "answer": 1,
        "fact": "Mercúrio orbita o Sol a cada 88 dias terrestres!"
    },
    {
        "question": "O que é uma nebulosa?",
        "options": [
            "Uma nuvem de gás e poeira no espaço",
            "Um tipo de estrela",
            "Um cometa",
            "Um planeta em formação"
        ],
        "answer": 0,
        "fact": "Nebulosas são nuvens gigantes de gás e poeira onde nascem estrelas."
    },
    {
        "question": "Qual é o nome do satélite artificial lançado para estudar o universo?",
        "options": [
            "Hubble",
            "Vostok",
            "Sputnik",
            "Apollo"
        ],
        "answer": 0,
        "fact": "O telescópio espacial Hubble foi lançado para observar o universo."
    },
    {
        "question": "Qual planeta é conhecido como planeta vermelho?",
        "options": [
            "Vênus",
            "Júpiter",
            "Marte",
            "Saturno"
        ],
        "answer": 2,
        "fact": "Marte é vermelho por causa do óxido de ferro em sua superfície."
    },
    {
        "question": "Qual é a origem do Sol?",
        "options": [
            "Supernova",
            "Nebulosa",
            "Buraco negro",
            "Planeta"
        ],
        "answer": 1,
        "fact": "O Sol se formou a partir do colapso de uma nebulosa."
    },
    {
        "question": "Qual é a razão pela qual Júpiter tem um campo magnético tão forte?",
        "options": [
            "Sua grande massa",
            "A presença de anéis",
            "O seu núcleo líquido de ferro e níquel",
            "Sua rotação rápida e núcleo metálico"
        ],
        "answer": 3,
        "fact": "Júpiter tem uma rotação muito rápida, o que gera um campo magnético muito intenso."
    },
    {
        "question": "O que é a Via Láctea?",
        "options": [
            "Uma estrela",
            "Uma galáxia",
            "Um planeta",
            "Uma nebulosa"
        ],
        "answer": 1,
        "fact": "A Via Láctea é a galáxia onde o sistema solar está localizado."
    },
    {
        "question": "Qual planeta tem maior número de satélites naturais?",
        "options": [
            "Júpiter",
            "Saturno",
            "Urano",
            "Netuno"
        ],
        "answer": 1,
        "fact": "Saturno lidera com mais de 270 luas conhecidas até 2025, incluindo Titã, que é maior que o planeta Mercúrio."
    },
    {
        "question": "Qual tipo de galáxia é a Via Láctea?",
        "options": [
            "Elíptica",
            "Espiral",
            "Irregular",
            "Lenticuar"
        ],
        "answer": 1,
        "fact": "A Via Láctea é uma galáxia espiral."
    },
    {
        "question": "Qual planeta é chamado de 'planeta dos ventos fortes'?",
        "options": [
            "Júpiter",
            "Netuno",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "Netuno é famoso por seus ventos intensos."
    },
    {
        "question": "Qual destes fenômenos é causado pelo movimento da Terra?",
        "options": [
            "Marés",
            "Dia e noite",
            "Auroras",
            "Fases da Lua"
        ],
        "answer": 1,
        "fact": "O movimento de rotação da Terra causa o dia e a noite."
    },
    {
        "question": "Qual é o astro que fornece luz e calor para a Terra?",
        "options": [
            "Lua",
            "Sol",
            "Estrela do Norte",
            "Júpiter"
        ],
        "answer": 1,
        "fact": "O Sol é nossa principal fonte de luz e calor."
    },
    {
        "question": "Qual é o nome da força que mantém a Terra em órbita ao redor do Sol?",
        "options": [
            "Força centrífuga",
            "Gravidade",
            "Magnetismo",
            "Força eletromagnética"
        ],
        "answer": 1,
        "fact": "A gravidade é a força que mantém os planetas em órbita ao redor do Sol."
    },
    {
        "question": "Qual é o nome da missão que levou o homem à Lua?",
        "options": [
            "Apollo 11",
            "Vostok 1",
            "Mercury",
            "Soyuz"
        ],
        "answer": 0,
        "fact": "Apollo 11 foi a missão que levou Neil Armstrong à Lua."
    },
    {
        "question": "Qual planeta tem a Grande Mancha Vermelha?",
        "options": [
            "Marte",
            "Júpiter",
            "Saturno",
            "Urano"
        ],
        "answer": 1,
        "fact": "A Grande Mancha Vermelha de Júpiter é uma enorme tempestade."
    },
    {
        "question": "Qual planeta tem a maior variação de temperatura entre dia e noite?",
        "options": [
            "Mercúrio",
            "Marte",
            "Vênus",
            "Terra"
        ],
        "answer": 0,
        "fact": "Mercúrio tem grande variação porque tem atmosfera muito fina."
    },
    {
        "question": "Como se chama o movimento da Terra ao redor do Sol?",
        "options": [
            "Rotação",
            "Translação",
            "Revolução",
            "Orbitação"
        ],
        "answer": 1,
        "fact": "O movimento de translação é a órbita da Terra em torno do Sol."
    },
    {
        "question": "Qual é o principal componente da atmosfera de Marte?",
        "options": [
            "Oxigênio",
            "Nitrogênio",
            "Dióxido de carbono",
            "Hidrogênio"
        ],
        "answer": 2,
        "fact": "A atmosfera de Marte é composta principalmente por dióxido de carbono."
    },
    {
        "question": "Qual planeta do sistema solar é o mais denso?",
        "options": [
            "Terra",
            "Júpiter",
            "Vênus",
            "Saturno"
        ],
        "answer": 0,
        "fact": "A Terra é o planeta mais denso do sistema solar."
    },
    {
        "question": "O que é um buraco negro?",
        "options": [
            "Uma estrela gigante",
            "Um ponto de gravidade intensa",
            "Um planeta escuro",
            "Uma galáxia"
        ],
        "answer": 1,
        "fact": "Um buraco negro é uma região do espaço com gravidade tão forte que nada escapa."
    },
    {
        "question": "Qual destes planetas é conhecido como 'planeta gigante gasoso'?",
        "options": [
            "Júpiter",
            "Marte",
            "Mercúrio",
            "Terra"
        ],
        "answer": 0,
        "fact": "Júpiter é um gigante gasoso, com uma atmosfera densa."
    },
    {
        "question": "O que são satélites naturais?",
        "options": [
            "Planetas",
            "Luas que orbitam planetas",
            "Estrelas pequenas",
            "Cometas"
        ],
        "answer": 1,
        "fact": "Satélites naturais são luas que orbitam planetas."
    },
    {
        "question": "Qual é o nome da nossa galáxia?",
        "options": [
            "Andrômeda",
            "Via Láctea",
            "Sombrero",
            "Triângulo"
        ],
        "answer": 1,
        "fact": "Vivemos na galáxia Via Láctea."
    },
    {
        "question": "Qual é o nome do movimento da Terra girando em torno do seu próprio eixo?",
        "options": [
            "Translação",
            "Rotação",
            "Inclinação",
            "Revolução"
        ],
        "answer": 1,
        "fact": "A rotação da Terra dura cerca de 24 horas."
    },
    {
        "question": "Qual planeta é conhecido como planeta vermelho?",
        "options": [
            "Vênus",
            "Júpiter",
            "Marte",
            "Saturno"
        ],
        "answer": 2,
        "fact": "Marte é vermelho por causa do óxido de ferro em sua superfície."
    },
    {
        "question": "Como são chamadas as fases visíveis da Lua?",
        "options": [
            "Ciclos lunares",
            "Fases lunares",
            "Eclipses lunares",
            "Rotações lunares"
        ],
        "answer": 1,
        "fact": "As fases da Lua mudam conforme sua posição em relação à Terra e ao Sol."
    },
    {
        "question": "Qual planeta é conhecido por ter tempestades de poeira?",
        "options": [
            "Marte",
            "Júpiter",
            "Saturno",
            "Netuno"
        ],
        "answer": 0,
        "fact": "Marte tem tempestades de poeira que podem cobrir o planeta inteiro."
    },
    {
        "question": "Qual é o maior planeta do sistema solar?",
        "options": [
            "Terra",
            "Saturno",
            "Júpiter",
            "Netuno"
        ],
        "answer": 2,
        "fact": "Júpiter é tão grande que todos os outros planetas caberiam dentro dele!"
    },
    {
        "question": "Qual é a camada da Terra onde ocorre a vida?",
        "options": [
            "Litosfera",
            "Hidrosfera",
            "Biosfera",
            "Atmosfera"
        ],
        "answer": 2,
        "fact": "A biosfera é a região onde a vida existe, incluindo terra, água e ar."
    },
    {
        "question": "Qual é o principal gás da atmosfera terrestre?",
        "options": [
            "Oxigênio",
            "Nitrogênio",
            "Dióxido de carbono",
            "Hidrogênio"
        ],
        "answer": 1,
        "fact": "A atmosfera da Terra é composta principalmente por nitrogênio (~78%)."
    },
    {
        "question": "O que causa a variação nas cores das estrelas?",
        "options": [
            "A composição química",
            "A temperatura da estrela",
            "O tamanho da estrela",
            "A proximidade da estrela à Terra"
        ],
        "answer": 1,
        "fact": "As cores das estrelas são determinadas pela temperatura, com estrelas mais quentes aparecendo azuis e mais frias em tons vermelhos."
    },
    {
        "question": "Qual planeta tem um dia mais longo que o ano?",
        "options": [
            "Vênus",
            "Mercúrio",
            "Marte",
            "Terra"
        ],
        "answer": 0,
        "fact": "Vênus leva mais tempo para girar em torno do seu eixo do que para orbitar o Sol."
    },
    {
        "question": "Qual é a temperatura aproximada da superfície do Sol?",
        "options": [
            "5.500°C",
            "1.000°C",
            "10.000°C",
            "100.000°C"
        ],
        "answer": 0,
        "fact": "A superfície do Sol tem cerca de 5.500 graus Celsius."
    },
    {
        "question": "Qual foi o primeiro planeta descoberto com telescópio?",
        "options": [
            "Urano",
            "Netuno",
            "Marte",
            "Saturno"
        ],
        "answer": 0,
        "fact": "Urano foi o primeiro planeta descoberto com o auxílio de telescópio, em 1781."
    },
    {
        "question": "Quantos anos tem o nosso sistema solar?",
        "options": [
            "4,6 milhões",
            "46 milhões",
            "460 milhões",
            "4,6 bilhões"
        ],
        "answer": 3,
        "fact": "Nosso sistema solar tem cerca de 4,6 bilhões de anos."
    }
];
