# 🚀 Portfólio

Um portfólio web moderno e interativo construído com React, TypeScript e Vite. Este projeto foi desenvolvido para apresentar habilidades, projetos e tecnologias de forma visual e elegante, com suporte a múltiplos idiomas e um assistente AI integrado.

## 🎯 Função do Projeto

Este portfólio serve como uma **vitrine profissional online** com os seguintes objetivos:

- **Apresentação Pessoal**: Exibir informações sobre o desenvolvedor com foto e descrição
- **Galeria de Projetos**: Mostrar projetos realizados com detalhes e links de acesso
- **Stack Tecnológico**: Demonstrar as tecnologias e ferramentas que domina
- **Contato Facilitado**: Fornecer múltiplos canais de comunicação (Email, WhatsApp, LinkedIn)
- **Assistente IA**: Chatbot integrado para responder perguntas dos visitantes
- **Multilíngue**: Suporte para português e inglês para alcançar um público global

## ✨ Características Principais

### 🎨 Interface Moderna
- Design responsivo que se adapta a qualquer dispositivo (mobile, tablet, desktop)
- Animações suaves e efeitos visuais usando Framer Motion
- Tema dark mode com gradientes modernos
- Componentes customizados com TailwindCSS

### 🌐 Multilíngue
- Suporte a português e inglês
- Troca de idioma em tempo real via flag buttons
- Conteúdo traduzido em todas as seções

### 💬 Assistente IA
- Chatbot interativo integrado
- Responde perguntas dos visitantes sobre projetos e habilidades
- Interface de chat elegante e intuitiva

### 📱 Seções Principais
1. **Header**: Navegação com seletor de idioma
2. **Apresentação**: Banner inicial com foto e descrição pessoal
3. **Projetos**: Galeria interativa dos projetos realizados
4. **Tecnologias**: Cards exibindo as tecnologias dominadas
5. **Sobre**: Informações adicionais sobre o desenvolvedor
6. **Contato**: Links diretos para redes sociais e email
7. **Footer**: Informações finais e créditos

## 🛠️ Stack Tecnológico

### Frontend
- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Vite**: Build tool rápido e eficiente
- **TailwindCSS 4**: Framework CSS utilitário
- **Framer Motion**: Biblioteca de animações

### UI & Components
- **Radix UI**: Componentes acessíveis (Dropdown, Tooltip)
- **Lucide React**: Icons modernos
- **React Icons**: Ícones adicionais (Email, WhatsApp, LinkedIn)

### Internacionalização & API
- **i18next**: Gerenciamento de idiomas
- **React i18next**: Integração com React
- **Axios**: Cliente HTTP para chamadas à API

### Desenvolvimento
- **ESLint**: Linter para manter code quality
- **TypeScript Strict**: Validação de tipos rigorosa

## 📋 Pré-requisitos

- Node.js >= 18
- npm ou yarn

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
A aplicação será aberta em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── App/                    # Componente principal da aplicação
├── components/             # Componentes reutilizáveis
│   ├── assistant/         # Chatbot e button do assistente
│   ├── cards/             # Cards de projetos e tecnologias
│   ├── header/            # Cabeçalho com navegação
│   ├── footer/            # Rodapé
│   ├── magicui/           # Componentes com animações
│   └── ui/                # Componentes UI básicos
├── assets/                # Imagens e mídia
├── service/               # Serviços (API, chatbot)
├── utils/                 # Utilitários e traduções
└── lib/                   # Funções auxiliares
```

## 🔧 Configurações Importantes

### i18n (Internacionalização)
Os arquivos de tradução estão em `src/utils/translate/`:
- `en.json` - Textos em inglês
- `pt.json` - Textos em português

### API
O serviço de API está configurado em `src/service/api.tsx` e conecta-se a um backend para o chatbot.

## 📞 Contato

As informações de contato podem ser atualizadas nos seguintes componentes:
- Email: Configurável no header
- Redes sociais: Configurável no arquivo principal

## 📄 Licença

Este projeto é pessoal e está disponível para uso e modificação.

---

**Desenvolvido com ❤️ por Eduardo**
