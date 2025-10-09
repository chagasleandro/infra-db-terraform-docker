
# 🌍 Projeto InfraDB — Infraestrutura como Código com Docker, Terraform e Flyway

Este projeto mostra um exemplo completo de como montar e gerenciar um **banco de dados PostgreSQL** de forma **automatizada e profissional**, utilizando:

- 🐳 **Docker Compose** para desenvolvimento local
- ☁️ **Terraform** para provisionar banco remoto (AWS RDS)
- 🔄 **Flyway** para controle de versão do schema
- ⚙️ **GitHub Actions** para CI/CD
- 🧩 **Ambientes separados**: Dev, Homologação e Produção

---

## 🚀 Como rodar localmente

```bash
cd docker
cp .env.example .env
docker-compose up -d

## ⚙️ Como aplicar **Terraform**
cd terraform
terraform init
terraform plan
terraform apply

## 🧠 Conceitos aplicados
Infraestrutura como Código (IaC)

Banco de Dados como Código (Database-as-Code)

Automação de Migrations

Pipelines CI/CD

Separação de Ambientes

✨ Autor

Leandro Chagas
🔗 LinkedIn

🐙 GitHub

