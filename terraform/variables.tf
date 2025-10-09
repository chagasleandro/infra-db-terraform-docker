variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "db_instance_class" {
  type    = string
  default = "db.t3.micro"
}

variable "db_name" {
  type = string
  default = "appdb"
}

variable "db_user" {
  type = string
  default = "admin"
}

variable "db_password" {
  type = string
  description = "Senha do banco (use secrets em produção)")
  type = string
}
