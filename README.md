# fiap-aso6-ocp

[![Docker Repository on Quay](https://quay.io/repository/dyego_maas/the-library/status "Docker Repository on Quay")](https://quay.io/repository/dyego_maas/the-library)

## OpenShift Container Platform

Criar projeto:

-> Developer -> Add -> Git -> Entrar url do Git do projeto. Vai gerar um deployment

Comando usado para criar o postgres a partir de um template OCP (OpenShift Container Platform?):
 
```
oc new-app postgresql-persistent --name sample-database --param DATABASE_SERVICE_NAME=sample-database --param POSTGRESQL_USER=sampledb --param POSTGRESQL_PASSWORD=sampledb --param POSTGRESQL_DATABASE=sampledb
```

Comando usado para atualizar a variável de ambiente do banco:

```
oc set env deployment blog-django-py-git DATABASE_URL=postgresql://sample-database:5432/sampledb
```

O mesmo vale para outras variáveis e secrets da aplicação.

## OC

### Login

`oc login`

### Criar recursos

Criar os recursos no OpenShift a partir dos manifestos em uma pasta.

`oc create -R https://raw.githubusercontent/DyegoMaas/fiap-aso6-ocp/main/k8s`

Alternativa é fazer um por um usando `oc create -f arquivo.yaml`.






## TODO

- Fazer deploy da imagem no Quay.io
- Montar deployment para o app