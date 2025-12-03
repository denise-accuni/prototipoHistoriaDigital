# Relatório de Desenvolvimento e Testes: Mapa das Mulheres na Computação

## 1. Introdução
Este documento detalha o processo de criação, desenvolvimento e validação do "Mapa das Mulheres na Computação", uma plataforma web dedicada a dar visibilidade às contribuições femininas na história da tecnologia.

## 2. Processo de Desenvolvimento

### 2.1. Concepção e Design (Fase 1)
*   **Objetivo:** Criar uma interface que fugisse do padrão corporativo frio, adotando uma estética acolhedora e moderna.
*   **Decisões Estéticas:**
    *   **Paleta de Cores:** Seleção de tons de roxo (`#8b5cf6`) e lavanda para representar sabedoria e feminilidade no contexto tecnológico.
    *   **Tipografia:** Escolha da fonte *Playfair Display* (serifada) para títulos, conferindo um ar editorial e histórico, combinada com *Inter* para legibilidade.
    *   **Glassmorphism:** Uso de elementos translúcidos para criar profundidade e sofisticação.

### 2.2. Implementação Técnica (Fase 2)
*   **Arquitetura:** Adoção de Single Page Application (SPA) com React e Vite para garantir velocidade instantânea.
*   **Integração de Dados:**
    *   Conexão direta com a API do **Wikidata** via consultas SPARQL.
    *   Definição de filtros ontológicos rigorosos para garantir que apenas mulheres ligadas à computação (cientistas, programadoras, matemáticas) fossem exibidas.
*   **Refinamentos Funcionais:**
    *   Implementação de busca por país em tempo real.
    *   Adição de um player para a música homenagem (Suno AI).

### 2.3. Iterações e Melhorias (Fase 3)
Com base no feedback contínuo, o sistema foi aprimorado:
*   **Tratamento de Imagens:** Criação de um fallback visual (ícone de flor) para perfis sem foto, mantendo a harmonia visual.
*   **Internacionalização de Links:** Lógica para buscar artigos na Wikipédia em Inglês caso a versão em Português não exista.
*   **Algoritmo de Diversidade:** Implementação de embaralhamento (shuffle) nos resultados para garantir que mulheres diferentes ganhem destaque a cada nova busca.

## 3. Metodologia de Testes

Os testes foram realizados de forma contínua e iterativa (Agile Testing), focando na experiência do usuário final.

### 3.1. Testes Funcionais
*   **Busca Geográfica:**
    *   *Teste:* Inserir "Brasil", "Estados Unidos", "Alemanha".
    *   *Resultado Esperado:* Lista de mulheres nascidas ou cidadãs desses países.
    *   *Validação:* Confirmado que o filtro SPARQL respeita a grafia e o idioma PT-BR.
*   **Links Externos:**
    *   *Teste:* Clicar no botão "Ver na Wikipédia".
    *   *Validação:* O sistema verifica a existência do link antes de renderizar o botão, evitando links quebrados (404).
*   **Carregamento (Skeleton Screens):**
    *   *Teste:* Simular conexão lenta.
    *   *Validação:* O usuário vê uma animação de carregamento (esqueleto) antes dos dados aparecerem, prevenindo a sensação de travamento.

### 3.2. Testes de Interface (UI/UX)
*   **Responsividade:** O layout foi testado em resoluções mobile (375px), tablet (768px) e desktop (1280px+).
*   **Casos de Borda:**
    *   *Cenário:* Busca por um país inexistente ou sem registros.
    *   *Comportamento:* Exibição de mensagem amigável "Nenhum resultado encontrado", orientando o usuário a tentar outro termo.
    *   *Cenário:* Perfil sem foto.
    *   *Comportamento:* Exibição do card com ícone de flor e texto "Sem foto pública", validando a estética.

### 3.3. Testes de Performance
*   **Otimização de Query:** A consulta SPARQL foi otimizada para buscar apenas os campos necessários (`?pessoaLabel`, `?image`, etc.), reduzindo o payload da resposta JSON e o tempo de processamento.

## 4. Conclusão
O desenvolvimento seguiu um ciclo rápido de prototipagem, validação e refinamento. O resultado é uma aplicação robusta que consome dados complexos (Linked Data) e os apresenta de forma acessível, bonita e performática.
