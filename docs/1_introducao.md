Documento de Visão

Nome do Projeto: Library Software

Versão: [Insira a versão do documento]

Data: 15/07/2024

Nome Integrantes: Isabela Chiocheta, Érica Jaqueline Dos S7antos de Lima, Gabriely Trevisan, Eduarda Bueno Zonta, Julia Rocha.



## 1. Introdução

Em busca de automatizar o processo bibliográfico em instituições de ensino, a empresa Library Software é especializada em desenvolver projetos possibilitando e melhorando o acesso fácil às estatísticas do acervo da biblioteca, bem como as relacionadas a sua circulação. Situação que permite que a equipe dedicada ao setor realize ações de incentivo à leitura. O sistema é projetado visando possibilitar uma interface e navegabilidade otimizada, que atenda a demanda de todos os clientes. O software foi pensado para criar parcerias com instituições de ensino e bibliotecas, públicas ou privadas.

## 1.1 Objetivo

O objetivo deste documento é fornecer uma visão geral do projeto Sistema de Biblioteca. Ele descreve a finalidade do projeto, os principais stakeholders envolvidos, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema. Este documento servirá como guia durante todo o ciclo de desenvolvimento do projeto, garantindo que as necessidades dos stakeholders sejam atendidas de forma eficaz.

## 1.2 Escopo

Este projeto visa desenvolver um sistema de gerenciamento de biblioteca, que terá como finalidade automatizar os processos de empréstimo, devolução, reserva e organização do acervo bibliográfico. O sistema se destina aos alunos, professores, bibliotecários e administradores da biblioteca, proporcionando uma experiência mais eficiente e satisfatória no acesso e uso dos recursos disponíveis.

1\.3 Definições, Acrônimos e Abreviações

[Insira uma lista de definições, acrônimos e abreviações utilizados no documento, se necessário.]

## 1.4 Público-alvo

- Clientes: Instituições educacionais, como escolas, universidades e institutos de ensino, que contratam e utilizam o sistema de biblioteca para melhorar os serviços oferecidos aos seus alunos e funcionários.

- Usuários: Alunos de todas as idades, professores, pesquisadores e membros da comunidade que frequentam a biblioteca para estudar, realizar pesquisas, emprestar livros e utilizar outros recursos disponibilizados.

- Bibliotecários, funcionários e Administradores da Biblioteca: Profissionais responsáveis pela administração, organização e gestão do acervo bibliográfico, bem como pelo atendimento aos usuários e pelo funcionamento geral da biblioteca.

- Desenvolvedores: Alunas do módulo 7 (Isabela, Eduarda, Érica, Gabriely, Julia Rocha) responsáveis pelo desenvolvimento, ajustes, organização e finalização do projeto.

## 2. Descrição do Projeto

**2.1 Visão Geral do Projeto**

Perante a necessidade de automatizar processos em bibliotecas e com o objetivo de incentivar a prática da leitura em instituições de ensino, proporcionando facilidade e uma experiência de qualidade ao usuário, a Library Software surge com o intuito de inovar e ampliar o acesso a tecnologias que facilitem e beneficiam o cotidiano do bibliotecário. 

O sistema desenvolvido pela Library Software promove o controle do acervo bibliotecário, apresentando como recursos para a equipe de bibliotecários o cadastro de usuários, a catalogação, consulta e reserva de livros, incluindo o gerenciamento de empréstimos e multas. 

**2.1.1 Canvas do Projeto**

![](Aspose.Words.1be3cf06-55fc-4728-9f1a-d0a9999fca6b.002.jpeg)

![](Aspose.Words.1be3cf06-55fc-4728-9f1a-d0a9999fca6b.003.jpeg)

**2.2 Stakeholders**

Principais partes interessadas no projeto:

- Usuários da Biblioteca - Alunos, professores e funcionários que utilizam os serviços da biblioteca.
- Administradores da Biblioteca - Responsáveis pela gestão da biblioteca, empréstimos, devoluções e demais atividades administrativas.
- Equipe de Desenvolvimento - Encarregadas do planejamento, desenvolvimento, implementação e manutenção do sistema (Isabela, Eduarda, Erica, Gabriely, Julia).

**2.3 Objetivos**

O objetivo proposto do projeto é automatizar o processo de empréstimos e devoluções, de modo que o usuário consiga realizar o empréstimo e devolução de maneira simples e rápida, fazendo com que essa atividade seja resolvida com eficiência e achar facilmente quais são os materiais disponíveis na biblioteca, ajuda os funcionários a organizar, e catalogar todos os livros. Oferece uma plataforma com base nas necessidades dos usuários, que seria a praticidade, a rapidez e a localidade ajuda bastante o usuário a ter uma boa experiência.

**3. Principais Recursos e Funcionalidades**

1. Catalogação de livros:
   1. Registro de um conjunto de informações sobre um determinado livro.
   1. O sistema permite que os dados sejam excluídos ou editados.
1. Consulta:
   1. O sistema permite a consulta por título, editora, autor e gênero do livro.
   1. O sistema permite a consulta por nome de usuário, CPF ou telefone.
   1. O sistema permite a consulta dos empréstimos e reservas dos livros.
1. Reserva:
   1. O bibliotecário pode realizar a reserva do livro ao usuário, ou seja, a data para o empréstimo do livro será agendada a partir da reserva.
   1. O bibliotecário pode cancelar ou renovar a reserva feita pelo usuário.
   1. É possível informar a data de reserva do livro.
1. Devolução:
   1. É possível cadastrar a devolução do empréstimo feito.
   1. É possível informar a data de devolução do livro emprestado.
1. Multas:
   1. O sistema realiza o cálculo da multa conforme as datas de reserva e devolução do livro.
   1. O sistema permite que a multa seja excluída ou editada.
1. Empréstimo:
   1. O sistema permite o registro do empréstimo do livro, ou seja, quando este é retirado do acervo bibliotecário.
1. Gerenciamento de conta:
   1. O sistema permite que os dados dos usuários sejam alterados, excluídos e adicionados.



**3.1 Requisitos Funcionais e 3.2 Requisitos Não Funcionais**

**RF.001 -** O sistema deve permitir a criação de logins de acesso ao sistema: 

*RN.001* - O *login* será destinado aos funcionários e usuário. 

*RN.002* - O *login* será destinado a pessoas físicas para usuários e funcionários. 

*RN.003* - O *login* ‘Usuário’ se destinará exclusivamente aos usuários do sistema. 

*RN.004* - O *login* 'Funcionário' se destinará exclusivamente ao funcionário da biblioteca.

*RN.005* - Para realizar o acesso o sistema irá pedir login e senha.

**RF.002 -** O sistema deve permitir ao funcionário o registro do cadastro de um usuário. 

*RN.006* – Para a inclusão de uma pessoa física são necessários os seguintes dados: 

➔ Nome Completo; 

➔ CPF; 

➔ E-mail; 

➔ Telefone; 

➔ Endereço;

➔ Login; 

➔ Senha. 

**RF.003 -** O sistema deve permitir o registro da entrada de novos livros: 

*RN.007 -* Para a entrada do livro, deverá ser cadastrado: 

➔ Nome; 

➔ Autor; 

➔ Editora; 

➔ Gênero;

➔ Data de publicação.

**RF.004 -** O sistema deve permitir o registro da reserva. 

*RN.008 -* Para o registro da reserva do livro, deverá ser cadastrado: 

➔ Nome do usuário; 

➔ Nome do livro; 

➔ Data de retirada; 

➔ Data de devolução;

**RF.005 -** O sistema deve permitir o registro do controle de empréstimos, devoluções e renovações.

*RN.009 -* O controle será feito com base na disponibilidade das datas.

**RF.006 -** O sistema deve permitir o registro do controle de multas.

*RN.010 -* O controle será feito com base nas datas de devolução e retirada dos livros.


**4. Diagrama de Caso de Uso**

![](Aspose.Words.1be3cf06-55fc-4728-9f1a-d0a9999fca6b.004.jpeg)



**4.1 Descrição de Caso de Uso**

**1. Reservar Livro:**

Ator Principal: Usuário

Descrição:

- O usuário acessa o sistema de biblioteca online para realizar a reserva de um livro.
- Ele navega pelo catálogo de livros disponíveis para localizar o livro desejado.
- Depois de encontrar o livro desejado, o usuário verifica a disponibilidade do exemplar na biblioteca.
- Caso o livro esteja disponível, o usuário seleciona a opção de reservar o livro.
- O sistema verifica se o usuário possui uma conta válida na biblioteca e se está autorizado a reservar materiais.
- Após confirmar a reserva, o sistema registra a solicitação e envia uma notificação de confirmação ao usuário e a data de devolução.
- Quando o livro reservado estiver disponível para retirada na biblioteca escolhida, o sistema envia uma notificação ao usuário informando que o livro está pronto para ser retirado.
- O usuário vai até a biblioteca, apresenta sua identificação e retira o livro reservado.

**2. Manter Livro:**

Ator Principal: Bibliotecário

Descrição:

- O bibliotecário acessa o sistema de gestão de biblioteca para realizar a catalogação de novos livros.
- Ele navega pelo catálogo de livros para verificar se o livro já está cadastrado.
- Caso o livro não esteja cadastrado, o bibliotecário inicia o processo de catalogação, inserindo informações detalhadas como título, autor(es), editora, ano de publicação, etc.
- O sistema pode sugerir automaticamente categorias ou classificações baseadas nas informações inseridas, facilitando o processo de organização do acervo.
- O bibliotecário pode adicionar outras informações relevantes, como palavras-chave, número de exemplares disponíveis e localização física na biblioteca.
- Depois de completar a catalogação, o bibliotecário revisa as informações para garantir que estão corretas e precisas.
- Caso necessário, o bibliotecário pode editar ou atualizar as informações do livro no sistema da biblioteca.
- Uma vez que o livro esteja catalogado corretamente, ele fica disponível para consulta e empréstimo pelos usuários da biblioteca.

**5. Diagrama de Classes**

![](Aspose.Words.1be3cf06-55fc-4728-9f1a-d0a9999fca6b.005.png)
\*


*6. Protótipos de Telas*

*[Insira os protótipos de possíveis telas do sistema, mostrando a disposição dos elementos de interface, os campos de entrada, botões e outras informações relevantes.]*

Observação: o professor informou em sala que não era necessário realizar esse tópico.

**7. Cronograma e Entrega**

|**Tarefa**|**Prazo**|
| - | - |
|Planejamento|25/03/2024|
|Organização do documento do Canvas|15/04/2024|
|Briefing |12/07/2024|
|Diagrama de Caso de Uso|22/04/2024|
|Requisitos Funcionais e Não Funcionais|19/04/2024|
|Diagrama de Classe|29/04/2024|
|Desenvolvimento do Sistema|20/07/2024|
|Entrega final|29/07/2024|

1) Planejamento: 
   1) Registro das ideias relacionadas ao projeto;
   1) Definição do tema do projeto;
   1) Análise e desenvolvimento dos requisitos funcionais e não funcionais.
1) Organização do documento do Canvas:
   1) Definição dos tópicos norteadores do propósito do projeto.
1) Elaboração do Briefing:
   1) Descrição da organização e aplicação do projeto.
1) Diagrama de casos de uso:
   1) Descrição do sistema, do ambiente e suas relações.
1) Requisitos Funcionais e Não Funcionais:
   1) Descrição dos serviços e métodos referente ao comportamento do sistema;
   1) Descrição das restrições dos serviços e métodos que o sistema possui.
1) Diagrama de classe:
   1) Organização de um conjunto de métodos, de atributos, de multiplicidades e relacionamentos.
1) Desenvolvimento do Sistema
   1) A plataforma definida pelas etapas anteriores é desenvolvida.
1) Entrega final do projeto: 
   1) Consolidadas as etapas do projeto o sistema é entregue ao cliente.

**8. Riscos e Mitigação**

- Possíveis problemas com o desenvolvimento atrasado devido a questões de requisitos:
- ` `É essencial realizar uma análise minuciosa dos requisitos desde o início do projeto, envolvendo todas as partes interessadas para garantir uma compreensão clara e completa das necessidades. Utilizar uma abordagem ágil que permita ajustes contínuos nos requisitos ao longo do projeto pode ser benéfico.

- Possibilidade de falhas no desenvolvimento do sistema:
- É fundamental que a equipe esteja alinhada e organizada com os prazos e demandas do sistema, além disso, empenhada em reduzir os erros. Os desenvolvedores, estarão preparados para lidar com qualquer imprevistos que possam surgir durante os testes.

- Riscos de segurança de dados:
- É essencial que os dados estejam protegidos por medidas de prevenção com criptografia e de acordo com o LGPD.

- Risco de atraso na entrega do projeto:
- A elaboração de um planejamento detalhado e estratégico com foco na produtividade durante o tempo estabelecido reduziram quaisquer possibilidades de atrasos. 

**9. Custos e Orçamento**

1. Custo de desenvolvimento:
1) Software pequeno porte, entre 10 e 25 telas: R$ 40.000 a R$ 150.000.

`      `2.   Custos operacionais: 

1) Suporte técnico: R$ 1.800 por mês;
1) Manutenção mensal: R$ 300,00;
1) Mudança de layout: de R$ 1.000 a R$ 5.000;
1) Recuperação de invasões: R$ 400,00;
1) Estratégia de marketing e análise: R$ 1.500 por mês;
1) Certificado de segurança SSL: R$ 100,00 a R$ 240,00 anuais.

`      `3.   Custo de infraestrutura digital: 

1) Registro de Domínio: R$ 40,00 anuais;
1) Hospedagem de site: R$ 100,00 por mês;

`      `4.   Custo de infraestrutura física:

1) Aluguel: R$ 5.000 por mês;
1) Internet: R$ 426,00 por mês;
1) Custos fixos: R$ 10.000 por mês;

`      `5.  Custos de consultoria jurídica:

1) Valor: R$ 1.000 a R$ 3.000 por mês;

`      `6.   Custo de consultoria de contabilidade:

1) Valor: R$ 350,00 a R$ 700,00 por mês;

`      `7.   Custos com funcionários:

1) Valor: R$ 5.000 a R$ 20.000 por mês;

`      `8.   Valor Total:

1) Valor total: R$ 95.952;


**10. Considerações Finais**

Este documento de visão oferece uma visão abrangente do projeto Sistema de Biblioteca. Ele delineia a finalidade, os principais stakeholders, os requisitos principais, os diagramas de caso de uso, o diagrama de classes e protótipos de possíveis telas para o sistema. Esta base será fundamental para o desenvolvimento do projeto, facilitando a compreensão e o alinhamento das partes interessadas.

