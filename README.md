# Triagem Endolife - Score Endoflow

## Visão Geral

**Triagem Endolife** é um site interativo que implementa o **Score Endoflow**, um questionário eletrônico simplificado, autoaplicável e acessível para triagem de endometriose. O site foi desenvolvido com uma identidade visual feminina, moderna e acolhedora, utilizando a paleta de cores da marca Endo Life (Magenta, Laranja e Amarelo).

O questionário é ideal para ser utilizado em tablets, totens ou qualquer dispositivo com navegador web, permitindo que pacientes façam uma autoavaliação rápida, com proteção de dados de acordo com a LGPD, e recebam uma recomendação inicial sobre a necessidade de investigação diagnóstica.

## Características Principais

- **Identidade Visual Feminina:** Paleta de cores vibrante (Magenta `#e6358b`, Laranja `#ea652e`, Amarelo `#e5a100`) com gradientes elegantes e design responsivo.
- **Termo de Consentimento LGPD:** Antes de iniciar, o usuário deve concordar com o termo que garante sigilo, anonimização dos dados e conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
- **Cadastro Simplificado:** Coleta de Nome, Idade e Celular (WhatsApp) com validação de idade e consentimento para menores de 18 anos.
- **8 Perguntas Focadas:** Questionário baseado em sintomas e fatores de risco mais preditivos.
- **Autoaplicável:** Projetado para ser respondido pela paciente sem necessidade de assistência médica.
- **Acessível:** Inclui suporte a **Text-to-Speech (TTS)** para deficientes visuais e navegação otimizada para telas de toque.
- **Responsivo:** Interface adaptada para tablets, totens e dispositivos móveis.
- **Baseado em Evidências:** Desenvolvido a partir de modelos validados em estudos científicos.
- **Resultado Imediato:** Cálculo automático do Score Endoflow e recomendação de encaminhamento.
- **Botão WhatsApp:** Para resultados positivos (Elevado ou Muito Elevado), oferece um botão clicável que direciona para contato via WhatsApp com especialista.

## Fluxo de Uso

1. **Termo de Consentimento LGPD:** O usuário lê e concorda com o termo de proteção de dados.
2. **Cadastro Simplificado:** O usuário fornece Nome, Idade e Celular (com validação de idade).
3. **Questionário (8 Perguntas):** O usuário responde as perguntas sobre sintomas e fatores de risco.
4. **Resultado:** O sistema calcula o Score Endoflow e exibe o nível de risco com recomendação.
5. **Contato WhatsApp:** Se o resultado for positivo, um botão oferece contato direto via WhatsApp.

## Estrutura do Projeto

```
triagem_endolife/
├── index.html       # Estrutura HTML (Termo, Cadastro, Questionário, Resultado)
├── style.css        # Estilos CSS com identidade visual Endolife
├── script.js        # Lógica JavaScript (navegação, validação, cálculo, TTS)
└── README.md        # Este arquivo
```

## As 8 Perguntas do Score Endoflow

O questionário avalia os seguintes sintomas e fatores de risco:

| # | Pergunta | Tipo | Coeficiente |
| :---: | :--- | :--- | :---: |
| 1 | Dor Menstrual (Cólica) | Escala 0-10 | 11 |
| 2 | Dor na Relação Sexual (Dispareunia) | Escala 0-10 | 6 |
| 3 | Sintomas Intestinais (Dor GI) | Escala 0-10 | 14 |
| 4 | Sintomas Urinários | Sim/Não | 12 |
| 5 | Histórico Familiar | Sim/Não | 14 |
| 6 | Infertilidade Primária | Sim/Não | 6 |
| 7 | Fadiga Crônica | Sim/Não | 7 |
| 8 | Sangramento Intenso | Sim/Não | 7 |

## Pontuação e Interpretação

### Score Total Máximo: 91 pontos

| Score | Nível de Risco | Recomendação | Cor | Ação WhatsApp |
| :---: | :--- | :--- | :---: | :---: |
| **< 18** | Baixo a Moderado | Acompanhamento médico de rotina. | 🟢 Verde | ❌ Não exibe |
| **18-24** | Elevado | Consulta com especialista e exames de imagem. | 🟡 Amarelo | ✅ Exibe |
| **$\ge$ 25** | Muito Elevado | Encaminhamento imediato para investigação. | 🔴 Vermelho | ✅ Exibe |

## Funcionalidades de Segurança e Privacidade

### Termo de Consentimento LGPD

O termo garante:
- **Conformidade com LGPD:** Tratamento de dados pessoais de acordo com a Lei nº 13.709/2018.
- **Sigilo Absoluto:** Todos os dados pessoais são mantidos em sigilo.
- **Anonimização:** Para qualquer publicação de resultados, os dados serão anonimizados, impossibilitando identificação pessoal.
- **Uso Limitado:** O celular é utilizado exclusivamente para comunicação sobre o resultado e encaminhamento médico.

### Validação de Idade

- **Menores de 18 anos:** Devem confirmar que têm a autorização de um responsável legal.
- **Maiores de 18 anos:** Podem prosseguir diretamente.

### Contato via WhatsApp

Para resultados **Elevado (18-24)** ou **Muito Elevado (≥25)**:
- Um botão verde com ícone de WhatsApp é exibido.
- Ao clicar, abre o WhatsApp com mensagem pré-preenchida.
- **Número:** (13) 99615-6944
- **Mensagem:** "Olá! Realizei a triagem Score Endoflow e gostaria de conversar sobre meu resultado."

## Acessibilidade

O site inclui funcionalidades de acessibilidade para garantir a inclusão de pessoas com deficiência visual:

- **Ícone de Áudio (🔊):** Cada pergunta possui um ícone que, ao ser clicado, lê a pergunta em voz alta usando a API nativa de **Text-to-Speech (TTS)** do navegador.
- **Navegação por Teclado:** O formulário é totalmente navegável via teclado.
- **Leitura de Resultados:** O resultado final pode ser facilmente lido pelo sistema de TTS.
- **Conformidade:** Atende às diretrizes de acessibilidade digital (eMAG - Modelo de Acessibilidade em Governo Eletrônico).

## Identidade Visual

A paleta de cores foi extraída do manual de marca Endo Life (Ciranda Design):

| Cor | Código HEX | Uso |
| :--- | :--- | :--- |
| Magenta | `#e6358b` | Títulos, números das perguntas, foco principal |
| Laranja Vibrante | `#ea652e` | Botões de ação, gradientes, destaques |
| Amarelo Ouro | `#e5a100` | Elementos de apoio, subtítulos |
| Verde (WhatsApp) | `#25d366` | Botão de contato via WhatsApp |
| Branco | `#ffffff` | Fundo do conteúdo |
| Cinza Suave | `#f5f7fa` | Fundo da página |

## Como Usar

### 1. Instalação Local

1. Faça o download ou clone os arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador web.
3. Leia e concorde com o Termo de Consentimento LGPD.
4. Preencha o cadastro (Nome, Idade, Celular).
5. Responda as 8 perguntas.
6. Clique em "Calcular Score Endoflow".
7. Veja o resultado e, se positivo, entre em contato via WhatsApp.

### 2. Servidor Web

Para usar em um ambiente de produção (tablet/totem):

```bash
cd /caminho/para/triagem_endolife
python3 -m http.server 8081
```

Acesse em: `http://localhost:8081`

### 3. Integração em Aplicação Existente

Os arquivos podem ser integrados em qualquer aplicação web existente. Basta incluir os arquivos HTML, CSS e JavaScript no diretório apropriado.

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Sem requisitos de servidor backend (funciona 100% no cliente)
- Sem dependências externas (HTML puro, CSS e JavaScript)

## Dados Coletados

O formulário coleta os seguintes dados:

| Campo | Tipo | Uso |
| :--- | :--- | :--- |
| Nome | Texto | Identificação e comunicação |
| Idade | Número | Validação e contexto clínico |
| Celular | Texto | Contato via WhatsApp |
| Respostas do Questionário | Numérico | Cálculo do Score Endoflow |

**Importante:** Os dados são processados apenas no navegador do usuário e não são enviados para nenhum servidor externo (a menos que o usuário clique no botão WhatsApp).

## Notas Importantes

1. **Não substitui diagnóstico médico:** Este questionário é uma ferramenta de triagem e não substitui a avaliação clínica e diagnóstico definitivo por um médico especialista.

2. **Privacidade:** Os dados inseridos no questionário são processados apenas no navegador do usuário e não são armazenados ou enviados para servidores (exceto ao clicar no WhatsApp).

3. **Responsividade:** A interface foi otimizada para tablets e totens, com botões grandes e texto legível.

4. **Acessibilidade:** O formulário segue boas práticas de acessibilidade web (WCAG 2.1).

5. **Conformidade LGPD:** O site está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

## Referências Científicas

1. **Chapron, C., Lafay-Pillet, M.-C., Santulli, P., et al.** (2022). A new validated screening method for endometriosis diagnosis based on patient questionnaires. *eClinicalMedicine*, 44, 101263.

2. **Szubert, M., Rycerz, A., & Wilczyński, J. R.** (2023). How to Improve Non-Invasive Diagnosis of Endometriosis with Advanced Statistical Methods. *Medicina*, 59(3), 499.

3. **Goldstein, A., & Cohen, S.** (2023). Self-report symptom-based endometriosis prediction using machine learning. *Scientific Reports*, 13(1), 5499.

## Suporte e Feedback

Para dúvidas, sugestões ou feedback sobre o Triagem Endolife, entre em contato com a equipe de desenvolvimento.

## Licença

Este projeto foi desenvolvido para fins educacionais e de pesquisa. O uso comercial requer autorização prévia.

---

**Desenvolvido por:** Manus AI  
**Data:** Outubro de 2025  
**Versão:** 2.0 (Triagem Endolife - Score Endoflow com LGPD, Cadastro e WhatsApp)
