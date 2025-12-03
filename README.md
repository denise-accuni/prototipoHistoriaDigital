🌐 MulheresTechMap

Plataforma digital para mapeamento, visibilidade e valorização das mulheres na Computação.

Este projeto reúne um formulário de coleta de dados, um front-end responsivo e um dashboard integrado com gráficos interativos que apresentam os resultados da pesquisa em tempo real.
O objetivo é contribuir para estudos de diversidade, inclusão digital e representatividade feminina na área de Tecnologia da Informação.

📌 Objetivos do Projeto

Mapear a presença de mulheres na Computação em diferentes níveis de formação e atuação.

Coletar dados anonimizados sobre desafios, trajetória e áreas de interesse.

Gerar visualizações acessíveis para estudos, projetos de extensão e pesquisas científicas.

Fomentar discussões sobre inclusão, diversidade e políticas educacionais para a área de TI.

Oferecer um ambiente intuitivo para participação pública.

🛠️ Tecnologias Utilizadas

Front-end

React + TypeScript

Vite

TailwindCSS

Framer Motion (animações)

Lucide Icons

Wouter (roteamento leve)

Dashboard

Google Sheets + Google Charts (via pubchart com gráficos interativos)

Integração por <iframe> responsivo

Hospedagem / Ambiente de Desenvolvimento

Replit (desenvolvimento)

GitHub (controle de versão)

📁 Estrutura de Pastas
src/
  components/     → componentes reutilizáveis
  hooks/          
  lib/            
  pages/          → home, formulário, dashboard, resultados, etc.
  App.tsx
  main.tsx

public/
  favicon.png

script/
  build.ts

server/
  ... (se houver lógica futura de back-end)

DOCUMENTACAO_TECNICA.md
RELATORIO_DESENVOLVIMENTO.md

🚀 Como Executar Localmente
1. Clone o repositório
git clone https://github.com/SEU_USUARIO/MulheresTechMap.git
cd MulheresTechMap

2. Instale as dependências
npm install

3. Execute o ambiente de desenvolvimento
npm run dev

4. Abra no navegador
http://localhost:5173/

📊 Dashboard com Gráficos Interativos (Não atualizado ainda )

Os gráficos são carregados diretamente do Google Sheets através de URLs públicas do tipo:

Gráfico 1:
https://docs.google.com/spreadsheets/d/e/2PACX-1vTcVpaxujMGUduFMnorREMBe18yYObfrK6SFuNT7EMq0Amz8Erpof9PdGNIuCj9lOldSUcZM5ufsGw4/pubchart?oid=1558650001&format=interactive

Gráfico 2:
https://docs.google.com/spreadsheets/d/e/2PACX-1vTcVpaxujMGUduFMnorREMBe18yYObfrK6SFuNT7EMq0Amz8Erpof9PdGNIuCj9lOldSUcZM5ufsGw4/pubchart?oid=1855741587&format=interactive

Essas visualizações são exibidas no componente dashboard.tsx.

📝 Funcionalidades

📬 Formulário de participação
Coleta informações voluntárias sobre formação, desafios, atuação e interesses.

📈 Dashboard de análise
Gráficos atualizados automaticamente a partir das respostas do formulário.

💬 Página Sobre
Explica o propósito do projeto, motivação e relevância social.

🎨 Interface responsiva e suave
Criada com Tailwind, animações limpas e visual acolhedor.

🔎 Resultados e estatísticas
Dados organizados para análise acadêmica e extensão universitária.

🔒 Privacidade e Ética

Todas as respostas são anônimas.

Não são coletados dados pessoais sensíveis.

O objetivo é estritamente acadêmico e de promoção da diversidade em TI.

As práticas seguem orientações de ética em pesquisa da área de Humanidades Digitais.

🧩 Possíveis Expansões Futuras

API própria com banco de dados (Supabase / Firebase / Mongo).

Exportação automática para CSV/JSON.

Painel administrativo para pesquisadores.

Aplicação do projeto em disciplinas e projetos extensionistas.

Dashboard com bibliotecas como Recharts ou ECharts.

👩‍💻 Autoria

Projeto criado e mantido por:
Denise Moraes do Nascimento Vieira
Professora, Pesquisadora e Coordenadora Acadêmica
Áreas: Humanidades Digitais, Computação na Educação, Dados Abertos, Inclusão Tecnológica

📄 Licença

Este projeto está sob a licença MIT.
Sinta-se à vontade para utilizar, estudar, adaptar e colaborar.
