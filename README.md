# Manual do programador

Manual do programador é uma iniciativa da comunidade PHP Brasil no Telegram que visa facilitar e expandir a qualidade e quantidade de conteúdos sobre programação na internet.

## Como contribuir

Para contribuir faça um fork deste repositório e inclua as alterações desejadas

No caso de incluir um novo curso, primeiramente inclua o título e uma palavra de referência no final do `courses.json`, neste formato:

    {
        "name": "Ruby",
        "reference": "ruby"
    }

A referencia serve para identificar seu curso no diretório `courses`, que deve ter o nome seguindo a regra `content_[referencia].json`, não esqueça de substituir a referência entre colchetes pela que você informou no `courses.json`, desta forma: `content_ruby.json`.

O seu arquivo `content_[referencia].json` deve se parecer com:

    {
      "name": "Aprenda Ruby",
      "reference": "ruby",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis mauris urna, eget ullamcorper massa placerat consectetur.",
      "icon": "img/ruby.png",
        "theme": "red",
        "chapters": [
            {
                "name": "Básico",
                "description": "Pellentesque fermentum dolor sit amet eleifend mollis. Phasellus ipsum magna, bibendum ac lorem quis, porta pharetra sem. Nulla condimentum risus ut nulla egestas, vel eleifend nisl scelerisque.",
                "icon": "icon.png",
          "professor": "Erik Figueiredo",
          "professor_url": "http://www.erikfigueiredo.com.br",
                "lessons": [
                    {
                        "name": "Variáveis",
                        "url":"basico/variaveis.md"
                    },
                    {
                        "name": "Estrutura de controle",
                        "url": "basico/controle.md"
                    },
                    {
                        "name": "Estruturas de repetição",
                        "url": "basico/repeticao.md"
                    }
                ]
            },
            {
                "name": "Orientação a objetos",
                "description": "Pellentesque fermentum dolor sit amet eleifend mollis. Phasellus ipsum magna, bibendum ac lorem quis, porta pharetra sem. Nulla condimentum risus ut nulla egestas, vel eleifend nisl scelerisque.",
                "icon": "icon2.png",
                "professor": "Erik Figueiredo",
                "professor_url": "http://www.erikfigueiredo.com.br",
                "lessons": [
                    {
                        "name": "Classes",
                        "url": "orietacao-a-objetos/classes.md"
                    },
                    {
                        "name": "Visibilidade",
                        "url": "orietacao-a-objetos/visibilidade.md"
                    },
                    {
                        "name": "Herança",
                        "url": "orietacao-a-objetos/heranca.md"
                    }
                ]
            }
        ]
    }

Dentro do nó `chapters` você vai incluir os módulos do seu material, dentro de `lessons` (que por sua vez, está dentro de `chapters`) você vai incluir as aulas do seu curso.

Cada aula ficará dentro do diretório `lessons`, seguindo a seguinte estrutura:

    lessons/[referencia-do-curso]/[chapter]/[nome-do-arquivo].md

Isso para organizar as coisas por aqui e permitir que a ideia cresça a vontade.

## Todo

 - Criar navegação entre os cursos aqui na versão web
