# Política de Segurança (Security Policy)

## 1. Privacidade de Dados & Chaves de API
- **Arquitetura 100% Client-Side:** Este projeto é uma plataforma estática (HTML/CSS/JS). Nenhum servidor intermediário ou banco de dados externo coleta, processa ou armazena suas credenciais.
- **Chave de API do Gemini:** A chave configurada para geração de desafios de Microlearning via IA fica gravada estritamente no `localStorage` do seu navegador. Ela é enviada diretamente e apenas para os endpoints oficiais do Google (`https://generativelanguage.googleapis.com`).
- **Exportação de Backups Segura:** As rotinas de exportação em JSON ignoram propositalmente qualquer chave de API (`gemini_api_key`), tokens ou senhas, garantindo que o compartilhamento de backups não vaze credenciais privadas.

## 2. Proteções Implementadas
- **Content Security Policy (CSP):** Restringe conexões de rede (`connect-src`) apenas ao domínio local e à API oficial do Google.
- **Sanitização de XSS:** Todo texto retornado por modelos de IA e dados dinâmicos são higienizados e escapados antes da renderização no DOM.
- **Prevenção de Reverse Tabnabbing:** Todos os links externos com `target="_blank"` contêm `rel="noopener noreferrer"`.
- **Prevenção de Prototype Pollution:** O mecanismo de restauração de backups valida as chaves e rejeita atributos como `__proto__` ou `constructor`.
- **Anti-Flood & Rate Limiting:** Botões de requisição de IA possuem debounce para proteger cotas de API contra esgotamento acidental (HTTP 429).

## 3. Relato de Vulnerabilidades
Se você encontrar qualquer vulnerabilidade de segurança, falha ou brecha em potencial, por favor informe de forma responsável criando uma Issue privada ou entrando em contato diretamente com o mantenedor do repositório antes de qualquer divulgação pública.
