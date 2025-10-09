output "db_endpoint" {
  value = aws_db_instance.example.address
}

output "db_port" {
  value = aws_db_instance.example.port
}
