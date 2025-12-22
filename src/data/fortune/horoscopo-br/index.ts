// Horóscopo 2025 - Previsões dos 12 Signos do Zodíaco
// Brazilian Portuguese Horoscope/Zodiac Fortune Data

export type SignoZodiaco = 
  | 'aries' | 'touro' | 'gemeos' | 'cancer' 
  | 'leao' | 'virgem' | 'libra' | 'escorpiao'
  | 'sagitario' | 'capricornio' | 'aquario' | 'peixes';

export interface HoroscopoData {
  id: SignoZodiaco;
  name: string;
  nomePortugues: string;
  emoji: string;
  period: string;
  element: 'Fogo' | 'Terra' | 'Ar' | 'Água';
  keywords: string[];
  luckyScore: number;
  overview: string;
  categories: {
    love: string;
    money: string;
    work: string;
    health: string;
    family: string;
  };
  monthly: string[];
  lucky: {
    numbers: number[];
    colors: string[];
    day: string;
    direction: string;
  };
  advice: {
    do: string;
    dont: string;
  };
  bloodTypeCompatibility: {
    A: string;
    B: string;
    O: string;
    AB: string;
  };
}

export const HOROSCOPO_2025: Record<SignoZodiaco, HoroscopoData> = {
  // ♈ Áries (21 de março ~ 19 de abril)
  'aries': {
    id: 'aries',
    name: 'Áries',
    nomePortugues: 'Áries',
    emoji: '♈',
    period: '21 de março ~ 19 de abril',
    element: 'Fogo',
    keywords: ['Coragem', 'Liderança', 'Iniciativa'],
    luckyScore: 4,
    overview: '2025 é o ano de novos começos e oportunidades para Áries! Netuno entra em Áries, sua intuição ficará muito aguçada. Na primeira metade do ano, muitas novas oportunidades virão. Aja com coragem para alcançar o sucesso!',
    categories: {
      love: 'Na primavera, pode encontrar um amor especial. Seja proativo na aproximação. Casais terão relacionamento mais profundo. Cuidado com ciúmes em setembro.',
      money: 'Foque no trabalho principal para bons resultados. Na primeira metade do ano, pode haver renda inesperada. Na segunda metade, gerencie os gastos.',
      work: 'Oportunidade de mostrar liderança em novos projetos. Alta chance de promoção. Maio é o mês mais importante.',
      health: 'Cuidado com excesso de trabalho. Pode ter dores de cabeça e insônia. Exercite-se regularmente para reduzir o estresse.',
      family: 'Laços familiares ficarão mais fortes este ano. Bom momento para reuniões. Viagem em família no verão é muito recomendada.',
    },
    monthly: [
      'Janeiro: Bom momento para definir metas do ano novo. Comece um estilo de vida saudável.',
      'Fevereiro: Sorte no amor em alta. Prepare uma surpresa para o Dia dos Namorados.',
      'Março: Mês do aniversário! Sorte no pico. Experimente coisas novas.',
      'Abril: Sorte financeira boa. Considere investimentos.',
      'Maio: Conquistas no trabalho serão reconhecidas. Chance de promoção ou aumento.',
      'Junho: Sorte no amor em alta. Seja proativo.',
      'Julho: Cuide da saúde. Não trabalhe demais.',
      'Agosto: Boa sorte em viagens. Hora de descansar.',
      'Setembro: Expanda sua rede. Novos contatos serão valiosos.',
      'Outubro: Momento importante para decisões. Seja cuidadoso.',
      'Novembro: Sorte financeira alta. Possível bônus.',
      'Dezembro: Bom final de ano. Festa de fim de ano trará sorte.',
    ],
    lucky: {
      numbers: [3, 9, 21],
      colors: ['Vermelho', 'Laranja'],
      day: 'Terça-feira',
      direction: 'Leste',
    },
    advice: {
      do: 'Seja corajoso para experimentar coisas novas. Sua coragem será recompensada este ano.',
      dont: 'Evite decisões impulsivas. Especialmente em abril e julho, tenha cuidado.',
    },
    bloodTypeCompatibility: {
      A: 'Tipo A cuidadoso ajudará no seu autocontrole. Bom parceiro.',
      B: 'Ambos são livres, pode haver conflitos. Mas é emocionante.',
      O: 'Combinação perfeita! Podem ter sucesso juntos.',
      AB: 'Precisa de tempo para se entenderem, mas relacionamento profundo é possível.',
    },
  },

  // ♉ Touro (20 de abril ~ 20 de maio)
  'touro': {
    id: 'touro',
    name: 'Touro',
    nomePortugues: 'Touro',
    emoji: '♉',
    period: '20 de abril ~ 20 de maio',
    element: 'Terra',
    keywords: ['Estabilidade', 'Prosperidade', 'Paciência'],
    luckyScore: 4,
    overview: '2025 é o ano de estabilidade e colheita para Touro. A influência de Urano pode trazer mudanças inesperadas, mas são oportunidades de crescimento. Na segunda metade do ano, verá os resultados dos seus esforços.',
    categories: {
      love: 'Bom ano para relacionamentos sérios. Sorte alta para casamento. Ex pode voltar.',
      money: 'Bom ano para poupar e investir. Imóveis ou investimentos de longo prazo são favoráveis. Evite ser fiador.',
      work: 'Mantenha carreira estável. Pode precisar aprender novas tecnologias. Na segunda metade do ano, possível aumento.',
      health: 'Cuidado com dores no pescoço e ombros. Massagem é eficaz. Também cuidado com excesso de comida.',
      family: 'Família em harmonia. Bom momento para mudar ou reformar. Laços familiares ficarão mais profundos.',
    },
    monthly: [
      'Janeiro: Defina plano financeiro para o ano novo. Estabeleça meta de poupança.',
      'Fevereiro: Mês romântico. Celebre o Dia dos Namorados.',
      'Março: Trabalho mais ocupado. Cuide da saúde.',
      'Abril: Mês do aniversário! Presenteie-se.',
      'Maio: Dia das Mães, foque na família.',
      'Junho: Precisa de viagem ou descanso. Renove-se.',
      'Julho: Tempo em família importante. Comunique-se mais.',
      'Agosto: Nova oportunidade chegará. Esteja preparado.',
      'Setembro: Check-up de saúde recomendado. Prevenir é melhor que remediar.',
      'Outubro: Sorte no amor em alta. Pode conhecer alguém especial.',
      'Novembro: Sorte financeira boa. Espere retorno de investimentos.',
      'Dezembro: Final de ano estável. Planeje o próximo ano.',
    ],
    lucky: {
      numbers: [2, 6, 15],
      colors: ['Verde', 'Rosa'],
      day: 'Sexta-feira',
      direction: 'Sudeste',
    },
    advice: {
      do: 'Invista ou poupe com visão de longo prazo. Paciência será recompensada.',
      dont: 'Não seja muito teimoso. Flexibilidade também é importante.',
    },
    bloodTypeCompatibility: {
      A: 'Ambos orientados à estabilidade, muito compatíveis. Relacionamento tranquilo.',
      B: 'Ritmo de vida diferente pode ser desafiador. Precisa de compreensão.',
      O: 'Bom sistema de apoio mútuo.',
      AB: 'Conversas interessantes. Estímulo intelectual.',
    },
  },

  // ♊ Gêmeos (21 de maio ~ 21 de junho)
  'gemeos': {
    id: 'gemeos',
    name: 'Gêmeos',
    nomePortugues: 'Gêmeos',
    emoji: '♊',
    period: '21 de maio ~ 21 de junho',
    element: 'Ar',
    keywords: ['Comunicação', 'Curiosidade', 'Versatilidade'],
    luckyScore: 5,
    overview: '2025 é o melhor ano para Gêmeos! Júpiter abençoa, energia de expansão e crescimento está plena. Novas oportunidades vêm constantemente, atividades sociais trarão grande sorte.',
    categories: {
      love: 'Charme explosivo este ano! Muitas chances de conhecer pessoas. Casais terão mais tempo de qualidade, relacionamento mais profundo.',
      money: 'Múltiplas fontes de renda. Criatividade trará dinheiro. Mas cuidado com compras impulsivas.',
      work: 'Brilhe em comunicação, marketing, mídia. Mudança de emprego também favorável.',
      health: 'Geralmente boa. Sistema nervoso precisa de cuidado. Melhore a qualidade do sono.',
      family: 'Comunicação ativa com família. Laços com irmãos ficarão mais profundos.',
    },
    monthly: [
      'Janeiro: Defina metas claras para o ano. Escreva-as.',
      'Fevereiro: Expanda a rede. Valorize novas conexões.',
      'Março: Sorte financeira alta! Bom momento para investimento ou negócio paralelo.',
      'Abril: Conquistas no trabalho reconhecidas. Tenha confiança.',
      'Maio: Mês do aniversário! Sorte no pico. Tudo vai bem.',
      'Junho: Energia do Solstício de Verão te apoia. Pressentimento de amor.',
      'Julho: Boa sorte em viagens. Recomendada viagem ao exterior.',
      'Agosto: Precisa gerenciar saúde. Não trabalhe demais.',
      'Setembro: Contratos e negociações importantes terão sucesso.',
      'Outubro: Cuidado com tristeza de outono. Encontre hobbies para mudar o humor.',
      'Novembro: Mês de organizar finanças. Planeje gastos de fim de ano.',
      'Dezembro: Final de ano brilhante. Brilhe nas festas.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Amarelo', 'Azul Claro'],
      day: 'Quarta-feira',
      direction: 'Oeste',
    },
    advice: {
      do: 'Compartilhe suas ideias. Sua voz tem poder este ano.',
      dont: 'Não faça muitas coisas ao mesmo tempo. Distração fará perder boas chances.',
    },
    bloodTypeCompatibility: {
      A: 'Conversas intelectuais animadas. Bom parceiro.',
      B: 'Combinação perfeita! Respeito mútuo pela liberdade.',
      O: 'Relacionamento dinâmico. Emocionante.',
      AB: 'Ambos gostam de mudança. Nunca ficam entediados.',
    },
  },

  // ♋ Câncer (22 de junho ~ 22 de julho)
  'cancer': {
    id: 'cancer',
    name: 'Câncer',
    nomePortugues: 'Câncer',
    emoji: '♋',
    period: '22 de junho ~ 22 de julho',
    element: 'Água',
    keywords: ['Família', 'Emoção', 'Proteção'],
    luckyScore: 4,
    overview: '2025 é ano de foco na família e crescimento interior para Câncer. Júpiter entra em Câncer na segunda metade do ano, aumentando a sorte. Pode haver boas notícias sobre família ou imóveis.',
    categories: {
      love: 'Buscando amor acolhedor como família. Bom momento para pensar seriamente em casamento ou morar junto.',
      money: 'Sorte com imóveis boa. Favorável para comprar, vender, mudar, reformar. Apoio da família possível.',
      work: 'Trabalho em casa ou freelance será favorável. Trabalho criativo terá resultados.',
      health: 'Sistema digestivo precisa de atenção. Estresse afeta facilmente o corpo. Comida quente e descanso adequado.',
      family: 'Ano de união familiar. Pode haver evento familiar importante. Questão de cuidar dos pais pode surgir.',
    },
    monthly: [
      'Janeiro: Tempo em família. Reunião de Ano Novo fortalece laços.',
      'Fevereiro: Emoções podem oscilar. Autocuidado importante.',
      'Março: Mês de revisão financeira. Verifique gastos desnecessários.',
      'Abril: Expanda a rede. Conheça novos amigos.',
      'Maio: Mudanças no trabalho possíveis. Resposta flexível necessária.',
      'Junho: Mês do aniversário começa. Presenteie-se.',
      'Julho: Júpiter entra! Sorte dispara. Tudo favorável.',
      'Agosto: Mês romântico. Encontro doce previsto.',
      'Setembro: Sorte financeira alta. Considere investimento ou negócio paralelo.',
      'Outubro: Boas notícias da família chegando.',
      'Novembro: Ponto de virada na carreira. Esteja preparado.',
      'Dezembro: Final de ano acolhedor. Valorize o tempo em família.',
    ],
    lucky: {
      numbers: [2, 7, 22],
      colors: ['Branco', 'Prata'],
      day: 'Segunda-feira',
      direction: 'Norte',
    },
    advice: {
      do: 'Invista na família e no lar. Sua felicidade está lá.',
      dont: 'Não deixe emoções governarem. Decisões importantes precisam de pensamento calmo.',
    },
    bloodTypeCompatibility: {
      A: 'Similares, então tranquilizador. Muito compatíveis.',
      B: 'Tipo B livre pode te confundir. Precisa de compreensão.',
      O: 'Confiável. Relacionamento estável possível.',
      AB: 'Estímulo intelectual. Relacionamento profundo possível.',
    },
  },

  // ♌ Leão (23 de julho ~ 22 de agosto)
  'leao': {
    id: 'leao',
    name: 'Leão',
    nomePortugues: 'Leão',
    emoji: '♌',
    period: '23 de julho ~ 22 de agosto',
    element: 'Fogo',
    keywords: ['Criatividade', 'Confiança', 'Expressão'],
    luckyScore: 3,
    overview: '2025 é ano de criatividade e autoexpressão para Leão. Porém, influência de Plutão requer crescimento e mudança interior. Foco no desenvolvimento interior trará melhores resultados que sucesso exterior.',
    categories: {
      love: 'Ano romântico e apaixonado. Porém, orgulho pode ser obstáculo. Aprenda a ceder.',
      money: 'Renda estável. Prepare-se para gastos inesperados através de poupança. Investimentos seguros melhor que especulação.',
      work: 'Reconhecido em projetos criativos. Evite disputas de poder.',
      health: 'Atenção ao coração e pressão arterial. Gerenciamento de estresse importante. Meditação ou yoga recomendados.',
      family: 'Centro das atenções na família. Não hesite em apoiar. Netos trarão alegria.',
    },
    monthly: [
      'Janeiro: Ano começa suavemente. Tempo de planejamento.',
      'Fevereiro: Mês romântico. Planeje encontro especial.',
      'Março: Trabalho pode ser estressante. Paciência necessária.',
      'Abril: Ideias criativas surgem. Anote-as.',
      'Maio: Pequenos problemas de relacionamento possíveis. Resolva através do diálogo.',
      'Junho: Check-up de saúde recomendado. Prevenção importante.',
      'Julho: Mês do aniversário! Confiança alta, sorte aumenta.',
      'Agosto: Sorte financeira boa. Renda extra possível.',
      'Setembro: Boa sorte em viagens. Renove-se nas férias.',
      'Outubro: Momento de decisão importante. Confie na intuição.',
      'Novembro: Conexões sociais benéficas. Networking.',
      'Dezembro: Final de ano brilhante. Muitas chances de brilhar.',
    ],
    lucky: {
      numbers: [1, 8, 19],
      colors: ['Dourado', 'Laranja'],
      day: 'Domingo',
      direction: 'Sul',
    },
    advice: {
      do: 'Foque em projetos criativos. Não tenha medo de se expressar.',
      dont: 'Não deixe o orgulho causar danos. Cooperação e compromisso também são necessários.',
    },
    bloodTypeCompatibility: {
      A: 'Tipo A sério te apoiará. Bom parceiro.',
      B: 'Relacionamento divertido mas conflitos possíveis. Respeitem-se.',
      O: 'Combinação perfeita! Ajudam um ao outro a brilhar.',
      AB: 'Estímulo intelectual. Relacionamento interessante.',
    },
  },

  // ♍ Virgem (23 de agosto ~ 22 de setembro)
  'virgem': {
    id: 'virgem',
    name: 'Virgem',
    nomePortugues: 'Virgem',
    emoji: '♍',
    period: '23 de agosto ~ 22 de setembro',
    element: 'Terra',
    keywords: ['Análise', 'Saúde', 'Perfeição'],
    luckyScore: 4,
    overview: '2025 é ano de foco na saúde e melhoria da vida diária para Virgem. Sua atenção aos detalhes é muito valorizada, trabalho reconhecido. Menos perfeccionismo trará melhores resultados.',
    categories: {
      love: 'Ano de busca por amor prático. Pode conhecer alguém no trabalho ou academia. Casais devem criar hábitos saudáveis juntos.',
      money: 'Poupança consistente terá resultados. Renda extra também esperada. Setembro pode ter bônus.',
      work: 'Eficiência muito valorizada. Foque em melhorar habilidades mais que promoção. Bom momento para certificações.',
      health: 'Melhor ano para melhorar hábitos de saúde. Dieta, exercícios terão sucesso. Cuide do sistema digestivo.',
      family: 'Papel de organizar eventos familiares. Não critique demais.',
    },
    monthly: [
      'Janeiro: Defina metas de saúde para o ano novo. Bom momento para começar a se exercitar.',
      'Fevereiro: Trabalho mais ocupado. Gerencie a saúde.',
      'Março: Mês de revisão financeira. Cancele assinaturas desnecessárias.',
      'Abril: Hora de revisar relacionamentos. Identifique amigos verdadeiros.',
      'Maio: Boa chance de aprender novas habilidades. Faça um curso.',
      'Junho: Check-up de saúde recomendado. Prevenção importante.',
      'Julho: Boa sorte em viagens. Férias ativas.',
      'Agosto: Mês do aniversário! Presenteie-se.',
      'Setembro: Trabalho dá frutos. Tenha confiança.',
      'Outubro: Sorte no amor sobe. Novo encontro previsto.',
      'Novembro: Sorte financeira boa. Espere bônus ou renda extra.',
      'Dezembro: Mês de organizar e limpar. Receba o ano novo arrumado.',
    ],
    lucky: {
      numbers: [5, 14, 23],
      colors: ['Azul Marinho', 'Bege'],
      day: 'Quarta-feira',
      direction: 'Sudoeste',
    },
    advice: {
      do: 'Construa hábitos saudáveis. Pequenas melhorias fazem grandes mudanças.',
      dont: 'Não exija perfeição demais. Às vezes 80% é suficiente.',
    },
    bloodTypeCompatibility: {
      A: 'Ambos meticulosos, muito compatíveis. Relacionamento estável.',
      B: 'Ritmo diferente desafiador. Precisa de paciência.',
      O: 'Tipo O relaxado te ajuda. Bom equilíbrio.',
      AB: 'Conversas intelectuais interessantes. Estimulante.',
    },
  },

  // ♎ Libra (23 de setembro ~ 22 de outubro)
  'libra': {
    id: 'libra',
    name: 'Libra',
    nomePortugues: 'Libra',
    emoji: '♎',
    period: '23 de setembro ~ 22 de outubro',
    element: 'Ar',
    keywords: ['Equilíbrio', 'Harmonia', 'Beleza'],
    luckyScore: 4,
    overview: '2025 é ano de relacionamentos e parcerias para Libra. Relacionamentos importantes ficarão mais profundos, senso estético brilha. Não adie decisões, às vezes escolhas ousadas são necessárias.',
    categories: {
      love: 'Sorte no amor no pico! Muitas chances de casamento, noivado, pedido. Alta possibilidade de encontrar pessoa ideal.',
      money: 'Renda de parcerias. Oportunidades de investimento ou negócio conjunto. Verifique contratos cuidadosamente.',
      work: 'Sucesso através do trabalho em equipe. Brilhe em negociação ou mediação. Negócio conjunto favorável.',
      health: 'Cuide da saúde das costas e rins. Beba água suficiente. Problemas de pele por estresse possíveis.',
      family: 'Relações familiares harmoniosas. Papel de mediar conflitos. Evento familiar importante possível.',
    },
    monthly: [
      'Janeiro: Planeje o ano novo com parceiro.',
      'Fevereiro: Dia dos Namorados especial. Tempo romântico.',
      'Março: Negociações facilmente bem-sucedidas.',
      'Abril: Comece projeto criativo.',
      'Maio: Pequenos problemas de relacionamento possíveis. Mantenha neutralidade.',
      'Junho: Sorte na beleza alta. Bom momento para mudar imagem.',
      'Julho: Boa sorte em viagens. Viagem de casal.',
      'Agosto: Trabalho requer trabalho em equipe.',
      'Setembro: Mês do aniversário começa! Charme brilha.',
      'Outubro: Momento de decisão importante. Abandone a indecisão.',
      'Novembro: Sorte financeira aumenta. Renda de parcerias.',
      'Dezembro: Final de ano cheio de amor. Tempo acolhedor.',
    ],
    lucky: {
      numbers: [6, 15, 24],
      colors: ['Rosa Pastel', 'Lavanda'],
      day: 'Sexta-feira',
      direction: 'Oeste',
    },
    advice: {
      do: 'Invista em relacionamentos. Parceiros te farão mais forte.',
      dont: 'Não adie decisões. Às vezes escolhas ousadas são necessárias.',
    },
    bloodTypeCompatibility: {
      A: 'Ambos valorizam harmonia. Relacionamento tranquilo.',
      B: 'Atraído pela liberdade do Tipo B. Relacionamento interessante.',
      O: 'Parceiro confiável. Boa compatibilidade.',
      AB: 'Compartilham senso estético. Casal ideal.',
    },
  },

  // ♏ Escorpião (23 de outubro ~ 21 de novembro)
  'escorpiao': {
    id: 'escorpiao',
    name: 'Escorpião',
    nomePortugues: 'Escorpião',
    emoji: '♏',
    period: '23 de outubro ~ 21 de novembro',
    element: 'Água',
    keywords: ['Transformação', 'Profundidade', 'Renascimento'],
    luckyScore: 3,
    overview: '2025 é ano de transformação profunda e renascimento para Escorpião. Deixe o passado ir, energia de renovação é forte. Se soltar apegos, sorte inesperada virá.',
    categories: {
      love: 'Ano de relacionamentos profundos e sérios. Pode haver encontro do destino. Casais em ponto de virada do relacionamento.',
      money: 'Sorte com herança, seguro, dinheiro de outros. Bom momento para organizar finanças e pagar dívidas.',
      work: 'Mudanças organizacionais possíveis. Resposta flexível vira oportunidade. Ativo em pesquisa ou análise.',
      health: 'Saúde reprodutiva precisa atenção. Detox recomendado. Aconselhamento também eficaz.',
      family: 'Segredos de família podem ser revelados. Hora de curar velhas feridas. Sinta conexões ancestrais.',
    },
    monthly: [
      'Janeiro: Organize o passado, defina novas metas.',
      'Fevereiro: Revisão financeira. Encontre gastos escondidos.',
      'Março: Verdade revelada nos relacionamentos.',
      'Abril: Saúde precisa atenção. Gerencie o estresse.',
      'Maio: Mudanças no trabalho possíveis. Transforme em oportunidade.',
      'Junho: Tempo de cura mental.',
      'Julho: Sorte financeira boa. Considere investimentos.',
      'Agosto: Precisa de viagem ou descanso. Renove-se.',
      'Setembro: Intuição importante chega. Não perca.',
      'Outubro: Mês do aniversário começa! Energia de transformação no pico.',
      'Novembro: Mês de novos começos. Renasça.',
      'Dezembro: Olhe para trás no ano, termine com gratidão.',
    ],
    lucky: {
      numbers: [8, 17, 26],
      colors: ['Vinho', 'Preto'],
      day: 'Terça-feira',
      direction: 'Noroeste',
    },
    advice: {
      do: 'Renasça deixando ir. Poder de transformação é sua força.',
      dont: 'Não se apegue. Perdão te libertará.',
    },
    bloodTypeCompatibility: {
      A: 'Pode construir relacionamento profundo. Entendem um ao outro.',
      B: 'Apaixonado mas conflitos possíveis. Respeitem a liberdade um do outro.',
      O: 'Casal poderoso. Podem crescer juntos.',
      AB: 'Atraídos pelo mistério um do outro.',
    },
  },

  // ♐ Sagitário (22 de novembro ~ 21 de dezembro)
  'sagitario': {
    id: 'sagitario',
    name: 'Sagitário',
    nomePortugues: 'Sagitário',
    emoji: '♐',
    period: '22 de novembro ~ 21 de dezembro',
    element: 'Fogo',
    keywords: ['Aventura', 'Otimismo', 'Filosofia'],
    luckyScore: 4,
    overview: '2025 é ano de aventura e expansão para Sagitário. Viagens e aprendizado trarão grande crescimento. Energia otimista inspira os ao redor e atrai novas oportunidades.',
    categories: {
      love: 'Pressentimento romântico durante viagem ou estudo. Atenção ao amor à distância. Relacionamento que respeita liberdade funcionará.',
      money: 'Sorte em jogos ou especulação. Mas não seja confiante demais. Renda relacionada ao exterior possível.',
      work: 'Oportunidades em trabalho internacional ou projetos de expansão. Campos de educação, publicação, mídia favoráveis.',
      health: 'Cuide das coxas e fígado. Evite comer demais. Atividades ao ar livre benéficas.',
      family: 'Troca com parentes distantes. Aproveite diferenças culturais. Compartilhe alegria das viagens com família.',
    },
    monthly: [
      'Janeiro: Planeje viagens para o ano.',
      'Fevereiro: Motivação para aprender alta. Estude algo novo.',
      'Março: Sorte financeira aumenta. Bom momento para investimento ou negócio paralelo.',
      'Abril: Expanda a rede. Networking.',
      'Maio: Conexões internacionais mais fortes.',
      'Junho: Precisa gerenciar saúde. Evite comer demais.',
      'Julho: Aventura de verão! Viagem ou nova experiência.',
      'Agosto: Período criativo. Expresse-se.',
      'Setembro: Provas ou apresentações terão sucesso.',
      'Outubro: Laços familiares mais profundos.',
      'Novembro: Mês do aniversário começa! Espírito aventureiro no pico.',
      'Dezembro: Aniversário e Natal. Celebração dupla.',
    ],
    lucky: {
      numbers: [3, 12, 21],
      colors: ['Roxo', 'Turquesa'],
      day: 'Quinta-feira',
      direction: 'Sudeste',
    },
    advice: {
      do: 'Mergulhe em novas experiências. Viagens e aprendizado te ajudarão a crescer.',
      dont: 'Não prometa demais. Planejamento realista também é necessário.',
    },
    bloodTypeCompatibility: {
      A: 'Tipo A estável te ajuda a manter os pés no chão.',
      B: 'Combinação perfeita! Aproveitem a liberdade juntos.',
      O: 'Casal dinâmico. Podem compartilhar aventuras.',
      AB: 'Conversas intelectuais interessantes. Nunca ficam entediados.',
    },
  },

  // ♑ Capricórnio (22 de dezembro ~ 19 de janeiro)
  'capricornio': {
    id: 'capricornio',
    name: 'Capricórnio',
    nomePortugues: 'Capricórnio',
    emoji: '♑',
    period: '22 de dezembro ~ 19 de janeiro',
    element: 'Terra',
    keywords: ['Ambição', 'Responsabilidade', 'Sucesso'],
    luckyScore: 5,
    overview: '2025 é ano de colheita e sucesso para Capricórnio! Plutão move para Aquário, libertando você de anos de pressão. Esforços recompensados, hora de reconhecimento social.',
    categories: {
      love: 'Ano para buscar amor estável. Chances de casamento ou noivado. Pode conhecer alguém em eventos de trabalho.',
      money: 'Excelente sorte financeira. Aumento, bônus, reconhecimento. Investimentos de longo prazo dão frutos.',
      work: 'Pico da carreira. Posição de liderança. Anos de esforço recompensados.',
      health: 'Cuide de ossos, joelhos e dentes. Tome cálcio. Estresse diminui, saúde melhora.',
      family: 'Papel de pilar da família. Pode envolver herança ou responsabilidades. Metas familiares alcançadas.',
    },
    monthly: [
      'Janeiro: Mês do aniversário! Sorte de sucesso no pico. Grandes metas.',
      'Fevereiro: Sorte romântica sobe. Amor estável.',
      'Março: Grande projeto começa no trabalho.',
      'Abril: Avaliação e reconhecimento.',
      'Maio: Investimentos dão frutos.',
      'Junho: Descanso também importante. Renove-se.',
      'Julho: Férias de verão planejadas.',
      'Agosto: Volta ao trabalho eficiente. Novas metas.',
      'Setembro: Liderança na carreira brilha.',
      'Outubro: Mês de conquistas.',
      'Novembro: Prepare-se para fim de ano.',
      'Dezembro: Excelente final com mês do aniversário.',
    ],
    lucky: {
      numbers: [4, 13, 22],
      colors: ['Preto', 'Cinza Escuro'],
      day: 'Sábado',
      direction: 'Norte',
    },
    advice: {
      do: 'Aproveite as conquistas. Você merece.',
      dont: 'Não trabalhe demais. Aproveitar a vida também é importante.',
    },
    bloodTypeCompatibility: {
      A: 'Ambos sérios, muito compatíveis. Relacionamento confiável.',
      B: 'Tipo B livre pode te frustrar. Precisa de compreensão.',
      O: 'Parceiro confiável. Relacionamento estável.',
      AB: 'Estímulo intelectual. Bons parceiros de negócios também.',
    },
  },

  // ♒ Aquário (20 de janeiro ~ 18 de fevereiro)
  'aquario': {
    id: 'aquario',
    name: 'Aquário',
    nomePortugues: 'Aquário',
    emoji: '♒',
    period: '20 de janeiro ~ 18 de fevereiro',
    element: 'Ar',
    keywords: ['Inovação', 'Liberdade', 'Humanitarismo'],
    luckyScore: 5,
    overview: '2025 é ano de revolução para Aquário! Plutão se estabelece totalmente em Aquário, iniciando grandes mudanças na vida. Você é um pioneiro dos tempos.',
    categories: {
      love: 'Ano para relacionamentos não convencionais. Encontros online ou em comunidades. Relacionamento que respeita liberdade funcionará.',
      money: 'Renda de tecnologia ou inovação. Sorte com criptomoedas ou investimentos futuros. Mas mantenha estabilidade também.',
      work: 'Ativo em tecnologia, startup, mudança social. Trabalho remoto ou estilo flexível combina.',
      health: 'Cuide do sistema nervoso e tornozelos. Precisa de detox digital. Medicina alternativa também eficaz.',
      family: 'Família escolhida também é importante. Papel de mudar tradições. Ajude outros a serem mais abertos.',
    },
    monthly: [
      'Janeiro: Mês do aniversário começa! Revolução pessoal.',
      'Fevereiro: Aniversário e Dia dos Namorados. Celebre de forma única.',
      'Março: Ideias inovadoras tomam forma.',
      'Abril: Invista em tecnologia e futuro.',
      'Maio: Comunidade e amigos importantes.',
      'Junho: Energia para atividades sociais.',
      'Julho: Férias únicas. Experiência diferente.',
      'Agosto: Mudanças no trabalho. Transforme em oportunidade.',
      'Setembro: Sorte no amor sobe. Encontro único.',
      'Outubro: Comece projeto inovador.',
      'Novembro: Organize finanças. Revise portfólio.',
      'Dezembro: Termine o ano do seu jeito.',
    ],
    lucky: {
      numbers: [7, 16, 25],
      colors: ['Azul Elétrico', 'Prata'],
      day: 'Sábado',
      direction: 'Noroeste',
    },
    advice: {
      do: 'Não tema mudanças, seja pioneiro. O futuro pertence a você.',
      dont: 'Mudanças muito radicais surpreenderão outros. Vá devagar.',
    },
    bloodTypeCompatibility: {
      A: 'Tipo A tradicional pode chocar. Esforço para entender necessário.',
      B: 'Ambos livres, muito compatíveis! Relacionamento interessante.',
      O: 'Casal dinâmico.',
      AB: 'Combinação perfeita! Compartilham inovação e intelecto.',
    },
  },

  // ♓ Peixes (19 de fevereiro ~ 20 de março)
  'peixes': {
    id: 'peixes',
    name: 'Peixes',
    nomePortugues: 'Peixes',
    emoji: '♓',
    period: '19 de fevereiro ~ 20 de março',
    element: 'Água',
    keywords: ['Intuição', 'Compaixão', 'Sonhos'],
    luckyScore: 4,
    overview: '2025 é ano de espiritualidade e criatividade para Peixes. Saturno está em Peixes, dando poder para tornar sonhos realidade. Confie na intuição e aja para resultados maravilhosos.',
    categories: {
      love: 'Experimente amor romântico e profundo. Pode haver encontro do destino. Mas cuidado para não idealizar demais.',
      money: 'Renda da criatividade. Arte, música, fotografia, etc. Investimentos intuitivos têm sucesso. Mas cuidado com golpes.',
      work: 'Trabalho artístico, espiritual prospera. Trabalho ajudando outros também bom. Transforme sonhos em trabalho.',
      health: 'Cuide dos pés e sistema imunológico. Sono importante. Meditação como remédio. Limite álcool.',
      family: 'Conexão emocional profunda com família. Cure velhas feridas. Sinta orientação ancestral.',
    },
    monthly: [
      'Janeiro: Defina metas intuitivas para o ano novo.',
      'Fevereiro: Mês do aniversário começa! Cheio de inspiração.',
      'Março: Aniversário e Equinócio de Primavera. Hora de renascimento.',
      'Abril: Sorte financeira aumenta. Renda inesperada possível.',
      'Maio: Sinta conexões profundas nos relacionamentos.',
      'Junho: Precisa gerenciar saúde. Descanse o suficiente.',
      'Julho: Viagens ao mar benéficas. Vá à praia ou piscina.',
      'Agosto: Aja para realizar sonhos.',
      'Setembro: Outono romântico. Amor mais profundo.',
      'Outubro: Intuição importante chega. Não perca.',
      'Novembro: Organize finanças. Doar ou compartilhar também bom.',
      'Dezembro: Final de ano espiritual. Termine com gratidão.',
    ],
    lucky: {
      numbers: [7, 12, 21],
      colors: ['Azul Mar', 'Lavanda'],
      day: 'Quinta-feira',
      direction: 'Nordeste',
    },
    advice: {
      do: 'Confie na sua intuição. Sonhos se tornarão realidade.',
      dont: 'Não fuja da realidade. Enfrente o que precisa ser enfrentado.',
    },
    bloodTypeCompatibility: {
      A: 'Ambos sensíveis, entendem um ao outro. Relacionamento gentil.',
      B: 'Tipo B livre pode te confundir. Mas interessante.',
      O: 'Confiável. Relacionamento tranquilizador.',
      AB: 'Conexão espiritual. Relacionamento profundo.',
    },
  },
};

// Funções utilitárias
export function getHoroscopo(signo: SignoZodiaco): HoroscopoData {
  return HOROSCOPO_2025[signo];
}

export function getSignoByDate(month: number, day: number): SignoZodiaco {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'touro';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'gemeos';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leao';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgem';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'escorpiao';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagitario';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricornio';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquario';
  return 'peixes';
}

export function getAllSignos(): SignoZodiaco[] {
  return ['aries', 'touro', 'gemeos', 'cancer', 'leao', 'virgem', 
          'libra', 'escorpiao', 'sagitario', 'capricornio', 'aquario', 'peixes'];
}
