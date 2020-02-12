locals {
  deductions_private_alb_dns = data.aws_ssm_parameter.deductions_private_alb_dns.value
  zone_id                    = data.aws_ssm_parameter.root_zone_id.value
}

resource "aws_route53_record" "administration-portal-r53-record" {
  zone_id = local.zone_id
  name    = "${var.environment}.${var.dns_name}"
  type    = "CNAME"
  ttl     = "300"
  records = [local.deductions_private_alb_dns]
}
