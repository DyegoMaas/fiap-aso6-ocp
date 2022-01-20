# fiap-aso6-ocp

A aplicação implementa um repositório de livros.

Tecnologias utilizadas:

- GitHub Actions para CI/CD
- Servidor Express, Node.js 16
- MongoDB 3.6, acessado via biblioteca Mongoose
- Quay.io como repositório de imagem Docker
- Deploy na plataforma OpenShift

## API 

A aplicação ficou disponibilizada durante o desenvolvimento (enquanto o ambiente do OpenShift estava rodando) no endereço: 

https://library-thelibrary2.apps.na46.prod.nextcle.com/

O roteamento foi feito via Ingress.

## Imagem Docker

Publicada no Quay.io em https://quay.io/repository/dyego_maas/the-library

## TODO

- UTILIZAR Kustomize com generator para gerar o secret no pipeline: https://kubernetes.io/pt-br/docs/tasks/configmap-secret/managing-secret-using-kustomize/