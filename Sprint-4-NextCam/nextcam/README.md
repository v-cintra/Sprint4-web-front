# NextCam — Dynamic Action Button

Projeto da **Sprint 4** (Web Development + Front-End Design) do Challenge com a empresa **JOVI Smartphone**, equipe **PrimeNext**. É a evolução do projeto da Sprint 3: a landing page do **NextCam** agora usa **Tailwind CSS**, **rotas públicas e privadas**, **hooks customizados**, consumo de **API mockada** e está publicada na **Vercel**.

## Sobre o produto

A câmera do smartphone da JOVI reúne mais de dez modos — todos numa grade única, sem relação com o que o usuário está vivendo no momento. A solução é o **Dynamic Action Button**: um único botão físico dinâmico que substitui os modos por cinco gestos (*tap*, *hold*, *drag →*, *drag ↑*, *drag ↺*), enquanto uma IA de contexto ajusta cena, foco e exposição antes do toque. O fluxo de captura cai de 4 passos (~4,2s) para 1 passo (~0,8s).

## Link do Deploy (Vercel)

🔗 **PREENCHER_COM_O_LINK_DA_VERCEL**

Repositório Git: https://github.com/v-cintra/Sprint4-web-front

## Tecnologias utilizadas

- [React 19](https://react.dev/) — componentes funcionais, props, hooks nativos (`useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`) e hooks customizados
- [Vite](https://vite.dev/) — build e servidor de desenvolvimento
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização (tema da marca definido em `src/index.css`)
- [React Router](https://reactrouter.com/) — rotas públicas e privadas
- API mockada em JSON (`public/api/`) consumida com `fetch`
- `localStorage` — sessão de login e mensagens de contato
- Git + [Vercel](https://vercel.com/) — versionamento e deploy

## Funcionalidades da Sprint 4

- **Componentização e props:** seções em `src/components/home`, elementos reutilizáveis em `src/components/ui` (`Botao`, `Campo`, `Container`, `EstadoRequisicao`) e cartões alimentados por props (`CartaoInfo`, `CartaoIntegrante`).
- **Rotas públicas:** `/` (landing page) e `/login`.
- **Rota privada:** `/painel` — painel com as mensagens enviadas no formulário de contato (listar, excluir e limpar). Quem não está logado é redirecionado para `/login`.
- **Hooks customizados** (`src/hooks`), separando lógica da parte visual: `useFetch`, `useLocalStorage`, `useToggle`, `useFormulario`, `useContatos`, `useEconomiaTempo` e `useAuth`.
- **Consumo de API:** a seção "Público-Alvo" (estatísticas e depoimentos) e a seção "Nossa Equipe" carregam os dados via `fetch` de `/api/depoimentos.json` e `/api/equipe.json`, com estados de carregando e erro.
- **Responsividade:** layout testado em Desktop, Tablet e Mobile (menu hambúrguer no mobile).

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Acesse `http://localhost:5173`. Para gerar e visualizar o build de produção:

```bash
npm run build
npm run preview
```

## Como executar os servidores (Back-end)

Não há back-end. A "API" é mockada: arquivos JSON estáticos em `public/api/`, servidos pelo próprio Vite (local) e pela Vercel (produção). Basta o `npm run dev`.

## Usuários e senhas para teste

A autenticação é simulada no front-end (projeto acadêmico, sem servidor).

| E-mail | Senha |
| --- | --- |
| `admin@nextcam.com` | `nextcam123` |

Para testar a rota privada: envie uma mensagem pelo formulário de contato da página inicial, acesse `/login`, entre com o usuário acima e veja a mensagem em `/painel`.

## Onde e como a IA foi usada no projeto

Utilizamos o Claude (Anthropic) como apoio de programação na evolução do projeto da Sprint 3 para a Sprint 4. A IA ajudou a migrar os estilos de CSS puro para classes do Tailwind CSS mantendo o visual da marca, a estruturar as rotas públicas e privadas com React Router, a extrair a lógica dos componentes para hooks customizados, a criar o consumo da API mockada com `fetch` e a redigir este README. O conteúdo estratégico do projeto (problema, solução, gestos, pesquisa de validação, depoimentos e público-alvo) foi definido pela equipe PrimeNext nas sprints anteriores e foi mantido sem alterações; as ilustrações SVG são originais, desenhadas em código na paleta da marca. Todo o código gerado foi revisado e testado pela equipe.

## Equipe PrimeNext

Ver [INTEGRANTES.txt](./INTEGRANTES.txt).
