# APS I
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/yodono-unip/aps-i)
![GitHub contributors](https://img.shields.io/github/contributors/yodono-unip/aps-i)

Bem-vindos à primeira Atividade Prática Supervisionada: 🌱 Tópicos de Meio Ambiente Nacional 🌱.

Esse projeto visa:

- Utilizar o básico dos conceitos de web development de forma a construir um website estático;
- Apresentar consistência nos processos de desenvolvimento;
- Abordar o tema de meio ambiente através da publicação de um website na internet.

## Tecnologias

- 🌐 [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) 🌐
- 💅 [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) 💅
- 💻 [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 💻

---

## Estrutura de pastas

```
APS-I
└───components
│   │   header.html
│   │   footer.html
│   │   ...
└───css
│   │   variables.css
│   │   ...
└───js
│   │   ...
└───images
│   │   ...
│   // ...páginas .html 
│   index.html
│   README.md
│   ...
```

### `/components`
Contém elementos HTML "componentizáveis", como o **header** que, por exemplo, aparece em todas as páginas da mesma maneira.

### `/css`
Contém arquivos **.css**: estilos individuais de páginas, componentes ou até arquivos de suporte, como o de variáveis, que abriga valores padrões do projeto.

### `/js`
Contém arquivos **.js**: scripts individuais de páginas, componentes, imports de bibliotecas ou lógicas internas.

### `/images`
Contém as imagens, _gifs_ e arquivos semelhantes que serão usados ao longo das páginas.

### `/`
Raíz do projeto, que conterá todas as páginas **.html** e outros arquivos gerais.

---

## Git Workflow
- Branch `main`: guardará o código das versões de release do projeto. A cada novo lançamento, essa branch será atualizada com um novo pacote de código a ser publicado.
- Branch `development`: branch de desenvolvimento onde toda a magia acontece. Ela sempre estará "abaixo" da `main` na hierarquia, isto é, todo o código que existir na `main`, existirá em `development`. O contrário não se aplica, no entando, o que nos permite ter maior flexibilidade de experimentação. Assim que se terminar as novas mudanças/adições na branch `development`, deve-se abrir uma Pull Request a fim de jogar o código de development -> main.

### Trabalhando em uma nova feature
1. Certifique-se de que está na branch de `development`, antes de mais nada.
```console
$ git checkout development
```

2. Garanta que `development` está up-to-dated com o repositório remoto.
```console
$ git pull origin development
```

3. Crie uma nova branch a partir de `development`, seguindo os padrões:
    - Prefixo indicando a função da branch:
        - `feature/`: nova feature a ser introduzida (ex: página nova, componente novo);
        - `bugfix/`: branch destinada a resolver um bug;
        - `wip/`: "work in progress" branch, onde é de se esperar que não sejam alcançados todos os objetivos na mesma.
    - Nome indicando o que será trabalhado;
    - Palavras separadas por hífen.
ex:
```console
$ git branch feature/componente-navbar
// o código acima cria uma nova branch

$ git checkout feature/componente-navbar
// o código acima "entra" na branch criada
```

4. Desenvolva o seu trabalho.

5. Se, durante seu trabalho, houve alguma publicação na branch `development`, certifique-se de ficar atualizado:
```console
$ git pull origin development
```
<sup>O código acima "puxa" as alterações da branch "pai", deixando a sua própria atualizada. Podem ser que existam conflitos. Veja [Sobre Merge Conflicts](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).</sup>

6. Com o trabalho finalizado, publique sua branch/código no repositório remoto.
```console
$ git push origin <o nome da sua branch>
```

7. Crie uma Pull Request para jogar o código da sua branch para `development`. Veja [Criar uma Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

8. Aguarde por uma Review (Veja [Sobre revisões de pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)). Assim que obter uma aprovação, clique em "Merge Pull Request".

9. 🎉 Done! 🎉 Seu novo trabalho agora compõe a codebase de desenvolvimento. Volte para a etapa 1 e repita o ciclo para novos trabalhos!