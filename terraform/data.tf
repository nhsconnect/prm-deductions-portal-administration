data "aws_caller_identity" "current" {}

data "aws_ssm_parameter" "root_zone_id" {
  name = "/NHS/deductions-${data.aws_caller_identity.current.account_id}/root_zone_id"
}

data "aws_ssm_parameter" "authorization_keys" {
  name = "/NHS/${var.environment}-${data.aws_caller_identity.current.account_id}/administration-portal/authorization_keys"
}

data "aws_ssm_parameter" "deductions_private_ecs_cluster_id" {
  name = "/nhs/${var.environment}/deductions_private_ecs_cluster_id"
}

data "aws_ssm_parameter" "deductions_private_ecs_tasks_sg_id" {
  name = "/nhs/${var.environment}/deductions_private_ecs_tasks_sg_id"
}

data "aws_ssm_parameter" "deductions_private_administration_portal_sg_id" {
  name = "/nhs/${var.environment}/deductions_private_administration_portal_sg_id"
}

data "aws_ssm_parameter" "deductions_private_private_subnets" {
  name = "/nhs/${var.environment}/deductions_private_private_subnets"
}

data "aws_ssm_parameter" "deductions_private_alb_dns" {
  name = "/nhs/${var.environment}/deductions_private_alb_dns"
}

data "aws_ssm_parameter" "deductions_private_vpc_id" {
  name = "/nhs/${var.environment}/deductions_private_vpc_id"
}

data "aws_ssm_parameter" "deductions_private_alb_arn" {
  name = "/nhs/${var.environment}/deductions_private_alb_arn"
}

data "aws_ssm_parameter" "deductions_private_alb_httpl_arn" {
  name = "/nhs/${var.environment}/deductions_private_alb_httpl_arn"
}

data "aws_ssm_parameter" "deductions_private_alb_httpsl_arn" {
  name = "/nhs/${var.environment}/deductions_private_alb_httpsl_arn"
}
